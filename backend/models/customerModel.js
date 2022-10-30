const client = require('../database')   

exports.selectAllCustomers = async ()=>{
  const resultedCustomers = await client.db.select()
  .from('users')
  return resultedCustomers  
}
exports.selectOne = async(id)=>{
  const user = await client.db.select('name')
  .from('users')
  .where({id:id})
  return user
}
