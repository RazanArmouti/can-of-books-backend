'use strict';
const mongoose = require('mongoose');
const { ownerSchema, OwnerModel } = require('./owner.model');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  // email: String
  owner: ownerSchema
});

const BookModel = mongoose.model('book', bookSchema);
const seedBook = () => {
  let Owner = new OwnerModel({
    ownerName: 'Razan Armouti',
    email: 'admin@gmail.com'
  });
  Owner.save();
  let newBook = {
    title: 'Twilight',
    description: 'About three things I was absolutely positive',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg',
    owner: Owner

  };

  let Book = new BookModel(newBook);
  Book.save();
};

//let seedBook = () => {
// let newBook = new BookModel({
//   email: 'admin@gmail.com',
//   title: 'The Hunger Games',
//   description: 'Could you survive on your own in the wild, with every one out to make sure you don\'t live to see the morning?',
//   image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg'

// });
// newBook.save();
//};

//module.exports = BookModel;
//module.exports = seedBook;
module.exports = {
  BookModel,
  seedBook
  // bookSchema
};








