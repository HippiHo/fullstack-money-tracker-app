const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  dateTime: { type: Date, required: true },
  id: { type: String, required: true },
});

const TransactionModel = model("Transaction", TransactionSchema);

module.exports = TransactionModel;
