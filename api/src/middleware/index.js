const cors = require("cors");
const express = require("express");
const morgan = require('morgan');   

const configureMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use("/api/images", express.static("./public/images"));
};

module.exports = { configureMiddleware };
