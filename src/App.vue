<template>
  <div id="app">
    <!-- keep-alive https://cn.vuejs.org/v2/api/#keep-alive-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
