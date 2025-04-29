const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const Transaction = require("./models/Transaction.js");
const mongoose = require("mongoose");
const port = 4040;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ body: "test ok" });
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, price, description, dateTime, id } = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
    dateTime,
    id,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.delete("/api/transaction/:id", async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const query = { id: req.params.id };
    const result = await Transaction.deleteOne(query);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted successfully", result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting transaction", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
