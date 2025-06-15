require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes'); // Assuming you have bookRoutes defined in routes/bookRoutes.js

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use('/', bookRoutes); 

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
}); 