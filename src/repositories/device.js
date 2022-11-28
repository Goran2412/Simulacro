const {Device} = require('../../db/models');

async function createDevice(identifier) {
    return await Device.create({identifier});
}

async function findDevice(identifier) {
    return await Device.findOne({
        where: {identifier}
    })
}

async function deleteDevice(identifier) {
    const dev = await findDevice(identifier);
    return dev.destroy();
}

module.exports = {
    createDevice,
    findDevice,
    deleteDevice
}