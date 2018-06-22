<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arror-icon">&#xe64a;</span>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'HomeHearder'
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  .header
    display flex
    height .86rem
    line-height .86rem
    color #fff
    background $bgColor

    .header-left
      float left
      width .64rem
      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex 1
      margin-top .11rem
      margin-left .2rem
      padding-left .2rem
      line-height .64rem
      height .64rem
      border-radius .08rem
      color #cccccc
      background #fff

    .header-right
      float right
      width 1.24rem
      text-align center
      .arror-icon
        margin-left -.04rem
        font-size .24rem

</style>
