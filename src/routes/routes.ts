import { createRouter, createWebHistory, type RouteRecordRaw, type Router } from 'vue-router'
import TrendingView from '../views/TrendingView.vue'
import SubscriptionsView from '../views/SubscriptionsView.vue'
import PlaylistsView from '../views/PlaylistsView.vue'
import NewsView from '../views/NewsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Trending',
    component: TrendingView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: SubscriptionsView
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: PlaylistsView
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
