<template>
    <div>
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
              Slide {{item}} 
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </template>
  
  <script>
  import 'swiper/dist/css/swiper.css' 
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        slide:[1,2,3,4,5],
        swiperOptions:{
          loop : true,
          direction : 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        }
      };
    },
  
    components: {swiper,swiperSlide},
  
    computed: {},
  
    created() {},
  
    mounted() {},
  
    methods: {}
  }
  </script>
  
  <style lang='less' scoped>
    .swiper-slide{
        /* height: 4rem;
        text-align: center;
        line-height: 4rem;
        border-bottom: 1px solid #ccc; */
        height: 4rem;
      text-align: center;
      line-height: 4rem;
    }
  .swiper{
    height: 6rem;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }
  </style>