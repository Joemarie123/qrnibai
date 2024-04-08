<template>
  <v-card height="1000" flat color="#F9FAFC">
    <v-layout>
      <NavBar />

      <v-main>
        <div class="mt-12 container123">
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="3" lg="3" xl="2">
                <h3 class="ml-md-1 mt-n2 colorfortext">EVENTS HISTORY</h3>
              </v-col>

              <v-col class="mt-n4" cols="12" sm="6" md="6">
                <input v-model="search" class="textbox ml-n1 ml-lg-n16" placeholder="Search Event" />
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
                <v-card v-if="!isLoading" class="rounded-lg mt-n4">
                  <!-- Loading indicator -->


                  <!-- Data table -->
                  <v-data-table

                    density="compact"
                    :search="search"
                    item-key="ID"
                    :headers="headers"
                    :items="formattedData"
                    :items-per-page="15"
                    class="my_class elevation-1 my_classo_officehomeevents"
                  >
                    <template v-slot:item.actions="{ item }">
                      <button>
                        <v-icon class="mt-n2" color="primary" @click="handleRowEventHistoryClick(item)" large>mdi-printer</v-icon>
                        <v-tooltip activator="parent" location="top">Print</v-tooltip>
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
        { key: "Event_date", title: "Event Dates", sortable: false },
        { key: "Event_venue", title: "Event Venue", align: ' d-none d-sm-table-cell', sortable: false },
        { key: "AttendanceCount", title: "Attendance", align: ' d-none d-sm-table-cell', sortable: false },
        { key: "actions", title: "Actions", align: "center" },
      ],
    };
  },
  computed: {
    ...mapGetters("events", { events: "getEventsHistory" }),
    formattedData() {
      return this.events.map(item => {
        return {
          ...item,
          Event_date: this.formatDate(item.Event_date),
        };
      });
    },

  },
  created() {
    this.fetchEventsHistory();
    this.simulateLoading(() => {

}, );
  },
  methods: {
    ...mapActions('events', ['fetchEventsHistory']),

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
          if(this.events.length >0){
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


    fetchEventsHistory() {
      this.loading = true; // Set loading state before the request

      // Assuming this.fetchEventsHistory is an async action
      this.$store.dispatch('events/fetchEventsHistory')
        .then(() => {
          this.loading = false; // Set loading state after the request is complete
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
          this.loading = false; // Handle errors and set loading state accordingly
        });
    },

    formatDate(date) {
      if (!date) {
        return null;
      }

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },

    handleRowEventHistoryClick(item) {
      localStorage.setItem('ID', item.columns.ID);
      this.$router.push({ name: "EventDetails", params: { id: item.columns.ID } });
    },

    navigateTo_EventDetails() {
      this.$router.push('/EventDetails');
    },

    editEvent(id) {
      /// console.log("Edit Event:", id);
    },
    deleteEvent(id) {
      /// console.log("Delete Event:", id);
    },

    redirecttoEventDetails(item) {
      /// console.log("item=", item.id);
      this.$router.push({ name: 'EventDetails', state: { id: item.id } });
    },

    redirecttoEventView(item) {
      /// console.log("item=", item.id);
      this.$router.push({ name: 'EventView', state: { id: item.id } });
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
      /*   max-width: 1670px; */
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
        width: 350px;
        height: 35px;
      }
      </style>
