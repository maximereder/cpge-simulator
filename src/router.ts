import { createRouter, createWebHistory } from 'vue-router';

/* --- import pages ---- */
import Home from './views/Home.vue';
import Tsi from './views/Tsi.vue';
import WhatIs from './views/WhatIs.vue';

export default createRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/tsi',
			component: Tsi
		},
		{
			path: '/whatis',
			component: WhatIs
		}
	],
	history: createWebHistory(),
});
