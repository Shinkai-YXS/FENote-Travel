<template>
  <div>
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"/>
    <city-alphabet :cities="cities" @change="handleLetterChange"/>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo() {
        axios.get('/api/city.json').then(this.getCitySuccess).catch(function (error) {
          console.log(error)
        })
      },
      getCitySuccess (res) {
        res = res.data
        let data = res.data
        if (!(res.ret && data)) return
        this.cities = data.cities
        this.hotCities = data.hotCities
      },
      handleLetterChange (letter) {
        this.letter = letter
      }
    }
  }
</script>

<style scoped>

</style>
