import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
// import './index.css';

// import '@/assets/tailwind.css';

import "./assets/css/tailwind.css";

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

const app = createApp(App);
app.use(router)
app.mount('#app')