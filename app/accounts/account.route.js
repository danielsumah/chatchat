const express = require("express");

const router = express.Router();

const accountController = require("./account.controller");

router.post("/", (req, res) => {
  accountController.create(req, res);
});

module.exports = router;
