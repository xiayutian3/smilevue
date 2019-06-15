const Koa = require('koa')
const app = new Koa()
const {connect} = require('./database/init') 

;(async()=>{
 await connect()
})();

app.use(async(ctx)=>{
  ctx.body = '<h1>hello Koa2</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})