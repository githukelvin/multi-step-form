import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      children: [
        {
          path: '/',
          name: 'info',
          component: () => import('@/views/PersonalInfo.vue')
        },
         {
          path: '/plan',
          name: 'plan',
          component: () => import('@/views/PersonalInfo.vue')
        }
        ,
         {
          path: '/add-ons',
          name: 'add-ons',
          component: () => import('@/views/PersonalInfo.vue')
        }
        ,
         {
          path: '/summary',
          name: 'summary',
          component: () => import('@/views/PersonalInfo.vue')
        }
      ]
    }
  ]
})

export default router
