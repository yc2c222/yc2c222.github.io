<!--Vue移动端事件 touchstart touchmove touchend-->
<template>
	<ul class="list">
    <li class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >{{item}}</li>
	</ul>
</template>

<script>
    export default {
      name: 'CityAlphabet',
      props: {
          cities:Object
      },
      computed: {
        letters(){
          const letters = [];
          for (let i in this.cities) {
            letters.push(i)
          }
          return letters
        }
      },
      data() {
        return {
          touchStatus:false,
          startY:0,
          timer:null,      //作为节流
          lastIndex:-1
        }
      },
      //当传入Alphabet的值发生变化时，Alphabet会重新渲染，渲染时会执行updated
      updated() {
        this.startY = this.$refs['A'][0].offsetTop;   //this.$refs['A']返回的是一个数组，只有数组的第一个元素才是DOM元素
        console.log(this.$refs['A'])
      },
      methods: {
        handleLetterClick(e) {
          // e.target指向所点击的元素console.log(e.target.innerText)获取到元素内的text，即{{key}}
          // 在此处触发事件change（change在其他地方，即父组件city里），并携带参数e.target.innerText
          this.$emit('change',e.target.innerText);
        },
        handleTouchStart() {
          this.touchStatus = true
        },
        handleTouchMove(e) {
          if (this.touchStatus) {
            if (this.timer) {
              clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
              const touchY = e.touches[0].clientY -83.5;
              const index= Math.floor((touchY - this.startY)/21);
              if (index >= 0 && index < this.letters.length){
                this.$emit('change',this.letters[index]);
                if (this.lastIndex >= 0 && index !== this.lastIndex) {
                  this.$refs[this.letters[this.lastIndex]][0].style.fontWeight = 'normal';
                  this.$refs[this.letters[this.lastIndex]][0].style.color = '#bbbbbb';
                  this.$refs[this.letters[index]][0].style.fontWeight = 'bold';
                  this.$refs[this.letters[index]][0].style.color = '#222222';
                }
                this.lastIndex = index;
              }
            },16);
            // const startY = this.$refs['A'][0].offsetTop;      //A顶部到scrollbar顶部的距离
            // const touchY = e.touches[0].clientY -83.5;        //手指的位置，clientY为字母底部到屏幕顶部的距离，83.5为减去上部分黑色区域的高度，
            // const index= Math.floor((touchY - this.startY)/21);    //21为字母的高度，用F12量出，通过计算字母在整个scrollbar中有效部分（字母占据的长度）的位置索引
            // if (index >= 0 && this.letters.length)
            // this.$emit('change',this.letters[index]);         //以当以好的通过点击字母跳转城市列表的方法，在city中
          }
        },
        handleTouchEnd() {
          this.touchStatus = false
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display:flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.68rem
    right: 0
    bottom:0
    width: .4rem
    .item
      line-height:.42rem
      text-align: center
      color: #bbbbbb
</style>
