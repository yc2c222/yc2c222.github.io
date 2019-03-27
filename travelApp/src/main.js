// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端设备、浏览器有点击延迟300ms事件，解决方案
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
/*Css文件全局都要使用，现在main.js里引入，再到组件里引用即可
build webpack.base.conf.js 里为路径添加别名*/
//Css Reset
import 'styles/reset.css'
//1像素边框解决方案
import 'styles/border.css'
//使用 iconfont
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
