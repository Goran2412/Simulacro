const {Channels} = require('../../db/models');

async function getChannelInfo(id) {
    return await Channels.findOne({
      where: {id},
      attributes: ['id', 'name', 'logo_url', 'category_id'],
      order:[['id','ASC']]
    })
}

module.exports = {
    getChannelInfo
}