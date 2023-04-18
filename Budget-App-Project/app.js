const express = require("express");
const cors = require("cors");
const transactionsController = require("./Controllers/transactionsController");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to Budget App! For Docs, please visit <`);

  app.use("/transactions, transactionController");
});
module.exports = app;
