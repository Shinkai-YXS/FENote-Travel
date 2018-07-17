<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"/>
          </div>
          <p class="icon-name">{{icon.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      icons: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination' // 显示分页功能组件
        },
      }
    },
    computed: {
      pages () {
        const pages = []
        this.icons.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  @import '~styles/mixins.styl'

  .icons >>> .swiper-container
    padding-top .1rem
    height 3.7rem
  .icons >>> .swiper-pagination-bullet
    width .12rem
    height .12rem
  .icons >>> .swiper-pagination-bullet-active
    background $bgColor
  .icons >>> .swiper-pagination-bullets
    bottom .02rem

  .icon
    position relative
    float left
    padding-top .1rem
    overflow hidden
    height 1.6rem
    width 25%
    text-align center
    .icon-img
      display inline-block
      width 1.1rem
      height 1.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-name
      margin-top .1rem
      font-size $descFontSize
      color: $dartTextColor
      ellipsis()
</style>
