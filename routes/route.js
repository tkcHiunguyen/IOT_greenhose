const Express = require('express')
const controller = require('../controller/controller')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload_image = multer({
    storage: storage,
    fileFilter: function (req, file, res) {
        // Chỉ chấp nhận file type là png hoặc jpg
        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            res(null, true);
        } else {
            res(new Error('Invalid file type. Only JPEG and PNG files are allowed.'), false);
        }
    },
})

const router = Express.Router()
const checkLogin = controller.checkLogin
const initWebRoute = (app) => {
    router.get('/', controller.getHomePage)
    router.get('/login', controller.getLogin)
    router.post('/login', controller.postLogin)
    router.get('/dashboard', checkLogin, controller.getDashboard)
    //router.get('/dashboard', controller.getDashboard)
    router.get('/config', checkLogin, controller.getConfig)
    router.get('/contact', controller.getContact)
    router.post('/register', upload_image.single('file'), controller.postRegister)

    return app.use('/', router)
}
module.exports = initWebRoute