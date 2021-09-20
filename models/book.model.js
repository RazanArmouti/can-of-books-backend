'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  email: String
});

const BookModel = mongoose.model('book', bookSchema);

//let seedBook = () => {
// let newBook = new BookModel({
//   email: 'admin@gmail.com',
//   title: 'The Hunger Games',
//   description: 'Could you survive on your own in the wild, with every one out to make sure you don\'t live to see the morning?',
//   image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg'



//   //     bookdetails: [{
//   //       title: 'The Hunger Games',
//   //       description: 'Could you survive on your own in the wild, with every one out to make sure you don\'t live to see the morning?',
//   //       image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg'


//   //     },
//   //     {
//   //       title: 'Divergent',
//   //       description: 'In Beatrice Prior\'s dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent).',
//   //       image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618526890l/13335037._SY475_.jpg'


//   //     },
//   //     {
//   //       title: 'The Fault in Our Stars',
//   //       description: 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. ',
//   //       image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631549175l/11870085._SY475_.jpg'


//   //     }]
//
// });
// newBook.save();
//};
module.exports = BookModel;
//module.exports = seedBook;
// module.exports={
//   bookSchema
// };
