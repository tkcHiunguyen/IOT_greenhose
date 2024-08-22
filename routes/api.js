const controller = require('../controller/APIController')
const express = require('express')
let apiRouter = express.Router()
const API_initWebRoute = (app) => {
    apiRouter.get('/user', controller.getUser)
    apiRouter.get('/adc1Start', controller.getADCStart)
    apiRouter.get('/adc1Active', controller.getADCActive)
    apiRouter.get('/Rs485Start', controller.getRS485Start)
    apiRouter.get('/Rs485Active', controller.getRS485Active)

    apiRouter.get('/npk_rs485Start', controller.getNPK_rs485Start)
    apiRouter.get('/npk_rs485Active', controller.getNPK_rs485Active)
    apiRouter.get('/ph_rs485Start', controller.getpH_rs485Start)
    apiRouter.get('/ph_rs485Active', controller.getpH_rs485Active)
    apiRouter.get('/hum_rs485Start', controller.getHum_rs485Start)
    apiRouter.get('/hum_rs485Active', controller.getHum_rs485Active)

    apiRouter.get('/temHumI2C1Active', controller.getI2CHum_Tem1Active)
    apiRouter.get('/temHumI2C1Start', controller.getI2CHum_Tem1Start)

    apiRouter.get('/lightI2C1Active', controller.getI2CLight1Active)
    apiRouter.get('/lightI2C1Start', controller.getI2CLight1Start)

    apiRouter.get('/temHumI2C2Active', controller.getI2CHum_Tem2Active)
    apiRouter.get('/temHumI2C2Start', controller.getI2CHum_Tem2Start)

    apiRouter.get('/lightI2C2Active', controller.getI2CLight2Active)
    apiRouter.get('/lightI2C2Start', controller.getI2CLight2Start)

    apiRouter.get('/getButton', controller.getButton)
    apiRouter.get('/getButton2', controller.getButton2)

    apiRouter.get('/getMode1', controller.getMode1)
    apiRouter.get('/getMode2', controller.getMode2)

    apiRouter.get('/getStatus1', controller.getStatus1)
    apiRouter.get('/getStatus2', controller.getStatus2)
    return app.use('/api/', apiRouter)
}
module.exports = API_initWebRoute