const Book = require('../model/book'); 

// create a new book
exports.createBook = async (req, res) => {
  try {
	const {name, author, year, description, amount} = req.body;
	const newBook = new Book({
	  name,
	  author,
	  year,
	  description,
	  amount
	});
	const savedBook = await newBook.save();
	res.json(savedBook);
  } catch (error) {
	res.status(400).json({ message: error.message });
  }
}; 

// get all books
exports.getAllBooks = async (req, res) => {
  try {
	const books = await Book.find();
	res.json(books);
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
};

// get a book by id
exports.getBookById = async (req, res) => {
  try {
	const book = await Book.findById(req.params.id);
	if (!book) {
	  return res.status(404).json({ message: 'Book not found' });
	}
	res.json(book);
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
};

// update a book by id
exports.updateBookById = async (req, res) => {
  try {
	const { name, author, year, description, amount } = req.body;
	const updatedBook = await Book.findByIdAndUpdate(
	  req.params.id,
	  { name, author, year, description, amount },
	  { new: true }
	);
	if (!updatedBook) {
	  return res.status(404).json({ message: 'Book not found' });
	}
	res.json(updatedBook);
  } catch (error) {
	res.status(400).json({ message: error.message });
  }
};

// delete a book by id
exports.deleteBookById = async (req, res) => {
  try {
	const deletedBook = await Book.findByIdAndDelete(req.params.id);
	if (!deletedBook) {
	  return res.status(404).json({ message: 'Book not found' });
	}
	res.json({ message: 'Book deleted successfully' });
  } catch (error) {
	res.status(500).json({ message: error.message });
  }
};