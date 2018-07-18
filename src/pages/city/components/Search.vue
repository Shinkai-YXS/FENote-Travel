<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    watch: {
      keyword () {
        const result = []
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout( () => {
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
        }, 100)
        this.list = result
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/default.styl'
  .border-bottom
    &:before
      border-color #dddddd
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      width 100%
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color $baseBgColor
    z-index 1
    .search-item
      line-height .68rem
      font-size .28rem
      background-color #ffffff
      padding-left .2rem
      color #212121
      &:last-child
        &:before
          border none

</style>
