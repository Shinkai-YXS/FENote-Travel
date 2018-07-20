<template>
	<div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
    <detail-header/>
    <detail-list :list="list"/>
    <div class="detail"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
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
    },
    activated () {
      this.getDetailInfo()
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json', {
          id: this.$route.params.id
        }).then(this.getDetailSucc).catch(function (e) {
          console.log(e)
        })
      },
      getDetailSucc (res) {
        res = res.data
        let data = res.data
        if (!(res.ret && data)) {
          return
        }
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }

    }
  }
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
