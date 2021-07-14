import { createRouter, createWebHistory } from 'vue-router';

/* --- import pages ---- */
import Home from './views/Home.vue';
import Simulate from './views/Simulate.vue';
import WhatIs from './views/WhatIs.vue';

export default createRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			name: 'simulate',
			path: '/simulate/:league/:contest',
			component: Simulate,
			props: true
		},
		{
			path: '/whatis',
			component: WhatIs
		}
	],
	history: createWebHistory(),
});