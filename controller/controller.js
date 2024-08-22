const userModel = require('../models/user')
const { connection } = require('../MySQL.js')
const bcrypt = require('bcryptjs')
global.nameacc = null
global.email = null
global.dateStart = null
global.avatar = null

// ------------- SECURITY ------------------------//
let checkLogin = (req, res, next) => {
    if (req.session.accountId) {
        next()
    }
    else {
        res.redirect('/login')
    }
}

let getHomePage = (req, res) => {
    res.render('home-web')
}
let postLogin = async (req, res) => {
    var { username, password } = req.body
    console.log(password)
    // userModel.findOne(
    //     { username: username },
    //     (err, account) => {
    //         if (account) {
    //             bcrypt.compare(password, account.password, (error, same) => {
    //                 if (same) {
    //                     req.session.accountId = account._id
    //                     req.session.accountName = account.name
    //                     req.session.accountEmail = account.email
    //                     req.session.accountDateStart = account.dateStart
    //                     req.session.username = account.username
    //                     req.session.avatar = account.image
    //                     res.redirect('/dashboard')
    //                 }
    //                 else {
    //                     res.redirect('/login')
    //                 }
    //             })
    //         }
    //         else {
    //             res.redirect('/login')
    //         }
    //     }
    // )
    const [rows] = await connection.execute('SELECT * FROM user WHERE username = ?', [username]);
    if (rows.length > 0) {
        console.log(rows[0])
        const account = rows[0];
        bcrypt.compare(password, account.password, (error, same) => {
            if (same) {
                //console.log('true')
                req.session.accountId = account.id;
                req.session.accountName = account.name;
                req.session.accountEmail = account.email;
                req.session.accountDateStart = account.dateStart;
                req.session.username = account.username;
                req.session.avatar = account.image;
                res.redirect('/dashboard');
            } else {
                //console.log('false')
                res.redirect('/login');
            }
        });
    } else {
        res.redirect('/login');
    }
}
let getLogin = (req, res) => {
    res.render('login')
}
let postRegister = async (req, res) => {
    req.body.image = '/' + req.file.path.split('\\').slice(1).join("/")
    // console.log(req.body)
    let name = req.body.name;
    let username = req.body.username;
    let password = await bcrypt.hash(req.body.password, 10)
    let email = req.body.email;
    let image = req.body.image;
    let dateStart = new Date(Date.now());
    try {
        await connection.execute('INSERT INTO user(name, username, password,email, dateStart, image ) VALUES (?,?,?,?,?,?)', [name, username, password, email, dateStart, image])
    }
    catch (err) {
        console.log(err)
    }
    // userModel.create(req.body, (error, admin) => {
    //     if (error) {
    //         console.log(error)
    //         return res.redirect('/register')
    //     }
    //     res.redirect('/login')
    // })
    res.redirect('/login')
}
let getDashboard = (req, res) => {
    res.render('dashboard')
}
let getConfig = (req, res) => {
    res.render('config')
}

let getContact = (req, res) => {
    res.render('contact')
}
module.exports = {
    getHomePage,
    checkLogin,
    getLogin,
    getDashboard,
    postLogin,
    postRegister,
    getConfig,
    getContact,

}