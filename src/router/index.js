import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: StartView
    },
    {
      path: '/on',
      name: 'On',
      component: StartView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: StartView
    },
  ]
})

export default router
