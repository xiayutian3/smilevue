const BASEURL  = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"  //已经从easy-mock上的数据插入了数据库中
const LOCALURL = "http://localhost:3000/"       //mongodb 数据库  (封装axios到 baseurl)

// const URL = {
//   getShoppingMallInfo:BASEURL+'index',
//   getGoodsInfo:BASEURL+'getGoodsInfo',    //这个是没用的
//   registerUser:LOCALURL+'user/register',  //用户注册接口
//   login:LOCALURL+'user/login',      //用户登录接口
//   getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',    //商品接口
//   getCategoryList:LOCALURL+'goods/getCategoryList',     //得到大类信息
//   getCategorySubList:LOCALURL+'goods/getCategorySubList',     //得到小类信息
//   getGoodsListByCategorySubID:LOCALURL+'goods/getGoodsListByCategorySubID'   //得到小类商品信息
// }


const URL = {
  getShoppingMallInfo:'goods/getIndex',
  // getGoodsInfo:BASEURL+'getGoodsInfo',
  registerUser:'user/register',  //用户注册接口
  login:'user/login',      //用户登录接口
  getDetailGoodsInfo:'goods/getDetailGoodsInfo',    //商品接口
  getCategoryList:'goods/getCategoryList',     //得到大类信息
  getCategorySubList:'goods/getCategorySubList',     //得到小类信息
  getGoodsListByCategorySubID:'goods/getGoodsListByCategorySubID'   //得到小类商品信息
}







export default URL