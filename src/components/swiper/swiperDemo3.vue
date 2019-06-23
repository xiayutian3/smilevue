<template>
  <div>
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide">
        6月10日下午，滴滴出行CTO张博在一封邮件中宣布，公司产品高级副总裁俞军因家庭原因需搬离北京，近期将从滴滴离职。俞军离开后，未来仍将担任滴滴产品首席产品顾问及产品委员会荣誉主席，参与重大产品决策。
        张博在邮件中表达了对于俞军的不舍和肯定，并表示在过去三年里，俞军为滴滴产品岗位的价值定位、产品团队的体系化建设打下了坚实的基础。目前，滴滴产品序列团队已经从三年前的100多人发展至近600人。
        邮件中还宣布，张博将兼任产品部负责人；俞军担任产品委员会荣誉主席，参与重大产品决策，主持高阶产品晋级评审、共同制定产品序列发展规划；产品委员会实行轮值执行主席制度，每位轮值主席任期一年，2019-2020年度轮值主席由罗文担任。
        随后，俞军在个人朋友圈确认了这一消息。
        “感恩滴滴三年前的邀请，回到产品的世界，快乐而充实。喜欢这个曾经好战、如今谦逊、始终好学的团队，也庆幸遇到这么多有“产品心”的产品经理，有坚持有努力，有内在的温度和力量，让滴滴的产品体验持续进阶。出行事业不容易，但滴滴正直认真、历尽艰难，实实在在地改变了无数人的生活。很遗憾因为家庭原因不得不搬去其他城市，但更多是祝愿，愿大家终身学习，勤于思考和实践。后续我也会继续参与，没走远，期待跟大家共同成长。”
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          mousewheel: true
        }
      };
    },

    components: { swiper, swiperSlide },

    computed: {},

    created() { },

    mounted() { },

    methods: {}
  }
</script>

<style lang='less' scoped>
  .swiper {
    height: 300px;
    overflow: hidden;

  }

  .swiper-slide {
    box-sizing: border-box;
    padding: 10px;
    height: auto;
  }
</style>