// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  
  {
    path: '/QrCodes',
    name: 'QrCodes',
    component: () => import('@/views/QrCodes.vue')
  },

  {
    path: '/sample',
    name: 'sample',
    component: () => import('@/views/sample.vue')
  },


  
  {
    path: '/HtmlQrCodes',
    name: 'HtmlQrCodes',
    component: () => import('@/views/HtmlQrCodes.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
