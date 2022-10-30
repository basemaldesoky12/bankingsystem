const dotenv = require("dotenv")
dotenv.config()
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_DATABASE,
    MYSQL_PASSWORD,
    MYSQL_PORT
}=process.env
module.exports = {
    port : MYSQL_PORT,
    user : MYSQL_USER,
    database : MYSQL_DATABASE,
    host : MYSQL_HOST,
    password : MYSQL_PASSWORD,
}       