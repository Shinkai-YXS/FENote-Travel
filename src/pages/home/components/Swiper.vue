<template>
  <div class="wapper">
    <swiper :options="swiperOption" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="wapper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination', // 显示分页功能组件
          loop: true // 支持循环轮播
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/e5/fc2bfc8bfcccd402.jpg_750x200_1218ab5f.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
          },
        ]
      }
    },
    methods: {
      callback () {

      }
    }
  }
</script>

<style scoped lang="stylus">

  /*更改 swiper 分页组件的选中颜色。 样式进行穿透，不受 scoped 限制*/
  .wapper >>> .swiper-pagination-bullet-active
    background #fff

  .wapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background #eee
    .wapper-img
      width 100%


</style>
