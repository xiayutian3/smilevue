<template>
  <!-- <Inner-slide/>是每项swiper的内容  解决水平滑动，滑动不完，还有剩余 的问题 -->

<!--   移动端    因为这个swiper不是沾满屏幕的整个宽度的。嵌入中间的（4.5rem）  布局类似  flex：2   4.5rem   flex：1-->

  <div id="mySwiper">
    <swiper :options="swiperOption" class="sp-swiper" ref="mySwiper">
      <swiper-slide class="test-slide" >
        <Inner-slide :titles="titileArr"></Inner-slide>
      </swiper-slide>
      <swiper-slide class="test-slide">
        <Inner-slide :titles="titileArr2"></Inner-slide>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'swiper-data',
    data () {
      return {
        swiperWw: 69,
        swiperOption: {
          width: this.swiperWw,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination'
          },
          on: {
            resize: function () {
              this.params.width = this.swiperWw
              this.update()
            }
          }
        },
        titileArr: [
          { name: '哈哈啊' },
          { name: '哈哈啊' },
          { name: '哈哈啊' }
        ],
        titileArr2: [
          { name: '哈哈啊' },
          { name: '哈哈啊' },
          { name: '哈哈啊' }
        ]
      }
    },
    created () {

    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      setTimeout(() => {
        let swiperWw = document.getElementById('mySwiper').clientWidth
        this.swiperWw = swiperWw
        this.swiper.update()
      }, 20)
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="less">
  /* @import url(); 引入css类 */
  #mySwiper{
    width:4.3rem;
    display: flex;
    width: 100%;
    height: 100%;
    .swiper-container{
      flex: 1;
      width: 100%;
      height: 100%;
    }
    .sp-swiper{
      // flex: 1;
      // display: flex;
      width: 100%;
      // height: 100%;
      .swiper-slide{
        width: 100% !important;
        height: auto;
      }
      .swiper-pagination-bullets{
        bottom: 0;
      }
      .swiper-wrapper{
        width: 100%;
      }
    }

  }
</style>
