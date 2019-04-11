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
        <!--main.js里注册了使用了store，所以在这里可以使用this.$store调用index.js-->
        <!--{{this.$store.state.city}}  通过import和city映射到计算属性city后直接使用this.city-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
	</div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'
    export default {
      name: 'HomeHeader',
      computed: {
        //通过import引入以后，把city这个共用数据映射到一个名为city的计算属性中
        ...mapState(['city']),
          ...mapGetters(['doubleCity'])
      },
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
      margin-right : .15rem
      padding-left .2rem
      background :#ffffff
      border-radius .15rem
      color :#cccccc
  .header-right
      min-width 1.2rem
      float right
      text-align center
      color: white
      .arrow-icon
        font-size .3rem


</style>
