// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [


  {
    path: '/',
    name: 'QrCodes',
    component: () => import('@/views/QrCodes.vue')
  },

  {
    path: '/sample',
    name: 'sample',
    component: () => import('@/views/sample.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
