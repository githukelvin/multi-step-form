import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component: HomePage,
      children:[
        {
          path:"/",
          name:"Personal Info",
          component: ()=>import("@/views/PersonalInfo.vue")
        }
      ]
    }
  ]
})

export default router
