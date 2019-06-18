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

router.get('/insertAllCategory',async(ctx)=>{
  fs.readFile('./data_json/category.json','utf8',(err,data)=>{
    if(!err){
      data = JSON.parse(data)
      let saveCount=0
      const Category = mongoose.model('Category')
      
      data.RECORDS.map((item,index)=>{
        let newCategory = new Category(item)
        newCategory.save().then(()=>{
          saveCount++
          console.log('成功'+saveCount)
        }).catch(err=>
         console.log('失败：'+error)
         )
      })
    }
  })
  ctx.body = '开始导入数据'
})

router.get('/insertAllCategory_sub',async(ctx)=>{
  fs.readFile('./data_json/category_sub.json','utf8',(err,data)=>{
    if(!err){
      data = JSON.parse(data)
      let saveCount = 0
      const Category_sub = mongoose.model('Category_sub')
      data.RECORDS.map((item,index)=>{
        let newCategory_sub = new Category_sub(item)
        newCategory_sub.save().then(()=>{
          saveCount++
          console.log('成功'+saveCount)
        }).catch((err)=>{
          console.log('失败：'+error)
        })
      })
    }
  })
  ctx.body='开始导入数据'
})

module.exports = router