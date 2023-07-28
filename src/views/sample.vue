<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar>
        <template v-slot:image> </template>
        <template v-slot:prepend>
          <v-avatar :size="50">
            <v-img src="/Tagum.png" alt="altText"></v-img>
          </v-avatar>
        </template>

        <v-app-bar-title>
          <span :style="{ color: 'green' }">HOME EVENTS</span>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-avatar class="mx-2 my-2" :size="50">
          <v-img src="img5.png"></v-img>
        </v-avatar>
      </v-app-bar>
    </v-layout>
  </v-card>

  
  <v-container>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-16"
      elevation="4"
      rounded
      max-width="50%"
      width="100%"
    >
     
      <v-divider color="blue" :thickness="5" class="mt-2"></v-divider>
      <!-- <v-col cols="12">
        <h2>ATTENDANCE REPORT</h2>
      </v-col> -->
      <v-container>
        <v-row no-gutters style="text-align: justify">
         
          <v-col cols="6">
            
            <p><strong>Event Name:</strong> </p>
    <p><strong>Date:</strong> </p>
    <p><strong>Venue:</strong> </p>
          
          </v-col>
          <v-col cols="6">
            <v-sheet class="pa-2 ma-2">
              <v-btn class="my-10 mt-n5 btn" color="green" height="100" width="250">
          <div class="text--center"> 
      <span class="mt-11 " style="font-size:40px">1542/5000</span>
      <p class="mt-3 ml-12">No. of Attendees </p>
       </div>
  </v-btn>
            </v-sheet>
          </v-col>
       
        </v-row>
      </v-container>

      <v-container>
        <v-table   density="compact">
          <thead >
            <tr>
              <th id="head">No.</th>
              <th id="head">Name</th>
              <th id="head">Position</th>
              <th id="head">Time Scanned</th>
              <th id="head">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.no }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.position }}</td>
              <td>{{ item.timeScanned }}</td>
              <td>{{ item.remarks }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
     
     
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
        {
          no: "1",
          name: "Honey Curay",
          position: "Hatdog",
          timeScanned: "2121",
          remarks: "zxdfd",
        },
      ],

      selected_event:[],

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




};
</script>
<style>
#head {
  background-color: #70b354;
  color: white;
  text-align: center;
}
</style>