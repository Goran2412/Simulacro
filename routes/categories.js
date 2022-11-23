var express = require('express');
var router = express.Router();
var categories = require('../src/repositories/categories');

/* GET all categories listing. */
router.get('/', async function(req, res, next) {
  res.json(await categories.getCategories());
});

//get a specific category
router.get('/:id', async function(req, res, next) {
    res.json(await categories.findCategory(req.params.id));
});


module.exports = router;