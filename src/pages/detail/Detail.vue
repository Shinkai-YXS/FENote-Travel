<template>
	<div>
    <detail-banner/>
    <detail-header/>
    <detail-list :list="list"/>
    <div class="detail"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        list: [
          {
            id: 1,
            title: '成人票',
            children: [
              {
                id: 1,
                title: '哈哈哈',
                children: [
                  {
                    id: 1,
                    title: '嘻嘻嘻嘻'
                  }
                ]
              }
            ]
          },
          {id: 2,title: '学生票'},
          {id: 3,title: '儿童票'},
          {id: 4,title: '特惠票'}]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
