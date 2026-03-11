import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetails },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHashHistory('/OnlineShopVue.js/'),
  routes,
})

export default router
