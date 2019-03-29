# travel
##第三方插件使用：
###surmon-china/vue-awesome-swiper  
####内容滑动
###ustbhuangyi/better-scroll
####滚动条
#####元素最外层需要添加包裹：
`<div class="list" ref="wrapper">`
#####还需创建scroll的实例：
`mounted() {
           this.scroll = new Bscroll(this.$refs.wrapper)
         }`


