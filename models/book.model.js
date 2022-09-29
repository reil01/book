const mongoose = require("mongoose");
const Author = require("./author.model");
const Yup = require("yup");
const { uniqueId } = require("lodash");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  author: Author.schema,
  genre: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 20,
  },
});

const validateBook = (book) => {
  const schema = Yup.object().shape({
    bookName: Yup.string().required().min(3).max(50),
    authorName: Yup.string().required().min(3).max(50),
    authorAge: Yup.number().required().min(10).max(100),
    bookGenre: Yup.string().required().min(3).max(20),
  });
  return schema
    .validate(book)
    .then((book) => book)
    .catch((err) => {
      return { message: err.message };
    });
};

exports.Book = new mongoose.model("Book", BookSchema);
exports.validateBook = validateBook;
