<template>
  <nav>
    <v-app-bar  class="cardVr" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">TAGUM CITY YOUTH INFORMATION SYSTEM</span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
      
        </template>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text @click="$router.push({ name: 'LogInForm' })">
        <span>LOG OUT</span>
        <!--  <v-icon right>exit_to_app</v-icon> -->
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
      :mini-variant.sync="mini"
    class="drawer"
     dark
      app
    >
    <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100">
                            <img src="/boss.jpg" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Boss Ken</p>
               </v-flex>
               <v-flex class="mt-5"> 
                   <!--  <v-avatar size="100">
                            <img src="/img1.png" alt="">
                    </v-avatar> -->
                    <h1 class="white--text subheading mt-1 text-center">ADMIN</h1>
               </v-flex>
               <v-flex class="mt-4 mb-4">
                <Popup/>
                <Popupnew/>
               </v-flex>
          </v-layout>
      <v-list shaped  class="clickable">
        <div v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
          >
           <!--  <template v-slot:activator>
              <v-list-item-content >
               
                  {{ item.text }}
              
              </v-list-item-content>
            </template> -->

            <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
    
            <v-list-item
            class="ml-n9"
              v-for="(child, i) in item.children"
              :key="i"
              route :to="child.route"
                active-class="orange--text"
                :value="child"

            >
            <!--   <v-list-item-content v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-content>


              <v-list-item-content class="ml-n11">
                
                  {{ child.text }}
             
              </v-list-item-content> -->

             <v-list-item-title v-if="child.icon">
              <template v-slot:prepend>
                <v-icon :icon="account.icon"></v-icon>
            </template>

      </v-list-item-title>

        <v-list-item-title v-text="child.text"></v-list-item-title>

            </v-list-item>
            
          </v-list-group>
          
          <v-list-item
        v-else="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        rounded="shaped"
        :to="item.route"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
        </div>  

      </v-list>

    </v-navigation-drawer>
 
</nav>


</template>

<script>

  export default {
    
    props: {
      source: String,
    },
 

    data: () => ({
    drawer: null,
      mini: false,
      fab: false,
      items: [
        { icon: 'mdi-home', text: 'Dashboard' , route:'/DashboardVersion4'},

        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          'icon-ctr': 'mdi-account-star',
          text: 'Admin Menu',
          model: false,
          children: [
        { icon: 'mdi-account-check', text: 'Add User Account' , route:'/AddUseraccount'},
        { icon: 'mdi-book-open-page-variant', text: 'Enumerators Record  ' , route:'/EnumeratorRecord'},
        { icon: 'mdi-book-open-variant', text: 'Registered Online  ' , route:'/RegisteredOnline'},

        ],
          
        },


        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          'icon-ctr': 'mdi-account-box',
          text: 'Youth Record',
          model: false,
          children: [
        { icon: 'mdi-tooltip-account', text: 'Search Record',   route:'/YouTherecord'  },
        { icon: 'mdi-account-multiple-plus', text: 'Add Record', route:'/RegisterNew' },
        
          ],
          
        },

        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          'icon-ctr': 'mdi-calendar-multiple',
          text: 'Events Menu',
          model: false,
          children: [
        { icon: 'mdi-calendar-plus', text: 'Create Events', route:'/DataTableEvents'},
        { icon: 'mdi-account-multiple-plus', text: 'Attendance', route:'/DatatableAttendance'},
        
          ],
          
        },

        { icon: 'mdi-speaker-wireless', text: 'Announcement' , route:'/AnnounCement'},
      ],
    }),
    

    methods: {
      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset || e.target.scrollTop || 0
        this.fab = top > 20
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    }

   
   
    
  }
</script>

<style scoped>
.border {
  border-left: 4px solid #0ba518;
}

.cardVr{
  background: rgba(8, 117, 23, 0.219);
  
  background: linear-gradient(90deg, rgba(4, 95, 50, 0.849) 0%, rgb(63, 99, 69) 70%, rgb(73, 112, 100) 100%);
} 


.drawer{
  background: rgba(8, 117, 23, 0.219);

background: linear-gradient(90deg, rgba(3, 99, 51, 0.932) 0%, rgb(21, 73, 30) 70%, rgb(31, 70, 56) 100%);
} 






</style>
