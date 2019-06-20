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
          <div class="tabCategorySub">
            <van-tabs v-model="active" swipeable>
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
                @load="onLoad"
                >
                <div class="list-item" v-for="item in list" :key="item">
                  {{item}}
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
        categorySub:[],
        active:0,
        loading:false,
        finished:false,
        list:[],
        isLoading:false
      };
    },

    created() {
      this.getCategory()
      this.getCategorySubByCategoryId(1)
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
            console.log('成功',result)
            this.category = result.data.message
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
            console.log('categorySub',this.categorySub)
          }else{
            Toast('服务器错误，数据取得失败')
          }
         
        }).catch(err=>{
          Toast('服务器错误，数据取得失败')
          console.log(err)
        })
      },
      //实现上拉加载
      onLoad(){
        setTimeout(()=>{
          for(let i = 0;i<10 ; i++){
            this.list.push(this.list.length+1)
          }
          this.loading = false
          if(this.list.length>= 40){
            this.finished = true
          }
        },500)
      },
      ////实现下拉刷新
      onRefresh(){
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false,
          //重置上拉刷新的东西
          this.finished = false
          this.list =[]
          this.onLoad()
        }, 500);
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