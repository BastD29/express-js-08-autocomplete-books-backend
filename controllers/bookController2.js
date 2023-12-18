const Book = require("../models/bookModel");

// const getBooks = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getBooks = async (req, res) => {
  try {
    if (!req.query.search) {
      return res.status(200).json([]);
    }

    const query = { title: { $regex: req.query.search, $options: "i" } };

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBooks = async (req, res) => {
  console.log("req.body:", req.body);
  try {
    const books = await Book.insertMany(req.body);
    res.status(201).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  console.log("req.params.id:", req.params.id);
  console.log("typeof req.params.id:", typeof req.params.id);
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, createBooks, getBookById };
