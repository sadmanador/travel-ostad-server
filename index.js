const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const hotels = require("./data/hotels.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.listen(port, () => {
  console.log(`listening port 5000`);
});


