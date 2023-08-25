<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
<NavBar/>

<v-main>
<div class="mt-16 container123">
  <v-container >

  </v-container>

  <v-container>

    <v-row>
      <v-col class="d-flex justify-end ml-n3 " cols="12">
      <v-btn color="success" @click="CLickni_Events()"  rounded-lg variant="outlined"> + Create Account</v-btn>
    </v-col>

      <v-col cols="3">
    <h3 class="ml-8 mt-n2" :style="{ color: 'green' }">User Account List</h3>
  </v-col>

  <v-col class="ml-n16  mt-n4" cols="6">
    <input v-model="search" class="textbox"  placeholder="Search Employee">
 <!--   <v-text-field  density="compact"    append-inner-icon="mdi-magnify" variant="outlined"  label="Search Event"></v-text-field> -->
  </v-col>
  
      <v-col cols="12">

        <v-card class='rounded-lg mt-n4'>
          
        <v-data-table
        :search="search"
         item-key="id"
       :headers="headers"
       :items="accountlist"
      :items-per-page="5"
       class="elevation-1"
      
  
  >



  <template v-slot:item.actions="{ item }">

  <button>
  <v-icon left color="success"   @click="handleRowClick(item)" class="white--text mx-2">mdi-eye</v-icon>
</button>

<button >
<v-icon color="primary"  large >mdi-printer</v-icon>
</button>


</template>


</v-data-table>
</v-card>

      </v-col>
    </v-row>
  </v-container>
</div>
</v-main>
</v-layout>
</v-card>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from 'vuex';

export default {

  components: {
    NavBar,
  },

data() {
  return {
    rows: [],
    ID: "",
    search: "",
    eventname:'',
      eventdate:'',
       eventfrom:'',
      eventto:'',
      eventvue:'',
      

  

    items: [
      { title: "My Account", icon: "mdi-account",  },
      { title: "Settings", icon: "mdi-clock" },
      { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
      // { title: "Click Me 2" },
    ],

    headers: [
        {
          align: "start",
          key: "office_id",
          sortable: false,
          title: "Office ID",
         
         
        },
        { key: "lastname", title: "Last Name", sortable: false },
        { key: "firstname", title: "First Name", sortable: false },
        { key: "middlename", title: "Middle Name", sortable: false },
        { key: "status", title: "Status", sortable: false },
        { key: "designation", title: "Designation", sortable: false },
        { key: "username", title: "User Name", sortable: false },
    
      ],

  };
},

computed: {
    ...mapGetters("account", { accountlist: "getUsers" }),


  }, 


 created() {
    this.fetchAccountUsers();
  },


methods: {

    ...mapActions('account', ['fetchAccountUsers']),

    CLickni_Events()
    {
        this.$router.push('/CreateAccount'); 
    },

  editEvent(id) {
    // Handle edit event logic
    console.log("Edit Event:", id);
  },
  deleteEvent(id) {
    // Handle delete event logic
    console.log("Delete Event:", id);
  },

  navigateTo(path) {
        this.$router.push({ 'path': path });
      },

    redirecttoHomeEventsViewList (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'HomeEventsViewList', state: { id: item.id } })
    },
    

    redirecttoEventDetails (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    },
  

},

/* check() {
    console.log("this.users=", this.events);

  },
 */

};
</script>

<style scoped>
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}

.v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.10rem;
}
.container123 {
  max-width: 1170px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
}
.my-header-style {
  background: #666fff;
}
  .classfortitle{
  /*  color: #70b354; */
    font-size: 15px;
  }

  .classeventdetails{

    font-size: 20px;
  }

.head {
background-color: #70b354;
color: white;
}
.big-button {
padding: 20px;
font-size: 20px;
}

table {
width: 100%;
border-collapse: collapse;
}

th,
td {
padding: 3px;
border-bottom: 1px solid #ddd;
text-align: center;
}

th {
background-color: #f2f2f2;
}


.close-button {
  position: absolute;
  top: 5px;
  right: 14px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.textbox {
  padding: 10px;
  border: 1px solid #168904;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 500px;
  height: 40px;
}
</style>