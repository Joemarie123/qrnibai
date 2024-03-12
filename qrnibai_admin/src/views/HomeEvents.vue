<template>
  <v-card  height="1000" flat color="#F9FAFC" >
<v-layout>
<NavBar/>

<v-main>
<div class="container123">
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
        <p class="classeventdetails" :style="{ color: '#70b354' }"><strong>Create Event Details</strong></p>

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


    <v-dialog persistent v-model="Dialog_Edit_eevents"  max-width="600px">
      <v-card color="#F9FAFC" class='rounded-lg'>

          <v-container>
        <v-row>
        <!--   <v-text-field v-model="transfer_EventID">

          </v-text-field>
          <h1>{{ transfer_EventID }}</h1> -->

  <button @click="Dialog_Edit_eevents = false" class="close-button "><strong>X</strong></button>
        <v-col cols="12"  sm="12" md="12" class="my-5 ml-7 mt-2" >
        <p class="classeventdetails" :style="{ color: '#70b354' }"><strong>Edit Event Details</strong></p>

</v-col>

<v-col  cols="10" sm="10" md="10"
  class="ml-10 mt-n5">

    <v-row>

  <v-col cols="12"  sm="3" md="3" class="ml-n8 mt-md-n2 ml-md-n4 mt-sm-n2 ml-sm-n4">
<p class="classfortitle ml-5">Date:</p>
</v-col>

<v-col cols="12" sm="9" md="9" class="mt-n3 mt-md-n0 mt-sm-n0" >
 <v-text-field height="10" variant="outlined"  density="compact" type="date" v-model="Edit_eventdate" ></v-text-field>
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
 <v-text-field height="10" variant="outlined" density="compact" v-model="Edit_eventname"  label="Event Name"></v-text-field>
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
<v-text-field height="10" variant="outlined" density="compact" v-model="Edit_eventvue" label="Venue"></v-text-field>
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
          <v-select v-model="Edit_selectedHour" variant="outlined" density="compact" label="Hour" :items="hours_from"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="Edit_selectedMinute" variant="outlined"  density="compact" label="Minute" :items="minutes_from"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="Edit_selectedPeriod" variant="outlined" density="compact" label="Period" :items="periods_from"></v-select>
        </v-col>
      </v-row>


      <v-row class="ml-16 mt-n3">
  <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n1 mt-md-2 ml-md-n10 mt-sm-2 ml-sm-n4">
<p class="classfortitle ml-5">Time To:</p>
</v-col>

        <v-col cols="3" class="ml-n3">
          <v-select v-model="Edit_selectedHour_to" variant="outlined" density="compact" label="Hour" :items="hours_to"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="Edit_selectedMinute_to" variant="outlined"  density="compact" label="Minute" :items="minutes_to"></v-select>
        </v-col>
        <v-col cols="3" class="ml-n4">
          <v-select v-model="Edit_selectedPeriod_to" variant="outlined" density="compact" label="Period" :items="periods_to"></v-select>
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
      @click="Edit_registerEvent()">
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

  <v-dialog v-model="Dialog_Deleted" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline d-flex justify-center">Successfully Deleted</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="Dialog_Deleted = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

  <v-dialog v-model="Dialog_Successfully_Deleted" max-width="400">
    <v-card >
     <!--  {{ this.Delete_id_Events }} -->
      <v-card-title class="headline">Confirm Action</v-card-title>
      <v-card-text>Are you sure you want to delete the item?</v-card-text>
      <v-card-actions>
        <v-btn color="red" text @click="Dialog_Successfully_Deleted = false">No</v-btn>
        <v-btn color="green" text @click="Delete_registerEvent()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>



  <v-dialog v-model="Dialog_Error" persistent max-width="310">
    <v-card >
      <v-row class="d-flex align-center justify-center" >
        <v-col cols="10" class="mt-5">
          <h4 >Cannot update the Event because</h4>
          <h4 >it has already a participant!</h4>
        </v-col>
     <!--    <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col> -->
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n1">
        <v-btn color="green" text @click="Close_Dialog_Error()">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>


  <v-dialog v-model="Dialog_Error_Delete" persistent max-width="310">
    <v-card >
      <v-row class="d-flex align-center justify-center" >
        <v-col cols="10" class="mt-5">
          <h4 >Cannot delete the Event because it</h4>
          <h4 >Has already a participant!</h4>
        </v-col>
     <!--    <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col> -->
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n1">
        <v-btn color="green" text @click="Dialog_Error_Delete = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>



<v-container>

  <v-row>
 <!--  <v-col class="d-flex justify-end ml-n3 " cols="12">
  <v-btn color="success"  rounded-lg variant="outlined" @click="createevents = true"> + Create Events</v-btn>
  </v-col>
 -->
  <v-col :class="{'d-flex justify-end': !isMobile, 'd-flex justify-start': isMobile}" cols="12">
    <v-btn color="success" rounded-lg variant="outlined" @click="createevents = true">+ Create Events</v-btn>
  </v-col>

    <v-col cols="12" md="2"  lg="3" xl="2">
  <h3 class="ml-1 ml-lg-1 mt-n2 colorfortext" >EVENTS LIST</h3>
<!--   <p><strong>User ID:</strong> {{ }}</p> -->
</v-col>

<v-col class="mt-n4 ml-lg-n16" cols="12" lg="2" xl="2">
  <input v-model="search" class="textbox"  placeholder="Search Event">
<!--   <v-text-field  density="compact"    append-inner-icon="mdi-magnify" variant="outlined"  label="Search Event"></v-text-field> -->
</v-col>

    <v-col cols="12">

      <v-card class=' mt-n4'>

      <v-data-table
      density="compact"
      :search="search"
       item-key="ID"
     :headers="headers"
     :items="formattedData"
    :items-per-page="10"
     class="my_class td btn-hover color-1 elevation-1"
     @click:row="clickme"
     :hide-default-header="true"
    :hide-default-footer="true"

>
<template #bottom></template>
<template v-slot:item.actions="{ item }">

  <v-row>

    <v-col cols="2" class="mt-n3">

<!-- <v-btn variant="text" color="green" class="mt-2 "> -->

<v-icon size="x-small" left color="success"   @click="edit_event_Employee(item)" class="white--text ">mdi-lead-pencil</v-icon>
<!-- </v-btn> -->
<v-tooltip
        activator="parent"
        location="top"
      >Edit Event</v-tooltip>
</v-col>

<v-col cols="3" class="ml-2 mt-n3">
<!-- <v-btn variant="text" color="red" class="mt-2 "> -->

<v-icon size="x-small" left color="red"   @click="Show_Dialog_Successfully_Deleted(item)" class="white--text">mdi-delete</v-icon>
<!-- </v-btn> -->
<v-tooltip
        activator="parent"
        location="top"
      >Delete Event</v-tooltip>
</v-col>


<v-col cols="3" class="ml-n2 mt-n3">
<!-- <button> -->
<v-icon left size="x-small" color="success" v-if="!isMobile"   @click="handleRowClick(item)" class="white--text ">mdi-eye</v-icon>
<!-- </button> -->
<v-tooltip
        activator="parent"
        location="top"
      >Show Information</v-tooltip>
</v-col>
<v-col cols="3" class="ml-n2 mt-n3" >
<!-- <button  > -->
<v-icon size="x-small" v-if="!isMobile" color="primary" @click="handleRowPrintClick(item)"  large >mdi-printer</v-icon>
<!-- </button> -->
<v-tooltip
        activator="parent"
        location="top"
      >Print</v-tooltip>
</v-col>
</v-row>
</template>

</v-data-table>
</v-card>

<v-dialog v-model="dialogUpdated" persistent max-width="300">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Updated</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">
        <v-btn color="green" text @click="dialogUpdated = false">OK</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>

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
  dialogUpdated:false,
  Dialog_Error_Delete:false,
  Dialog_Successfully_Deleted:false,
  Dialog_Error:false,
  transfer_EventID:'',
  isMobile: false,
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
    Edit_eventdate:'',
    Edit_eventname:'',
    Edit_eventvue:'',
    Edit_selectedHour:'',
    Edit_selectedMinute:'',
    Edit_selectedPeriod:'',
    Edit_selectedHour_to:'',
    Edit_selectedMinute_to:'',
    Edit_selectedPeriod_to:'',

    CatchTime_From:'',
    CatchTime_To:'',



    Dialog_Successfully_Updated:false,
    Dialog_Deleted:false,
  createevents:false,
  Dialog_Edit_eevents:false,

  items: [
    { title: "My Account", icon: "mdi-account",  },
    { title: "Settings", icon: "mdi-clock" },
    { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
    // { title: "Click Me 2" },
  ],

  headers: [
      {
       /*  align: "start", */
        key: "ID",
        sortable: false,
        title: "ID",
        align: " d-none"

      },
      { key: "Event_name", title: "Event Name", sortable: false },
      { key: "Formatted_Event_date", title: "Event Dates", sortable: false },
      { key: "Formatted_Event_from", title: "Event From", sortable: false , align: ' d-none d-sm-table-cell'  },
      { key: "Formatted_Event_to", title: "Event To", sortable: false , formatter: this.formattedTime_To , align: ' d-none d-sm-table-cell' },
      { key: "Event_venue", title: "Event Venue", sortable: false , align: ' d-none d-sm-table-cell' },
      { key: "AttendanceCount", title: "Attendance", align:'', sortable: false },
      { key: "actions", title: "Actions" ,align:' d-none d-sm-table-cell' , sortable: false  },


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
/*   ...mapGetters("events", { events: ['getEventsHistory'] }), */
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
    formattedData() {
      return this.events.map(item => {
        return {
          ...item,
          Formatted_Event_from: this.formatTime(item.Event_from),
          Formatted_Event_to: this.formatTime(item.Event_to),
          Formatted_Event_date: this.formatDate(item.Event_date),
        };
      });
    },


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



    Edit_formattedTime_From() {
      let hour = parseInt(this.Edit_selectedHour);
      if (this.Edit_selectedPeriod === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.Edit_selectedPeriod === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.Edit_selectedMinute;
      const formattedSecond = '00';
      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    },

    Edit_formattedTime_To() {
      let hour = parseInt(this.Edit_selectedHour_to);
      if (this.Edit_selectedPeriod_to === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.Edit_selectedPeriod_to === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.Edit_selectedMinute_to;
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

/* beforeDestroy() {
    // Remove the resize event listener to prevent memory leaks
    window.removeEventListener('resize', this.handleResize);
  }, */
created() {


this.fetchEvents();

  this.fetchEventsHistory();


},



methods: {

...mapActions('events', ['registerEvents']),
...mapActions('events', ['fetchEvents']),
...mapActions('events', ['fetchEventsHistory']),


formatDate(date) {
      if (!date) {
        return null;
      }

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },


formatTime(time) {
      if (!time) {
        return null; // Return null for empty time
      }

      const [hours, minutes] = time.split(':');
      const period = parseInt(hours) >= 12 ? 'PM' : 'AM';
      const formattedHours = (parseInt(hours) % 12) || 12;

      return `${formattedHours}:${minutes} ${period}`;
    },

checkMobile() {
      this.isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
    },


    clickme(item,row)
    {

      if (this.isMobile) {
      console.log('Clicked ITEM:', item);
      console.log("CLICK ROW", row.item.columns.ID)

      localStorage.setItem('ID', row.item.columns.ID);
  localStorage.setItem('Event Name', row.item.columns.Event_name);
   /*  this.$router.push({ name: "EventView2",  params: { id: item.columns.ID }}) */

    this.$router.push({ name: "EventView2", params: { id: row.item.columns.ID }});

  }
    },

  edit_event_Employee(item)
  {
    console.log("EVENT ID",item)
     /*
      console.log("EVENT ID",item.columns.ID) */
      this.transfer_EventID = item.columns.ID
      this.Edit_eventdate = item.props.value.Event_date
      this.Edit_eventname = item.columns.Event_name
      this.Edit_eventvue = item.columns.Event_venue

      this.CatchTime_From = item.props.value.Event_from
  /*     console.log("EVENT Time FROm",item.columns.Event_from) */

      this.convertertoTimeFrom()

      this.CatchTime_To = item.props.value.Event_to
   /*    console.log("EVENT Time To",item.columns.Event_to) */
      this.convertertoTimeTo()


     /*  this.Edit_selectedHour = item.columns. */
     this.Dialog_Edit_eevents = true


  },

/*   handleRowClick_Delete()
  {

  }, */

  Show_Dialog_Successfully_Deleted(item)
  {
    this.Delete_id_Events = item.columns.ID
    console.log("ID FOR DELETE",this.Delete_id_Events)
    this.Dialog_Successfully_Deleted = true
  },

  Delete_registerEvent()
  {
    let data = new FormData();
    data.append('event_ID', this.Delete_id_Events);
  /*   data.append('event_name', this.Edit_eventname);
    data.append('event_date', this.Edit_eventdate);
    data.append('event_venue', this.Edit_eventvue); */
    data.append('type', "delete");

    this.registerEvents(data).then(e => {
      this.fetchEvents()
      this.Dialog_Successfully_Deleted = false

      if(e == 3)
      {
        /* this.Dialog_Error = true */
        this.Dialog_Error_Delete = true
      }
      else(e == 4)
      {
        this.Dialog_Deleted = true
      }

      });

  },

  Edit_registerEvent()
  {
    let data = new FormData();
    data.append('event_ID', this.transfer_EventID);
    data.append('event_name', this.Edit_eventname);
    data.append('event_date', this.Edit_eventdate);
    data.append('event_venue', this.Edit_eventvue);
    data.append('type', "edit");
    data.append('event_from', this.Edit_formattedTime_From);
    data.append('event_to',   this.Edit_formattedTime_To);
    this.registerEvents(data).then(e => {

      if(e == 0)
      {
        this.Dialog_Error = true
      }
      else(e == 1)
      {
        this.dialogUpdated = true
        this.fetchEvents()
      }
      /*   this.navigateTo('/walup'); */
      });
     /*  this.errorhandling = response */
  },


  Close_Dialog_Error()
  {
      this.Dialog_Error = false
      this.Dialog_Successfully_Updated = false
  },

  convertertoTimeTo()
  {
    const [hour, minute] = this.CatchTime_To.split(":").map(Number);
      this.Edit_selectedHour_to = hour <= 12 ? hour.toString().padStart(2, "0") : (hour - 12).toString().padStart(2, "0");
      this.Edit_selectedMinute_to = minute.toString().padStart(2, "0");
      this.Edit_selectedPeriod_to = hour < 12 ? "AM" : "PM";
  },


  convertertoTimeFrom()
  {
    const [hour, minute] = this.CatchTime_From.split(":").map(Number);
      this.Edit_selectedHour = hour <= 12 ? hour.toString().padStart(2, "0") : (hour - 12).toString().padStart(2, "0");
      this.Edit_selectedMinute = minute.toString().padStart(2, "0");
      this.Edit_selectedPeriod = hour < 12 ? "AM" : "PM";
  },


handleResize() {
      // Update isMobile based on the current window width
      this.isMobile = window.innerWidth <= 600; // Adjust the value based on your mobile breakpoint
    },

handleRowClick(item) {
    // console.log("users=", item);
    console.log("users=", item.columns.ID);
    console.log("users=", item);
    console.log("Eve Name", item.columns.Event_name);
  //   console.log("EventName", row.item.raw.Event_name);
  localStorage.setItem('ID', item.columns.ID);
  localStorage.setItem('Event Name', item.columns.Event_name);
   /*  this.$router.push({ name: "EventView2",  params: { id: item.columns.ID }}) */

    this.$router.push({ name: "EventView2", params: { id: item.columns.ID }});
  },

  handleRowPrintClick(item){
       // console.log("users=", item);
       console.log("users=", item.columns.ID);
      //   console.log("EventName", row.item.raw.Event_name);
      localStorage.setItem('ID', item.columns.ID);
      this.$router.push({ name: "EventDetails", params: { id: item.columns.ID }});


  },



register() {
    console.log("registerEvents",this.formattedTime_From);
    console.log("registerEvents",this.formattedTime_To);

    let data = new FormData();
    data.append('event_name', this.eventname);
    data.append('event_date', this.eventdate);
    data.append('userid',  this.user.ID);
    data.append('event_from', this.formattedTime_From);
    data.append('event_to',   this.formattedTime_To);
    data.append('event_venue', this.eventvue);

    this.registerEvents(data).then(() => {
      this.fetchEvents()
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


      /* localStorage.setItem('events', JSON.stringify(this.events)); */
      this.Dialog_Successfully_Saved = true
    /*   this.fetchEventsLocally()
 */
  },

/*   fetchEventsLocally() {

    const storedEvents = localStorage.getItem('events');
    this.events = storedEvents ? JSON.parse(storedEvents) : [];
  }, */

  closedialogsuccessfullsave()

  {
    this.fetchEvents()
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

mounted()
{
  const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user object exists
    if (storedUser) {
      this.user = storedUser;
    } else {
      console.error('User information not found in local storage');
    }



  this.isMobile = window.innerWidth <= 600; // Adjust the value based on your mobile breakpoint

// Add a listener to update the isMobile property when the window is resized
window.addEventListener('resize', this.handleResize);
}
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

.colorforbutton{
  background-color: rgba(4, 51, 40, 0.895)!important;
  color: aliceblue!important;
}

.colorfortext{
      color: rgba(4, 51, 40, 0.895)!important;
           /*  color: aliceblue!important; */
    }
.my-input.v-input .v-input__slot {
border-radius: 100px;
}

.v-data-table > .v-data-table__wrapper > table {
  border-spacing: 0 0.10rem;
}
.container123 {
/* max-width: 1670px; */
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
width: 300px;
height: 35px;
}
</style>
