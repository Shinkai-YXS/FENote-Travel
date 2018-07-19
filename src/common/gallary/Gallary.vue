<template>
	<div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of images" :key="item.id">
          <img class="galary-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props: {
      images: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction', // 显示分页功能组件
          observeParents: true, // 将 observe 应用于 Swiper 的父元素，当 Swiper 的父元素变化时，自动自我刷新
          observer: true // Swiper 监听到父级元素发生了 dom 的变化，自动自我刷新
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background #000
    .wrapper
      /*display flex*/
      /*flex-direction column*/
      /*justify-content center*/
      /*z-index 99*/
      /*position fixed*/
      height 0
      width 100%
      padding-bottom 100%
      .galary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem

</style>
