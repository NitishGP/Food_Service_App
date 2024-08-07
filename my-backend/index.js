const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB:', error));


const Restaurant = require('./models/rest/Restaurant');
const Menu = require('./models/men/Menu');
const Food = require('./models/foo/Food');



app.get('/api/Restaurants', async (req, res) => {
  try {
    const items = await Restaurant.find();
    console.log(items);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/menu', async (req, res) => {
  try {
    const foods = await Menu.find();
    console.log(foods);
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/food', async (req, res) => {
  try {
    const fooditems = await Food.find();
    console.log(fooditems);
    res.json(fooditems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
