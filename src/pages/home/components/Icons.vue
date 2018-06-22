<template>
  <div class="icons">
    <div class="icon" v-for="icon of icons" :key="icon.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="icon.imgUrl" />
      </div>
      <p class="icon-name">{{icon.name}}</p>
    </div>
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
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '~styles/default.styl'
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      position relative
      float left
      overflow hidden
      height 0
      width 25%
      padding-bottom 25%
      text-align center
      .icon-img
        position absolute
        top 0
        right 0
        left 0
        bottom .44rem
        padding .1rem
        .icon-img-content
          height 100%
      .icon-name
        position absolute
        left 0
        right 0
        line-height .44rem
        height .44rem
        color: $dartTextColor
        bottom .1rem
</style>
