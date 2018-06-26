<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"/>
          </div>
          <p class="icon-name">{{icon.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data () {
      return {
        icons: [
          {
            id: '001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            name: '景点门票'
          },
          {
            id: '002',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            name: '水上乐园'
          },
          {
            id: '003',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            name: '必游榜单'
          },
          {
            id: '004',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
            name: '成都定制游'
          },
          {
            id: '005',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
            name: '情迷九寨'
          },
          {
            id: '006',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            name: '曹城七景'
          },
          {
            id: '007',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
            name: '成都周边'
          },
          {
            id: '008',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
            name: 'Q+精选'
          },
          {
            id: '009',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            name: '演出'
          },
          {
            id: '010',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            name: '全部完乐'
          }
        ],
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

  .icon
    position relative
    float left
    padding-top .1rem
    overflow hidden
    height 1.5rem
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
      font-size $titleFontSize
      color: $dartTextColor
      ellipsis()
</style>
