const database = require("./config");
const { DataTypes } = require("sequelize");

const User = database.sequelize.define(
  "user",
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);

module.exports = User;
