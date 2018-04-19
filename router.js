const express = require('express');
const router = express.Router();
const { injectCatFact, renderPage } = require("./middlewares")

router.get(
  '/',
  injectCatFact(25),
  renderPage("index")
);

module.exports = router;
