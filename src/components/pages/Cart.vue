<template>
  <div class="wrapper">
    <div class="navbar-div">
      <van-nav-bar title="购物车" />
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
    }
  },
  computed:{},
  components:{},
  watch:{}
}
</script>
<style lang="less" scoped>
.wrapper{
  width: 100%;
  height: 100%;
}
</style>