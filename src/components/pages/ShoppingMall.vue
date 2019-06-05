<template>
  <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>

        <!--swiper area-->
        <div class="swiper-area">
            <van-swipe :autoplay="1000" class="van-swipe">
                <van-swipe-item v-for="(item,index) in bannerPicArray" :key="index">
                    <img v-lazy="item.image" alt="" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        
        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                    <img v-lazy="cate.image" width="90%" />
                    <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div>
        
        <div class="pic">
            <img v-lazy="adBanner" width="100%"/>
        </div>  

  </div>
</template>

<script>
 import axios from 'axios'
  export default {
    data() {
      return {
        msg: 'hello world',
        locationIcon:require('../../assets/images/location.png'),
         bannerPicArray:[
                // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ],
        category:[],
        adBanner:''
      }
    },
    created(){
        axios.get('https://www.easy-mock.com/mock/5cfa619284d63d4aac27c139/smillevue/index')
        .then(res => {
            console.log(res)
            if(res.status == 200){
                this.category  = res.data.data.category
                this.adBanner  = res.data.data.advertesPicture.PICTURE_ADDRESS
                this.bannerPicArray = res.data.data.slides
                console.log(this.adBanner)
            }
            })
        .catch(err => console.log(err))
    }
  }
</script>

<style scoped>
.van-swipe{
        max-height: 15rem !important;
    /* height: 100% !important; */
}
.van-swipe img{
 max-height: 15rem !important;
}
  .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-icon{
        width: 80%; 
        padding-top:.2rem;
        padding-left:.3rem;
    }
    .swiper-area{
        clear:both;
        max-height:15rem;
        overflow: hidden;
    }

    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .type-bar div{
        padding:.3rem;
        font-size:12px;
        text-align: center;
        flex:1;
    }
    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
    .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
    .hot-area{
        text-align: center;
        font-size:14px;
        height: 1.8rem;
        line-height:1.8rem;
    }
    .hot-goods{
        height: 130rem;
        overflow: hidden;
        background-color: #fff;
    }
    




</style>
