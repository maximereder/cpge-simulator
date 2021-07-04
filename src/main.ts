import { createApp } from 'vue';

import router from './router';
import App from './App.vue';

import './style/reset.css';
import './style/index.scss';
import 'boxicons/css/boxicons.css';

createApp(App).use(router).mount('#app');
