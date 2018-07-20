<template>
  <div class="list" ref="wrapper">
    <div>
      <div>
        <div class="title border-topbottom"> 当前城市 </div>
        <ul class="list-wrapper">
          <li class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="title border-topbottom"> 热门城市 </div>
        <ul class="list-wrapper">
          <li class="button-wrapper" v-for="item of hot" :key="item.id" @click.stop="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </li>
        </ul>
      </div>

      <ul>
        <li v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom"> {{key}} </div>
          <ul class="item-list">
            <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click.stop="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "CityList",
    props: {
      cities: Object,
      hot: Array,
      letter: String
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    }
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

  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
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
      padding-right .6rem
      .item
        line-height .68rem
        font-size .28rem
        color #212121
        &:last-child
          &:before
            border none


</style>
