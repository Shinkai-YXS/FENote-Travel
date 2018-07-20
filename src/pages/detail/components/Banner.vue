<template>
  <div>
    <div class="banner" @click="handelBannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont baaner-icon">&#xe692;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :images="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"/>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from '@/common/gallary/Gallary'
  import FadeAnimation from '@/common/fade/Fade'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary,
      FadeAnimation
    },
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handelBannerClick() {
        this.showGallary = true
      },
      handleGallaryClose() {
        this.showGallary = false
      }
    }
  }
</script>

<style scoped lang="stylus">

  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      bottom 0
      right 0
      line-height .6rem
      padding 0 .2rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .125rem
        padding 0 .32rem
        font-size .24rem
        border-radius .2rem
        background rgb(0, 0, 0, .8)
        .baaner-icon
          font-size .24rem
          margin-right .05rem

</style>
