<template>
  <v-card  height="1000" flat color="#F9FAFC" >
<v-layout>
<NavBarUser/>

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
<v-icon left color="success" @click="handleRowClick(item)"  class="white--text mx-2">mdi-qrcode-scan</v-icon>
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
    import NavBarUser from "@/components/NavBarUser.vue";
    import { mapActions, mapGetters } from 'vuex';

  export default {

    components: {
      NavBarUser,
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
         
         
        },
        { key: "Event_name", title: "Event Name", sortable: false },
        { key: "Event_date", title: "Event Dates", sortable: false },
        { key: "Event_venue", title: "Event Venue", sortable: false },
        { key: "AttendanceCount", title: "Attendance", sortable: false },
        { key: "actions", title: "Actions" , align:"center" },
    
      ],
      };
    },

    computed: {
    ...mapGetters("events", { events: "getEvents" }),


  },


  created() {
    this.fetchEvents();
  },



  handleRowClick(item) {
      // console.log("users=", item);
      console.log("users=", item.columns.ID);
    //   console.log("EventName", row.item.raw.Event_name);
    localStorage.setItem('User ID', item.columns.ID);
    this.$router.push({ name: "QRCodesUser", params: { id: item.columns.ID }});
    },


    methods: {
      ...mapActions('events', ['fetchEvents']),

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