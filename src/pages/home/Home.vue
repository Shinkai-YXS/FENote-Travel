<template>
  <div>
    <home-hearder/>
    <home-swiper/>
    <home-icons/>
    <home-recommend/>
    <home-weekend/>
  </div>
</template>

<script>
  import HomeHearder from './components/Hearder'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'

  export default {
    name: 'Home',
    components: {
      HomeHearder,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>

<style scoped>

</style>
