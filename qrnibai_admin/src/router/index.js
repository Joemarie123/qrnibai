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
    path: '/NavBar',
    name: 'NavBar',
    component: () => import('@/components/NavBar.vue')
  },

  
  {
    path: '/DisplayEmployees',
    name: 'DisplayEmployees',
    component: () => import('@/views/DisplayEmployees.vue')
  },



  {
    path: '/EventHistory',
    name: 'EventHistory',
    component: () => import('@/views/EventHistory.vue')
  },

  {
    path: '/EventDetails',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails.vue')
  },


  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: () => import('@/views/CreateAccount.vue'),
 


  },

  
    //AppBar
    {
      path: '/OfficeBar',
      name: 'OfficeBar',
      component: () => import('@/components/toolbar/OfficeBar.vue')
    },
    {
      path: '/HrBar',
      name: 'HrBar',
      component: () => import('@/components/toolbar/HrBar.vue')
    },

  




  {
    path: '/EventView2/:id',
    name: 'EventView2',
    component: () => import('@/views/EventView2.vue')
  },


  {
    path: '/HomeEvents',
    name: 'HomeEvents',
    component: () => import('@/views/HomeEvents.vue')
  },

 
  {
    path: '/UserList',
    name: 'UserList',
    component: () => import('@/views/UserList.vue')
  },


  {
    path: '/TestingForm',
    name: 'TestingForm',
    component: () => import('@/views/TestingForm.vue')
  },



  {
    path: '/OfficesTable',
    name: 'OfficesTable',
    component: () => import('@/views/OfficesTable.vue')
  },
  
  
  {
    path: '/EventDetails',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
