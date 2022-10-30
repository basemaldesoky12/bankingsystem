const express = require("express")
const app = express()
const customerRoutes= require("./routes/customerRoutes")
const transactionRoutes=require("./routes/transactionRoute")
const cors = require('cors')
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors())

app.use('/api/customers',customerRoutes)
app.use('/api/transaction',transactionRoutes)
module.exports= app