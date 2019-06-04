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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello world',
        locationIcon:require('../../assets/images/location.png')
      }
    },
  }
</script>

<style scoped>
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
