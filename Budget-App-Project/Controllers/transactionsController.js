const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const transactionValidator = require("../Models /validators");

//GET (read all resource)
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// GET (read individual resource)
// this gives entire array, refine to specific id (check for strict equiv)
transactions.get("/:id", (req, res) => {
  res.json(transactionsArray);
});

// POST (create a new transaction)
transactionsController.post("/", transactionValidator, (req, res) => {
  transactionsArray.push(req.body);
  res.status(201).json(transactionsArray[transactionsArray.length - 1]);
});

//PUT (update a transaction )
transactionsController.put("/:id", transactionValidator, (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    transactionsArray.splice(id, 0, req.body);
    res.status(200).json(transactionsArray);
  } else {
    res.status(404).json({ error: "/404" });
  }
});

//DELETE (remove a transaction)
transactionsController.delete("/:id", transactionValidator, (req, res) => {
  const { id } = req.params;
  if (transactions[id]) {
    const removedTransactions = transactionsArray.splice(id, 1);
    res.staus(200).json(transactionsArray);
  } else {
    res.status(404).json({ error: "/404" });
  }
});

module.exports = transactions;
