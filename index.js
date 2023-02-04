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

app.get("/location/:id", (req, res) => {
  const id = req.params.id;
  if(id > 3){
    res.send(hotels);
  }
  else{
    const locations = hotels.filter(hotel=> hotel.location_id == id);
    res.send(locations);
  }
});

app.get("/id/:id",(req,res) => {
  const id = req.params.id;
  const hotel_id = hotels.find(hotel=> hotel.id == id);
  res.send(hotel_id);
},)



app.listen(port, () => {
  console.log(`listening port 5000`);
});


