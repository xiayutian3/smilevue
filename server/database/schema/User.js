const mongoose = require('mongoose');
const Schema = mongoose.schema;
let ObjectId = Schema.Types.ObjectId;    //声明Object类型   定义主键


//创建我们的用户Schema
const userSchema = new Schema({
  UserId:ObjectId,
  userName:{unique:true,type:String},
  password:String,
  createAt:{type:Date,default:Date.now()},
  lastLoginAt:{type:Date,default:Date.now()}
})


//发布模型
mongoose.model('User',userSchema)