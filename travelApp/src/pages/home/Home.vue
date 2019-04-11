<template>
  <div>
    <home-header></home-header>
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
  import { mapState } from 'vuex'
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
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            vacationList:[]
          }
      },
      computed: {
        ...mapState(['city']) //获取store中city的值，作为ajax请求的参数
      },
      methods:{
          getHomeInfo (){
            axios.get('static/mock/index.json?city='+ this.city)
              .then(this.getHomeInfoSucc)
          },
        getHomeInfoSucc (res){
            res = res.data;
            if (res.ret && res.data) {
              const data = res.data;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.vacationList = data.vacationList;
            }
        }
      },
      mounted (){
          this.lastCity = this.city;
          this.getHomeInfo()
      },
      //当App.vue中使用keep-alive包裹router-view后，vue多了一个生命周期。由于设置了keepalive，在刷新或者页面跳转时，不会再重新发送请求，mouted里的内容不会再执行，而activated里的内容会被执行，当页面被重新显示时activated会执行
      activated () {
        if (this.lastCity !== this.city){
          this.lastCity = this.city;
          this.getHomeInfo();
        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
