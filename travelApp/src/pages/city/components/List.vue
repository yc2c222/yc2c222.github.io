<!--此组件与Alphabet相互传值，即兄弟组件传值，非父子组件，不能直接用props
Alphabet组件先通过$emit的方式触发一个事件，父组件city通过监听执行这个事件，随后获得参数，父组件获得参数以后，以常规父子组件的通信方式props：使其子组件List获得参数
-->
<template>
	<div class="list" ref="wrapper">
    <div>
      <div class="area ">
        <div class="title border-topbottom">Current City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">成都</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">Hot City</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--用v-for作循环时，（item，key），而不是用index-->
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
          hotCities:Array,
          cities:Object,
          letter:String
        },
        mounted() {
          this.scroll = new Bscroll(this.$refs.wrapper)
        },
        // 从父组件接收到来自Alphabet的参数Letter后，通过watch监听letter，只要letter变化，就会触发其后的方法
        watch: {
          letter() {
            if (this.letter) {
              // 通过$this.refs[this.letter]获取到响应ref=key的一个div class=area的元素
              const element = this.$refs[this.letter][0];
              //betterScroll提供的接口，参数为一个DOM元素，滚动到指定的元素位置
              this.scroll.scrollToElement(element);
            }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc
  .list
    margin-top :.1rem
    overflow: hidden
    position:absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float: left
        width: 33.33333%
        .button
          margin: .1rem
          padding .1rem 0
          text-align: center
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .7rem
        color: #666666
        padding-left: .2rem
</style>
