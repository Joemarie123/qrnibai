<template>
     <nav>
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" class="drawer"    color="#E9EEF4" dark app>

  <div class="text-center mt-5">
         <!--   <h1 class="teal--text text-lg-h5 font-weight-bold ">HR QR SYSTEM</h1> -->
           <v-divider color="white" class="mt-4"></v-divider>
            <v-avatar color="white" class="my-5 image" size="78" >
            <v-img src="/admin.png" ></v-img>
            </v-avatar>
            <h1 class="black--text">{{ userData.firstname }} {{ userData.lastname }}</h1>
            <h6 class="grey--text ">{{ userData.designation }}</h6>
            <v-btn class="mt-3"  rounded color="success" variant="outlined">ADMIN</v-btn>

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

      <v-list-group value="setting">
        <template v-slot:activator="{ props }">
          <v-list-item
          rounded="shaped"

            v-bind="props"
            prepend-icon="mdi-cog-outline"
            title="Settings"
          ></v-list-item>
        </template>


     <v-list-item
     v-for="(setting, i) in settings"
         rounded="shaped"
        :key="i"
        :value="setting"
        color="success"
        :to="setting.route"
          >
          <template v-slot:prepend>
            <v-icon size="20" class="ml-n6">{{ setting.icon }}</v-icon>
        </template>
      <!--   <v-icon>{{ child.icon }}</v-icon> -->
        <v-list-item-title   class="ml-3"  v-text="setting.text" ></v-list-item-title>
        </v-list-item>

      </v-list-group>

      <v-list-group  value="useraccount">
        <template v-slot:activator="{ props }">
          <v-list-item
          rounded="shaped"
            v-bind="props"
            prepend-icon="mdi-account-check"
            title="User Accounts"
          ></v-list-item>
        </template>


     <v-list-item
     v-for="(account, i) in accounts"
         rounded="shaped"
        :key="i"
        :value="account"
        color="success"
        :to="account.route"
          >
          <template v-slot:prepend>
            <v-icon size="20" class="ml-n6">{{ account.icon }}</v-icon>
        </template>
      <!--   <v-icon>{{ child.icon }}</v-icon> -->
        <v-list-item-title class="ml-3"  v-text="account.text" ></v-list-item-title>
        </v-list-item>

      </v-list-group>


    </v-list>

      </v-navigation-drawer>
      <v-app-bar   color="#F9FAFC"  class="cardVr" dark app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">HR QR ATTENDANCE</span>
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
        drawer: true,
        mini: false,
        fab: false,

        settings: [
        {  icon: 'mdi-account-multiple-outline', text: 'Office', route: '/OfficesTable' },
      ],

        accounts: [
        {  icon: 'mdi-file-outline'  , text: 'Account List', route: '/UserList' },

        ],

        items : [
                { icon: 'mdi-home', colorClass: 'icon-color' , text: 'HOME', route: '/HomeEvents' },
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
  },

    methods: {
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
.colorforbutton{
  background-color: rgba(4, 51, 40, 0.895)!important;
  color: aliceblue!important;
}
.image {
    border: 2px solid #4caf4f;
}
  .border {
    border-left: 4px solid #0ba518;
  }

  .icon-color {
  color: #FF0000;
  }


  </style>
