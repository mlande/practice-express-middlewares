const express = require('express');
const router = express.Router();
const catService = require("../cat-service")

/* GET home page */
router.get('/', (req, res, next) => {
  res.locals.facts = ["Cat fact will be injected here"]
  res.render('index');
});

module.exports = router;
