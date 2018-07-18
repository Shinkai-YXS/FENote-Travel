<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arror-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>


<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'HomeHearder',
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  .header
    display flex
    height $headerHeight
    line-height $headerHeight
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
      border-radius .06rem
      color $lightGrayTextColor
      background #fff

    .header-right
      float right
      min-width 1.04rem
      padding 0 .1rem
      text-align center
      color #fff
      .arror-icon
        margin-left -.04rem
        font-size .24rem

</style>
