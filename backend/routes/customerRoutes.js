const express = require("express")
const customerRoutes= express.Router()
const customerController = require("../controllers/customerController")

customerRoutes.get('/getcustomers',customerController.getAllCustomers)
customerRoutes.get('/selectone',customerController.selectOne)
module.exports = customerRoutes