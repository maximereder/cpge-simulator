import Vue from 'vue';

import router from './router';

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

import App from './App.vue';

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
