const express = require('express');
const router = express.Router();
const catService = require("../cat-service")
//solution 
/* GET home page */

function renderPage(req, res, next) {
  res.render('index');
}

router.get(
  '/',
  renderPage
);

module.exports = router;
