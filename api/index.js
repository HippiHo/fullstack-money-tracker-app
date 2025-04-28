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
  const { name, price, description, dateTime } = req.body;
  const transaction = await Transaction.create({
    name,
    price,
    description,
    dateTime,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.delete("api/transaction/:id"),
  async (req, res) => {
    const transactionId = req.params.id;
    console.log(transactionId);
    // await mongoose.connect(process.env.MONGO_URL);
    // const transactions = await Transaction.deleteOne({});
    // res.send("deleted", transactions);
  };

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
