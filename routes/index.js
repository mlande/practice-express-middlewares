const express = require('express');
const router = express.Router();
const catService = require("../cat-service")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
