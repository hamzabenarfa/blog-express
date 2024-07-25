const express = require("express");
const dotenv = require("dotenv");
const { configureMiddleware } = require("./middleware");
const { connectDatabase } = require("./config/database");
const { setupRoutes } = require("./routes");

dotenv.config();

const app = express();

configureMiddleware(app);
connectDatabase();
setupRoutes(app);


module.exports = app;