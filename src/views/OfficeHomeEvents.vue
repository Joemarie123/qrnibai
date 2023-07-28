<template>
    <v-card class="mx-auto" color="grey-lighten-3">
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
            <v-avatar :size="50">
              <v-img src="/Tagum.png" alt="altText"></v-img>
            </v-avatar>
          </template>
          <v-app-bar-title
            ><span :style="{ color: 'green' }">HOME EVENTS</span></v-app-bar-title
          >
          <v-spacer></v-spacer>
          <v-avatar class="mx-2 my-2" :size="50">
            <v-img src="img5.png"></v-img>
          </v-avatar>
        </v-app-bar>
      </v-layout>
    </v-card>
  
    <div class="mt-16">
        
      <v-container>
        <v-row no-gutters align="center">
          <v-col class="d-flex justify-start" :cols="6">
            <h2 :style="{ color: 'green' }">EVENTS</h2>
          </v-col>
          <v-col class="d-flex justify-end" :cols="6">
            <v-txt btn @click="$router.push('EventHistory')" class="view"
              >View History</v-txt
            >
          </v-col>
        </v-row>
      </v-container>
  
      <v-container>
        <v-row>
          <v-col>
            <table class="ifmobile" >
              <thead>
                <tr>
                  <th class="head">#</th>
                  <th class="head">Event Name</th>
                  <th class="head">Dates</th>
                  <th class="head">Attendance</th>
                  <th class="head">Actions</th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="row in tableData_HomeEvents" :key="row.id">
                  <td class="center">{{ row.id }}</td>
                  <td >{{ row.eventName }}</td>
                  <td>{{ row.eventDates }}</td>
                  <td class="center">
                    {{ row.attendance }} / {{ row.employee }}
                  </td>
                  <td class="center">
                    <button class="responsive-button_blue" @click="redirecttoEventView(row)">
                  <v-icon  >mdi-eye</v-icon>
                   </button>
  
                    <button class="responsive-button mx-2 my-1" @click="redirecttoEventDetails(row)">
                  <v-icon  >mdi-printer</v-icon>
                   </button>
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
  export default {
    data() {
      return {
           tableData_HomeEvents: [
        { id: 1, eventName: 'Araw Nang Tagum', eventDates: '2023-07-20', attendance: '50',venue:'Tagum City Hall'  ,Department:'City Mayor' ,Division:'City Mayor' ,Section_unit:'Section Durian' ,Project:'Project Night Fall' , employee:'5000' },
        { id: 2, eventName: 'Kantahan of the Night', eventDates: '2023-07-21', attendance: '75' ,venue:'Davao City Hall' ,Department:'City Mayor 1' ,Division:'City Vice-Mayor' ,Section_unit:'Section Nangka' ,Project:'Project Night Fall 1', employee:'5000'  },
        { id: 3, eventName: 'Civil Service Event', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 2' ,Division:'Human Resource' ,Section_unit:'Section Santol' ,Project:'Project Night Fall 2' , employee:'5000' },
        { id: 4, eventName: 'Tagum October Fest', eventDates: '2023-07-22', attendance: '90'  ,venue:'Tagum City Hall' ,Department:'City Mayor 3' ,Division:'Engineering' ,Section_unit:'Section Saging' ,Project:'Project Night Fall 3'  , employee:'5000'},
        { id: 5, eventName: 'Beer of the Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 4' ,Division:'Treasure' ,Section_unit:'Section Lansones' ,Project:'Project Night Fall 4' , employee:'5000'},
        { id: 6, eventName: 'Nutrition Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 5' ,Division:'HR NI BAI' ,Section_unit:'Section Rambotan' ,Project:'Project Night Fall 5' , employee:'5000'},
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

      redirecttoEventDetails (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    },


    redirecttoEventView (item) {
      console.log("item=",item.id)
    this.$router.push({ name: 'EventView', state: { id: item.id } })
    },



    

    },
  };
  </script>
    
    <style scoped>

.responsive-button_blue {
  font-size: 13px; /* Default font size for non-mobile devices */
  background-color: #18a3f3;
  color: white; /* Set the text color to white */
  padding: 8px 16px; /* Add padding for better appearance */
  border: none; /* Remove the default button border */
  border-radius: 10px; /* Add some border-radius for a rounded look */
}

.responsive-button {
  font-size: 13px; /* Default font size for non-mobile devices */
  background-color: #70b354;
  color: white; /* Set the text color to white */
  padding: 8px 16px; /* Add padding for better appearance */
  border: none; /* Remove the default button border */
  border-radius: 10px; /* Add some border-radius for a rounded look */
}

@media screen and (max-width: 768px) {
  /* Adjust the max-width value based on your desired breakpoint for mobile devices */
  .responsive-button {
    font-size: 10px; /* Font size for mobile devices */
  }

  .responsive-button_blue {
    font-size: 10px; /* Font size for mobile devices */
  }

}

@media screen and (max-width: 590px) {

.ifmobile{
  font-size: 12px;
}

.ifsize{
  font-size: 5px;

}

}


  .view {
    color: red;
  }
  #Events {
    margin-top: 10%;
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
  /* 
    .login-form {
        max-width: 1500 px;
        margin: 0 auto;
    
        position: absolute;
      left: 50%;
      top: 50%;
      width: 10000px;
      transform: translate(-50%,-50%);
    
      border-radius: 20px;
      box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
      }
     */
  </style>