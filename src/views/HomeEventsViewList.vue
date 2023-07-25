<template>





    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
       
     
      >

      
      
        <template v-slot:image>

        </template>

        <template v-slot:prepend>
          <v-avatar :size="50">
  <v-img src="/Tagum.png" alt="altText"></v-img>
</v-avatar>
        </template>

        <v-app-bar-title ><span :style="{ color: '#70B354' }">HOME EVENTS</span></v-app-bar-title>

        <v-spacer></v-spacer>

      
        <v-avatar class="mx-2 my-2" :size="50">
  <v-img src="img5.png" ></v-img>
</v-avatar>

       

      </v-app-bar>

      
    </v-layout>
    

    
  </v-card>

  



<div class="event-details page mt-12 ">
  <h1 class="my-10" :style="{ color: '#70B354' }" >Event Details</h1>
  <div class="event-info">
    <v-btn class="my-10 mt-n5 btn" color="green" height="100" width="250">
          <div class="text--center"> 
      <span class="mt-11 " style="font-size:40px">1542/5000</span>
      <p class="mt-3 ml-12">No. of Attendees </p>
       </div>
  </v-btn>
    <p><strong>Event Name:</strong> {{ eventName }}</p>
    <p><strong>Date:</strong> {{ eventDate }}</p>
    <p><strong>Venue:</strong> {{ eventVenue }}</p>
  
  </div>





  <table>
    <thead >
      <tr >
        <th class="green-header">No.</th>
        <th class="green-header">Name</th>
        <th class="green-header">Position</th>
        <th class="green-header">Time Scanned</th>
        <th class="green-header">Remarks</th>
        <th class="green-header">Office</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.id">
        <td class="center">{{ row.id }}</td>
        <td class="left">{{ row.Name }}</td>
        <td class="center">{{ row.Position }}</td>
        <td class="center">{{ row.timescanned }}</td>
        <td class="center">{{ row.remarks }}</td>
        <td class="center">{{ row.office }}</td>
       
      </tr>
    </tbody>
  </table>

  <v-card v-for="items in selected_event" :key="items.id" height="200px">
   <div class="text-center ">
  <v-alert dense dark color="blue darken-3">
    Youth Member Details<strong> </strong>

   </v-alert> 
   </div>



  <p  class="font-weight-bold ml-5">Event Name: {{ items.eventName }}   </p>                     

   <p class="font-weight-bold ml-5 mt-n2">Event Date:  </p>
   
   <p class="ml-5">Event Details: </p>
   
  
  </v-card>

</div>
</template>

<script>
export default {
data() {
  return {
    eventName: "Sample Event",
    eventDate: "2023-07-30",
    eventVenue: "Sample Venue",
    tableData: [
      { id: 1, Name: 'Joemarie Rendon', Position: 'Web Developer', timescanned: '8:03 AM'  , remarks: 'Remarks'   , office: 'RMISD OFFICE'},
      { id: 2, Name: 'Niel Roble', Position: 'Back End Developer', timescanned: '8:05 AM' , remarks: 'Remarks' , office: 'RMISD OFFICE'},
      { id: 3, Name: 'Honey Marjie Curay', Position: 'Front End Dev', timescanned: '8:30 AM'  , remarks: 'Remarks' , office: 'RMISD OFFICE'},
      { id: 4, Name: 'Rey Alcala', Position: 'Full Stack Dev', timescanned: '8:48 AM' , remarks: 'Remarks' , office: 'RMISD OFFICE'},
      { id: 5, Name: 'Jograd Mahusay', Position: 'Back End Dev', timescanned: '9:00 AM' , remarks: 'Remarks' , office: 'RMISD OFFICE'},
      { id: 6, Name: 'Carlo Aquino', Position: 'Network Administrator', timescanned: '8:57 AM' , remarks: 'Remarks' , office: 'RMISD OFFICE'},
      // Add more sample data here...
    ],

    selected_event:[],

    tableData_HomeEvents: [
        { id: 1, eventName: 'Araw Nang Tagum', eventDates: '2023-07-20', attendance: 50 },
        { id: 2, eventName: 'Kantahan of the Night', eventDates: '2023-07-21', attendance: 75 },
        { id: 3, eventName: 'Civil Service Event', eventDates: '2023-07-22', attendance: 90 },
        { id: 4, eventName: 'Tagum October Fest', eventDates: '2023-07-22', attendance: 90 },
        { id: 5, eventName: 'Beer of the Month', eventDates: '2023-07-22', attendance: 90 },
        { id: 6, eventName: 'Nutrition Month', eventDates: '2023-07-22', attendance: 90 },
        // Add more sample data here...
      ]
  };
},


created() {
      this.selected_event.push(this.tableData_HomeEvents.find(e => e.id == this.$route.params.id));

      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
  },


methods: {
  handleButtonClick() {
    // Handle button click logic here
    console.log("Button clicked!");
  },
},
};
</script>
<style>
/* body {
margin: 0 300px;
} */

.event-details {
margin: 20px;
padding: 10px;
/*  border: 1px solid #ccc; */
/*  border-radius: 4px; */
}

h2 {
margin-top: 0;
}

.event-info {
margin-bottom: 10px;
}

.btn {
float: right;
padding: 8px 16px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
}

.btn:hover {
background-color: #0056b3;
}


.pagebaiwow {
margin: 300px;
text-align: left;
}


.green-header {
  background-color: #70B354;
color: rgb(255, 255, 255); /* Set the font color to white for better contrast */
}

.big-button {
padding: 20px;
font-size: 20px;
}

.pagebai {
  max-width: 400px;
  margin: 0 auto;

  position: absolute;
left:22%;
top: 22%;
width: 400px;
transform: translate(-50%,-50%);

border-radius: 20px;
/*  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
*/

}


.page {
margin: 300px;
/*   text-align: right; */
}

table {
width: 100%;
border-collapse: collapse;
}

th, td {
padding: 8px;
border-bottom: 1px solid #ddd;
text-align: left;
}

th {
background-color: #f2f2f2;
}
</style>
