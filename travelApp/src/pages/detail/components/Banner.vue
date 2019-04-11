<template>
	<div>
    <div class="banner" @click="handleBannerClick()">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!--common-gallary作为FadeAnimation中的slot部分被插入transition中 即在common-gallary外部加了一个动画效果-->
    <fade-animation>
      <common-gallary :imgs="bannerImgs"
                      v-show="showGallary"
                      @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/FadeAnimation'
    export default {
      name: 'Banner',
      props: {
        sightName: String,
        bannerImg:String,
        bannerImgs: Array
      },
      data () {
        return {
          showGallary:false,
        }
      },
        components: {
          CommonGallary,
          FadeAnimation
        },
      methods:{
        handleBannerClick () {
          this.showGallary = true;
        },
        handleGallaryClose () {
          this.showGallary = false;
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:63%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left:0
      right:0
      bottom:0
      line-height:.2rem
      color: #ffffff
      background-image:linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size:.35rem
        padding:.2rem
      .banner-number
        height:.32rem
        line-height:.3rem
        padding:.1rem .2rem
        border-radius:.2rem
        background:rgba(0,0,0,0.6)
        font-size:.30rem
        .banner-icon
          font-size:.3rem

</style>
