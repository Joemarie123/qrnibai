<template>
  <v-card height="1000" flat color="#F9FAFC">
    <v-layout>
      <NavBar />

      <v-main>
        <div class="mt-n8 mt-lg-16  container123">
          <v-container>

            <!--   <v-btn @click="createevents = true" class="my-10" color="green" height="100">
    <v-icon size="90">mdi-calendar-plus</v-icon>
    <span class="mt-11">Create Events</span></v-btn
  > -->

              <v-dialog persistent v-model="displayAttendanceCount" max-width="700px">

                <v-container>
                  <v-row>

                    <v-card>
                      <v-row>
                          <v-col cols="8" lg="10">
                      <v-text-field class="mx-2 mt-2" v-model="SearchattendanceCount" label="Search"></v-text-field>
                    </v-col>

                    <v-col cols="2" class="mt-4">
                     <v-btn color="orange" @click="displayAttendanceCount = false">Close</v-btn>
                    </v-col>
                    </v-row>

                        <v-data-table :search="SearchattendanceCount" :headers="headers_AttendanceCount" :items="attendancecountlist" >

                        </v-data-table>

                    </v-card>
                  </v-row>
                </v-container>


              </v-dialog>


          </v-container>

          <v-container>

            <v-row>
              <!--   <v-col class="d-flex justify-end ml-n3 " cols="12">
    <v-btn color="success"  rounded-lg variant="outlined" @click="createevents = true"> + Create Events</v-btn>
  </v-col>
-->
              <v-col cols="12" lg="2">
                <v-btn class="mt-3 ml-1 " @click="OpenDialog_EventDetails()" rounded-lg color="success"  variant="outlined">EMPLOYEES COUNT</v-btn>
              </v-col>


              <v-col cols="12" lg="8">
                <v-select class="mt-4 ml-n2" density="compact" label="Select Office" v-model="selectedOffices"
                  :items="modifiedOfficesList" color="success" variant="underlined"></v-select>
            <!--     <p> ID: {{ selectedOfficeID }}</p> -->

                <!--  <v-btn color="green" @click="clicknibai()">Click Me</v-btn> -->
              </v-col>

              <v-col cols="12" lg="4" md="6" class="mt-n4 ml-n4  ml-lg-4">
                <v-card class="image rounded-lg">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                     <!--    <p style="font-size:15px"> <b>Event Name:</b> {{ Pangalan.Even }} </p> -->
                        <p style="font-size:15px"> <b>Event Name:</b> {{ Pangalan.Event_name }} </p>
                      </v-col>
                      <v-col cols="12" class="mt-n5">
                        <p style="font-size:15px"><b>Date of Event:</b> {{ formattedDate_bai(Pangalan.Event_date) }} </p>
                      </v-col>
                      <v-col cols="12" class="mt-n5">
                        <p style="font-size:15px"><b>Event Venue:</b> {{ Pangalan.Event_venue }} </p>
                      </v-col>
                     <!--  <v-col cols="12" class="mt-n6">
                        <p style="font-size:15px"><b>Event Time:</b> {{ formattedTime_From(Pangalan.Event_from) }} </p>
                      </v-col> -->
                      <!--  <v-col cols="12" class="mt-n6">
      <p style="font-size:15px"><b>Event Time:</b> {{ Pangalan.Event_from }} </p>
  </v-col> -->
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>

              <v-col cols="12" lg="4" md="6" class="mt-n4 ml-n4">
                <v-card class="image rounded-lg">
                  <v-container>
                    <v-row>

                      <v-col cols="7">
                        <p style="font-size:15px"> <b>Did not Participate:</b> {{ dnpCount }} </p>
                      </v-col>
                      <v-col cols="5" class="">

                        <p style="font-size:15px"><b>On Field: </b>{{ ofcount }} </p>
                      </v-col>
                      <v-col cols="7" class="mt-n5">

                        <p style="font-size:15px"><b>On Field Business: </b> {{ obcount }} </p>
                      </v-col>


                      <v-col cols="5">
                        <p style="font-size:15px" class="mt-n5"> <b>On Leave:</b> {{ olscount }} </p>
                      </v-col>
                      <v-col cols="7" class="mt-n5">
                        <p style="font-size:15px"><b>Flexible Work Schedule: </b>{{ fwscount }} </p>

                      </v-col>
                      <v-col cols="5" class="mt-n5">
                        <p style="font-size:15px"><b>Late: </b>{{ latecount }} </p>
                      </v-col>

                    </v-row>
                  </v-container>
                </v-card>
              </v-col>


              <v-col cols="12" lg="2" md="6" class="ml-n4 mt-n4">
                <v-card class="image rounded-lg">
                  <v-container>
                    <v-row>
                      <!-- <v-col> -->
                      <v-col class="d-flex justify-start" cols="12">
                        <!--  <div class="text--center  ">  -->
                        <!--  <p style="font-size:22px"><b>1542/{{ filteredEmployees.length }}</b></p>  -->

                        <!--  </div> -->
                      </v-col>
                      <v-col></v-col>

                      <v-col class="d-flex justify-start mt-n9" cols="12">

                        <p v-if="!selectedOfficeID" style="font-size:22px"><b>{{ getTotalTimescannedCount() }}/{{
                          eventAttendanceList.length }}</b></p>
                        <p v-else style="font-size:22px"><b>{{ getOfficeIdCountWithTimescanned(selectedOfficeID) }}/{{
                          getOfficeIdCount(selectedOfficeID) }}</b></p>

                      </v-col>
                      <v-col class="d-flex justify-end mt-n5" cols="12">
                        <p>No. of Attendees </p>
                      </v-col>
                      <!--  </v-col> -->
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>


              <v-col cols="12" lg="2" md="6" class="ml-n4 mt-n4">
                <v-card class="image rounded-lg">
                  <v-container>
                    <v-row>
                      <!-- <v-col> -->
                      <v-col class="d-flex justify-start mt-n2" cols="12" lg="12">
                          <v-btn density="compact" class="sizeprint" @click="handleRowClick"  color="success">Attendance Print</v-btn>
                      </v-col>

                      <v-col class="d-flex justify-start mt-n5" cols="12">
                        <v-btn density="compact" class="sizeprint"  @click="handleRowClick1" color="success">Authority Print</v-btn>
                      </v-col>

                       <v-col class="d-flex justify-start mt-n5" cols="12">
                        <v-btn density="compact" class="sizeprint"  @click="handleRowClick2"  color="success">Payroll Print</v-btn>
                      </v-col>


                    </v-row>
                  </v-container>
                </v-card>
              </v-col>




              <!--  <v-col class="mt-n4" cols="5">
  <input v-model="searchOfficeId" class="textbox"  placeholder="Search Event">
</v-col> -->

              <v-col cols="12" class="ml-n4 ml-lg-n1">

                <v-card class='rounded-lg mt-n4 '>
                  <v-data-table  :search="selectedOfficeID" :items="eventAttendanceList" item-key="ID" :headers="headers"
                    :items-per-page="5" class="elevation-1 ">
                    <template v-slot:item.actions="{ item }">

                      <button>
                        <v-icon left color="success" class="white--text mx-2">mdi-eye</v-icon>
                      </button>

                      <button>
                        <v-icon color="primary" large>mdi-printer</v-icon>
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
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from 'vuex';



export default {

  components: {
    NavBar,
  },

  data() {
    return {
      displayAttendanceCount:false,

      selectedOffices: 'All', // Set a default value of "All"
      searchOfficeId: "",
      dnpCount: 0,
      obcount: 0,
      ofcount: 0,
      fwscount: 0,
      olscount: 0,
      latecount: 0,
      ID: "",
      Event_name: '',
      search: "",
      SearchattendanceCount:"",
      eventname: '',
      eventdate: '',
      eventfrom: '',
      eventto: '',
      eventvue: '',
      officeaydenew: 1,
      officeslista: [],
      namesData: [], // Array to store names data
      /*   selectedOffices:'', */
      createevents: false,
      selectedOfficeID: '',
      idkunohay: 8,

      items: [
        { title: "My Account", icon: "mdi-account", },
        { title: "Settings", icon: "mdi-clock" },
        { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
        // { title: "Click Me 2" },
      ],

      headers_EventDetails: [
        {
          align: "start",
          key: "office_id",
          sortable: false,
          title: "Office ID",
          align: " d-none"
        },
        { key: "fullname", title: "Full Name", sortable: false },

        /*   { key: "office", title: "Office", sortable: false }, */


      ],

      headers_AttendanceCount: [
      { key: "office", title: "Office Name", sortable: false },
        { key: "employees", title: "Employees Count", sortable: false , align:"center" },

        /*   { key: "office", title: "Office", sortable: false }, */


      ],


      headers: [
        {
          align: "start",
          key: "office_id",
          sortable: false,
          title: "Office ID",
          align: " d-none"
        },
        { key: "fullname", title: "Full Name", sortable: false },
        { key: "designation", title: "Position", sortable: false },
        { key: "timescanned", title: "Time Scanned", sortable: false },
        { key: "remarks", title: "Remaks", sortable: false },
        /*   { key: "office", title: "Office", sortable: false }, */


      ],

    };
  },

  computed: {



    shouldCallMethods() {
      return !this.selectedOfficeID;
    },

    ...mapGetters('events', { attendancecountlist: ['getattendancecount']}),
    ...mapGetters('events', { Pangalan: ['getName'] }),
    ...mapGetters('events', { eventAttendanceList: ['getEventAttendance']}),
    ...mapGetters("office", { OfficeList: "getOffices" }),

    sortedItems() {
      // Sort the items array based on fullname
      return this.eventAttendanceList.slice().sort((a, b) => {
        // Use localeCompare to sort strings alphabetically
        return a.fullname.localeCompare(b.fullname);
      });
    },


    getPangalanArrayLength() {
      // Access the Pangalan array and get its length
      return this.Pangalan.length;
    },

    /*  filteredEmployees() {
       return this.eventAttendanceList.filter(
         (employee) =>
           employee.office_id.includes(this.selectedOfficeID) ||
           employee.office_id == this.selectedOfficeID
       );
     }, */

    modifiedOfficesList() {

      return ['All', ...this.officeslista ];
    },

  },

  created() {


    /*  this.$watch('selectedOffices', this.handleSelectedOfficesChange); */
    let data = new FormData;
    data.append('event_id', localStorage.getItem('ID'))
    this.Admin_fetchPangalan(data);



    let data2 = new FormData;
    data2.append('event_id', localStorage.getItem('ID'))
    this.fetchAttendanceCount(data2);
    console.log("Count Per OFFICE", this.attendancecountlist)


    this.fetchOffices()



    this.clicknibai();

   /*  setInterval(() => {

    this.countDNP_All();
      this.countOB_All();
      this.countOF_All();
      this.countFWS_All();
      this.countOL_All();
      this.countLate_All();
  }, 30000); */


    setTimeout(() => {
      this.fetchofficeslist()
      this.clicknibai();
      this.countDNP_All();
      this.countOB_All();
      this.countOF_All();
      this.countFWS_All();
      this.countOL_All();
      this.countLate_All();

    }, 1000);
    this.handleOfficeChange();

  },


  mounted() {
    this.fetchofficeslist();
    this.callMethodsIfRequired();

  },

  watch: {
    /* eventAttendanceList: "countDNP_All", */
    /*  selectedOffices(newValue) {
       if (newValue === 'All') {
         this.countDNP_All();
       }
     }, */
    /*  selectedOffices(newVal) {
       if (newVal === 'All') {
         this.selectedOfficeID = '';
       }
       // Add additional logic or actions based on other selected values if needed
     },
      */
    /*   selectedOfficeID: "countDNP",
      selectedOfficeID: "countOB", */
    /*  selectedOfficeID(newVal) {
       if (!newVal) {
         this.countDNP_All();
         this.countOB_All();
         this.countOF_All();
         this.countFWS_All();
         this.countOL_All();
         this.countLate_All();
       }
     }, */


    selectedOfficeID: [
      {
        handler: "countDNP",
        deep: true
      },
      {
        handler: "countOB",
        deep: true
      },
      {
        handler: "countof",
        deep: true
      },
      {
        handler: "countfws",
        deep: true
      },
      {
        handler: "countols",
        deep: true
      },
      {
        handler: "countlate",
        deep: true
      },

    ],

    selectedOffices: 'updateSelectedInfo', // Call updateSelectedInfo whenever selectedFullName changes
  },
  methods: {
  ...mapActions("events", ["fetchAttendanceCount"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions('events', ['Admin_fetchPangalan']),

    OpenDialog_EventDetails()
    {
      this.displayAttendanceCount = true

    },


    handleRowClick() {
  localStorage.setItem('Office_AYDE', this.selectedOfficeID);
  localStorage.setItem('Name', this.selectedOffices);
   this.$router.push('/AttendancePrint');
  },

  handleRowClick1() {
  localStorage.setItem('Office_AYDE', this.selectedOfficeID);
  localStorage.setItem('Name', this.selectedOffices);
   this.$router.push('/AuthorityToClaim');
  },


  handleRowClick2() {
  localStorage.setItem('Event_Naym', this.Pangalan.Event_name);
  localStorage.setItem('Office_AYDE', this.selectedOfficeID);
  localStorage.setItem('Name', this.selectedOffices);
   this.$router.push('/PayrollPrint');
  },



    handleOfficeChange() {
      if (this.selectedOffices == 'All') {
        this.countDNP_All();
        this.countOB_All();
        this.countOF_All();
        this.countFWS_All();
        this.countOL_All();
        this.countLate_All();
      }
    },

    /* callmebaby(){
      this.countDNP_All();
        this.countOB_All();
        this.countOF_All();
        this.countFWS_All();
        this.countOL_All();
        this.countLate_All();
    },
     */
    callMethodsIfRequired() {
      if (this.shouldCallMethods) {
        this.countDNP_All();
        this.countOB_All();
        this.countOF_All();
        this.countFWS_All();
        this.countOL_All();
        this.countLate_All();
      }
    },


    getTotalTimescannedCount() {
      const count = this.eventAttendanceList.reduce(
        (acc, data) => (data.timescanned ? acc + 1 : acc),
        0
      );
      return count;
    },


    getOfficeIdCount(officeId) {
      const count = this.eventAttendanceList.reduce(
        (acc, data) => (data.office_id === Number(officeId) ? acc + 1 : acc),
        0
      );
      return count;
    },

    getOfficeIdCountWithTimescanned(officeId) {
      const count = this.eventAttendanceList.reduce(
        (acc, data) => (data.office_id === Number(officeId) && data.timescanned ? acc + 1 : acc),
        0
      );
      return count;
    },

    countDNP() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      if (this.selectedOffices !== "All") {
        console.log("countdnp")
        const filteredArray = this.eventAttendanceList.filter(
          (entry) => entry.office_id == this.selectedOfficeID
        );

        // console.log('filteredArray:', filteredArray);

        this.dnpCount = filteredArray.reduce(
          (count, entry) => (entry.remarks == "DNP" ? count + 1 : count),
          0
        );

        // console.log('dnpCount:', this.dnpCount);
      }
    },

    countOB() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);
      if (this.selectedOffices !== "All") {
      const filteredArray = this.eventAttendanceList.filter(
        (entry) => entry.office_id == this.selectedOfficeID
      );

      // console.log('filteredArray:', filteredArray);

      this.obcount = filteredArray.reduce(
        (count, entry) => (entry.remarks == "OB" ? count + 1 : count),
        0
      );
      }
      // console.log('obcount:', this.obcount);
    },

    countof() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);
      if (this.selectedOffices !== "All") {
      const filteredArray = this.eventAttendanceList.filter(
        (entry) => entry.office_id == this.selectedOfficeID
      );

      // console.log('filteredArray:', filteredArray);

      this.ofcount = filteredArray.reduce(
        (count, entry) => (entry.remarks == "OF" ? count + 1 : count),
        0
      );
      }
      // console.log('ofcount:', this.ofcount);
    },


    countfws() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);
      if (this.selectedOffices !== "All") {
      const filteredArray = this.eventAttendanceList.filter(
        (entry) => entry.office_id == this.selectedOfficeID
      );

      // console.log('filteredArray:', filteredArray);

      this.fwscount = filteredArray.reduce(
        (count, entry) => (entry.remarks == "FWS" ? count + 1 : count),
        0
      );
      }
      // console.log('ofcount:', this.ofcount);
    },

    countols() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);
      if (this.selectedOffices !== "All") {
      const filteredArray = this.eventAttendanceList.filter(
        (entry) => entry.office_id == this.selectedOfficeID
      );

      // console.log('filteredArray:', filteredArray);

      this.olscount = filteredArray.reduce(
        (count, entry) => (entry.remarks == "OL" ? count + 1 : count),
        0
      );
      }
      // console.log('ofcount:', this.ofcount);
    },


    countlate() {
      // console.log('searchOfficeId:', this.selectedOfficeID);
      // console.log('eventAttendanceList:', this.eventAttendanceList);
      if (this.selectedOffices !== "All") {
      const filteredArray = this.eventAttendanceList.filter(
        (entry) => entry.office_id == this.selectedOfficeID
      );

      // console.log('filteredArray:', filteredArray);

      this.latecount = filteredArray.reduce(
        (count, entry) => (entry.remarks == "LATE" ? count + 1 : count),
        0
      );
      }
      // console.log('ofcount:', this.ofcount);
    },



    countDNP_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const dnpEntries = this.eventAttendanceList.filter(entry => entry.remarks == "DNP");

      // console.log('dnpEntries:', dnpEntries);

      // Count the total number of "DNP" entries
      this.dnpCount = dnpEntries.length;

      // console.log('dnpCount:', this.dnpCount);
    },

    countOB_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const obpEntries = this.eventAttendanceList.filter(entry => entry.remarks == "OB");

      // console.log('dnpEntries:', obpEntries);

      // Count the total number of "DNP" entries
      this.obcount = obpEntries.length;

      // console.log('OBCount:', this.obcount);
    },

    countOF_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const ofEntries = this.eventAttendanceList.filter(entry => entry.remarks == "OF");

      // console.log('ofEntries:', ofEntries);

      // Count the total number of "DNP" entries
      this.ofcount = ofEntries.length;

      // console.log('OFCount:', this.ofcount);
    },

    countFWS_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const FWSEntries = this.eventAttendanceList.filter(entry => entry.remarks == "FWS");

      // console.log('FWSEntries:', FWSEntries);

      // Count the total number of "DNP" entries
      this.fwscount = FWSEntries.length;

      // console.log('FWSCount:', this.fwscount);
    },

    countOL_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const OLEntries = this.eventAttendanceList.filter(entry => entry.remarks == "OL");

      // console.log('OLEntries:', OLEntries);

      // Count the total number of "DNP" entries
      this.olscount = OLEntries.length;

      // console.log('olCount:', this.olscount);
    },

    countLate_All() {
      // console.log('searchOfficeId:', this.searchOfficeId);
      // console.log('eventAttendanceList:', this.eventAttendanceList);

      // Filter only "DNP" entries
      const LateEntries = this.eventAttendanceList.filter(entry => entry.remarks == "LATE");

      // console.log('LateEntries:', LateEntries);

      // Count the total number of "DNP" entries
      this.latecount = LateEntries.length;

      // console.log('lateCount:', this.latecount);
    },



    formattedDate_bai(date) {
      const eventDate = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return eventDate.toLocaleDateString(undefined, options);
    },

/*     formattedTime_From() {
      let hour = parseInt(this.selectedHour);
      if (this.selectedPeriod === 'PM' && hour !== 12) {
        hour += 12;
      } else if (this.selectedPeriod === 'AM' && hour === 12) {
        hour = 12;
      }
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = this.selectedMinute;
      const formattedSecond = '00';
      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    },
 */

    clicknibai() {
      this.$watch('selectedOfficeID', (newVal, oldVal) => {
        let data = new FormData;
        // console.log("ID=", this.$route.params.id)
        // console.log("EventName=", this.$route.params.Event_name)
        data.append('event_id', localStorage.getItem('ID'))
        data.append('office_id', newVal);
        this.Admin_fetchPangalan(data);
        this.fetchOffices()
        this.Pangalan.length
      });
    },

    updateSelectedInfo() {
      const selectedNameData = this.namesData.find(nameData => nameData.office === this.selectedOffices);
      if (selectedNameData) {
        this.selectedOfficeID = selectedNameData.id;
        /*   this.selectedFirstName = selectedFirstName.fullName; */


      }
      else {
        console.log("updateselected")
        this.selectedOfficeID = '';
        this.countDNP_All();
        this.countOB_All();
        this.countOF_All();
        this.countFWS_All();
        this.countOL_All();
        this.countLate_All();
      }
    },

    async fetchofficeslist() {
      try {
        // const response = await axios.get('http://10.0.1.23:80/PEESOCESPRO/users.php');
        // Handle the specific data format with "users" property
        if (Array.isArray(this.OfficeList)) {
          // console.log("array------------");
          this.namesData = this.OfficeList.map(users => {

            return {

              id: users.id,
              office: users.office,
              /*  fullname: user.fullname,
               lastname: user.lastname,
               firstname: user.firstname,
               middlename: user.middlename,
               status: user.status,
               designation: user.designation,
               Controlno: user.Controlno, */

            };
          });

          this.officeslista = this.namesData.map(nameData => nameData.office).sort();;
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },


    // editEvent(id) {
    //   // Handle edit event logic
    //   console.log("Edit Event:", id);
    // },
    // deleteEvent(id) {
    //   // Handle delete event logic
    //   console.log("Delete Event:", id);
    // },

    // navigateTo(path) {
    //   this.$router.push({ 'path': path });
    // },

    // redirecttoHomeEventsViewList (item) {
    //   console.log("item=",item.id)
    // this.$router.push({ name: 'HomeEventsViewList', state: { id: item.id } })
    // },


    // redirecttoEventDetails (item) {
    //   console.log("item=",item.id)
    // this.$router.push({ name: 'EventDetails', state: { id: item.id } })
    // },

  },
};
</script>

<style scoped>

.sizeprint{
  font-size: 11px;
}
.image {
  border: 1px solid #0a7a0e;
}

.my-input.v-input .v-input__slot {
  border-radius: 100px;
}

.v-data-table>.v-data-table__wrapper>table {
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

.classfortitle {
  /*  color: #70b354; */
  font-size: 15px;
}

.classeventdetails {

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


.card {
  color: rgb(24, 23, 23);
  line-height: 25px;
  box-shadow: 5px 5px 10px #95b091;
}

.card.purple {
  background: linear-gradient(150deg, #f731db, #edebef 100%);
}

.card.green {
  background: linear-gradient(150deg, #eff2eedc, #f2f0f7 100%);
}
</style>
