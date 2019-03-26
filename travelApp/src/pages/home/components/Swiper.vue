<!--Home.vue的子组件-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="item.id"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data() {
            return {
              swiperOption:{
                pagination: '.swiper-pagination',
                loop:true
              },
              swiperList:[
                {id:'001',imgUrl:'@/../static/img/5.jpg'},
                {id:'002 ',imgUrl:'@/../static/img/11.jpg'},
                {id:'004 ',imgUrl:'@/../static/img/5.jpg'},
                {id:'005 ',imgUrl:'@/../static/img/4.jpg'}
              ]
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
.wrapper 的设置使宽高比例固定在56%
-->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .wrapper>>>.swiper-pagination-bullet-active
    background :$bgColor
  .wrapper
    overflow :hidden
    width :100%
    height :0
    padding-bottom :64%
    background :#f4f4f4
    .swiper-img
      width :100%

</style>
