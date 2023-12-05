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
            <h4>PAYROLL FOR MEAL ALLOWANCE</h4>
          </v-col>
          <v-container>
            <v-row no-gutters style="text-align: justify">
              <v-col cols="12" md="7" class="top">
                <h4>Purpose: {{ Event_Naym }}</h4>
                <h4>Office: {{ Name }}</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
        <v-container id="table-content">
  
          <v-table>
            <v-data-table
            :search="Office_AYDE"
              :headers="headers"
              :items-per-page="this.sortedItems.length"
              :items="sortedItems"
              class="table"
              density="compact"
            >
              <template v-slot:item="{ item, index }">
                <tr :class="addPageBreak(index)">
                  <td :style="{ textAlign: 'center' }" class="cell-border">
                    {{ index + 1 }}
                  </td>
                  <td :style="{ textAlign: 'left' }" class="cell-border">
                    {{ item.columns.fullname }}
                  </td>
                  <td class="cell-border" :style="{ textAlign: 'left' }">
                    {{ item.columns.designation }}
                  </td>
                  <td :style="{ textAlign: 'left' }" class="cell-border">
                    <!-- {{ item.columns.timescanned }} -->
                  </td>
                  <td class="cell-border" :style="{ textAlign: 'left' }">
                    <!-- {{ item.raw.remarks }} -->
                  </td>
                </tr>
              </template>
  
              <template #bottom></template>
            </v-data-table>
          </v-table>
        </v-container>
        <div id="bottom-content">
          <v-table class="secondtable" density="compact">
            <tr>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                A.
              </td>
              <td colspan="4" style="text-align: left">
                CERTIFIED: Services duly rendered as stated.
                <v-row class="text-center mt-4">
                  <v-col>
                    <u style="font-weight: bold">JANYLENE A. PALLERMO, MM</u>
                  </v-col>
                  <v-col> ___________________________ </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> Acting City Human Resource Mgt. Officer </v-col>
                  <v-col> Date </v-col>
                </v-row>
              </td>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                B.
              </td>
              <td colspan="4" style="text-align: left">
                CERTIFIED: Supporting documents complete and proper.
                <v-row class="text-center mt-4">
                  <v-col>
                    <u style="font-weight: bold">RAMIL Y. TIU, CPA</u>
                  </v-col>
                  <v-col> ___________________________ </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> City Accountant </v-col>
                  <v-col> Date </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                C.
              </td>
              <td colspan="4" style="text-align: left">
                CERTIFIED: Cash Available for the purpose.
                <v-row class="text-center mt-4">
                  <v-col>
                    <u style="font-weight: bold">ANNIE G. BELTRAN, CPA, MBA</u>
                  </v-col>
                  <v-col> ___________________________ </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> City Treasurer </v-col>
                  <v-col> Date </v-col>
                </v-row>
              </td>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                D.
              </td>
              <td colspan="4" class="" style="text-align: left">
                APPROVED for PAYMENT
                <v-row class="text-center mt-4">
                  <v-col>
                    <u style="font-weight: bold">REY T. UY</u>
                  </v-col>
                  <v-col> ___________________________ </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> City Mayor </v-col>
                  <v-col> Date </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                E.
              </td>
              <td colspan="4" class="" style="text-align: left">
                CERTIFIED: Each employee whose name appears on the payroll has
                been paid the amount as
                <v-row class="text-center mt-2">
                  <v-col> ___________________________ </v-col>
                  <v-col> ___________________________ </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> Signature over Printed Name </v-col>
                  <v-col> Date </v-col>
                </v-row>
                <v-row class="text-center mt-n6">
                  <v-col> Disbursing Officer </v-col>
                  <v-col> </v-col>
                </v-row>
              </td>
              <td colspan="1" class="" rowspan="" style="font-weight: bold">
                F.
              </td>
              <td colspan="4" class="">
                <v-row class="mt-4">
                  <v-col> CAFOA NO.: ___________________________ </v-col>
                </v-row>
                <v-row class="mt-n6">
                  <v-col> Date: ___________________________ </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="5" class="">G</td>
              <td style="text-align: left" colspan="10">ACCOUNTING ENTRIES</td>
            </tr>
            <tr dense>
              <td class="">Particulars</td>
              <td class="">Account Code</td>
              <td class="">Debit</td>
              <td class="">Credit</td>
              <td class=""></td>
              <td class="">Particulars</td>
              <td class="">Account Code</td>
              <td class="">Debit</td>
              <td class="">Credit</td>
            </tr>
            <tr>
              <td class="">Test</td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
              <td></td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
            </tr>
            <tr>
              <td class="">Test</td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
              <td></td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
              <td class=""></td>
            </tr>
            <tr>
              <td colspan="5" style="text-align: left">
                Prepared by:
                <v-row class="">
                  <v-col>
                    <p class="text-center">________________________</p>
                  </v-col>
                </v-row>
              </td>
              <td colspan="5" style="text-align: left">
                Certified Correct:
                <v-row class="">
                  <v-col class="text-center">
                    <p>________________________</p>
                    <p>Head, Accounting Department / Unit</p>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </v-table>
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
        itemsPerPage: 29,
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
          { key: "timescanned", title: "AMOUNT", sortable: false },
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

    Event_Naym() {
      // Retrieve from localStorage
      return localStorage.getItem('Event_Naym');
     
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
     /*  this.fetchOffices().then((req) => {
        this.fetchData();
        this.searchByOffice();
      }); */
      let data = new FormData;
    // console.log("ID=", this.$route.params.id)
    // console.log("EventName=", this.$route.params.Event_name)
    data.append('event_id', localStorage.getItem('ID'))
    /*   data.append('office_id', this.selectedOfficeID); */
    this.Admin_fetchPangalan(data);
this.Office_IDD=localStorage.getItem('Office_AYDE');
    },
  
    methods: {
        ...mapActions('events', ['Admin_fetchPangalan']),
      ...mapActions("events", ["fetchPangalan"]),
      ...mapActions("users", ["fetchUsers"]),
      ...mapActions("scaninsert", ["registerScan"]),
      ...mapActions("office", ["fetchOffices"]),
      ...mapActions("scaninsert", ["saveallremarks"]),
  
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
    overflow: hidden; /* Hide horizontal overflow */
  }
  .table {
    table-layout: dense;
    border: 1px solid black;
  }
  .page-break {
    page-break-after: always;
  }
  /* .secondtable .v-table--wrapper {
  overflow: hidden !important
  }
  v-table .v-table_wrapper {
    overflow:-moz-hidden-unscrollable;
  } */
  /* .Date {
    text-decoration: overline;
    width: 100%;
  } */
  /* .table-container {
    overflow-x: auto;
    max-width: 100%;
  } */
  #bottom-content {
    bottom: 0;
    left: 5;
    right: 0;
    text-align: center;
    font-size: 16px;
    width: 90%;
  }
  /* .cell-border {
    border: 1px solid #ccc;
  } */
  /* .top {
    font-size: 14px;
  
  } */
  /* .table {
    font-size: 14px;
    table-layout: dense;
    border: 1px solid #ccc;
  } */
  /* .page-break {
    page-break-after: always;
  } */
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
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100;
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
    #table-content {
      page-break-before: always; /* Start the table on a new printed page */
      position: relative; /* Change to relative for normal flow on subsequent pages */
      top: 350px; /* Adjust the value based on your desired top margin */
    }
    .table {
      border: none; /* Example: Remove borders for print */
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
      margin-top: 30%;
    }
  }
  </style>