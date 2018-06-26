<template>
  <div>
    <home-hearder/>
    <home-swiper/>
    <home-icons/>
    <home-recommend/>
  </div>
</template>

<script>
  import HomeHearder from './components/Hearder'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'

  export default {
    name: 'Home',
    components: {
      HomeHearder,
      HomeSwiper,
      HomeIcons,
      HomeRecommend
    }
  }
</script>

<style scoped>

</style>
