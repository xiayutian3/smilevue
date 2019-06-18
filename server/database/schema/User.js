const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;    //声明Object类型   定义主键
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


//创建我们的用户Schema
const userSchema = new Schema({
  UserId:ObjectId,
  userName:{unique:true,type:String},
  password:String,
  createAt:{type:Date,default:Date.now()},
  lastLoginAt:{type:Date,default:Date.now()}
})

// 创建出来的集合没有 s   加上{collection:'user'}
// const userSchema = new Schema({
//   UserId:ObjectId,
//   userName:{unique:true,type:String},
//   password:String,
//   createAt:{type:Date,default:Date.now()},
//   lastLoginAt:{type:Date,default:Date.now()}
// },{collection:'user'})


// Shema中的比对实例方法(密码的比对)
userSchema.methods = {
  //密码比对的方法
  comparePassword:(_password,password)=>{
    return new Promise((resolve,reject)=>{
      bcrypt.compare(_password,password,(err,isMatch)=>{
        if(!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}





//每次存储数据时都要执行
userSchema.pre('save',function(next){
  //let user = this
  // console.log(this)
  bcrypt.genSalt( SALT_WORK_FACTOR,(err,salt)=>{
      if(err) return next(err)
      bcrypt.hash(this.password,salt, (err,hash)=>{
          if(err) return next(err)
          this.password = hash
          next()
      }) 
  })
})





//发布模型
mongoose.model('User',userSchema)