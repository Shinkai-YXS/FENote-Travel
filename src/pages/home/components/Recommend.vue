<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        <div class="item-info">
          <p class="item-list item-title">国色天乡·陆地乐园</p>
          <p class="item-list item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
          <span class="item-more">查看更多></span>
        </div>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        <div class="item-info">
          <p class="item-list item-title">国色天乡·陆地乐园</p>
          <p class="item-list item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
          <span class="item-more">查看更多></span>
        </div>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        <div class="item-info">
          <p class="item-list item-title">国色天乡·陆地乐园</p>
          <p class="item-list item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
          <span class="item-more">查看更多></span>
        </div>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        <div class="item-info">
          <p class="item-list item-title">国色天乡·陆地乐园</p>
          <p class="item-list item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
          <span class="item-more">查看更多></span>
        </div>
      </li>
      <li class="item">
        <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg" />
        <div class="item-info">
          <p class="item-list item-title">国色天乡·陆地乐园</p>
          <p class="item-list item-desc">哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或</p>
          <span class="item-more">查看更多></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend"
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
      width 2rem
      height 2rem
      background #f0f5f8
    .item-info
      margin .1rem .1rem
      .item-list
        display block
        height 0.7rem
      .item-title
        font-size $titleFontSize
        color $dartTextColor
        ellipsis()
      .item-desc
        font-size $descFontSize
        color $grayTextColor
        ellipsis()
      .item-more
        background #ffA550
        color: #fff
        padding 0.1rem 0.2rem
        border-radius 0.05rem
</style>
