import { createRouter, createWebHistory } from 'vue-router'
import TrendingView from '../views/TrendingView.vue'
import SubscriptionsView from '../views/SubscriptionsView.vue'

const routes = [
  {
    path: '/',
    name: 'Trending',
    component: TrendingView
  },
  {
    path: '/subscriptions/:id',
    name: 'Subscriptions',
    component: SubscriptionsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
