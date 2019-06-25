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
/*
//***获取商品详细信息的接口
// router.post('/getDetailGoodsInfo',async(ctx)=>{
//   let goodsId = ctx.request.body.goodsId
//   const Goods = mongoose.model('Goods')
//   await Goods.findOne({ID:goodsId}).exec()
//   .then((res)=>{
//     ctx.body = {
//       code:200,
//       message:res
//     }
//   }).catch(err=>{
//     console.log(err)
//     ctx.body = {
//       code:500,
//       message:err
//     }
//   })
// })
*/

/***获取商品详细信息的接口   (优雅写法)*/ 
router.post('/getDetailGoodsInfo',async(ctx)=>{
  try{
    let goodsId = ctx.request.body.goodsId
    const Goods = mongoose.model('Goods')
    let result = await Goods.findOne({ID:goodsId}).exec()
    ctx.body = {
      code:200,
      message:result
    }
  }catch(err){
    ctx.body = {
      code:500,
      message:err
    }
  }
})

/*读取大类数据的接口 */
router.get('/getCategoryList',async(ctx)=>{
  try{
    const Category = mongoose.model('Category')
    let result = await Category.find({}).exec()
    ctx.body={
      code:200,
      message:result
    }
  }catch(err){
    ctx.body = {
      code:500,
      message:err
    }
  }
})


/*读取小类数据的接口 */
router.post('/getCategorySubList',async(ctx)=>{
  try{
    let categoryId = ctx.request.body.categoryId
    // let categoryId = 1
    const Category_sub  = mongoose.model('Category_sub')
    let result = await Category_sub.find({MALL_CATEGORY_ID:categoryId}).exec()
    ctx.body = {
      code:200,
      message:result
    }
  }catch(err){
    ctx.body ={
      code:500,
      message:err
    }
  }
})

/**根据商品类别获取商品列表 */ 
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
  try{
    let categorySubId  = ctx.request.body.categorySubId  //子类别id
    let page = ctx.request.body.page   //当前的页数
    let num = 10  //每页显示的数量
    let start = (page-1)*10  //开始的位置
    
    // let categorySubId  = '2c9f6c946016f86f01601709335d0000'
    const Goods = mongoose.model('Goods')
    let result = await Goods.find({SUB_ID:categorySubId}).skip(start).limit(num).exec()
    ctx.body = {
      code:200,
      message:result
    }
  }catch(err){
    ctx.body = {
      code:500,
      message:err
    }
  }
})


/*将首页原来由easy-mock提供的数据插入数据库中，由数据库读取 */
router.get('/getIndex',async(ctx)=>{
  try{
    // 因为是自己手动插入的
    // 提取到shcame中 统一管理
    // const Schema = mongoose.Schema
    // let indexSchema = new Schema({},{collection:'index'})


    const index = mongoose.model('Index')
    let result = await index.find({}).exec()
    // console.log(1111,result)
    ctx.body={
      code:200,
      message:result
    }
  }catch(err){
    ctx.body = {
      code:500,
      message:err
    }
  }
})





module.exports = router