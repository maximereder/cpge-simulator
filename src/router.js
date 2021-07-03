import Vue from 'vue';
import VueRouter from 'vue-router';

/* --- import pages ---- */
import Home from './views/Home.vue';
import Tsi from './views/Tsi.vue';
import WhatIs from './views/WhatIs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tsi',
    name: 'TSI',
    component: Tsi
  },
  {
    path: '/whatis',
    name: 'WhatIs',
    component: WhatIs
  }
];

const router = new VueRouter({
  routes
});

export default router;
