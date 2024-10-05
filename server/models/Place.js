// const Project = require('./travel.js');

// const newProject = [{
//     place: 'London',
//     hotels: ['The Savoy', 'The Ritz', 'The Langham'],
//     description: 'Famous for its iconic landmarks like Big Ben and the Tower Bridge.',
//     location: 'London, UK',
//     rating: 4.7
// },
// {
//     place: 'Paris',
//     hotels: ['Hotel Eiffel', 'Hotel Louvre'],
//     description: 'City of Lights, famous for the Eiffel Tower and art museums.',
//     location: 'Paris, France',
//     rating: 4.9
// }];

// Project.insertMany(newProject)
//     .then((result) => {
//         console.log('Projects saved');
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });




const mongoose = require('mongoose');

// Define schema and model
const placeSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true
  },
  hotels: {
    type: [String],  // Array of strings for hotel names
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,          // Minimum rating
    max: 5,          // Maximum rating
    required: false
  }

});

const Place = mongoose.model('Place', placeSchema);

// Place.deleteMany({})
//   .then (() => {
//     console.log("deleted");
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// Insert multiple places
// const insertPlaces = async () => {
//   const places = [
//     {
//       place: "Eiffel Tower",
//       hotels: ['Hotel Eiffel', 'Hotel Louvre'],
//       description: "A wrought-iron lattice tower on the Champ de Mars in Paris, France.",
//       location: "Paris, France",
//       rating: 4.9
//     },
//     {
//       place: "Statue of Liberty",
//       hotels: ['Hotel Eiffel', 'Hotel Louvre'],
//       description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
//       location: "New York, USA",
//       rating: 4.7
//     },
//     {
//       place: "Great Wall of China",
//       hotels: ['Hotel Eiffel', 'Hotel Louvre'],
//       description: "An ancient series of walls and fortifications located in northern China.",
//       location: "China",
//       rating: 4.5
//     },
//     {
//       place: "Taj Mahal",
//       hotels: ['Hotel Eiffel', 'Hotel Louvre'],
//       description: "An ivory-white marble mausoleum in the city of Agra, India.",
//       location: "Agra, India",
//       rating: 4.9
//     }
//   ];

//   try {
//     const result = await Place.insertMany(places);
//     console.log('Places inserted:', result);
//   } catch (error) {
//     console.error('Error inserting places:', error);
//   }
// };

// insertPlaces();

module.exports = Place;