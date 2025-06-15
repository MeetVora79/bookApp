const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
	type: String,
	required: true,
  },
  author: {
	type: String,
	required: true,
  },
  year: {	
	type: Number,
	required: true,
  },
  description: {
	type: String,
	required: true,
  },
  amount: {
	type: Number,
	required: true,
  },

});

const Book = mongoose.model('book', bookSchema);
module.exports = Book;