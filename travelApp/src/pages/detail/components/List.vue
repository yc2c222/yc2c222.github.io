<template>
	<div>
    <div class="item"
         v-for="(item,index) of list"
         :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon iconfont">&#xe60a;</span>
        <span class="item-title-info">{{item.title}}</span>
      </div>
      <!--递归组件 组件自身调用自身-->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
	</div>
</template>

<script>
    export default {
        name: 'DetailList',
        props:{
          list:Array
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  .item-children >>> .item-title-icon{
    position: relative
    top:0rem
    display: inline-block
    color: #0082e6
    font-size: .5rem
  }
  .item-title {
  line-height :1rem
  font-size: .4rem
  padding:0 .2rem
  overflow hidden
}
.item-title-icon {
  position: relative
  top:.2rem
  display: inline-block
  color: #0082e6
  font-size: 1rem
}
  .item-title-info{
    position: relative
    top:-.1rem
  }
  .item-children{
    padding:0 .7rem
  }
</style>
