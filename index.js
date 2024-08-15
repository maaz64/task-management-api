require('dotenv').config();
const express = require("express");

const app = express();
const Port = process.env.Port || 8000

app.get("/", (_, res) => {
  res.status(200).json({ message: "success" });
});
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
