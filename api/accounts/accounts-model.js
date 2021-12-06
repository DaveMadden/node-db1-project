const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  const rows = await db('accounts')
  return rows;
}

const getById = async id => {
  // DO YOUR MAGIC
  const record = await db('accounts')
    .select("budget", "name")
    .where("id", id)
    .first()
  return record
}

const getByName = async nom => {
  const record = await db('accounts')
    .where("name", nom)
  return record
}

const create = async account => {
  const thing = await db('accounts')
    .insert(account)
  
  return await getById(thing)
}

const updateById = async (id, account) => {
  await db('accounts')
    .update(account)
    .where("id", id)

  return await getById(id)
}

const deleteById = async id => {
  const deleted = await getById(id)
  await db('accounts').delete().where('id', id)
  return deleted
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
