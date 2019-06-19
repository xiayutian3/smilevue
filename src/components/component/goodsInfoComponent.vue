<template>
  <div class="goods-info" @click="goGoodsPage">
      <div class="goods-image">
          <img v-lazy="goodInfo.image" width="90%" />
      </div>
      <div class="goods-name">{{goodInfo.name}}</div>
      <div class="goods-price">￥{{goodInfo.price | moneyFilter }}</div>
  </div>
</template>

<script>
// import {toMoney} from '@/filter/moneyFilter.js'
export default {
  props:['goodInfo'],
  data () {
    return {

    }
  },
  // filters:{
  //   moneyFilter(money){
  //     return toMoney(money)
  //   }
  // },
  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {
    goGoodsPage(){
      this.$router.push({name:'Goods',params:{goodsId:this.goodInfo.goodsId}})
    }
  }
}
</script>

<style lang='less' scoped>
    .goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
</style>