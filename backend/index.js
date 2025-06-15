const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

mongoose.connect('mongodb://localhost:27017/BookApp').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
	res.send('Hello from the backend!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
}); 