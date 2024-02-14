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

/*
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
    path: '/EmployeeManagement',
    name: 'EmployeeManagement',
    component: () => import('@/views/EmployeeManagement.vue')
  },

  {
    path: '/NavBar',
    name: 'NavBar',
    component: () => import('@/components/NavBar.vue')
  },

  {
    path: '/NavBarUser',
    name: 'NavBarUser',
    component: () => import('@/components/NavBarUser.vue')
  },


  {
    path: '/TestingNavbar',
    name: 'TestingNavbar',
    component: () => import('@/components/TestingNavbar.vue')
  },

  {
    path: '/OfficeHomeEvents',
    name: 'OfficeHomeEvents',
    component: () => import('@/views/OfficeHomeEvents.vue'),
    meta: { requiresAuth: true }, // Add meta field for authentication check
  },

  {
    path: '/EventDetails',
    name: 'EventDetails',
    component: () => import('@/views/EventDetails.vue')
  },

  {
    path: '/QrCodesNi',
    name: 'QrCodesNi',
    component: () => import('@/components/QrCodesNi.vue')
  },






  {
    path: '/EventHistory',
    name: 'EventHistory',
    component: () => import('@/views/EventHistory.vue')
  },



  {
    path: '/QRCodesUser',
    name: 'QRCodesUser',
    component: () => import('@/views/QRCodesUser.vue')
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
    path: '/HomeEventsViewList',
    name: 'HomeEventsViewList',
    component: () => import('@/views/HomeEventsViewList.vue')
  },


  {
    path: '/UserSettings',
    name: 'UserSettings',
    component: () => import('@/views/UserSettings.vue')
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
  history: createWebHistory('Guest/arms/'),

  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem('user') !== null;

  // If the user is not authenticated and is trying to access a protected route, redirect to login
  if (!isAuthenticated && to.path !== '/' ) {
    next('/');
  } else {
    next();
  }
});
export default router
