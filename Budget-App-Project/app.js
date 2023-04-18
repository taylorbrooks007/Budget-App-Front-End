const express = require("express");
const cors = require("cors");
const transactionsController = require("./Controllers/transactionsController");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`taylor set up your deployment.`);

  app.use("/transactions, transactionController");
});
module.exports = app;
