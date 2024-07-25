const cors = require("cors");
const express = require("express");

const configureMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use("/api/images", express.static("./public/images"));
};

module.exports = { configureMiddleware };
