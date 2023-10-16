const express = require("express");

const router = express.Router();

const accountController = require("./account.controller");

router.post("/", (req, res) => {
  accountController.create(req, res);
});

router.post("/login", (req, res) => {
  accountController.login(req, res);
});

module.exports = router;
