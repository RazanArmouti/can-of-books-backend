'use strict';
const { BookModel } = require('../models/book.model');
const { OwnerModel } = require('../models/owner.model');



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
  const {ownerEmail,bookDescription,bookImageUrl,bookName} = req.body;

  let newOwner = OwnerModel(ownerEmail);
  newOwner.save();

  let newBook = new BookModel({title:bookName, description:bookDescription, image:bookImageUrl, owner: newOwner });
  newBook.save();

  let BooksList = await BookModel.find({});
  res.status(201).json(BooksList);

};

// const deleteBookController = (req, res) => {
//   let id = req.params.id;
//   // const bookID = req.params.bookID;
//   // const ownerName = req.query.ownerName;
//   BookModel.findByIdAndDelete(id, async (err) => {
//     if (err) {
//       res.status(500).send('an error occured');
//     }
//     let BooksList = await BookModel.find({});
//     res.json(BooksList);

//   });
// };
async function deleteBookController(req,res){
  const bookID = req.params.bookID;
  const ownerName = req.query.ownerName;
  BookModel.deleteOne({_id:bookID},(error,deletedBook)=>{
    if(error) {
      console.log('error in deleteing the book');
    } else {
      console.log('book has been deleted', deletedBook);
      BookModel.find({ email:ownerName }, function (err, bookData) {
        if (err) {
          console.log('error in getting the books');
        } else {
          res.send(bookData);
        }
      });
    }
  });
}


module.exports = {
  BooksController,
  getBooksController,
  createBookController,
  deleteBookController

};
