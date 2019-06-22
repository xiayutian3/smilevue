<template>
  <div class="wrap">
    <div class="main-div">
      <keep-alive>
          <router-view/>
      </keep-alive>
    </div>
    <div class="bar">
      <van-tabbar
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
      @change = "changeTabbar(active)"
      >
        <van-tabbar-item icon="shop">首页</van-tabbar-item>
        <van-tabbar-item icon="records">列表页</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车页</van-tabbar-item>
        <van-tabbar-item icon="contact">会员中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  props: [],

  data () {
    return {
      active:0
    };
  },

  created(){
    this.changeTabBarActive()
  },

  mounted(){},

  methods: {
    changeTabbar(active){
      switch(active){
        case 0:
          this.$router.push({name:"ShoppingMall"})
          break;
        case 1:
          this.$router.push({name:"CategoryList"})
          break;
        case 2:
          this.$router.push({name:"Cart"})
          break;
        case 3:
          this.$router.push({name:"Member"})
          break;
      }
    },
    changeTabBarActive(){
      let nowPathName = this.$route.name
      console.log(this.$route.name)
      if(nowPathName == 'Cart'){
        this.active = 2
      }
    }
  },

  components: {},

  computed: {},
  watch:{
    //普通监视，深度监视都可行
    // $route:{
    //   handler: function (val, oldVal) { console.log(val) },
    //   deep: true
    // }
    // $route(val,oldVal){
    //   console.log(val)

    // }
  }
}

</script>
<style lang='less' scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }
.main-div{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
</style>