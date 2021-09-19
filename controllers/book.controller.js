'use strict';
const BookModel = require('../models/book.model');

let BooksController = (req, res) => {
  BookModel.find().then(data => {
    res.json(data);
  });
};
let getBooksController = (req, res) => {
  let BookId = req.query.id;
  BookModel.findOne({ _id: BookId }).then(data => {
    res.json(data);
  });
};

module.exports = {
  BooksController,
  getBooksController

};
