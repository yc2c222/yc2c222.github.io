<template>
	<div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
	</div>
</template>

<script>
    export default {
      name: 'CityHeader',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position :relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: $bgColor
    font-size:.32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      text-align: center
      font-size: 0.4rem
      color: #ffffff
</style>
