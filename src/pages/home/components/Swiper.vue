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
    props: {
      swiperList: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination', // 显示分页功能组件
          loop: true // 支持循环轮播
        }
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
    padding-bottom 31%
    background #eee
    .wapper-img
      width 100%


</style>
