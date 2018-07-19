<template>
	<div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" />
    <div class="banner-info">
      <div class="banner-title">打脸圣亚海洋世界(AAAA景区)</div>
      <div class="banner-number"><span class="iconfont baaner-icon">&#xe692;</span>39</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBanner"
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
