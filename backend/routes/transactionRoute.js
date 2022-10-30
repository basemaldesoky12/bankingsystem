const express = require("express")
const transactionRoute= express.Router()
const transactionController = require("../controllers/transactionController")

transactionRoute.post('/transact',transactionController.transferMoney)
transactionRoute.get('/getsenders',transactionController.getSendersNames)
transactionRoute.get('/getrecievers',transactionController.getRecieversNames)
transactionRoute.get('/transactionhistory',transactionController.transactionHistory)
module.exports = transactionRoute