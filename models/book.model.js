'use strict';
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  email: String

});

const BookModel = mongoose.model('books', bookSchema);
const seedBook = () => {
  let newBook = {
    title: 'Fifty Shades of Grey',
    description: 'When literature student Anastasia Steele goes to interview young entrepreneur Christian Grey, she encounters a man who is beautiful, brilliant, and intimidating.',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385207843l/10818853.jpg',
    email: 'admin@gmail.com'

  };

  let Book = new BookModel(newBook);
  Book.save();
};


module.exports = {
  BookModel,
  seedBook
  // bookSchema
};








