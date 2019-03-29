<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <!--此组件在这里监听city-alphabet里的handleLetterClick-->
    <city-alphabet :cities="cities" @change="handleLetterClick"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
    export default {
        name: 'City',
        components:{
          CityHeader,
          CitySearch,
          CityList,
          CityAlphabet
        },
        data() {
            return {
              cities:{},
              hotCities:[],
              letter:'',
            }
        },
      methods: {
          getCityInfo (){
            axios.get('@/static/mock/city.json')
              .then(this.handleGetCityInfoSucc);
          },
        handleGetCityInfoSucc(res) {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        },
        handleLetterClick(letter) {
            // 在此处接收到来自子组件的参数letter，并赋值给本组件里的letter ,再用props的方式传递给list组件
            this.letter = letter;
        }
      },
      mounted() {
          this.getCityInfo()
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>

</style>
