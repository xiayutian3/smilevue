const Koa = require('koa')
const app = new Koa()
const {connect,initSchemas} = require('./database/init') 
const mongoose = require('mongoose')



;(async()=>{
 await connect();
 initSchemas();
 const User = mongoose.model('User')
 let oneUser = new User({
  userName:'jspang111',
  password:'123456'
 })
 oneUser.save().then(()=>{
  console.log('插入成功')
 });
 let findUsers = await User.find({})
 console.log(findUsers)
})();

app.use(async(ctx)=>{
  ctx.body = '<h1>hello Koa2</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})