<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">

    <v-btn
      color="orange"
      class="text-none primary mx-4"
      min-width="92"
      rounded
      variant="outlined"
      @click="$router.push('/NonAttendance').catch((err) => {})"
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
            <!-- <p>Activity: {{ Event.Event_name }}</p> -->
          </v-col>
          <v-col cols="4" class="mx-10">
            <v-img :width="70" src="/Tagum.png" class="center center2"></v-img>
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
        </v-container>
        <v-col cols="12" class="mt-4">
          <p> {{  formattedDate_bai (Event.Event_date) }}</p>
        </v-col>
        <v-col cols="12" class="d-flex justify-start mt-4">
          <h4> NAME OFFICE:{{ officeName }}</h4>
        </v-col>
        <v-col cols="12" class="mt-4">
          <h4>NON-ATTENDANCE TO {{ uppercaseEventName  }}</h4>
        </v-col>
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
      </v-container>


      <v-container v-if="!isLoading" id="table-content">


        <v-table>
          <v-data-table
            :headers="headers"
            :items-per-page="this.employees.length"
            :items="filteredItems"
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
                  {{ item.columns.status }}
                </td>
                <td class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.columns.designation }}
                </td>
                <td :style="{ textAlign: 'left' }" class="cell-border">
                  {{ item.columns.SEX }}
                </td>
                <td v-if="item.raw.remarks" class="cell-border" :style="{ textAlign: 'left' }">
                  {{ item.raw.remarks }}
                </td>
              </tr>
            </template>
            <template #bottom></template>
          </v-data-table>
        </v-table>
      </v-container>

        <div id="bottom-content">


      <div >
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
      </div>

      <v-row>
        <v-col cols="3">
          <v-container>
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
                <th>{{ RegularCount }}</th>
              </tr>
              <tr>
                <th>2</th>
                <th>Coterminous</th>
                <th>{{ coterminousCount }}</th>
              </tr>
              <tr>
                <th>3</th>
                <th>Casual</th>
                <th>{{ casualcount }}</th>
              </tr>
              <tr>
                <th>4</th>
                <th>Job Order</th>
                <th>{{ jocount }}</th>
              </tr>
              <tr>
                <th>5</th>
                <th>Hon. Based</th>
                <th></th>
              </tr>

              <tr>
                <th></th>
                <th>TOTAL</th>
                <th>{{ totalemployee }}</th>
              </tr>
            </table>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-container>
            <table>
              <tr class="table-status">
                <th colspan="3">Non-Attendance</th>
              </tr>
              <tr colspan="4">
                <th></th>
                <th>REMARKS</th>
                <th>NO</th>
              </tr>
              <tr>
                <th>1</th>
                <th>Late</th>
                <th>{{ Late_Count }}</th>
              </tr>
              <tr>
                <th>2</th>
                <th>On-Leave</th>
                <th>{{ OL_Count }}</th>
              </tr>
              <tr>
                <th>3</th>
                <th>OB</th>
                <th>{{ OB_Count }}</th>
              </tr>
             <!--  <tr>
                <th>4</th>
                <th>Others: absent,awol</th>
                <th></th>
              </tr> -->
              <tr>
                <th>4</th>
                <th>DNP</th>
                <th>{{ DNP_count }}</th>
              </tr>
              <tr>
                <th>5</th>
                <th>OF</th>
                <th> {{ ofcount }}</th>
              </tr>
              <tr>
                <th>6</th>
                <th>PM SHIFT</th>
                <th> {{ pmshiftcount }}</th>
              </tr>

              <tr>
                <th></th>
                <th>TOTAL</th>
                <th>{{ totalCountRemarks }}</th>
              </tr>
            </table>
          </v-container>
        </v-col>
        <v-col cols="5">
          <v-container>
            <table class="table-status">
              <tr>
                <th colspan="3">SUMMARY</th>
              </tr>
              <tr colspan="4">
                <th></th>
                <th>PARTICULARS</th>
                <th>NO</th>
              </tr>
              <tr>
                <th colspan="2">Total No. of Actual Employees in the Office</th>
                <th>{{ totalemployee }}</th>
              </tr>
              <tr>
                <th>Less:</th>
                <th>
                  Non required to attend due to nature of work such as CEO-field
                  workers, CSU on duty, TMU on duty, other field works, etc.
                  (approved list should be provided to CHRMO)
                </th>
                <th></th>
              </tr>
              <tr>
                <th colspan="2">Total No. of Employee REQUIRED TO ATTEND</th>
                <th>{{ totalemployee }}</th>
              </tr>
              <tr>
                <th>Less:</th>
                <th>Total No. of Non-Attendance</th>
                <th>{{ totalNonattendance }}</th>
              </tr>
              <tr>
                <th colspan="2">ATTENDANCE DURING FLAG CEREMONY</th>
                <th>{{ itemCountWithTime }}</th>
              </tr>
            </table>
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div >
            <p class="" style="text-align: left">Prepared by:</p>
            <p></p><br />
            <p class="text-justify" style="font-weight: bold;">{{ userData.firstname }} {{ userData.lastname }}</p>
            <p class="text-justify" >Signature Over Printed Name</p>
            <p class="text-justify">{{ userData.designation }}</p>
            <p></p>
          </div>
        </v-col>
        <v-col>
          <div >
            <p class="" style="text-align: left">Validated by:</p>
            <p></p><br />
            <p class="text-justify" style="font-weight: bold;">{{ foundfullname.fullname }}</p>
            <p class="text-justify" >Signature Over Printed Name</p>
            <p class="text-justify">{{founddesignation.designation}}</p>
            <p></p>
          </div>
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

      userData: {
       designation: '',
       firstname: '',
       lastname: '',
       office_id:'',
     },

      officeId: "",
      employees: [],
      ofcount: 0,
      pmshiftcount:0,
      DNP_count:0,
      OB_Count:0,
      OL_Count:0,
      FWS_Count:0,
      Late_Count:0,

      jocount:0,
      casualcount:0,
      coterminousCount:0,
      RegularCount:0,
      totalemployee:0,
      totalCountRemarks:0,

      totalNonattendance:0,
      founddesignation:'',
      itemsPerPage: 24,

      targetID:8,
      foundSignatory:'',
      foundfullname:'',
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
        { key: "status", title: "EMPLOYMENT STATUS", sortable: false },
        {
          key: "designation",
          title: "DESIGNATION / POSITION",
          sortable: false,
        },
        { key: "SEX", title: "SEX", sortable: false },
        { key: "selectedRemarks", title: "REMARKS" },
      ],
    };
  },

  computed: {
    ...mapGetters("events", { Pangalan: ["getName"], Event: ["getEvent"] }),
    ...mapGetters("users", { fetechEmployees: ["getUsers"] }),
    ...mapGetters("office", { Offices: "getOffices" }),
    ...mapGetters("employees", { AddEmployeesbai: "getAdd_Employees" }),
    ...mapGetters("employees", {AddSignatoryhead: ['getAdd_Signatory']} ),

    officeName() {
      const office = this.Offices.find(office => office.id == this.userData.office_id);
      return office ? office.office : 'Office not found';
    },
    itemCountWithTime() {
      return this.employees.filter(item => item.timescanned).length;
    },

    filteredItems() {
      return this.employees.filter(item => item.remarks !== 'INVALID QRCODES' && item.remarks !== '' && item.remarks !== null  );
    },

    uppercaseEventName() {
      return this.Event.Event_name.toUpperCase();
    },
  /*   filteredOffices() {

      return this.Offices.filter((office) =>
        String(office.id).includes(this.officeId)
      );
    }, */

    ...mapState({
      employeeremarks: (state) => state.remarks,
    }),

    filteredUsers() {
      return this.fetechEmployees.filter(
        (user) => user.office_id === this.userData.office_id
      );
    },

 /*    filteredItems() {
      if (!this.userData.office_id) {
        return this.Offices;
      }
      const id = parseInt(this.userData.office_id);
      return this.Offices.filter((item) => item.id === id);
    },
 */
    passremark() {
      return this.employees.some((employee) => !!employee.remarks);
    },
  },

  created() {
    setTimeout(() => {
      this.count_All_REMARKS();
      this.count_All_Status();
  }, 1000);


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

      this.simulateLoading(() => {

}, );

    });

    this.fetchData();
    let data2 = new FormData();
      data2.append('office_id', this.userData.office_id);
      console.log("office_id=>",this.userData.office_id)
      data2.append('type', "display");
      this.Addsignatory(data2).then(()  => {
        console.log("Display Head:", this.AddSignatoryhead);
        this.foundSignatory = this.AddSignatoryhead.find(item => item.Office_id == this.userData.office_id);
     /*  console.log("Control Number:", this.foundSignatory.Controlno);
      console.log("Pangalan:", this.Pangalan);
   console.log("Display Head:", this.AddEmployeesbai);
 */

        this.foundfullname = this.Pangalan.find(item => item.Controlno == this.foundSignatory.controlno)
        console.log("Found Head Fullname:", this.foundfullname.fullname);

        this.founddesignation = this.Pangalan.find(item => item.Controlno == this.foundSignatory.controlno)
        console.log("Found Head Fullname:", this.founddesignation.designation);

      }).catch(e => console.log(e.message));
/*     console.log("Display Head:", this.displayhead); */


  },

  mounted() {




  },

  methods: {
    ...mapActions("events", ["fetchPangalan"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("scaninsert", ["registerScan"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("scaninsert", ["saveallremarks"]),
    ...mapActions("employees", ["Addsignatory"]),

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
          if(this.employees.length >0){
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


    fetchData() {
     const userDataJSON = localStorage.getItem('user');
     if (userDataJSON) {
       this.userData = JSON.parse(userDataJSON);
     }
    },

    count_All_Status()
    {
      const JobOrder_Entries = this.employees.filter(entry => entry.status == "CONTRACTUAL" );
      const Casual_Entries = this.employees.filter(entry => entry.status == "CASUAL" );
      const coterminous_Entries = this.employees.filter(entry => entry.status == "CO-TERMINOUS");
      const Regular_Entries = this.employees.filter(entry => entry.status == "REGULAR");


      this.jocount = JobOrder_Entries.length;
      this.casualcount = Casual_Entries.length;
      this.coterminousCount = coterminous_Entries.length;
      this.RegularCount = Regular_Entries.length;

      this.totalemployee = this.employees.length;

  this.totalNonattendance = this.totalemployee - this.itemCountWithTime
    },

    count_All_REMARKS() {

      const of_Entries = this.employees.filter(entry => entry.remarks == "OF" );
      const pmshift_entries = this.employees.filter(entry => entry.remarks == "PM Shift" );
      const DNP_entries = this.employees.filter(entry => entry.remarks == "DNP" );
      const OB_entries = this.employees.filter(entry => entry.remarks == "OB" );
      const OL_entries = this.employees.filter(entry => entry.remarks == "OL" );
      const FWS_entries = this.employees.filter(entry => entry.remarks == "FWS" );
      const Late_entries = this.employees.filter(entry => entry.remarks == "Late" );

      this.ofcount = of_Entries.length;
      this.pmshiftcount = pmshift_entries.length;
      this.DNP_count = DNP_entries.length;
      this.OB_Count = OB_entries.length;
      this.OL_Count = OL_entries.length;
      this.FWS_Count = FWS_entries.length;
      this.Late_Count = Late_entries.length;

       // Calculate total count
  this.totalCountRemarks = this.ofcount + this.pmshiftcount + this.DNP_count + this.OB_Count + this.OL_Count + this.FWS_Count + this.Late_Count;
    },


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

table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}
table {
  border-collapse: collapse;
  width: 100%;
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
.table-status {
  font-weight: normal;
}

@media print {
  #btn-group {
    display: none;
  }
  .center1{
    margin-top: -130px;
  }

  .center2{
    margin-top: -120px;
  }

  #bottom-content {
    position: fixed;
    bottom: 0;
    left: 1%;
    width: 100%;
    background-color: white; /* Adjust background color if necessary */
    page-break-after: always;
    z-index: 100;
  }

}
</style>
