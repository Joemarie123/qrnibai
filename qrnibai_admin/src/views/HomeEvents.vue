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

<!-- <v-row  class="ml-10 mt-n7">

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

</v-row> -->

<v-row class="ml-16 mt-n7">
  <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n10 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">Time From:</p>
</v-col>

        <v-col cols="3" class="ml-n3">
          <v-select v-model="selectedHour" variant="outlined" density="compact" label="Hour" :items="hours_from"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="selectedMinute" variant="outlined"  density="compact" label="Minute" :items="minutes_from"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="selectedPeriod" variant="outlined" density="compact" label="Period" :items="periods_from"></v-select>
        </v-col>
      </v-row>


      <v-row class="ml-16 mt-n3">
  <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n10 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">Time To:</p>
</v-col>

        <v-col cols="3" class="ml-n3">
          <v-select v-model="selectedHour_to" variant="outlined" density="compact" label="Hour" :items="hours_to"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="selectedMinute_to" variant="outlined"  density="compact" label="Minute" :items="minutes_to"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="selectedPeriod_to" variant="outlined" density="compact" label="Period" :items="periods_to"></v-select>
        </v-col>
      </v-row>




</v-row>  

 <v-col>
<!-- {{ formattedTime_From }}
{{ formattedTime_To }} -->
  <!-- <p>Selected Time From: {{ this.selectedTime_From }}</p>
  <p>Selected Time To: {{ selectedTime_To }}</p> -->
 </v-col>
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

<v-dialog v-model="Dialog_Successfully_Saved" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Saved</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="closedialogsuccessfullsave()">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>


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

  hours_from: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  minutes_from: [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36',
        '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
        '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'
      ],
      periods_from: ['AM', 'PM'],
      selectedHour: '',
      selectedMinute: '',
      selectedPeriod: '',


      hours_to: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  minutes_to: [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36',
        '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
        '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'
      ],
      periods_to: ['AM', 'PM'],
      selectedHour_to: '',
      selectedMinute_to: '',
      selectedPeriod_to: '',


      Dialog_Successfully_Saved:false,
      
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

/*    sortedItems() {
      // Sort the items array based on date and time
      return this.items.slice().sort((a, b) => {
        // Sort by date first
        const dateComparison = new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time);
        if (dateComparison !== 0) {
          return dateComparison;
        }
        // If dates are equal, sort by time
        return a.time.localeCompare(b.time);
      });
    },  */



  formattedTime_From() {
      let hour = parseInt(this.selectedHour);
      if (this.selectedPeriod === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.selectedPeriod === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.selectedMinute;
      const formattedSecond = '00';
      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    },


    formattedTime_To() {
      let hour = parseInt(this.selectedHour_to);
      if (this.selectedPeriod_to === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.selectedPeriod_to === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.selectedMinute_to;
      const formattedSecond = '00';
      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    }

  // selectedTime_From() {
  //     if (this.selectedHour && this.selectedMinute && this.selectedPeriod) {
  //       // Ensure the minute has two digits by adding '00' if it's a single digit
  //       const formattedMinute = this.selectedMinute.length === 1 ? `0${this.selectedMinute}` : this.selectedMinute;
  //       // Default seconds to '00'
  //       const seconds = '';
  //       return `${this.selectedHour}:${formattedMinute} ${this.selectedPeriod}`;
  //     } else {
  //      /*  return 'Select hour, minute, and period'; */
  //     }
  //   },

  //   selectedTime_To() {
  //     if (this.selectedHour_to && this.selectedMinute_to && this.selectedPeriod_to) {
  //       // Ensure the minute has two digits by adding '00' if it's a single digit
  //       const formattedMinute_To = this.selectedMinute_to.length === 1 ? `0${this.selectedMinute_to}` : this.selectedMinute_to;
  //       // Default seconds to '00'
  //       const seconds_To = '';
  //       return `${this.selectedHour_to}:${formattedMinute_To} ${this.selectedPeriod_to}`;
  //     } else {
  //      /*  return 'Select hour, minute, and period'; */
  //     }
  //   },



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
  localStorage.setItem('ID', item.columns.ID);
   /*  this.$router.push({ name: "EventView2",  params: { id: item.columns.ID }}) */

    this.$router.push({ name: "EventView2", params: { id: item.columns.ID }});
  },




register() {
    console.log("registerEvents",this.formattedTime_From);
    console.log("registerEvents",this.formattedTime_To);

    let data = new FormData();
    data.append('event_name', this.eventname);
    data.append('event_date', this.eventdate);
    data.append('event_from', this.formattedTime_From);
    data.append('event_to',   this.formattedTime_To);
    data.append('event_venue', this.eventvue);
    
    this.registerEvents(data).then(() => {
      /*   this.navigateTo('/walup'); */
      }).catch(e => console.log(e.message));

      this.eventname = '';
      this.eventdate = '';
      this.formattedTime_From = '';
      this.formattedTime_To = '';

      this.selectedHour ='',
      this.selectedMinute = '',
      this.selectedPeriod = '',

      this.selectedHour_to ='',
      this.selectedMinute_to = '',
      this.selectedPeriod_to = '',


      this.eventvue = '';


      this.fetchEvents()  
      this.Dialog_Successfully_Saved = true
      
  },


  closedialogsuccessfullsave()

  {
    this.Dialog_Successfully_Saved = false
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