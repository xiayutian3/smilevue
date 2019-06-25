const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 读取数据库已存在的集合，知道数据库有个集合，但不是自己建立的 （用命令行插入）
let indexSchema = new Schema({

},{collection:'index'})

mongoose.model('Index',indexSchema)




// //********** */ 编码插入数据库*******//因为首页数据比较复杂（属性有数组，有对象）    不能编码插入

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// // 读取数据库已存在的集合，知道数据库有个集合，但不是自己建立的
// let indexSchema = new Schema()

// mongoose.model('Index',indexSchema)

