<template>
  <div class="wrap">
    <!-- <swiper :options="wrapSwiperOptions" class="wrapSwiper" ref="SwiperId">
      <swiper-slide class="wrapSwiperItem"> -->
        <scroller>
            <div class="inner">
                <div class="search-bar">
                    <van-row>
                      <van-col span="3">
                        <img :src="locationIcon" class="location-icon" />
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
                    <div v-for="(cate,index) in category" :key="index">
                      <img v-lazy="cate.image" width="90%" />
                      <span>{{cate.mallCategoryName}}</span>
                    </div>
                  </div>
          
                  <div class="pic">
                    <img v-lazy="adBanner" width="100%" />
                  </div>
                  <!--Recommend goods area-->
                  <div class="recommend-area">
                    <div class="recommend-title">
                      商品推荐
                    </div>
                    <div class="recommend-body">
                      <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                          <div class="recommend-item">
                            <img v-lazy="item.image" width="80%" />
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                  </div>
                  <!-- <swiper-dfault></swiper-dfault>
                              <swiper-demo1/>
                              <swiper-demo2/> -->
                  <!-- <swiper-demo3/> -->
                  <!-- <swiper-demo4/> -->
          
          
                  <!--floor one area-->
          
                  <!-- <floor-component :floor1="floor1" /> -->
                  <floor-component :floor1="floor1" :floorTitle='floorName.floor1' v-if="floor1.length>0" />
                  <floor-component :floor1="floor2" :floorTitle='floorName.floor2' v-if="floor2.length>0" />
                  <floor-component :floor1="floor3" :floorTitle='floorName.floor3' v-if="floor3.length>0" />
          
                  <!--Hot Area-->
                  <div class="hot-area"> 
                    <div class="hot-title">热卖商品</div>
                    <div class="hot-goods">
                      <!--这里需要一个list组件-->
                      <van-list>
                        <van-row gutter="20">
                          <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                            <good-info-component :goodInfo="item" />
                          </van-col>
                        </van-row>
                      </van-list>
          
                    </div>
                  </div>
            </div>
        </scroller>
        
        


      <!-- </swiper-slide>
    </swiper> -->


  </div>
</template>

<script>
  import axios from '@/request/request.js'
  // import 'swiper/dist/css/swiper.css'
  // import {
  // 	swiper,
  // 	swiperSlide
  // } from 'vue-awesome-swiper'
  //  import swiperDfault from '../swiper/swiperDefault.vue'
  //  import swiperDemo1 from '../swiper/swiperDemo1.vue'
  //  import swiperDemo2 from '../swiper/swiperDemo2.vue'
  //  import swiperDemo3 from '../swiper/swiperDemo3.vue'
  //  import swiperDemo4 from '../swiper/swiperDemo4.vue'
  import FloorComponent from '../component/FloorComponent.vue'
  // import {toMoney} from '@/filter/moneyFilter.js'
  import goodInfoComponent from '@/components/component/goodsInfoComponent.vue'
  import url from '@/serverAPI.config.js'
  export default {
    data() {
      return {
        msg: 'hello world',
        locationIcon: require('../../assets/images/location.png'),
        bannerPicArray: [
          // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
          // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
          // {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
        ],
        category: [],
        adBanner: '',
        recommendGoods: [],
        swiperOption: {
          slidesPerView: 3
        },
        floor1: [],
        floor2: [],
        floor3: [],
        floorName: {},
        hotGoods: [],
        wrapSwiperOptions: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          mousewheel: true,
          // 以下两个可以用可以不用
          observeParents:true,
          observer:true,
        }
      }
    },
    // created() {
    // 	axios.get('https://www.easy-mock.com/mock/5cfa619284d63d4aac27c139/smillevue/index')
    // 		.then(res => {
    // 			if (res.status == 200) {
    // 				this.category = res.data.data.category
    // 				this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS
    // 				this.bannerPicArray = res.data.data.slides
    // 				this.recommendGoods = res.data.data.recommend
    // 				this.floor1 = res.data.data.floor1 //楼层1数据
    // 				// this.floor1_0 =this.floor1[0]
    // 				// this.floor1_1 =this.floor1[1]
    // 				// this.floor1_2 =this.floor1[2]
    // 				// console.log(this.floor1_0)
    // 			}
    // 		})
    // 		.catch(err => console.log(err))
    // 		
    // },

    async created() {
      let res = await axios.get(url.getShoppingMallInfo)
      if (res.status == 200) {
        this.category = res.data.message[0].data.category
        this.adBanner = res.data.message[0].data.advertesPicture.PICTURE_ADDRESS
        this.bannerPicArray = res.data.message[0].data.slides
        this.recommendGoods = res.data.message[0].data.recommend
        this.floor1 = res.data.message[0].data.floor1 //楼层1数据
        this.floor2 = res.data.message[0].data.floor2              //楼层2数据
        this.floor3 = res.data.message[0].data.floor3              //楼层3数据
        this.floorName = res.data.message[0].data.floorName
        this.hotGoods= res.data.message[0].data.hotGoods
        // this.floor1_0 =this.floor1[0]
        // this.floor1_2 =this.floor1[2]
        // console.log(this.hotGoods)
          // console.log('xxxxx',res)


          //自定义toast组件使用
          // this.$dyToast({content: '网络错误',duration: 3000})
          // this.$dyToast.success({content: '网络错误',duration: 3000})
          // this.$dyToast.error({content: '网络错误',duration: 3000})


          
      } else {
        console.log(err)
      }

    },
    components: {
      // swiper,
      // swiperSlide,
      // swiperDfault,
      // swiperDemo1,
      // swiperDemo2,
      // swiperDemo3,
      // swiperDemo4,
      FloorComponent,
      goodInfoComponent
    },
    // filters:{
    //   moneyFilter(money){
    //    return toMoney(money)
    //   }
    // }
  }
</script>

<style scoped>
  .wrap{
    position: relative;
    height: 100%;
  }
  .wrapSwiper {
    height: 100%;
  }

  .wrapSwiperItem {
    height: auto;
  }

  .van-swipe {
    max-height: 15rem !important;
    /* height: 100% !important; */
  }

  .van-swipe img {
    max-height: 15rem !important;
  }

  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    width: 80%;
    padding-top: .2rem;
    padding-left: .3rem;
  }

  .swiper-area {
    clear: both;
    max-height: 15rem;
    overflow: hidden;
  }

  .type-bar {
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .type-bar div {
    padding: .3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
  }

  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;
  }

  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
  }

  .recommend-body {
    border-bottom: 1px solid #eee;
  }

  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }

  .hot-area {
    text-align: center;
    font-size: 14px;
  }

  .hot-goods {
    /* padding-bottom: 50px; */
    overflow: hidden;
    background-color: #fff;
  }
</style>