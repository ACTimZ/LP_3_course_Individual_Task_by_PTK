import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Services from '@/views/Services.vue'
import FreeGuide from '@/views/FreeGuide.vue'
import AboutMe from '@/views/AboutMe.vue'
import ExtraSalesPage from '@/views/ExtraSalesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/free-guide',
      name: 'free-guide',
      component: FreeGuide,
    },
    {
      path: '/about',
      name: 'about-me',
      component: AboutMe,
    },
    {
      path: '/extra-sales',
      name: 'extra-sales-page',
      component: ExtraSalesPage,
    }
  ],
})

export default router
