<template>
  <div class="wrapper">
    <div class="navbar-div">
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <!--清空购物车-->
    <div class="card-title">
      <van-button size='small' type="danger" @click='clearCart' plain>清空购物车</van-button>
    </div>
    <!--显示购物车中的商品-->
    <div class="cart-list">
      <div class="pang-row" v-for="(item,index) in cartInfo" :key="index">
        <div class="pang-img"><img :src="item.image" alt="" width="100%"></div>
        <div class="pang-text">
            <div class="pang-goods-name">{{item.name}}</div>
            <div class="pang-control">
              <van-stepper v-model="item.count"/>
            </div>
        </div>
        <div class="pang-goods-price">
          <div>
              ￥{{item.price | moneyFilter}}
          </div>
          <div>
              x{{item.count}}
          </div>
          <div class="allPrice">
              ￥{{item.price*item.count | moneyFilter }}
          </div>
        </div>
      </div>
    </div>
    <!--显示总金额-->
    <div class="totalMoney">
        商品总价：￥ {{totalMoney | moneyFilter}}
    </div>
  </div>
</template>

<script>
export default {
  props:{},
  data(){
    return {
      cartInfo:[],
      isEmpty:false
    }
  },
  created(){
    this.getCartInfo()
  },
  mounted(){},
  methods:{
    //得到购物车数据的方法
    getCartInfo(){
      if(localStorage.cartInfo){
        this.cartInfo = JSON.parse(localStorage.cartInfo)
      }
      console.log(this.cartInfo)
      console.log(' this.cartInfo:'+JSON.stringify( this.cartInfo))
      this.isEmpty = this.cartInfo.length>0 ?true:false
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    clearCart(){
      localStorage.removeItem('cartInfo')
      this.cartInfo = []
    }
  },
  computed:{
    totalMoney(){
      let allMoney = 0
      this.cartInfo.forEach(item =>{
        allMoney += item.price*item.count
      } );
      localStorage.cartInfo = JSON.stringify(this.cartInfo)
      return allMoney
    }
  },
  components:{},
  watch:{
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  width: 100%;
  height: 100%;
}
.card-title{
    height: 2rem;
    line-height:2rem;
    background-color: #fff;
    border-bottom:1px solid #E4E7ED;
    padding:5px;
    text-align: right;
}
.cart-list{
    background-color: #fff;
}
.pang-row{
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    padding:0.5rem;
    font-size:0.85rem;
    border-bottom:1px solid #E4E7ED;
    
   
}
.pang-img{
    flex:6;
}
.pang-text{
    flex:14;
    padding-left:10px;
}
.pang-control{
    padding-top: 10px;
}
.pang-goods-price{
    flex:4;
    text-align: right;
}
.allPrice{
  color: red;
}
.totalMoney{
    text-align: right;
    background-color: #fff;
     border-bottom:1px solid #E4E7ED;
     padding: 5px;
}
</style>