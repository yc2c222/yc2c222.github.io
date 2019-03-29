<!--Home.vue的子组件-->
<template>
	<div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      input city or sight
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
	</div>
</template>

<script>

    export default {
        name: 'HomeHeader',
        data() {
            return {}
        },
        props: {
          city: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--在style里引入另一个css文件需要使用@import 字符前还要加~-->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display:flex
    line-height: $headerHeight
    background: $bgColor
    color: #f4f4f4
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align center
        font-size 0.4rem
  .header-input
      flex:1
      height:.64rem
      line-height: .64rem
      margin-top .12rem
      margin-left : .2rem
      padding-left .2rem
      background :#ffffff
      border-radius .15rem
      color :#cccccc
  .header-right
      width 1.8rem
      float right
      text-align center
      color: white
      .arrow-icon
        font-size .3rem


</style>
