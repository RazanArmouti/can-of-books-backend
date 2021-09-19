'use strict';

const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
app.use(cors());
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
//const seedBook=require('./models/book.model');

const {BooksController, getBooksController}=require('./controllers/book.controller');

mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});

// app.get('/seed-data',(req,res)=>{
//   seedBook();
//   res.json({'message':'Book data created succefully'});

// });

app.get('/books',BooksController);
app.get('/get-book',getBooksController);
app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`);
});
