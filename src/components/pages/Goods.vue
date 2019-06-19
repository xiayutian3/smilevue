<template>
  <div class="wrapper">
     <div class="navbar-div">
        <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
      </div>
      <div class="topimage-div">
        <img :src="goodsInfo.IMAGE1" width="100%" alt="">
      </div>  
      <div class="goods-name">{{goodsInfo.NAME}} </div>
       <div class="goods-price" v-if="goodsInfo.PRESENT_PRICE">价格 ：￥{{goodsInfo.PRESENT_PRICE|moneyFilter}}元</div>
       <div class="content">
         <van-tabs swipeable sticky>
           <van-tab title="商品详情">
            <div class="detail" v-html="goodsInfo.DETAIL"></div>
           </van-tab>
           <van-tab title="评论">
            评论制作中
           </van-tab>
         </van-tabs>
       </div>
       <div class="goods-bottom">
            <div>
              <van-button size="large" type="primary">加入购物车</van-button>
            </div>
            <div>
              <van-button size="large" type="danger">直接购买</van-button>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/serverAPI.config.js'
import {Toast} from 'vant'
// import {toMoney} from '@/filter/moneyFilter.js'
export default {
  props:{},
  data(){
    return {
       goodsId: this.$route.params.goodsId,
       goodsInfo:{}
    }
  },
  created(){
    this.getInfo()
  },
  mounted(){},
  methods:{
    getInfo(){
      axios({
        url:url.getDetailGoodsInfo,
        method:'post',
        data:{
          goodsId:this.goodsId
        }
      })
      .then((res)=>{
        if(res.data.code == 200 && res.data.message){
          this.goodsInfo = res.data.message
        }else{
          Toast('服务器错误，数据获取失败')
        }
        console.log('goodsInfo',this.goodsInfo)
      }).catch(err=>
      console.log(err)
      )
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  },
  // filters:{
  //     mmff(money){
  //         return toMoney(money)
  //     }  
  // },
  computed:{},
  components:{},
  watch:{}
}
</script>
<style lang="less" scoped>
.wrapper{
  .goods-name{
      background-color: #fff;
  } 
  .goods-price{
      background-color: #fff;
  }
  .detail {
      font-size:0px;
  }
  .content{
    padding-bottom:60px 
  }
  .goods-bottom{
    position:fixed;
    bottom:0px;
    left:0px;
    background-color: #FFF;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-flow:nowrap;
  }

  .goods-bottom > div {
    flex:1;
    padding:5px;
  }
}
 
</style>