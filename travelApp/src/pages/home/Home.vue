<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-vacation :list="vacationList"></home-vacation>
  </div>
</template>

<!--通过一次ajax请求获取到Home页面的所有信息和元素，所以ajax请求在Home.vue中进行使合理的，并在mounted中去执行，即页面挂载完成后去请求数据
axios 返回的是一个promise对象-->
<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeVacation from './components/Vacation'
  import axios from 'axios'
    export default {
        name: 'Home',
        components:{
          HomeHeader,
          HomeSwiper,
          HomeIcons,
          HomeRecommend,
          HomeVacation
        },
      data() {
          return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            vacationList:[]
          }
      },
      methods:{
          getHomeInfo (){
            axios.get('/api/index.json')
              .then(this.getHomeInfoSucc)
          },
        getHomeInfoSucc (res){
            res = res.data;
            if (res.ret && res.data) {
              const data = res.data;
              this.city = data.city;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.vacationList = data.vacationList;
            }
        }
      },
      mounted (){
          this.getHomeInfo()
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
