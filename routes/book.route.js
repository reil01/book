const express = require('express')
const router = express.Router()

//import model
const Book = require('../models/book.model')


//create routes
router.post('/', (req, res)=>{
    const {bookName, authorName, authorAge, bookGenre} = req.body
    book = new Book({
        name: bookName,
        author: {
            name: authorName,
            age: authorAge
        },
        genre: bookGenre
    })

    book.save()
    .then(book => {
        res.send(book)
    })
    .catch(err =>{
        res.status(500).send("Book was not save to DB.")
    })
})

module.exports = router
