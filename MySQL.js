const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'do_an',
    port: '3306'
})
// check connecttion
// connection.connect(function (err) {
//     if (err) {
//         console.log.err('error: ' + err.message)
//     }
//     console.log('Connected to the MySQL server.')
// })
module.exports = { connection }