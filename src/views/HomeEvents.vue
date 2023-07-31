<template>

<HrBar/>


<div class="mt-16 container123">
  <v-container >
  
    <v-btn @click="createevents = true" class="my-10" color="green" height="100">
      <v-icon size="90">mdi-calendar-plus</v-icon>
      <span class="mt-11">Create Events</span></v-btn
    >
      <v-dialog v-model="createevents"  max-width="600px">
        
        <v-card >
     
            <v-container>
          <v-row>

           <button @click="createevents = false" class="close-button"><strong>X</strong></button>                 
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
   <v-text-field height="10" variant="outlined" density="compact" type="date" label="Event Name"></v-text-field>
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
   <v-text-field height="10" variant="outlined" density="compact"  label="Event Name"></v-text-field>
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
<v-text-field height="10" variant="outlined" density="compact" label="Venue"></v-text-field>
</v-col>
</v-row>
   </v-col>

  <v-row  class="ml-10 mt-n7">

    <v-col cols="12" md="3" sm="3" class="ml-n8 mt-n2 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4 ">
<p class="classfortitle ml-5">Time:</p>
</v-col>

   <v-col cols="11"  sm="4" md="4"  class="mt-n3 mt-md-1 ml-md-n4 mt-sm-1 ml-sm-n4"
   >
   <v-text-field height="10"    variant="outlined"  density="compact" type="time"  label="Time Started"></v-text-field>
   </v-col>


   <v-col cols="11" sm="4" md="4"  class="mt-n6 mt-md-1 ml-md-n2 mt-sm-1 ml-md-n2" >
    <v-text-field height="10"     variant="outlined" density="compact" type="time"  label="Time Ended"></v-text-field>
   </v-col>

  </v-row>


</v-row>  

<v-row>

<v-col cols="12" sm="12" md="11" class="d-flex justify-end my-5 mt-n4 ml-n5 ">

    <v-btn color="green" class="pa-2 ml-5 mt-n1"
        outlined dark
        @click="dialog_Create_Events = false">
      Submit
    </v-btn>

   
</v-col>

</v-row>


</v-container>                                                  
</v-card>    
      </v-dialog>


    <h2 class="mx-2" :style="{ color: 'green' }">EVENTS</h2>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <table>
          <thead>
            <tr>
              <th class="head">#</th>
              <th class="head">Event Name</th>
              <th class="head">Event Dates</th>
              <th class="head">Attendance</th>
              <th class="head">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableData_HomeEvents" :key="row.id">
              <td class="center">{{ row.id }}</td>
              <td>{{ row.eventName }}</td>
              <td>{{ row.eventDates }}</td>
              <td class="center">{{ row.attendance }}</td>
              <td class="center">
                <v-btn class="mx-2" color="blue"  @click="redirecttoHomeEventsViewList(row)">
             
             <v-icon size="25">mdi-eye</v-icon>
         </v-btn>


       <!--  <v-btn class="mx-2" color="green" @click="redirecttoEventDetails(row)">
            <v-icon size="25">mdi-printer</v-icon>
        </v-btn> -->
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>


<script>
import HrBar from "@/components/toolbar/HrBar.vue";

export default {

  components: {
    HrBar,
  },
  
data() {
  return {

    createevents:false,

    items: [
      { title: "My Account", icon: "mdi-account",  },
      { title: "Settings", icon: "mdi-clock" },
      { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
      // { title: "Click Me 2" },
    ],
    tableData: [
      {
        id: 1,
        eventName: "Araw Nang Tagum",
        eventDates: "2023-07-20",
        attendance: 50,
      },
      {
        id: 2,
        eventName: "Kantahan of the Night",
        eventDates: "2023-07-21",
        attendance: 75,
      },
      {
        id: 3,
        eventName: "Civil Service Event",
        eventDates: "2023-07-22",
        attendance: 90,
      },
      {
        id: 4,
        eventName: "Tagum October Fest",
        eventDates: "2023-07-22",
        attendance: 90,
      },
      {
        id: 5,
        eventName: "Beer of the Month",
        eventDates: "2023-07-22",
        attendance: 90,
      },
      {
        id: 6,
        eventName: "Nutrition Month",
        eventDates: "2023-07-22",
        attendance: 90,
      },
      // Add more sample data here...
    ],

    tableData_HomeEvents: [
        { id: 1, eventName: 'Araw Nang Tagum', eventDates: '2023-07-20', attendance: '50',venue:'Tagum City Hall'  ,Department:'City Mayor' ,Division:'City Mayor' ,Section_unit:'Section Durian' ,Project:'Project Night Fall' },
        { id: 2, eventName: 'Kantahan of the Night', eventDates: '2023-07-21', attendance: '75' ,venue:'Davao City Hall' ,Department:'City Mayor 1' ,Division:'City Vice-Mayor' ,Section_unit:'Section Nangka' ,Project:'Project Night Fall 1'  },
        { id: 3, eventName: 'Civil Service Event', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 2' ,Division:'Human Resource' ,Section_unit:'Section Santol' ,Project:'Project Night Fall 2'  },
        { id: 4, eventName: 'Tagum October Fest', eventDates: '2023-07-22', attendance: '90'  ,venue:'Tagum City Hall' ,Department:'City Mayor 3' ,Division:'Engineering' ,Section_unit:'Section Saging' ,Project:'Project Night Fall 3' },
        { id: 5, eventName: 'Beer of the Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 4' ,Division:'Treasure' ,Section_unit:'Section Lansones' ,Project:'Project Night Fall 4' },
        { id: 6, eventName: 'Nutrition Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 5' ,Division:'HR NI BAI' ,Section_unit:'Section Rambotan' ,Project:'Project Night Fall 5' },
        // Add more sample data here...
      ]
  };
},
methods: {
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
};
</script>

<style scoped>
.container123 {
  max-width: 1170px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
}



  .classfortitle{
  /*  color: #70b354; */
    font-size: 20px;
  }

  .classeventdetails{

    font-size: 28px;
  }




.head {
background-color: #70b354;
color: white;
}
.big-button {
padding: 20px;
font-size: 20px;
}

.pagebai {
max-width: 400px;
margin: 0 auto;

position: absolute;
left: 22%;
top: 22%;
width: 400px;
transform: translate(-50%, -50%);

border-radius: 20px;
/*  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
*/
}

.page {
margin: 300px;
}

table {
width: 100%;
border-collapse: collapse;
}

th,
td {
padding: 5px;
border-bottom: 1px solid #ddd;
text-align: center;
}

th {
background-color: #f2f2f2;
}


.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}


</style>