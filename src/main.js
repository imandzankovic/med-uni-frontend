import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import routes from './routes';
import NProgress from 'vue-nprogress'
import './assets/js/jquery.min.js'
import './assets/js/clean-blog.js'
import './assets/bootstrap/js/bootstrap.min.js'
//import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
// Vue.use(NProgress)
 
//const NProgress = new NProgress({ parent: '.nprogress-container' })
const router = new VueRouter({mode: 'history', routes});

// router.beforeResolve((to, from, next) => {
//     if (to.name) {
//         NProgress.start()
//     }
//     next()
//   });
  
  // router.afterEach(() => {
  //   NProgress.done()
  // });
 // <script src='nprogress.js'></script>
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');