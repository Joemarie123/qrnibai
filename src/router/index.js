// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },

  /*   {
      path: '/QrCodes',
      name: 'QrCodes',
      component: () => import('@/views/QrCodes.vue')
    },
  
    {
      path: '/sample',
      name: 'sample',
      component: () => import('@/views/sample.vue')
    },
  
  
     */

  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/HomeEvents',
    name: 'HomeEvents',
    component: () => import('@/views/HomeEvents.vue'),
  },
  {
    path: '/event-details',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails.vue')
  },
  {
    path: '/event-view',
    name: 'EventView',
    component: () => import('@/views/EventView.vue')
  },
  {
    path: '/OfficeHomeEvents',
    name: 'OfficeHomeEvents',
    component: () => import('@/views/OfficeHomeEvents.vue')
  },

  //Create / Edit Account
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: () => import('@/views/CreateAccount.vue')
  },
  {
    path: '/EditAccount',
    name: 'EditAccount',
    component: () => import('@/views/EditAccount.vue')
  },


  {
    path: '/EventHistory',
    name: 'EventHistory',
    component: () => import('@/views/EventHistory.vue')
  },
  {
    path: '/TestingForm',
    name: 'TestingForm',
    component: () => import('@/views/TestingForm.vue')
  },

  {
    path: '/HtmlQrCodes',
    name: 'HtmlQrCodes',
    component: () => import('@/views/HtmlQrCodes.vue')
  },

  {
    path: '/TryNewQRCodes',
    name: 'TryNewQRCodes',
    component: () => import('@/views/TryNewQRCodes.vue')
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
