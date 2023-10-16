const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  sequelize: new Sequelize(
    process.env.DB_NAME || "",
    process.env.DB_USERNAME || "",
    process.env.DB_PASSWORD || "",
    {
      dialect: "postgres",
      sync: true,
    }
  ),
};
