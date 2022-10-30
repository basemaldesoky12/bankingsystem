const client = require('../database')   

exports.updateBalanceSender = async( id,amount)=>{{
    try{
        const parsedAmount=parseInt(amount)
   const resultedBalance= await client.db.select('balance')
   .where({id:id})
   .from('users')
   const updatedBalance= await client.db('users').update({
    balance : resultedBalance[0].balance-parsedAmount
   })
   .where({id:id})
   console.log(updatedBalance)
   return updatedBalance

}catch(error)
{
    return `error occured ${error}`
}
}}
exports.updateBalanceReciever = async( id,amount)=>{{
    try{
       const parsedAmount=parseInt(amount)
  const resultedBalance= await client.db.select('balance')
   .where({id:id})
   .from('users')
   const updatedBalance= await client.db('users').update({
    balance : resultedBalance[0].balance+parsedAmount
   })
   .where({id:id})
   console.log(resultedBalance[0])
   console.log(updatedBalance)
   return updatedBalance
}   catch(error)
    {
    return `error occured ${error}`
    }
}}
exports.insertInTransaction = async(senderid,recieverid,amount)=>{
    try{
         const result = await client.db('transactions').insert({
            sender_id : senderid,
            reciever_id : recieverid,
            amount : amount
         })
         return result
    }catch(error){
        return `error occured ${error}`
    }
}
exports.getSendersNames = async()=>{
    const sendersNames= await client.db.select('name')
    .from('transactions')
    .innerJoin('users','users.id','transactions.sender_id')
    return sendersNames
}
exports.getRecieverNames = async()=>{
    const recieverNames= await client.db.select('name')
    .from('transactions')
    .innerJoin('users','users.id','transactions.reciever_id')
    return recieverNames
}
exports.transactionHistory=async()=>{
    const history = await client.db.select()
    .from('transactions')
    return history
}
