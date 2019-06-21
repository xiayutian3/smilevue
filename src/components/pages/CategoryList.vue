<template>
  <div class="wrap">
    <div class="navbar-div">
      <van-nav-bar title="类别列表" fixed />
    </div>
    <div class="list">
      <van-row class="van-row">
        <van-col span="6" class="van-col">
          <div id="leftNav">
            <ul>
              <li v-for="(item,index) in category" :key="index" :class="{categoryActice:currentIdex == index}" @click="slect(index,item.ID)">{{item.MALL_CATEGORY_NAME}}</li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <div class="tabCategorySub" >
            <van-tabs v-model="active" swipeable @click="onClickCategorySub">
              <van-tab v-for="(item,index) in categorySub" :key="index" :title="item.MALL_SUB_NAME"></van-tab>
            </van-tabs>
          </div>

          <!-- //下拉刷新，上拉加载更多  -->
         
            <div id="list-div">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                :offset=100
                @load="onLoad"
                >
                <div class="list-item" v-for="(item,index) in goodList" :key="index" @click="goGoodsInfo(item.ID)">
                    <div class="list-item-img">
                      <!-- <img :src="item.IMAGE1" :onerror="errorImg" width="100%"/>     -->
                      <!-- 如果使用vant封装好的 v-lazy  无法使用  :onerror   只能用:src   vant内部自己配只有选项 
                      不用上边的方法的话，我在main。js配置了  vant封装好的 v-lazy  所以下边的img可以使用了
                      -->
                      <img v-lazy="item.IMAGE1" width="100%"/>
                    </div>
                    <div class="list-item-text">
                        <div>{{item.NAME}}</div>
                        <div class="">￥{{item.ORI_PRICE | moneyFilter }}</div>
                    </div>
                </div>
                </van-list>
              </van-pull-refresh>
            </div>
          
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import url from '@/serverAPI.config.js'
  export default {
    props: [],

    data() {
      return {
        category:[],
        currentIdex:0,
        categorySub:[],    //小类类别
        active:0,      //激活标签值
        loading:false,   
        finished:false,   //上拉加载是否有数据
        // list:[],
        isLoading:false,  //下拉刷新
        page:1,      //商品列表的页面
        goodList:[],   //商品列表信息
        categorySubId:'',  //商品子类ID
        errorImg:'this.src="'+require('@/assets/images/errorimg.png')+'"'
      };
    },

    created() {
      this.getCategory()
     },

    mounted() { },

    methods: {
     async getCategory(){
       try{
          let result = await axios({
            url:url.getCategoryList,
            method:'get'
          })
          if(result.data.code == 200 && result.data.message){
            // console.log('成功',result)
            this.category = result.data.message
            this.getCategorySubByCategoryId(this.category[0].ID)

          }else{
            Toast('服务器错误，数据取得失败')
            console.log('失败',result)
          }
       }catch(err){
          Toast('服务器错误，数据取得失败')
          console.log('失败',err)
       }
      },
      slect(index,id){
        this.currentIdex = index
        this.active = 0
        this.getCategorySubByCategoryId(id)

        this.page = 1
        this.goodList = []
        this.finished = false
        this.onLoad()
      },
      //根据大类id来读取小类的类别列表
      getCategorySubByCategoryId(categoryId){
        axios({
          url:url.getCategorySubList,
          method:'post',
          data:{
          categoryId:categoryId
          }
        }).then((res)=>{
          if(res.data.code == 200 && res.data.message){
            this.categorySub = res.data.message
            this.categorySubId = this.categorySub[0].ID
            // console.log('categorySub11111111',this.categorySub)
          }else{
            Toast('服务器错误，数据取得失败')
          }
         
        }).catch(err=>{
          Toast('服务器错误，数据取得失败')
          console.log(err)
        })
      },
      //实现上拉加载
      // List组件刚开始加载的时候回自己触发，不用人为调用它
      onLoad(){
        setTimeout(()=>{
          // console.log(' onLoad onLoad 事件')
         this.categorySubId = this.categorySubId?this.categorySubId:this.categorySub[0].ID
         this.getGoodList()
        },1000)
      },
      ////实现下拉刷新
      onRefresh(){
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
          //重置上拉刷新的东西
          this.finished = false
          this.goodList =[]
          this.page = 1
          this.onLoad()
        }, 500);
      },
      // 小类商品列表的获取方法
      getGoodList(){
        console.log('getGoodList事件')
        axios({
          url:url.getGoodsListByCategorySubID,
          method:'post',
          data:{
            page:this.page,
            categorySubId:this.categorySubId
          }
        }).then((res)=>{
          console.log('goodList',res.data.message)
          if(res.data.code == 200 && res.data.message.length){
            this.page++
            this.goodList = this.goodList.concat(res.data.message)
          }else{
            this.finished = true
          }
          this.loading = false

        }).catch(err=>{
          console.log(err)
        })
      },
      //点击小tab获取相应内容
      onClickCategorySub(index,title){
        this.categorySubId = this.categorySub[index].ID
        //做一些重置
        this.goodList = []
        this.page = 1
        this.finished  = false
        this.onLoad()
        // console.log('tab点击了')
      },
      //跳转到商品详细页
      goGoodsInfo(goodsId){
        this.$router.push({name:'Goods',params:{goodsId}})
      }
    },

    components: {},

    computed: {}
  }

</script>
<style lang='less' scoped>
    .navbar-div{
      height: 46px;
    }
    .wrap{
      width: 100%;
      height: 100%;
    }
    .list{
        width: 100%;
        height: calc(~"100% - 46px");
    }
    .van-row{
      height: 100%; 
    }
    .van-col{
      height: 100%;
    }
    #leftNav{
        height: 100%;
        background-color: aliceblue;
    }
    #leftNav ul li {
        line-height: 2rem;
        border-bottom: 1px solid #E4E7ED;
        padding:3px;
        font-size:0.8rem;
        text-align: center;
    }
    .categoryActice{
        background-color: #fff;
    }


    .list-item{
        display: flex;
        flex-direction: row;
        font-size:0.8rem;
        border-bottom: 1px solid #f0f0f0;
        background-color: #fff;
        padding:5px;
    }
    #list-div{
        height: calc(~"100% - 44px");
        overflow: scroll;
    }
    .list-item-img{
        flex:8;
    }
    .list-item-text{
        flex:16;
        margin-top:10px;
        margin-left:10px;
    }
   
</style>