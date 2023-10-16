const dotenv = require("dotenv");
const databaseActions = require("./database/actions.js");
const server = require("./server.js");

dotenv.config();
server.startApp();
databaseActions.testDatabase();
databaseActions.syncDatabase();
