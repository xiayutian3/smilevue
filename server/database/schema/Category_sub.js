const mongoose = require('mongoose')
const Schema = mongoose.Schema

let category_subSchema = new Schema({
  ID:{unique:true,type:String},
  MALL_CATEGORY_ID:String,
  MALL_SUB_NAME:{type:String},
  COMMENTS:String,
  SORT:Number
})

mongoose.model('Category_sub',category_subSchema)