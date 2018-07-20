<template>
	<div>
    <detail-banner/>
    <detail-header/>
    <div class="detail"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
