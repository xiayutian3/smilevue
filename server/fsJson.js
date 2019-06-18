const fs = require('fs')
fs.readFile('./data_json/goods.json','utf8',function(err,data){
  if (!err) {
    let newData = JSON.parse(data)
    let pushData = []
    pushData = newData.RECORDS.filter((item,index)=>{
    return item.IMAGE1!=null
    })
    // console.log(pushData.length)
    fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err){
      if(err) console.log('写文件操作失败')
      else console.log('写文件操作成功')
    })
  }
})