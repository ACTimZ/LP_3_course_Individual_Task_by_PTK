import { createRouter, createWebHistory } from 'vue-router'
// import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: "asd",
    },
  ],
})

export default router
