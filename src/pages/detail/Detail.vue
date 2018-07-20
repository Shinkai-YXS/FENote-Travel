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
        list: []
      }
    },
    activated () {
      this.getDetailInfo()
    },
    methods: {
      getDetailInfo () {
        axios.get('https://raw.githubusercontent.com/yuxiaoshuang1994/FENote-Travel/master/static/mock/detail.json', {
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
