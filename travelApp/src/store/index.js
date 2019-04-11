import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
let defaultCity = '成都';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
}catch (e) {}

export default new Vuex.Store({
  state:{
    city:defaultCity
  },
  actions:{
    changeCity (ctx,city) {
      ctx.commit('changeCity',city);
    }
  },
  mutations: {
    changeCity (state,city) {
      state.city = city;
      //localStorage 的功能类似于cookie，但比cookie简单，在用户选择过后，刷新页面，仍留有用户的选择.但用户可能关闭存储功能或使用隐身模式时此方法可能会出错，最好用try catch 包裹
      try {
        localStorage.city = city;
      }catch (e) {}
    }
  },
  //getters 类似于计算属性，当一些数据需要计算、处理时使用getter
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

/*
 * 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
 */
