/*// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.*/
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Row,Col,Search, Swipe , SwipeItem,Lazyload,List ,Field,NavBar,Tab,Tabs,Toast,PullRefresh } from 'vant'
const errorImg =require('@/assets/images/errorimg.png')
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload,{error:errorImg}).use(List).use(Field).use(NavBar).use(Tab).use(Tabs)
.use(Toast).use(PullRefresh)
/*// List组件刚开始加载的时候回自己触发，不用人为调用它*/

/*注册全局价格过滤器*/
Vue.filter('moneyFilter',(money)=>money.toFixed(2))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
