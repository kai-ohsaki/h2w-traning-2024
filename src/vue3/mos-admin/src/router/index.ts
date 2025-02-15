import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryListView from '../views/CategoryListView.vue'
import CategoryItemView from '../views/CategoryItemView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductItemView from '../views/ProductItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cetegory',
      name: 'category',
      component: CategoryListView
    },
    {
      path: '/cetegory/:id',
      name: 'category-item',
      component: CategoryItemView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductListView
    },
    {
      path: '/product/:id',
      name: 'product-item',
      component: ProductItemView
    },
  ]
})

export default router
