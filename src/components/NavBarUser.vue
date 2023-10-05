<template>
    <nav>
       <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" class="drawer"    color="#E9EEF4" dark app>
   
 <div class="text-center mt-5">
        <!--   <h1 class="teal--text text-lg-h5 font-weight-bold ">HR QR SYSTEM</h1> -->
          <v-divider color="white" class="mt-4"></v-divider>
           <v-avatar color="white" class="my-5 image" size="78" >
           <v-img src="/user.png" ></v-img>
           </v-avatar>
           <h1 class="black--text">{{ userData.firstname }} {{ userData.lastname }}</h1>
           <h6 class="grey--text ">{{ userData.designation }}</h6>
         <!--   <v-btn class="mt-3"  rounded color="success" variant="outlined">USER</v-btn> -->
        
       </div>
       <v-divider class="mx-10 mt-3" ></v-divider>
 <v-list class="mt-6">
     <v-list-subheader>REPORTS</v-list-subheader>
   
     <v-list-item
       v-for="(item, i) in items"
       :key="i"
       :value="item"
    
       rounded="shaped"
       :to="item.route"
     >
       <template v-slot:prepend>
         <v-icon  :icon="item.icon"></v-icon>
       </template>

       <v-list-item-title v-text="item.text"></v-list-item-title>
     </v-list-item>
   </v-list>
     </v-navigation-drawer>
     <v-app-bar   color="#F9FAFC"  class="cardVr" dark app>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title class="text-uppercase">
         <span class=" fontsizebai">HR QR ATTENDANCE</span>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu offset-y>
         <template v-slot:activator="{ on }">
       
         </template>
         <v-list flat>
           <v-list-item v-for="link in links" :key="link.text" :to="link.route" custom-active-class="border">
             <v-list-item-title>{{ link.text }}</v-list-item-title>
           </v-list-item>
         </v-list>
       </v-menu>
       <v-btn text  variant="outlined" color="success"   @click="$router.push('/').catch((err) => {})">
         <span>LOG OUT</span>
        
       </v-btn>
     </v-app-bar>
     
   </nav>
 </template>
 
 <script>
 export default {
   props: {
     source: String,
   },
 
   data() {
     return {
     userData: {
       designation: '',
       firstname: '',
       lastname: '',
     },

       borderColor: 'green',
       drawer: window.innerWidth > 600, // Adjust the breakpoint as needed
       mini: false,
       fab: false,

     /*   settings: [
       {  icon: 'mdi-account-multiple-outline', text: 'Office', route: '/OfficesTable' }, 
     ],

       accounts: [
       {  icon: 'mdi-file-outline'  , text: 'Account List', route: '/UserList' },

       ],
 */
       items : [
               { icon: 'mdi-home', colorClass: 'icon-color' , text: 'HOME', route: '/OfficeHomeEvents' },
               { icon: 'mdi-account-group', colorClass: 'icon-color' , text: 'Employees Mngmt', route: '/EmployeeManagement' },
               { icon: 'mdi-cog-outline', colorClass: 'icon-color' , text: 'User Settings', route: '/UserSettings' },
               { icon: 'mdi-account-check', colorClass: 'icon-color' , text: 'Event History', route: '/EventHistory' },
              /*  { icon: 'mdi-account-star', text: 'Settings', route: '/Settings' },
               { icon: 'mdi-account-check', text: 'Create Account', route: '/CreateAccount' },
               { icon: 'mdi-monitor', text: 'Offices', route: '/OfficesTable' }, */
           
            /*    {
                      icon: 'mdi-chevron-up',
                      'icon-alt': 'mdi-chevron-down',
                      'icon-ctr': 'mdi-account-star',
                      text: 'Admin Menu',
                      model: false,
                      children: [
                        { icon: 'mdi-account-check', text: 'Add User Account', route: '/AddUseraccount' },
                        { icon: 'mdi-book-open-page-variant', text: 'Enumerators Record', route: '/EnumeratorRecord' },
                        { icon: 'mdi-book-open-variant', text: 'Registered Online', route: '/RegisteredOnline' },
                      ],
                    }, */
           
               /*      {
                      icon: 'mdi-chevron-up',
                      'icon-alt': 'mdi-chevron-down',
                      'icon-ctr': 'mdi-account-star',
                      text: 'Admin Menu',
                      model: false,
                      children: [
                        { icon: 'mdi-account-check', text: 'Add User Account', route: '/AddUseraccount' },
                        { icon: 'mdi-book-open-page-variant', text: 'Enumerators Record', route: '/EnumeratorRecord' },
                        { icon: 'mdi-book-open-variant', text: 'Registered Online', route: '/RegisteredOnline' },
                      ],
                    },
                    {
                      icon: 'mdi-chevron-up',
                      'icon-alt': 'mdi-chevron-down',
                      'icon-ctr': 'mdi-account-box',
                      text: 'Youth Record',
                      model: false,
                      children: [
                        { icon: 'mdi-tooltip-account', text: 'Search Record', route: '/YouTherecord' },
                        { icon: 'mdi-account-multiple-plus', text: 'Add Record', route: '/RegisterNew' },
                      ],
                    },
                    {
                      icon: 'mdi-chevron-up',
                      'icon-alt': 'mdi-chevron-down',
                      'icon-ctr': 'mdi-calendar-multiple',
                      text: 'Events Menu',
                      model: false,
                      children: [
                        { icon: 'mdi-calendar-plus', text: 'Create Events', route: '/DataTableEvents' },
                        { icon: 'mdi-account-multiple-plus', text: 'Attendance', route: '/DatatableAttendance' },
                      ],
                    }, */

           ],
     };
   },
 
   mounted() {
   this.fetchData();
   window.addEventListener('resize', this.handleResize);
 },

 beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },

   methods: {

    handleResize() {
      // Update the 'drawer' property based on the window width
      this.drawer = window.innerWidth > 768; // Adjust the breakpoint as needed
    },

     fetchData() {
     const userDataJSON = localStorage.getItem('user');
     if (userDataJSON) {
       this.userData = JSON.parse(userDataJSON);
     }
   },


     onScroll(e) {
       if (typeof window === 'undefined') return;
       const top = window.pageYOffset || e.target.scrollTop || 0;
       this.fab = top > 20;
     },
     toTop() {
       this.$vuetify.goTo(0);
     },
   },
 };
 </script>
 
 <style scoped>

@media screen and (max-width: 600px) {
    .fontsizebai{
        font-size: 9px;
        font-weight: bold;
    }
}

.image {
   border: 2px solid #4caf4f00;
}
 .border {
   border-left: 4px solid #0ba518;
 }
 
 .icon-color {
 color: #FF0000;
 }


 </style>
 