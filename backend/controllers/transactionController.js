const transactionModel=require("../models/transactionModel")

exports.transferMoney = async(request,response)=>{
    const sender_id= request.param('sender')
    const reciever_id= request.param('reciever')
    const amount = request.body.amount

    const updatedSender = await transactionModel.updateBalanceSender(sender_id,amount)
    const updatedReciever = await transactionModel.updateBalanceReciever(reciever_id,amount)

    if(updatedReciever && updatedSender)
    {
        console.log(amount)
        console.log(updatedSender)
        console.log(updatedReciever)
        const transaction = await transactionModel.insertInTransaction(sender_id,reciever_id,amount)
        if(transaction)
        {
            response.status(200)
            .json('transaction completed')
        }
        else{
            response.status(500)
            .json('internal server error')
        }
    }
    else{
        // console.log(updatedReciever)
        response.status(500)
        .json('internall server error')
    }
}
exports.getSendersNames = async(request,response)=>{
    const senders= await transactionModel.getSendersNames()
    if(senders){
        response.status(200)
        .json({
            senders : senders
        })
    }else{
        response.status(500)
        response.json('internal server error')
     }
}
exports.getRecieversNames = async(request,response)=>{
    const recievers= await transactionModel.getRecieverNames()
    if(recievers){
        response.status(200)
        .json({
            recievers : recievers
        })
    }else{
        response.status(500)
        response.json('internal server error')
     }
}
exports.transactionHistory= async(request,response)=>{
    const history = await transactionModel.transactionHistory()
    if(history)
    {
        response.status(200)
        .json({
            history : history
        })
    }else{
        response.status(500)
        response.json('internal server error')
    }
}