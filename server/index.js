require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port:${process.env.PORT || 7000}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
