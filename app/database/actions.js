const config = require("./config");

module.exports = {
  testDatabase: async () => {
    try {
      await config.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error.message);
    }
  },
  syncDatabase: async () => {
    try {
      await config.sequelize.sync();
      console.log("\n Database sync complete");
    } catch (error) {
      console.log("Error syncning database");
    }
  },
};
