import { createRouter, createWebHistory } from 'vue-router';

/* --- import pages ---- */
import Home from './views/Home.vue';
import Simulate from './views/Simulate.vue';
import WhatIs from './views/WhatIs.vue';

export default createRouter({
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/:league/:contest',
			component: Simulate,
		},
		{
			path: '/whatis',
			component: WhatIs,
		}
	],
	history: createWebHistory(),
});