<!--Home.vue的子组件-->
<template>
  <div class="wrapper">
    <!--axios在get到数据前，swiper会用空数组做轮询幻灯片所以先通过computed确定list不为空再显示-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
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
      props:{
          list:Array
      },
        data() {
            return {
              swiperOption:{
                pagination: '.swiper-pagination',
                loop:true
              }
            }
        },
        computed: {
          showSwiper() {
            return this.list.length;
          }
        }
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
