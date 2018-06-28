<template>
	<div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        </div>
        <div class="item-info">
          <p class="item-title">国色天乡·陆地乐园</p>
          <p class="item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend"
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
