<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
<NavBar/>

<v-main>
<div class="mt-16 container123">
  <v-container >
  
  <!--   <v-btn @click="createevents = true" class="my-10" color="green" height="100">
      <v-icon size="90">mdi-calendar-plus</v-icon>
      <span class="mt-11">Create Events</span></v-btn
    > -->
      <v-dialog persistent v-model="createevents"  max-width="600px">
        <v-card color="#F9FAFC" class='rounded-lg'>
     
            <v-container>
          <v-row>

           <button @click="createevents = false" class="close-button "><strong>X</strong></button>                 
          <v-col cols="12"  sm="12" md="12" class="my-5 ml-7 mt-2" >
          <p class="classeventdetails" :style="{ color: '#70b354' }"><strong>Event Details</strong></p>

</v-col>

<v-col  cols="10" sm="10" md="10"
    class="ml-10 mt-n5">
   
      <v-row>
    <v-col cols="12"  sm="3" md="3" class="ml-n8 mt-md-n2 ml-md-n4 mt-sm-n2 ml-sm-n4">
  <p class="classfortitle ml-5">Date:</p>
  </v-col>

  <v-col cols="12" sm="9" md="9" class="mt-n3 mt-md-n0 mt-sm-n0" > 
   <v-text-field height="10" variant="outlined"  density="compact" type="date" v-model="eventdate" ></v-text-field>
  </v-col>
</v-row>

   </v-col>

   <v-col  cols="10" sm="10" md="10"   class="ml-10 mt-n8"
>
<v-row>

    <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4" >
  <p class="classfortitle ml-5">Activity:</p>
  </v-col>

  <v-col cols="12" md="9" sm="9" class="mt-n4 mt-md-1 mt-sm-1">
   <v-text-field height="10" variant="outlined" density="compact" v-model="eventname"  label="Event Name"></v-text-field>
  </v-col>
</v-row>


   </v-col>


   <v-col  cols="10" sm="10" md="10" class="ml-10 mt-n8"
>
<v-row>

<v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">Venue:</p>
</v-col>

<v-col cols="12" md="9" sm="9" class="mt-n4 mt-md-1 mt-sm-1">
<v-text-field height="10" variant="outlined" density="compact" v-model="eventvue" label="Venue"></v-text-field>
</v-col>
</v-row>
   </v-col>

  <v-row  class="ml-10 mt-n7">

    <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n2 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4 ">
<p class="classfortitle ml-5">Time:</p>
</v-col>

   <v-col cols="11"  sm="4" md="4"  class="mt-n3 mt-md-1 ml-md-n4 mt-sm-1 ml-sm-n4"
   >
   <v-text-field height="10"    variant="outlined" v-model="eventfrom"  density="compact" type="time"  label="Time Started"></v-text-field>
   </v-col>

   <v-col cols="11" sm="4" md="4"  class="mt-n6 mt-md-1 ml-md-n2 mt-sm-1 ml-md-n2" >
    <v-text-field height="10"  v-model="eventto"    variant="outlined" density="compact" type="time"  label="Time Ended"></v-text-field>
   </v-col>
  </v-row>


</v-row>  

<v-row>

<v-col cols="12" sm="12" md="11" class="d-flex justify-end my-5 mt-n4 ml-n5 ">

    <v-btn color="green" class="pa-2 ml-5 mt-n1"
        outlined dark
        @click="register()">
      Submit
    </v-btn>

   
</v-col>

</v-row>
</v-container>                                                  
</v-card>    
      </v-dialog>

  </v-container>

  <v-container>

    <v-row>
      <v-col class="d-flex justify-end ml-n3 " cols="12">
      <v-btn color="success"  rounded-lg variant="outlined" @click="createevents = true"> + Create Events</v-btn>
    </v-col>

      <v-col cols="2">
    <h3 class="ml-8 mt-n2" :style="{ color: 'green' }">EVENTS LIST</h3>
  </v-col>

  <v-col class="mt-n4" cols="6">
    <input v-model="search" class="textbox"  placeholder="Search Event">
 <!--   <v-text-field  density="compact"    append-inner-icon="mdi-magnify" variant="outlined"  label="Search Event"></v-text-field> -->
  </v-col>
  
      <v-col cols="12">

        <v-card class='rounded-lg mt-n4'>
          
        <v-data-table
        :search="search"
         item-key="ID"
       :headers="headers"
       :items="events"
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
    /*   user: {
        firstName: '',
      
      }, */
  
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
          key: "ID",
          sortable: false,
          title: "ID",
         
         
        },
        { key: "Event_name", title: "Event Name", sortable: false },
        { key: "Event_date", title: "Event Dates", sortable: false },
        { key: "Event_from", title: "Event From", sortable: false },
        { key: "Event_to", title: "Event To", sortable: false },
        { key: "Event_venue", title: "Event Venue", sortable: false },
        { key: "AttendanceCount", title: "Attendance", sortable: false },
        { key: "actions", title: "Actions" , align:"center" },
    
      ],

  };
},


/* computed: {
    ...mapGetters('events', {events: 'getEvents'
    }),
  },
 */
  computed: {
    ...mapGetters("events", { events: "getEvents" }),


  },


  created() {
    this.fetchEvents();
  },


methods: {

  ...mapActions('events', ['registerEvents']),
  ...mapActions('events', ['fetchEvents']),


  handleRowClick(item) {
      // console.log("users=", item);
      console.log("users=", item.columns.ID);
    //   console.log("EventName", row.item.raw.Event_name);
    //   localStorage.setItem('ID',row.item.raw.ID);
     /*  this.$router.push({ name: "EventView2",  params: { id: item.columns.ID }}) */

      this.$router.push({ name: "EventView2", params: { id: item.columns.ID }});
    },
  



  register() {
      console.log("registerEvents");

      let data = new FormData();
      data.append('event_name', this.eventname);
      data.append('event_date', this.eventdate);
      data.append('event_from', this.eventfrom);
      data.append('event_to', this.eventto);
      data.append('event_venue', this.eventvue);
      
      this.registerEvents(data).then(() => {
        /*   this.navigateTo('/walup'); */
        }).catch(e => console.log(e.message));

        this.eventname = '';
        this.eventdate = '';
        this.eventfrom = '';
        this.eventto = '';
        this.eventvue = '';


        this.fetchEvents()  
        this.createevents = false
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

/* mounted() {
  try {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      } else {
        console.log("No user data found in local storage.");
      }
    } catch (error) {
      console.error("Error parsing user data from local storage:", error);
    }
  }, */

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