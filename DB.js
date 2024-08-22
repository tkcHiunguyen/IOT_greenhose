const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/doan', {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('successfully connected');
    }
    catch (error) {
        console.log('connect erro :(');
    }
}
module.exports = { connect }