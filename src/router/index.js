// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import OrderPage from '../components/OrderPage.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/orders',
//       component : OrderPage,
//     }
//   ]
// })


import { createMemoryHistory, createRouter } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import OrderPage from '../components/OrderPage.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/orders', component: OrderPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;