const {Categories} = require('../../db/models');

async function findCategory(id){
    return await Categories.findByPk(id,
        {attributes: ['name']})
}

async function getCategories() {
  return await Categories.findAll({
    attributes: ['id', 'name'],
    order:[['id','ASC']]
  })
 }

 module.exports = {
    findCategory,
    getCategories,
}