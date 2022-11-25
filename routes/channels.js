var express = require('express');
var router = express.Router();
var channels = require('../src/repositories/channels');

router.get('/', async function(req, res, next) {
    res.json(await channels.getChannels());
});

module.exports = router;