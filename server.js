'use strict';
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
app.use(cors());
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
const {seedBook}=require('./models/book.model');
const { BooksController, getBooksController, createBookController, deleteBookController, updateBooksController}=require('./controllers/book.controller');
app.use(express.json());
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
const client = jwksClient({
  // this url comes from your app on the auth0 dashboard
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey=(header, callback)=>{
  client.getSigningKey(header.kid, function(err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};
app.get('/auth',(req,res)=>{
  console.log('i was called');
  // getting the JWT from the request headers
  'Bearer ljdlasiudo87waudljaslidu'
    ['Bearer','ljdlasiudo87waudljaslidu'];
  const token=req.headers.authorization.split(' ')[1];
  // token="ljdlasiudo87waudljaslidu"
  // checking the token if it is valid/verfied
  jwt.verify(token,getKey,{},(err)=>{
    if(err){
      res.send('invalid token');
    }
    res.send('Your are authenticated/Authorized');
  });
});

mongoose.connect(`${MONGO_SERVER}`,{useNewUrlParser: true, useUnifiedTopology: true});
app.get('/seed-data',(req,res)=>{
  seedBook();
  res.json({'message':'Book data created succefully'});

});

app.get('/books',BooksController);
app.get('/get-book',getBooksController);
app.post('/create-book',createBookController);
app.delete('/delete-books/:id',deleteBookController);
app.put('/update-book/:id',updateBooksController);

app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`);
});
