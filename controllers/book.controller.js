'use strict';
const { BookModel } = require('../models/book.model');

let BooksController = (req, res) => {
  BookModel.find({}).then(data => {
    res.status(200).json(data);
  });
};
let getBooksController = (req, res) => {
  let BookId = req.query.id;
  BookModel.findOne({ _id: BookId }).then(data => {
    res.json(data);
  });
};



const createBookController = async (req, res) => {

  let BookData=req.body;
  let newBook= new BookModel(BookData);
  newBook.save();
  BookModel.find({}).then(data=>{res.status(200).json(data);});
};

const deleteBookController= async(req,res)=>{
  let id=req.params.id;
  BookModel.findByIdAndDelete(id,async (err)=>{
    if(err){
      res.status(500).send('an error occured');
    }
    let booksList= await BookModel.find({});
    res.json(booksList);

  });
};

const updateBooksController=async (req,res)=>{
  let BookID=req.params.id;
  let updatedData=req.body;
  BookModel.findOne({_id:BookID}).then(book=>{
    book.title=updatedData.title;
    book.description=updatedData.description;
    book.image=updatedData.image;
    book.email=updatedData.email;

    book.save();
  });
  let updatedBooksList=await BookModel.find({});
  res.status(200).send(updatedBooksList);
};



module.exports = {
  BooksController,
  getBooksController,
  createBookController,
  deleteBookController,
  updateBooksController

};
