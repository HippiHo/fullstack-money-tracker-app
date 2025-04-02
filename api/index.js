const express = require("express");
const app = express();
const port = 4000;

// browser: http://localhost:4000/api/test

app.get("/api/test", (req, res) => {
  res.json({ body: "test ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
