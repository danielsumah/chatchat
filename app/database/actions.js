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
};
