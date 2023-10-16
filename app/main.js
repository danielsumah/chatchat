const dotenv = require("dotenv");
const express = require("express");
const databaseActions = require("./database/actions.js");
const app = express();

dotenv.config();
app.listen(4000, async () => {
  await databaseActions.testDatabase();
  console.log("App running");
});
