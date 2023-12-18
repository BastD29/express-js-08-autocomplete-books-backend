const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    // bookId: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    // },
    author: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
