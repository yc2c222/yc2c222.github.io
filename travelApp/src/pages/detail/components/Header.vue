<template>
	<div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      site details
    </div>
	</div>
</template>

<script>
    export default {
      name: 'DetailHeader',
      data() {
          return {
            showAbs:true,
            opacityStyle:{
              opacity:0
            }
          }
      },
      methods: {
        handleScroll () {
         const top = document.documentElement.scrollTop;
         if (top > 60){
           let opacity = top /140;
           opacity = opacity > 1 ? 1 : opacity;
           this.opacityStyle = {opacity};
           this.showAbs = false;
         }else {
           this.showAbs = true;
         }
        }
      },
      activated () {
        window.addEventListener('scroll',this.handleScroll);
      },
      /*window是一个全局对象，对window监听的绑定在任何页面上都会被执行，而不仅是Header.vue页面，由于keepalive，还多处了另一个生命周期函数，
      deactivated，离开页面或隐藏页面时会执行其中的函数。此处只要在deactivated里解绑对window里scroll的监听，离开当前页面后不会再监听*/
      deactivated () {
        window.removeEventListener('scroll',this.handleScroll);
      }
    }
</script>

<!-- Add "scoped" attrba'c'kibute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position:absolute
    left: .1rem
    top: .1rem
    width:.8rem
    height:.8rem
    border-radius :.4rem
    background: rgba(0,0,0,.6)
    text-align :center
    .header-abs-back
      color: #fff
      font-size :.4rem
      line-height :.8rem
  .header-fixed
    z-index :98
    position :fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #ffffff
    background: #333333
    font-size:.32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      text-align: center
      font-size: 0.4rem
      color: #ffffff
</style>
