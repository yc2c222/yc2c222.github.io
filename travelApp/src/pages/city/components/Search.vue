<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="Type City">
    </div>
    <div class="search-content"
         v-show="keyword"
         ref="search">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :ket="item.id"
            @click="handleClityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
    export default {
        name: 'CitySearch',
        props: {
          cities:Object
        },
        data() {
            return {
              keyword:'',
              list:[],
              timer:null
            }
        },
      methods:{
        handleClityClick (city) {
          this.changeCity(city);
          //使用router里的编程式导航，跳转页面
          this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
      },
      computed: {
          hasNoData(){
            return !this.list.length
          }
      },
      watch: {
          keyword () {
            if (this.timer) {
              clearTimeout(this.timer)
            }
            if (!this.keyword) {
              this.list = [];
              return
            }
            this.timer = setTimeout(() => {
              const result = [];
              for (let i in this.cities){
                this.cities[i].forEach((value) => {
                  if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                    result.push(value)
                  }
                })
              }
              this.list = result;
            },100)
          }
      },
      mounted() {
          this.scroll = new Bscroll(this.$refs.search)
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .61rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      width: 100%
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .2rem
      color: #333333
  .search-content
    margin-top :.1rem
    z-index: 1
    overflow: hidden
    position :absolute
    top :1.58rem
    right :0
    left:0
    bottom:0
    background: #f4f4f4
    .search-item
      line-height :.62rem
      padding-left :.2rem
      background: #f4f4f4
      color:#666666
</style>
