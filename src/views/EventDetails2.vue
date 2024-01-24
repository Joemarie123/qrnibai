<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">
    <v-btn
      color="orange"
      class="text-none primary mx-4"
      min-width="92"
      rounded
      variant="outlined"
      @click="$router.push('/EventHistory').catch((err) => {})"
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
              <p
                v-for="office in filteredOffices"
                :key="office.id"
                class="text-center"
              >
                Office: {{ office.office }}
              </p>
            </v-col>
          </v-row>
          <!-- <v-row no-gutters style="text-align: justify">
            <v-col class="top mt-6">

              <p>Activity: {{ Event.Event_name }}</p>
              <p>Date:  {{  formattedDate_bai (Event.Event_date) }}</p>
            </v-col>
            <v-col class="top mt-6 ">

              <p class="d-flex align-center justify-center">Time: {{ formattedTime_To (Event.Event_from) }}</p>
              <p class="d-flex align-center justify-center">Time: {{ Event.Event_venue }}</p>
            </v-col>
          </v-row> -->
        </v-container>
        <v-col cols="12" class="mt-4">
          <h4>NON-ATTENDANCE TO FLAG RAISING CEREMONY</h4>
        </v-col>
      </v-container>
      <v-container id="table-content">
        <v-table>
          <v-data-table
            :headers="headers"
            :items-per-page="this.employees.length"
            :items="employees"
            class="table"
            density="compact"
          >
            <template v-slot:item="{ item, index }">
              <tr :class="addPageBreak(index)">
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ index + 1 }}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.fullname }}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.fullname }}
                </td>
                <td class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.columns.empstatus }}
                </td>
                <td class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.columns.designation }}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.sex }}
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
        <p class="" style="text-align: left">Noted:</p>
        <p class="text-justify font-italic pa-4">
          1. If there is a complete attendance to Flag Ceremony, kindly write
          above as "Complete Attendance" still to be certified by the Head of
          Office and to be submitted to the CHRMO. <br />
          2. Submit an updated list pf your ACTUAL EMPLOYEES to the CHRMO AS OF
          February 1, 2023 <br />
          3. Kindly accomplished the following information below (if any
          concerns, refer to CHRMO). <br />
        </p>
        <p></p>

        <!-- <v-row no-gutters style="text-align: justify">
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
        </v-row> -->
      </div>
    </v-container>

    <v-row>
      <v-col>
        <v-container>
          <div>
            <table class="table-status">
              <tr>
                <th colspan="3">Actual No. of Employees</th>
              </tr>
              <tr colspan="4">
                <th></th>
                <th>STATUS</th>
                <th>NO</th>
              </tr>
              <tr>
                <th>1</th>
                <th>Permanent</th>
                <th></th>
              </tr>
              <tr>
                <th>2</th>
                <th>Coterminous</th>
                <th></th>
              </tr>
              <tr>
                <th>3</th>
                <th>Casual</th>
                <th></th>
              </tr>
              <tr>
                <th>4</th>
                <th>Job Order</th>
                <th></th>
              </tr>
              <tr>
                <th>5</th>
                <th>Hon. Based</th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </table>
          </div>
        </v-container>
      </v-col>
      <v-col>
        <v-container>
          <div>
            <table class="table-status">
              <tr>
                <th colspan="3">Actual No. of Employees</th>
              </tr>
              <tr colspan="4">
                <th></th>
                <th>STATUS</th>
                <th>NO</th>
              </tr>
              <tr>
                <th>1</th>
                <th>Permanent</th>
                <th></th>
              </tr>
              <tr>
                <th>2</th>
                <th>Coterminous</th>
                <th></th>
              </tr>
              <tr>
                <th>3</th>
                <th>Casual</th>
                <th></th>
              </tr>
              <tr>
                <th>4</th>
                <th>Job Order</th>
                <th></th>
              </tr>
              <tr>
                <th>5</th>
                <th>Hon. Based</th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </table>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      officeId: "",
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
          title: "LAST NAME",
          class: "header-id",
          sortable: false,
        },
        {
          key: "firstname",
          title: "FIRST NAME",
          sortable: false,
        },
        { key: "empstatus", title: "EMPLOYMENT STATUS", sortable: false },
        {
          key: "designation",
          title: "DESIGNATION / POSITION",
          sortable: false,
        },
        { key: "sex", title: "SEX", sortable: false },
        { key: "selectedRemarks", title: "REMARKS" },
      ],
    };
  },

  computed: {
    ...mapGetters("events", { Pangalan: ["getName"], Event: ["getEvent"] }),
    ...mapGetters("users", { fetechEmployees: ["getUsers"] }),
    ...mapGetters("office", { Offices: "getOffices" }),

    filteredOffices() {
      // Use computed property to filter offices based on the filterId
      return this.Offices.filter((office) =>
        String(office.id).includes(this.officeId)
      );
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
    this.fetchOffices().then((req) => {
      /* this.fetchData(); */
      /* this.searchByOffice(); */
    });
    let data = new FormData();
    const adminrecords = JSON.parse(localStorage.getItem("user"));
    this.officeId = adminrecords.office_id; // Set the officeId property
    console.log("ID=", adminrecords.office_id);

    console.log("EventName=", this.$route.params.Event_name);
    data.append("event_id", localStorage.getItem("ID"));

    this.eventayde = localStorage.getItem("ID");

    data.append("office_id", adminrecords.office_id);
    this.fetchPangalan(data).then((res) => {
      this.employees = this.Pangalan;
      /* this.searchByOffice(); */
      console.log("employees=", this.employees);
    });
  },

  methods: {
    ...mapActions("events", ["fetchPangalan"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("scaninsert", ["registerScan"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("scaninsert", ["saveallremarks"]),

    formattedDate_bai(date) {
      const eventDate = new Date(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return eventDate.toLocaleDateString(undefined, options);
    },

    formattedTime_To(time) {
      const eventTime = new Date(`2000-01-01T${time}`);
      let hours = eventTime.getHours();
      const minutes = eventTime.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";

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
.table-status {
  font-weight: 10px;
}
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 30%;
}

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
