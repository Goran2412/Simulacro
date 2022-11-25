var express = require('express');
var router = express.Router();
var channels = require('../src/repositories/channels');

router.get('/:id', async function(req, res, next) {
    res.json(await channels.getChannelInfo(req.params.id));
});

module.exports = router;