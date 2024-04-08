<template>
   <v-card  height="1000" flat color="#F9FAFC" >
    <v-layout>
  <NavBar/>

  <v-main>
  <div class="mt-10 container123">
    <v-container class="d-flex justify-start">
      <v-row >
      <h2 class="mx-2 mt-2 colorfortext" >OFFICE LIST</h2>
      <v-btn class="ml-5 ma-2" color="success" rounded-lg variant="outlined" @click="createevents = true">+ ADD OFFICE</v-btn>
    </v-row>
        <v-dialog v-model="createevents"  max-width="510px">
          <v-card>

              <v-container>
            <v-row >

             <button @click="createevents = false" class="close-button"><strong>X</strong></button>
            <v-col cols="12"  sm="12" md="12" class="my-5 ml-7 mt-2" >
            <p class="classeventdetails colorfortext" ><strong>ADD Offices</strong></p>

  </v-col>

  <v-col  cols="10" sm="10" md="10"
      class="ml-10 mt-n1">

     <!--    <v-row>
      <v-col cols="12"  sm="3" md="3" class="ml-n8 mt-md-n2 ml-md-n4 mt-sm-n2 ml-sm-n4">
    <p class="classfortitle ml-5">Date:</p>
    </v-col>

    <v-col cols="12" sm="9" md="9" class="mt-n3 mt-md-n0 mt-sm-n0" >
     <v-text-field height="10" variant="outlined" density="compact" type="date" label="Event Name"></v-text-field>
    </v-col>
  </v-row> -->

     </v-col>

     <v-col  cols="10" sm="10" md="10"   class="ml-10 mt-n5"
  >
<!--   <v-row>

      <v-col cols="12" md="4" sm="4" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4" >
    <p class="classfortitle ml-5">Department:</p>
    </v-col>

    <v-col cols="12" md="8" sm="9" class="mt-n4 mt-md-1 mt-sm-1">
     <v-text-field height="10" variant="outlined" density="compact"  label="Office Name"></v-text-field>
    </v-col>
  </v-row> -->


     </v-col>


     <v-col  cols="10" sm="10" md="10" class="ml-10 mt-n8"
  >
<!--   <v-row> -->
<!--
  <v-col cols="12" md="4" sm="4" class="ml-n8 mt-n1 mt-md-2 ml-md-n4 mt-sm-2 ml-sm-n4">
  <p class="classfortitle ml-5">Division:</p>
  </v-col>

  <v-col cols="12" md="8" sm="8" class="mt-n4 mt-md-1 mt-sm-1">
  <v-text-field height="10" variant="outlined" density="compact" label="Venue"></v-text-field>
  </v-col> -->
<!--   </v-row> -->

 <!--  <v-row>

  <v-col cols="12" md="4" sm="4" class="ml-n8 mt-n1 mt-md-n6 ml-md-n4 mt-sm-2 ml-sm-n4">
  <p class="classfortitle ml-5">Section:</p>
  </v-col>

  <v-col cols="12" md="8" sm="8" class="mt-n6 mt-md-n7 mt-sm-1">
  <v-text-field height="10" variant="outlined" density="compact" label="Section"></v-text-field>
  </v-col>
  </v-row> -->

  <v-row>

  <v-col cols="12" md="4" sm="4" class="ml-n8 mt-n1 mt-md-n6 ml-md-n4 mt-sm-2 ml-sm-n4">
  <p class="classfortitle ml-5">Office Name:</p>
  </v-col>

  <v-col cols="12" md="8" sm="8" class="mt-n6 mt-md-n7 mt-sm-1">
  <v-textarea v-model="officename" height="10" variant="outlined" density="compact" label="Office Name"></v-textarea>
  </v-col>
  </v-row>

     </v-col>




  </v-row>

  <v-row>

  <v-col cols="12" sm="12" md="11" class="d-flex justify-end my-5 mt-n4 ml-n5 ">

      <v-btn  class="pa-2 ml-5 mt-n1 colorforbutton"
          outlined dark
          @click="saveoffice()">
        Submit
      </v-btn>


  </v-col>

  </v-row>


  </v-container>
  </v-card>
        </v-dialog>



    </v-container>

    <v-container>
      <v-row class="mt-n8">
        <v-col>
          <!-- <table>
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
           </v-btn> -->
         <!--  <v-btn class="mx-2" color="green" @click="redirecttoEventDetails(row)">
              <v-icon size="25">mdi-printer</v-icon>
          </v-btn> -->
                <!-- </td>
              </tr>
            </tbody>
          </table> -->
          <v-data-table
      :headers="headers"
      :items="Offices"
      :items-per-page="15"
      class="my_class elevation-1"

    >
<!--     <template #bottom ></template> -->
    <template v-slot:item.actions="{ item }">


<button>
<v-icon left color="success"   @click="handleRowClick(item)" class="white--text mx-2">mdi-update

</v-icon>
 <span  style="color: rgb(10, 189, 90);">Edit</span>
</button>
<!--
<button>
<v-icon left color="red"   @click="handleRowClick(item)" class="white--text mx-2">mdi-delete</v-icon>
</button> -->

  </template>


  </v-data-table>
  <v-dialog v-model="dialogVisible" persistent max-width="280">
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
        <v-btn color="green" text @click="dialogVisible = false">OK</v-btn>
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
  import { mapActions, mapGetters, mapState } from "vuex";
  import NavBar from "@/components/NavBar.vue";

  export default {

    components: {
      NavBar,
    },

  data() {
    return {
      officename:'',
      createevents:false,
  dialogVisible:false,
      items: [
        { title: "My Account", icon: "mdi-account",  },
        { title: "Settings", icon: "mdi-clock" },
        { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
        // { title: "Click Me 2" },
      ],

      headers: [

          { key: "office", title: "Office Name", sortable: false },
          { key: "employees", title: "Employees Count", sortable: false },
       /*    { key: "actions", title: "Actions" , align:"center" }, */


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

  computed: {
    ...mapGetters("office", { Offices: "getOffices" }),

    filteredOffices() {
      // Use computed property to filter offices based on the filterId
      return this.Offices.filter(office => String(office.id).includes(this.sample_id));
    },
  },

  created() {
    this.fetchOffices()
   /*  console.log("Get OFFICE",this.fetchOffices) */
  },

  methods: {
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("office", ["AddnewOffice"]),

    saveoffice()
    {
      let data = new FormData();
      data.append('office', this.officename);

      this.AddnewOffice(data).then(() => {
        /*   this.navigateTo('/walup'); */
        }).catch(e => console.log(e.message));

        this.officename = '';
          this.dialogVisible = true;
        this.createevents = false
        this.fetchOffices()
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
  };
  </script>

  <style scoped>


  .container123 {
  /*   max-width: 1400px; */
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
  }
  .my-header-style {
    background: #666fff;
  }
    .classfortitle{
    /*  color: #70b354; */
      font-size: 16px;
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
