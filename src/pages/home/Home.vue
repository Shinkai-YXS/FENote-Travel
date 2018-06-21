<template>
  <div>
    <home-hearder/>
    <home-swiper/>
  </div>
</template>

<script>
  import HomeHearder from './components/Hearder'
  import HomeSwiper from './components/Swiper'

  export default {
    name: 'Home',
    components: {
      HomeHearder,
      HomeSwiper
    }
  }
</script>

<style scoped>

</style>
