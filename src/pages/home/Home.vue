<template>
  <div>
    <home-hearder :city="city"/>
    <home-swiper :swiperList="swiperList"/>
    <home-icons :icons="icons"/>
    <home-recommend :recommendList="recommendList"/>
    <home-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
  import HomeHearder from './components/Hearder'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeHearder,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data () {
      return {
        city: '',
        swiperList: [],
        icons: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted () {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json').then(this.getHomeInfoSucc).catch(function (error) {
          console.log(error)
        })
      },
      getHomeInfoSucc (res) {
        res = res.data
        console.log(res)
        if (res.ret && res.data) {
          let data = res.data
          this.city = '快快'
          this.swiperList = data.swiperList
          this.icons = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    }
  }
</script>

<style scoped>

</style>
