<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">
    <v-btn
          color="orange"
            class="text-none primary mx-4"
            min-width="92"
            rounded
            variant="outlined"
            @click="$router.push('/HomeEvents').catch((err) => {})"
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
        <v-container>
          <v-row>
            <v-col>
             <!--  <p v-for="office in filteredOffices" :key="office.id" class="text-center">Office: {{ office.office }}</p> -->
            </v-col>
          </v-row>
          <v-row no-gutters style="text-align: justify">
            <v-col class="top mt-6">

              <p>Activity: {{ Pangalan.Event_name }}</p>
              <p>Date:  {{ formattedDate_bai(Pangalan.Event_date) }}</p>

             <!--  <p v-for="office in filteredOffices" :key="office.id">Division: {{ office.Division }}</p>
              <p v-for="office in filteredOffices" :key="office.id">Section/Unit: {{ office.Section }}</p> -->
            <!--   <p>Project:</p> -->
            </v-col>
            <v-col class="top mt-6 ">

              <p class="d-flex align-center justify-center">Time: {{ formattedTime_To (Pangalan.Event_from) }}</p>
              <p class="d-flex align-center justify-center">Time: {{ Pangalan.Event_venue }}</p>
            </v-col>
          </v-row>


        </v-container>
        <v-col cols="12" class="mt-4">
          <h4>ATTENDANCE SHEET</h4>
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
        <v-table v-if="!isLoading">

          <v-data-table
            :headers="headers"
            :items-per-page="this.sortedItems.length"
            :items="eventAttendanceList"
            class="table"
            density="compact"
          >
            <template v-slot:item="{ item, index }">
              <tr :class="addPageBreak(index)">
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ index + 1}}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.fullname }}
                </td>
                <td class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.columns.designation }}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.timescanned }}
                </td>
                <td class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.raw.remarks }}
                </td>
              </tr>
            </template>
            <template #bottom></template>
          </v-data-table>
        </v-table>
      </v-container>
      <!-- <div class="page-break"></div> -->

      <div id="bottom-content">
        <p class="text-justify font-italic pa-4">
          I hereby certify and attest, to the best of my knowledge, that the
          above declartion are true and correct statements on the whereabouts of
          the personnel of this office.
        </p>
        <p></p>
        <v-row no-gutters style="text-align: justify">
          <v-col cols="3" class="font-italic">
            <p><span class="mdi mdi-circle"></span> Did not Participate</p>
            <p><span class="mdi mdi-circle"></span> On Field Business</p>
            <p><span class="mdi mdi-circle"></span> On Field</p>
            <p><span class="mdi mdi-circle"></span> On Leave</p>
            <p><span class="mdi mdi-circle"></span> Flexible Work Schedule</p>
            <p><span class="mdi mdi-circle"></span> Late</p>
          </v-col>
          <v-col cols="5" class="">
            <p>DNP</p>
            <p>OB</p>
            <p>OF</p>
            <p>OL</p>
            <p>FWL</p>
            <p>L (For those who comes late for the Activity)</p>
          </v-col>
          <v-col>
            <p>Monitoring In-Charge:</p>
            <p>Contact No:</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
  loadingProgress: 0,
      officeId:'',
      employees: [],
      itemsPerPage: 24,

      headers: [
        {
          key: "id",
          title: "NO.",
          sortable: false,
        },
        {
          key: "fullname",
          title: "NAME",
          class: "header-id",
          sortable: false,
        },
        { key: "designation", title: "POSITION", sortable: false },
        { key: "timescanned", title: "TIME SCANNED", sortable: false },
        { key: "remarks", title: "REMARKS" },
      ],
    };
  },


  computed: {

    ...mapGetters("events", { Pangalan: ["getName"], Event: ["getEvent"] }),
    ...mapGetters('events', { eventAttendanceList: ['getEventAttendance'] }),
    ...mapGetters("office", { OfficeList: "getOffices" }),


    sortedItems() {
      // Sort the items array based on fullname
      return this.eventAttendanceList.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },


    filteredOffices() {
      // Use computed property to filter offices based on the filterId
      return this.Offices.filter(office => String(office.id).includes(this.officeId));
    },


    ...mapState({
      employeeremarks: (state) => state.remarks,
    }),

    filteredUsers() {
      return this.fetechEmployees.filter(
        (user) => user.office_id === this.userData.office_id
      );
    },

    filteredItems() {
      if (!this.userData.office_id) {
        return this.Offices;
      }
      const id = parseInt(this.userData.office_id);
      return this.Offices.filter((item) => item.id === id);
    },

    passremark() {
      return this.employees.some((employee) => !!employee.remarks);
    },
  },

  created() {
    /*  this.$watch('selectedOffices', this.handleSelectedOfficesChange); */

    let data = new FormData;
    // console.log("ID=", this.$route.params.id)
    // console.log("EventName=", this.$route.params.Event_name)
    data.append('event_id', localStorage.getItem('ID'))
    /*   data.append('office_id', this.selectedOfficeID); */
    this.Admin_fetchPangalan(data);
    this.fetchOffices()

   /*  this.clicknibai(); */
   this.simulateLoading(() => {

}, );


  },

  methods: {
/*     ...mapActions("events", ["fetchPangalan"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("scaninsert", ["registerScan"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("scaninsert", ["saveallremarks"]), */
    ...mapActions('events', ['Admin_fetchPangalan']),
    ...mapActions("office", ["fetchOffices"]),

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

    formattedDate_bai(date) {
      const eventDate = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return eventDate.toLocaleDateString(undefined, options);
    },


    formattedTime_To(time) {
      const eventTime = new Date(`2000-01-01T${time}`);
      let hours = eventTime.getHours();
      const minutes = eventTime.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock

      // Format minutes to have leading zero if less than 10
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${hours}:${formattedMinutes} ${period}`;
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
  border: 1px solid #000;
  padding: 2px;
  overflow: hidden;
}
.table {
  table-layout: dense;
  border: 1px solid black;
}
#bottom-content {
  /* position: fixed; */
  bottom: 0;
  left: 5;
  right: 0;
  margin: auto;
  font-size: 16px;
  text-align: center;
  width: 90%; /* Adjust the width as needed */
}

/* .top {
  font-size: 14px;
  table-layout: dense;
} */

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
  .center1,
  center {
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
  #bottom-content {
    position: fixed;
    bottom: 0;
    left: 5%;
    width: 100%;
    background-color: white; /* Adjust background color if necessary */
    page-break-after: always;
    z-index: 100;
  }

  #table-content {
    page-break-before: always; /* Start the table on a new printed page */
    position: relative; /* Change to relative for normal flow on subsequent pages */
    top: 430px; /* Adjust the value based on your desired top margin */
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

  /* #table-content {
    margin-top: 33%;
  } */

  /* .table {
    page-break-before: 30;
    page-break-after: 30;
    page-break-inside: 30;
  } */
  /* .table {
    page-break-after:30;
  } */
}
</style>
