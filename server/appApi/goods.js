const Router = require('koa-router')
const mongoose = require('mongoose')
const fs = require('fs')

let router = new Router()

router.get('/insertAllGoodsInfo',async(ctx)=>{
  fs.readFile('./newGoods.json','utf8',(err,data)=>{
    if (!err) {
      data = JSON.parse(data)
      let saveCount = 0
      const Goods = mongoose.model('Goods')
      data.map((item,index)=>{
        let newGoods = new Goods(item)
        newGoods.save().then(()=>{
          saveCount++
          console.log('成功'+saveCount)
        }).catch((err)=>{
          console.log('失败：'+err)
        })
      })
    }else{
      console.log(err)
    }
  })
  ctx.body = '开始导入数据'
})
module.exports = router