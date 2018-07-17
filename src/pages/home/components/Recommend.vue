<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-list item-title">{{item.title}}</p>
          <p class="item-list item-desc">{{item.desc}}</p>
          <span class="item-more">查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommendList: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  @import '~styles/mixins.styl'

  .title
    margin-top .1rem
    height .8rem
    line-height .8rem
    text-indent .2rem
    font-size .32rem
    color $dartTextColor
    background $baseBgColor
  .item
    position relative
    overflow hidden
    padding .2rem 0
    border 0.001rem solid $baseBgColor
    .item-img
      float left
      overflow hidden
      margin 0 .2rem
      width 1.7rem
      height 1.7rem
      background #f0f5f8
    .item-info
      margin .1rem .1rem
      .item-list
        display block
        height 0.5rem
      .item-title
        font-size $titleFontSize
        color $dartTextColor
        ellipsis()
      .item-desc
        color $grayTextColor
        ellipsis()
      .item-more
        margin-top .2rem
        line-height .44rem
        background #ff9300
        color: #fff
        padding 0.1rem 0.2rem
        border-radius 0.06rem
</style>
