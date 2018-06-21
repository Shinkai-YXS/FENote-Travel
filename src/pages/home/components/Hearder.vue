<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>


<script>
  export default {
    name: 'HomeHearder'
  }
</script>

<style scoped lang="stylus">
  .header
    display flex
    height .86rem
    line-height .86rem
    color #fff
    background #00bcd4

    .header-left
      float left
      width .64rem

    .header-input
      flex 1
      margin-top .11rem
      margin-left .2rem
      line-height .64rem
      height .64rem
      border-radius .1rem
      color #cccccc
      background #fff

    .header-right
      float right
      width 1.24rem
      text-align center

</style>
