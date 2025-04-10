const express = require("express");
const cors = require("cors");
const app = express();
const port = 4040;

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ body: "test ok" });
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
