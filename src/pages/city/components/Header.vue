<template>
	<div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  .header
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    font-size $titleFontSize
    color #fff
    background-color $bgColor

    .header-left
      float left
      width .64rem
      .back-icon
        text-align center
        font-size .4rem
        color #fff
</style>
