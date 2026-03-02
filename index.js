const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is my first backend project.");
});
app.get("/login", (req, res) => {
  res.send("This is login page.");
});
app.get("/about", (req, res) => {
  res.send("This is about page.");
});

app.listen(port, () => {
  console.log(`App listening on localhost:${port}`);
});
