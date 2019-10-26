<template>
<!--  解决swiper的高度滑动不完的问题-->

  <div>
    <div class="content">
      <swiper class="swiper-content" :options="swiperOptions" ref="mySwiper">
        <swiper-slide class="slide-item" id="mySlide">
          目前，AirPods在国内的售价已经高达1000元以上，但是面对这样的价格，AirPods的销量依然不错。而早在AirPods刚上市的时候，销量便达到3000万件。根据苹果官方发布的具体数据显示，2018年苹果的AirPods出货量高达3500万件，已经占据全球无线蓝牙耳机市场75%的市场份额。
          虽然AirPods看似只是一个不起眼的小玩意儿，但是作为一个手机附属“配件”，AirPods的利润颇高。根据苹果官方的数据显示，苹果整体的利润达到24%，而AirPods的利润更是高达30%，如果按照目前AirPods 市场价149美元的售价计算的话，2018年一年3500万台蓝牙耳机的销量，以30%的利润计算，苹果公司2018年一年时间，便凭借蓝牙耳机净赚数百亿人民币。
          苹果公司从发布第一台AirPods至今已经有几年的时间，2019年4月AirPods 2也正式发布，而且在售价方面要比第一代高。但即便如此，仍有众多果粉争相购买，这也使得AirPods的出货量越来越高，甚至在2019年第一季度，根据市场调研机构发布的报告统计，AirPods的出货量已经占据全球一半以上的市场份额。
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: [],
  data () {
    return {
      swiperH:0,
      swiperOptions:{
        direction: 'vertical',
        slidesPerView: 'auto',
        height: this.swiperH,
        freeMode: true,
        mousewheel: true
      }
    };
  },

  created(){},
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    setTimeout(() => {
      let swiperH = document.getElementById('mySlide').clientHeight
      this.swiperH = swiperH
      console.log(this.swiper);
      this.swiper.update()
    }, 20)
  },

  methods: {},

  components: {
    swiper,
    swiperSlide
  }
}

</script>
<style lang='less'>
  .content{
    height: 200px;
    .swiper-container{
      height: 200px;
    }
    .swiper-wrapper{
      /*height: 200px;*/
      /*height: auto;*/
    }
    .slide-item{
      height: auto;
    }
  }


</style>
