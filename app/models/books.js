const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    subtitle: String,
    authors: Array,
    imageLinks: Object,
    infoLink: String,
    description: String,
    bookId: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
