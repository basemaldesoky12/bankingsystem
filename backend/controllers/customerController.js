const { response } = require("../app")
const customerModel = require("../models/customerModel")
exports.getAllCustomers = async(request,response)=>{
    const customers = await customerModel.selectAllCustomers()
    if(customers)
    {
        response.status(200)
        .json({
            users : customers
        })
    }
    else{
        response.status(500)
        response.json('internal server error')
     }
}
exports.selectOne = async(request,response)=>{
    const id = request.param('id')
    const user = await customerModel.selectOne(id)

    if(user)
    {
        response.status(200)
        .json({
            user:user
        })
    }
    else{
        console.log(user)
        response.status(500)
        response.json('internal server error')
    }
}