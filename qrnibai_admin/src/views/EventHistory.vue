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
  
  
  </v-container>
  
  <v-container>
  
    <v-row>
   
  
   <v-col cols="12" sm="3" md="3">
    <h3 class="ml-md-8 mt-n2" :style="{ color: 'green' }">EVENTS HISTORY</h3>
  </v-col>
  
  <v-col class="mt-n4" cols="12" sm="6"  md="6">
    <input v-model="search" class="textbox ml-n16"  placeholder="Search Event">
  </v-col>
  
      <v-col cols="12">
  
        <v-card class='rounded-lg mt-n4'>
          
        <v-data-table
        :search="search"
         item-key="ID"
       :headers="headers"
       :items="events"
      :items-per-page="10"
       class="elevation-1 my_classo_officehomeevents"
    
  >
  <template v-slot:item.actions="{ item }">
 <!--  
  <button>
  <v-icon left color="success" @click="handleRowClick(item)"  class="white--text mx-2 mt-n2">mdi-qrcode-scan</v-icon>
  </button>
   -->
  <button >
  <v-icon class=" mt-n2" color="primary" @click="handleRowEventHistoryClick(item)"  large >mdi-printer</v-icon>
  </button>
  
  
  </template>
  
  <template #bottom></template>
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
          search: "",
          
      headers: [
          {
            align: "start",
            key: "ID",
            sortable: false,
            title: "ID",
           align: ' d-none',
           
          },
          { key: "Event_name", title: "Event Name", sortable: false },
          { key: "Event_date", title: "Event Dates" , sortable: false },
          { key: "Event_venue", title: "Event Venue",  align: ' d-none d-sm-table-cell' , sortable: false },
          { key: "AttendanceCount", title: "Attendance", align: ' d-none d-sm-table-cell' ,   sortable: false },
          { key: "actions", title: "Actions" , align:"center" },
      
        ],
        };
      },
  
      computed: {
      ...mapGetters("events", { events: "getEventsHistory" }),
  
  
    },
  
  
    created() {
      this.fetchEventsHistory();
    },
  
      methods: {
        ...mapActions('events', ['fetchEventsHistory']),
  
  
        handleRowEventHistoryClick(item) {
        // console.log("users=", item);
        console.log("users=", item.columns.ID);
      //   console.log("EventName", row.item.raw.Event_name);
      localStorage.setItem('ID', item.columns.ID);
      this.$router.push({ name: "EventDetails", params: { id: item.columns.ID }});
      },
  
      navigateTo_EventDetails() {
      this.$router.push('/EventDetails');
    },
      
  
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
  
      @media screen and (max-width: 600px) {
    .container123 {
  
    padding-left: 0px;
    padding-right: 0px;
    margin: auto;
  
  } 
  .card {
      display: none; /* Hide the card on screens with a max-width of 768px (adjust as needed) */
    }
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
        border: 1px solid #226218;
        border-radius: 10px;
        margin-bottom: 10px;
        height: 35px;
      }
      </style>