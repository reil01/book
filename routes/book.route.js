const express = require("express");
const router = express.Router();

//import model
const { Book, validateBook } = require("../models/book.model");

//create routes
router.post("/", async (req, res) => {
  const msg = await validateBook(req.body);
  if (msg) {
    return res.status(400).send({ msg: msg.message });
  }

  const { bookName, authorName, authorAge, bookGenre } = req.body;
  book = new Book({
    name: bookName,
    author: {
      name: authorName,
      age: authorAge,
    },
    genre: bookGenre,
  });

  book
    .save()
    .then((book) => {
      return res.send(book);
    })
    .catch((err) => {
      return res.status(500).send("Book was not save to DB.");
    });
});

module.exports = router;
