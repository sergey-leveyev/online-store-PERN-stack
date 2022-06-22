require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

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
