import { createRouter, createWebHistory, type RouteRecordRaw, type Router } from 'vue-router'
import TrendingView from '../views/TrendingView.vue'
import SubscriptionsView from '../views/SubscriptionsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Trending',
    component: TrendingView
  },
  {
    path: '/subscriptions/:name',
    name: 'Subscriptions',
    component: SubscriptionsView
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
