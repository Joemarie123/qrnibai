<template>
    <div id="btn-group" class="mx-auto w-75 mt-2">
        <v-btn
          color="orange"
            class="text-none primary mx-4"
            min-width="92"
            rounded
            variant="outlined"
            @click="$router.push('/EventView2').catch((err) => {})"
          >
            <v-icon> mdi-arrow-left </v-icon>
            Back
          </v-btn>
      <v-btn class="bg-green" @click="print"> Print </v-btn>
    </div>
    <div class="wholePage">
      <v-container
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
        rounded
        max-width="90%"
        width="100%"
      >
        <v-container id="top-content">
          <v-row>
            <v-col cols="4">
              <v-img :width="70" src="/phil.png" class="center1"></v-img>
            </v-col>

            <v-col cols="4">
              <h5 class="mt-12">Republic of the Philippines</h5>
              <h5 class="">Province of Davao del Norte</h5>
              <h5 class="">CITY OF TAGUM</h5>
            </v-col>
            <v-col cols="4" class="mx-10">
              <v-img :width="70" src="/Tagum.png" class="center"></v-img>
            </v-col>
          </v-row>
          <v-col cols="12">
            <h3>AUTHORITY TO CLAIM MEAL ALLOWANCE</h3>
            <p>
              This is to authorize the following personnel enumerated below to
              claim Meal Allowance for the 123 PCSA FIESTA DE PAMILIA & LARONG
              PINOY on September 23, 2023 to be held at the Energy Park, Apokon,
              Tagum City.
            </p>
          </v-col>
          <v-col cols="12">
            <h4 class="text-left">Office: {{ Name }} </h4>
          </v-col>
        </v-container>
        <v-container id="table-content">
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
          <v-table>
            <v-data-table
            v-if="!isLoading"
            :search="Office_AYDE"
              :headers="headers"
              :items-per-page="this.sortedItems.length"
              :items="sortedItems"
              class="table"
              density="compact"
            >
              <template v-slot:item="{ item, index }">
                <tr :class="addPageBreak(index)">
                  <td :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </td>
                  <td :style="{ textAlign: 'left' }">
                    {{ item.columns.fullname }}
                  </td>
                  <td :style="{ textAlign: 'left' }">
                    {{ item.columns.designation }}
                  </td>
                  <td :style="{ textAlign: 'left' }">
                    <!-- {{ item.columns.timescanned }} -->
                  </td>
                  <td :style="{ textAlign: 'left' }">
                    <!-- {{ item.raw.remarks }} -->
                  </td>
                </tr>
              </template>

              <template #bottom></template>
            </v-data-table>
          </v-table>
        </v-container>

        <div id="bottom-content" class="mt-12">
          <p>Approved by:</p>
          <p
            style="
              font-weight: bold;
              text-decoration: underline;
              height: auto;
              margin-top: 20px;
            "
          >
            REY T. UY
          </p>
          <p>City Mayor</p>
        </div>
      </v-container>
    </div>
  </template>
  <script>
  import { mapActions, mapGetters, mapState } from "vuex";
  export default {
    data() {
      return {
        employees: [],
        isLoading: false,
       loadingProgress: 0,
        itemsPerPage: 29,
        Office_AYDE:'',
        Office_IDD:'',
        headers: [
          {
            align: "start",
            key: "id",
            sortable: false,
            title: "NO.",
          },
          {
            key: "fullname",
            title: "NAME",
            class: "header-id",
            sortable: false,
          },
          { key: "office_id", title: "POSITION", sortable: false, align: " d-none",},
          { key: "designation", title: "POSITION", sortable: false },
          { key: "timescanned", title: "CONTACT NO.", sortable: false },
          { key: "selectedRemarks", title: "SIGNATURE" },
        ],
      };
    },

    computed: {
        ...mapGetters("events", { Pangalan: ["getName"], Event: ["getEvent"] }),
      ...mapGetters('events', { eventAttendanceList: ['getEventAttendance'] }),
    ...mapGetters("office", { OfficeList: "getOffices" }),
      ...mapState({
        employeeremarks: (state) => state.remarks,
      }),

      sortedItems() {
      // Sort the items array based on fullname
      return this.eventAttendanceList.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },

      Name() {
      // Retrieve from localStorage
      return localStorage.getItem('Name');

    },

    Office_AYDE() {
      // Retrieve from localStorage
      return localStorage.getItem('Office_AYDE');

    },
    },

    created() {
        this.fetchOffices().then((req) => {
       /*  this.fetchData(); */
       /*  this.searchByOffice(); */
        // console.log("offices=",this.Offices);
      });
        let data = new FormData;
    // console.log("ID=", this.$route.params.id)
    // console.log("EventName=", this.$route.params.Event_name)
    data.append('event_id', localStorage.getItem('ID'))
    /*   data.append('office_id', this.selectedOfficeID); */
    this.Admin_fetchPangalan(data);
this.Office_IDD=localStorage.getItem('Office_AYDE');

this.simulateLoading(() => {

}, );
    },

    methods: {
        ...mapActions('events', ['Admin_fetchPangalan']),
      ...mapActions("events", ["fetchPangalan"]),
      ...mapActions("users", ["fetchUsers"]),
      ...mapActions("scaninsert", ["registerScan"]),
      ...mapActions("office", ["fetchOffices"]),
      ...mapActions("scaninsert", ["saveallremarks"]),

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
          if(this.eventAttendanceList.length >0){
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


      print() {
        if (window) window.print();
      },
      addPageBreak(index) {
        // Add a class to the row to trigger a page break
        return index !== 0 && index % this.itemsPerPage === 0 ? "page-break" : "";
      },
    },
  };
  </script>
  <style scoped>

  td {
    border: 1px solid black;
    padding: 2px;
    overflow: hidden;
  }
  .table {
    /* font-size: 14px; */
    table-layout: dense;
    border: 1px solid black;
  }
  #bottom-content {
    bottom: 0;
    left: 5;
    right: 0;
    text-align: center;
    font-size: 16px;
    width: 20%;
  }
  .page-break {
    page-break-after: always;
  }


  .center1 {
    margin: 0;
    position: absolute;
    top: 10%;
    left: 20%;
  }
  .center {
    margin: 0;
    position: absolute;
    top: 10%;
    right: 20%;
  }
  #head {
    background-color: #70b354;
    color: white;
    text-align: center;
  }
  #pic {
    align-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    #pic {
      size: 50 !important;
    }
  }
  @media print {
    .center1, center {
      margin: 0;
      position: absolute;
      top: 5%;
      left: 20%;
    }
    #btn-group {
      display: none;
    }
    .wholePage {
      font-size: 20px !important;
    }
    .table {
      border: none; /* Example: Remove borders for print */
    }
    #table-content {
      page-break-before: always; /* Start the table on a new printed page */
      position: relative; /* Change to relative for normal flow on subsequent pages */
      top: 380px; /* Adjust the value based on your desired top margin */
    }

    #top-content {
      page-break-before: always;
      position: fixed;
      top: 0;
      left: 10px;
      width: 100%;
      background-color: white; /* Adjust background color if necessary */
      z-index: 100;
    }
    #top-content v-img {
      width: 70px; /* Adjust the width of the images */
    }

    #top-content h5 {
      margin-top: 12px; /* Adjust the margin-top for the h5 elements */
    }
    #bottom-content {
      position: fixed;
      bottom: 0;
      left: 5%;
      width: 100%;
      background-color: white; /* Adjust background color if necessary */
      page-break-after: always;
      z-index: 100;
    }
  }
  </style>
