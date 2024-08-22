const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    dateStart: {
        type: Date,
        default: new Date(Date.now())
    },
    image: {
        type: String,
        require: false
    }
}, {
    collection: 'user'
})
userSchema.pre('save', function (next) {
    const account = this
    bcrypt.hash(account.password, 10, (error, hash) => {
        account.password = hash
        next()
    })
});

// for (let i = 0; i < 10; i++) {
//   userModel.create({
//     name:" hiếu " +i,
//     username : "abc" + i,
//     password : '1',
//     email : "abc" + i+ "@rtr",
//     image : "RTR"
//   })
// console.log("Done" + i)
// }

const userModel = mongoose.model("user", userSchema)

module.exports = userModel