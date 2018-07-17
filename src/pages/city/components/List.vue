<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom"> 当前城市 </div>
      <ul class="list-wrapper">
        <li class="button-wrapper">
          <div class="button">北京</div>
        </li>
      </ul>
    </div>
    <div class="area">
      <div class="title border-topbottom"> 热门城市 </div>
      <ul class="list-wrapper">
        <li class="button-wrapper">
          <div class="button">北京</div>
        </li>
        <li class="button-wrapper">
          <div class="button">北京</div>
        </li>
        <li class="button-wrapper">
          <div class="button">北京</div>
        </li>
        <li class="button-wrapper">
          <div class="button">北京</div>
        </li>
      </ul>
    </div>

    <ul class="area">
      <li>
        <div class="title border-topbottom"> A </div>
        <ul class="item-list">
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
        </ul>
      </li>
      <li>
        <div class="title border-topbottom"> A </div>
        <ul class="item-list">
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
        </ul>
      </li>
      <li>
        <div class="title border-topbottom"> A </div>
        <ul class="item-list">
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
        </ul>
      </li>
      <li>
        <div class="title border-topbottom"> A </div>
        <ul class="item-list">
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
        </ul>
      </li>
      <li>
        <div class="title border-topbottom"> A </div>
        <ul class="item-list">
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
          <li class="item border-bottom">哈哈哈哈哈</li>
        </ul>
      </li>
    </ul>

    <!--<div class="area">-->
      <!--<div class="title border-topbottom"> A </div>-->
      <!--<ul class="item-list">-->
        <!--<li class="item border-bottom">哈哈哈哈哈</li>-->
        <!--<li class="item border-bottom">哈哈哈哈哈</li>-->
        <!--<li class="item border-bottom">哈哈哈哈哈</li>-->
        <!--<li class="item border-bottom">哈哈哈哈哈</li>-->
        <!--<li class="item border-bottom">哈哈哈哈哈</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "CityList"
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  .border-topbottom
    &:before
      border-color #dddddd
    &:after
      border-color #dddddd
  .border-bottom
    &:before
      border-color #dddddd
  .title
    background-color $baseBgColor
    font-size .24rem
    padding: .24rem .3rem

  .list-wrapper
    overflow hidden
    margin-right .6rem
    padding .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .15rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
        font-size .28rem
        color: #212121
        ellipsis()
  .item-list
    padding-left .2rem
    .item
      line-height .68rem
      font-size .28rem
      color #212121


</style>
