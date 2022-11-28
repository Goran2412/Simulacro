var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/device');

router.post('/', async function(req, res, next) {

        const iden = req.body.identifier;

        if (iden.length != 12){
            return res.status(400).json({message: 'INVALID_IDENTIFIER_LENGTH'});
        }

        var prueba = await devices.findDevice(iden);

        if (prueba) {
            return res.status(400).json({message: 'DEVICE_ALREADY_EXISTS'});
        }

        try {
            await devices.createDevice(iden);
            res.status(201).json({message: 'DEVICE_CREATED'});
        } catch (e) {
            console.log(e);
            res.status(500).json({message: 'UNKNOWN_ERROR'});
        }
})

router.delete('/:identifier', async function(req, res, next) {

    var prueba = await devices.findDevice(req.params.identifier);

    if (!prueba) {
        return res.status(400).json({message: 'DEVICE_DOESNT_EXIST'});
    }

    try {
        await devices.deleteDevice(req.params.identifier);
        res.status(200).json({message: 'DEVICE_DELETED'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'UNKNOWN_ERROR'});
    }
})

module.exports = router;