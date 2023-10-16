const express = require("express");
const accountRoutes = require("./accounts/account.route");

const app = express();
app.use(express.json());
app.use("/accounts", accountRoutes);

const startApp = () =>
  app.listen(7000, () => {
    console.log("app running");
  });

module.exports = {
  startApp,
  app,
};
