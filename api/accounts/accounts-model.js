const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const rows = await db('accounts')
  return rows;
}

const getById = async id => {
  // DO YOUR MAGIC
  const record = await db('accounts')
    .where("id", id)
  return record
}

const create = async account => {
  const thing = await db('accounts')
    .insert(account)
  
  return await getById(thing)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  return "updating by id"
}

const deleteById = async id => {
  // DO YOUR MAGIC
  return "deleting by id"
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
