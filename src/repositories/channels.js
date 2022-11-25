const {Channels} = require('../../db/models');

async function getChannels() {
    return await Channels.findAll({
      attributes: ['id', 'name', 'logo_url', 'category_id'],
      order:[['id','ASC']]
    })
}

module.exports = {
    getChannels
}