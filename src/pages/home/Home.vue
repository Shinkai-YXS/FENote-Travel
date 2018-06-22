<template>
  <div>
    <home-hearder/>
    <home-swiper/>
    <home-icons/>
  </div>
</template>

<script>
  import HomeHearder from './components/Hearder'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: 'Home',
    components: {
      HomeHearder,
      HomeSwiper,
      HomeIcons
    }
  }
</script>

<style scoped>

</style>
