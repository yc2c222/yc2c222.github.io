<template>
  <div id="app">
    <!--keep-alive标签是vue自带标签，其中的内容请求过后会保存在用户的内存中，不用重复获取
    本项目中所有的组件都被keep-alive包裹，也就是对所有请求过的内容缓存，当重新进入组件/页面时不再重复请求，
    也即mounted钩子里的函数不再执行，对于detail.vue页面，在home.vue点击不同的recommend，都会添加上?id=000x进行页面跳转，
    到detail后，其中的mounted会根据这个id进行相应的的数据请求以渲染detail.vue，
    但如001请求过后有所缓存，点击002的recommend时因为keepalive不再请求新的ajax，导致不管哪个recommend，点击进去后显示的内容都一样
    所以在keep-alive下新增exclude属性，使得每次进入detail.vue时都会进行新的ajax请求
    也可以使用activated解决这个问题
    -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
