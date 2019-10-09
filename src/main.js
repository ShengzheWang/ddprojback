import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import routerConfig from './router/router.config';
import VueRouter from "vue-router";
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);




Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
