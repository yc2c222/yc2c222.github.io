<!--home组件的子组件-->
<template>
  <div>
    <div class="title">Recommend</div>
    <ul>
      <!--border-bottom设置了1像素边框 styles-》border.css-->
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="item.id" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">Details</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props:{
          list: Array
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
采用Flex布局的元素，称为Flex容器。它的所有子元素自动成为容器成员，称为Flex项目
因需要固定li的宽高比，所以li内容超出尺寸的需要hidden
图片的尺寸会item-img的尺寸已经占满了item即li，所以li里的div会被hidden，故需要在li里设定
display为flex   flex容器下的子元素都会变为块级元素
object-fit: cover; 在图片width和height固定的情况下，使布片不变形
-->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top :.1rem
    line-height : .5rem
    background-color :#666666
    text-indent .3rem
  .item
    overflow :hidden
    display :flex
    height :1.9rem
    .item-img
      width :2.55rem
      height :1.7rem
      object-fit: cover;
      padding :.1rem
    .item-info
      flex: 1
      padding :.1rem
      min-width :0
      .item-title
        line-height .4rem
        font-size .4rem
        ellipsis()
      .item-desc
        overflow hidden
        height :0.5rem
        line-height :.3rem
        color #bbbbbb
        ellipsis()
      .item-button
        background :#4CAF50
        padding :0.03rem .1rem
        margin-left :3.3rem
        margin-top .2rem
        border-radius :.1rem
        color :white
</style>
