<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
<NavBarUser/>

<v-main>
<div class="container123">
  <v-container >
  
  <!--   <v-btn @click="createevents = true" class="my-10" color="green" height="100">
      <v-icon size="90">mdi-calendar-plus</v-icon>
      <span class="mt-11">Create Events</span></v-btn
    > -->
    
  </v-container>

  <v-container>

    <v-row class="mt-n15 mt-md-1">
    <!--   <v-col class="d-flex justify-end ml-n3 " cols="12">
      <v-btn color="success"  rounded-lg variant="outlined" @click="createevents = true"> + Create Events</v-btn>
    </v-col>
 -->
      <v-col cols="12">
        <v-btn class="mt-3 ml-1"  rounded-lg color="success" variant="outlined">EVENT DETAILS</v-btn>
  </v-col>

  
  <v-col cols="12"  md="9" sm="7" class="mt-n4" >
   <v-card class="image rounded-lg">
    <v-container>
    <v-row>

        <v-col cols="12" md="6" sm="12">
    <v-col cols="12">
        <p style="font-size:15px"> <b>Event Name:</b> {{ Pangalan.Event_name }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Date of Event:</b> {{ Pangalan.Event_date }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Event Venue:</b> {{ Pangalan.Event_venue }} </p>
    </v-col>
</v-col>

<v-col cols="12" md="6" sm="12" class="mt-n9 mt-md-1">
    <v-col cols="12">
        <p style="font-size:15px"> <b>Office:</b> </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"> <b>Time From:</b> {{ Pangalan.Event_name }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Time To:</b> {{ Pangalan.Event_date }} </p>
    </v-col>
   
</v-col>

    </v-row>
</v-container>
   </v-card>
  </v-col>

 

  <v-col cols="12" md="3" sm="5" class="mt-n4 ml-md-n4 mt-md-n4" >
   <v-card class="image rounded-lg">
    <v-container>
    <v-row>
      <v-col class="d-flex justify-start" cols="12" >
         <!--  <div class="text--center  ">  -->
   <v-btn color="success" height="90" width="300">
   <p class="mx-5" style="font-size:20px">SCAN QR</p>
   <v-img
  :width="50"
  :height="70"
  cover
  src="/qr.png"
></v-img>
</v-btn>
    

      <!--  </div> -->
    </v-col>

    </v-row>

   <!--  <HtmlQrCodes/> -->
</v-container>
   </v-card>
  </v-col>

  
 <!--  <v-col class="mt-n4" cols="5">
    <input v-model="search" class="textbox"  placeholder="Search Event">
  </v-col> -->
  
      <v-col cols="12">

        <v-card class='rounded-lg mt-n4'>
        <v-data-table
        :search="search"
         item-key="ID"
         :items="filteredUsers"
       :headers="headers"
      
      :items-per-page="5"
       class="elevation-1"
  
  >
  <template v-slot:item.actions="{ item }">

  <button>
  <v-icon left color="success" class="white--text mx-2">mdi-eye</v-icon>
</button>

<button >
<v-icon color="primary" large>mdi-printer</v-icon>
</button>


</template>

</v-data-table>
</v-card>

      </v-col>
    </v-row>
  </v-container>
</div>
<!-- <h1 class="grey--text ">{{ userData.office_id }}</h1> -->
</v-main>
</v-layout>
</v-card>
</template>


<script>
import NavBarUser from "@/components/NavBarUser.vue";
import HtmlQrCodes from "@/views/HtmlQrCodes.vue";


import { mapActions, mapGetters } from 'vuex';



export default {

  components: {
    NavBarUser,
    HtmlQrCodes,
  },
  
data() {
  return {
    ID: "",
    Event_name:'',
    search: "",
    eventname:'',
      eventdate:'',
       eventfrom:'',
      eventto:'',
      eventvue:'',
      targetOfficeId: 1,
  
      userData: {
   
        targetOfficeId: '',
  
      },



    createevents:false,

    items: [
      { title: "My Account", icon: "mdi-account",  },
      { title: "Settings", icon: "mdi-clock" },
      { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
      // { title: "Click Me 2" },
    ],

    headers: [
    {
        align: "start",
        key: "Controlno",
        sortable: false,
        title: "ID",
    
      },
        { key: "fullname", title: "Full Name", sortable: false },
        { key: "designation", title: "Position", sortable: false },
        { key: "timescanned", title: "Time Scanned", sortable: false },
        { key: "remarks", title: "Remaks", sortable: false },
      
      ],

  };
},

 computed: {
    ...mapGetters('events', {Pangalan: ['getName']} ),
    ...mapGetters('users', {fetechEmployees: ['getUsers']} ),
    filteredUsers() {
      // Filter the users based on office_id
      return this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
    }
  }, 

created() {
    
    let data = new FormData;
    console.log("ID=",this.$route.params.id)
    console.log("EventName=",this.$route.params.Event_name)
    data.append('event_id', localStorage.getItem('ID'))
    data.append('Event_name', localStorage.getItem('Event_name'))
   /*  data.append('Event_name', localStorage.getItem('Event_name')) */
    this.fetchPangalan(data);

    this.fetchUsers();
    
  /*   return this.employees.filter(employee => employee.office_id === 1); */

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

...mapActions('events', ['fetchPangalan']), 

...mapActions('users', ['fetchUsers']), 

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

    // redirecttoHomeEventsViewList (item) {
    //   console.log("item=",item.id)
    // this.$router.push({ name: 'HomeEventsViewList', state: { id: item.id } })
    // },
    

    // redirecttoEventDetails (item) {
    //   console.log("item=",item.id)
    // this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    // },
  
},
};
</script>

<style scoped>
.image {
    border: 1px solid #0a7a0e;
}
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


.card {
  color: rgb(24, 23, 23);
  line-height: 25px;
  box-shadow: 5px 5px 10px #95b091;
}

.card.purple {
  background: linear-gradient(150deg, #f731db, #edebef 100%);
}

.card.green {
  background: linear-gradient(150deg, #eff2eedc, #f2f0f7 100%);
}




</style>