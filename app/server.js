const express = require("express");
const accountRoutes = require("./accounts/account.route");

const app = express();

app.use("/accounts", accountRoutes);

module.exports = {
  startApp: () =>
    app.listen(7000, () => {
      console.log("app running");
    }),
};
