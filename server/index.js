const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
//const placeRoutes = require('./routes/Home');
const Place = require('./models/Place');

app.use(express.json());
app.use(cors());

//const dbURI = 'mongodb+srv://sarabh1967:0NYQuS4MdNPBbIyr@cluster0.nj1iy.mongodb.net/traveller_info?retryWrites=true&w=majority&appName=Cluster0';
const dbURI = 'mongodb+srv://sarabh1967:0NYQuS4MdNPBbIyr@cluster0.nj1iy.mongodb.net/traveller_info?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, {
  serverSelectionTimeoutMS: 30000
})
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.get('/search', async (req, res) => {
  try{
    const query = req.query.place;
    const places = await Place.findOne({place: {$regex: query, $options: 'i'}});
    if (places){
      res.json(places);
    }
    else {
      res.status(404).json({message: "Place Not Found"});
    }
  }
  catch(error){
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("server running");
})
