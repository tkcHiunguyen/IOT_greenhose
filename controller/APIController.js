const { connect } = require("../DB")
const { connection } = require('../MySQL')
const userModel = require('../models/user')
let getUser = async (req, res) => {
    try {
        let [users] = await connection.execute('SELECT * from user;');
        //const users = await userModel.find();
        res.status(200).json(users)
        return res
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
let getADCStart = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT value,time FROM adc_1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getADCActive = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT value,time FROM adc_1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getRS485Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT N,P,K,humdity,pH,time FROM rs485_2 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getRS485Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT N,P,K,humdity,pH,time FROM rs485_2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getButton = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT bit8,bit7,bit6,bit5,bit4,bit3 FROM button1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getButton2 = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT bit8,bit7,bit6,bit5,bit4,bit3 FROM button2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CHum_Tem1Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT tem,hum,time FROM tem_humi2c1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CHum_Tem1Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT tem,hum,time FROM tem_humi2c1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CLight1Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT light,time FROM lighti2c1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CLight1Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT light,time FROM lighti2c1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CHum_Tem2Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT tem,hum,time FROM tem_humi2c2 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CHum_Tem2Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT tem,hum,time FROM tem_humi2c2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CLight2Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT light,time FROM lighti2c2 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getI2CLight2Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT light,time FROM lighti2c2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getNPK_rs485Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT N,P,K,time FROM rs485_npk1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getNPK_rs485Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT N,P,K,time FROM rs485_npk1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getHum_rs485Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT hum,time FROM rs485_hum1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getHum_rs485Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT hum,time FROM rs485_hum1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getpH_rs485Start = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT ph,time FROM rs485_ph1 ORDER BY id DESC LIMIT 6;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getpH_rs485Active = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT ph,time FROM rs485_ph1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getMode1 = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT mode FROM mode1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getMode2 = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT mode FROM mode2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getStatus1 = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT status FROM status1 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
let getStatus2 = async (req, res) => {
    try {
        let [data] = await connection.execute('SELECT status FROM status2 ORDER BY id DESC LIMIT 1;')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {
    getUser,
    getADCStart,
    getADCActive,
    getRS485Start,
    getRS485Active,
    getButton,
    getButton2,
    getI2CHum_Tem1Active,
    getI2CHum_Tem1Start,
    getI2CLight1Active,
    getI2CLight1Start,
    getI2CHum_Tem2Active,
    getI2CHum_Tem2Start,
    getI2CLight2Active,
    getI2CLight2Start,
    getNPK_rs485Start,
    getNPK_rs485Active,
    getHum_rs485Start,
    getHum_rs485Active,
    getpH_rs485Start,
    getpH_rs485Active,
    getMode1,
    getMode2,
    getStatus1,
    getStatus2,
}