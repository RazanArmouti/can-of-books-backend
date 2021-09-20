'use strict';
const mongoose=require('mongoose');

const ownerSchema=new mongoose.Schema({
  ownerName:String,
  email:String

});

const OwnerModel=mongoose.model('owner',ownerSchema);

module.exports={
  ownerSchema,
  OwnerModel
};
