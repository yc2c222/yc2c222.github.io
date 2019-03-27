<!--home组件的子组件-->
<template>
  <div>
    <div class="title">Vacation</div>
    <ul>
      <!--border-bottom设置了1像素边框 styles-》border.css-->
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="item.id" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeVacation',
    props:{
      list: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
.item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :55%
  .item-img
    width 100%  通过height：0、width和padding-bottom控制宽高比
-->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height : .5rem
    background-color :#999999
    text-indent .3rem
  .item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :55%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .4rem
      font-size .4rem
      ellipsis()
    .item-desc
      line-height :.3rem
      color #bbbbbb
      ellipsis()
</style>
