<template>
	<div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    props: {
      weekendList: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  @import '~styles/mixins.styl'

  .title
    height .8rem
    line-height .8rem
    text-indent .2rem
    font-size .32rem
    color $dartTextColor
    background $baseBgColor
  .item
    position relative
    overflow hidden
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 37.4375%
      .item-img
        position relative
        width 100%
    .item-info
      padding .14rem .2rem .2rem .2rem
    .item-title
      font-size .28rem
      padding-right 1.4rem
      color $dartTextColor
      ellipsis()
    .item-desc
      padding-top .2rem
      font-size .24rem
      padding-right 1.4rem
      color $darkgrayTextColor
      ellipsis()

</style>
