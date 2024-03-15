<template>
  <v-card  height="1000" flat color="#F9FAFC" >
<v-layout>
<NavBarUser/>

<v-main>
<div class=" container123">
<v-container >

<!--   <v-btn @click="createevents = true" class="my-10" color="green" height="100">
    <v-icon size="90">mdi-calendar-plus</v-icon>
    <span class="mt-11">Create Events</span></v-btn
  > -->


</v-container>

<v-container>

  <v-row>


 <v-col cols="12" sm="4" md="5" lg="4" xl="3">
  <h3 class="colorfortext mt-n2" :style="{ color: 'green' }">CURRENT/UPCOMING EVENTS</h3>
</v-col>

<v-col class="mt-n4 ml-n0 ml-md-n16 ml-lg-n16 ml-xl-n16" cols="12"  sm="6"  md="6">
  <input v-model="search" class="textbox"  placeholder="Search Event">
</v-col>

    <v-col cols="12">

    <v-row class="d-flex align-center justify-center">
      <div v-if="isLoading" class=" my-10 "  >
             <v-progress-circular

      :size="70"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>

             <div class="loading-text">Please Wait...</div>
           </div>
          </v-row>


      <v-card v-if="!isLoading" class='rounded-lg mt-n1'>

      <v-data-table
      :search="search"
       item-key="ID"
     :headers="headers"
     :items="homeevents"
    :items-per-page="15"
     class="my_class elevation-1 my_classo_officehomeevents"

>
<template v-slot:item.actions="{ item }">

<button>
<v-icon left color="success" @click="handleRowClick(item)"  class="white--text mx-2 mt-n2">mdi-qrcode-scan</v-icon>
<v-tooltip
        activator="parent"
        location="top"
      >SCAN QR</v-tooltip>
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
    import NavBarUser from "@/components/NavBarUser.vue";
    import { mapActions, mapGetters } from 'vuex';

  export default {

    components: {
      NavBarUser,
  },
    data() {
      return {
        search: "",
        isLoading: false,
          loadingProgress: 0,


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
        { key: "AttendanceCount", title: "Attendance", align: ' d-none d-sm-table-cell' ,  sortable: false },
        { key: "actions", title: "Actions" , align:"center"  },

      ],
      };
    },

    computed: {
    ...mapGetters("events", { homeevents: "getEvents" }),


  },


  created() {
    let data = new FormData;
    const adminrecords = JSON.parse(localStorage.getItem('user'))
    data.append('office_id', adminrecords.office_id)
    this.eventayde = localStorage.getItem("ID");
    this.fetchEvents(data)

    this.simulateLoading(() => {

}, );


   /*  console.log("Fetch Events",this.fetchEvents()) */
  },


    methods: {
      ...mapActions('events', ['fetchEvents']),

      simulateLoading() {
      const interval = 20; // Change this to control the speed of loading
      const totalSteps = 50; // Adjust this based on the total number of steps you want
      let currentStep = 0;

      this.isLoading = true;

      const loadingInterval = setInterval(() => {
        currentStep++;
        this.loadingProgress = (currentStep / totalSteps) * 100;

        ////KINI TAWAGON AFTER SA TUYOK

      //////////////////////////////////

        if (currentStep >= totalSteps) {
          if(this.homeevents.length >0){
            clearInterval(loadingInterval);
          this.isLoading = false;
          this.loadingProgress = 0;
 /*   this.fetchEventsHistory() */
          }else{
            currentStep=0
          }

        }
      }, interval);
    },

      handleRowClick(item) {
      // //console.log("users=", item);
      //console.log("users=", item.columns.ID);
    //   //console.log("EventName", row.item.raw.Event_name);
    localStorage.setItem('ID', item.columns.ID);
    this.$router.push({ name: "QRCodesUser", params: { id: item.columns.ID }});
    },




      editEvent(id) {
        // Handle edit event logic
        //console.log("Edit Event:", id);
      },
      deleteEvent(id) {
        // Handle delete event logic
        //console.log("Delete Event:", id);
      },

      redirecttoEventDetails (item) {
      //console.log("item=",item.id)
    this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    },


    redirecttoEventView (item) {
      //console.log("item=",item.id)
    this.$router.push({ name: 'EventView', state: { id: item.id } })
    },


    },
  };
  </script>

    <style scoped>
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
      height: 30px;
      width: 300px;
    }


    </style>
