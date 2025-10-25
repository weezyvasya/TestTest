const express = require('express');
const data = require('../data/data');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
