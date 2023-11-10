<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">
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
        <h3> {{ Event.Event_name }}</h3>
        <h5>{{ Event.Event_date }} at the {{ Event.Event_venue }}</h5>
      </v-col>
      <v-col cols="12">
        <h4>ATTENDANCE SHEET</h4>
        <h5 class="text-left">Office: Diria ang Office Name</h5>
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
                <td :style="{ textAlign: 'center' }" class="cell-border">
                 {{index + 1}}
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

      <!-- <div class="page-break"></div> -->
      <div id="bottom-content">
        <v-table class="secondtable" density="compact">
          <tr>
            <td colspan="10" style="font-weight: bold;">SUMMARY OF EMPLOYEES COUNT PER EMPLOYMENT STATUS</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left" style="font-weight: bold;" >Permanent</td>
            <td colspan="5" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-right">Organic</td>
            <td colspan="5" class="text-left">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-right">Reassigned from other office</td>
            <td colspan="5" class="text-left" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left" style="font-weight: bold;">Coterminous</td>
            <td colspan="5" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left" style="font-weight: bold;">Casual</td>
            <td colspan="5" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left" style="font-weight: bold;">Job Order</td>
            <td colspan="5" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-left" style="font-weight: bold;">Honorarium</td>
            <td colspan="5" style="font-weight: bold;">35</td>
          </tr>
          <tr>
            <td colspan="5" class="text-right" style="font-weight: bold;">GRAND TOTAL</td>
            <td colspan="5" class="" style="font-weight: bold;">35</td>
          </tr>
          <div class="mt-6">
        <p>Approved by:</p>
        <p
          style="
            font-weight: bold;
            text-decoration: underline;
            height: auto;
            margin-top: 20px;
          "
        >
        RAMIL Y. TIU, CPA
        </p>
        <p>City Accountant</p>
      </div>
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
      itemsPerPage: 24,
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
        { key: "designation", title: "POSITION", sortable: false },
        { key: "timescanned", title: "CONTACT NO.", sortable: false },
        { key: "selectedRemarks", title: "SIGNATURE" },
      ],
    };
  },

  computed: {
    ...mapGetters("events", { Pangalan: ["getName"], Event: ["getEvent"] }),
    ...mapGetters("users", { fetechEmployees: ["getUsers"] }),
    ...mapGetters("office", { Offices: "getOffices" }),
    ...mapState({
      employeeremarks: (state) => state.remarks,
    }),

    filteredUsers() {
      // Filter the users based on office_id
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
      // Check if there is data in the "remarks" field of any employee
      return this.employees.some((employee) => !!employee.remarks);
    },
  },

  created() {
    this.fetchOffices().then((req) => {
      this.fetchData();
      this.searchByOffice();
      // console.log("offices=",this.Offices);
    });
    let data = new FormData();
    const adminrecords = JSON.parse(localStorage.getItem("user"));
    console.log("ID=", adminrecords.office_id);

    console.log("EventName=", this.$route.params.Event_name);
    data.append("event_id", localStorage.getItem("ID"));

    this.eventayde = localStorage.getItem("ID");

    data.append("office_id", adminrecords.office_id);
    /*  data.append('Event_name', localStorage.getItem('Event_name')) */
    this.fetchPangalan(data).then((res) => {
      this.employees = this.Pangalan;
      this.searchByOffice();
      console.log("employees=", this.employees);
    });

    // this.fetchUsers().then(rew=>{
    //   this.employees=this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
    // });

    /*   return this.employees.filter(employee => employee.office_id === 1); */

    // setTimeout(() => {
    //     this.searchByOffice();

    //   }, 1000); // Adjust the delay time (in milliseconds) as needed
  },

  methods: {
    ...mapActions("events", ["fetchPangalan"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("scaninsert", ["registerScan"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("scaninsert", ["saveallremarks"]),
    // incrementID(item){
    //   item.id = this.initialID;
    //   this.initialID++;
    //   return item.id
    // },
    print() {
      if (window) window.print();
    },
    addPageBreak(index) {
      // Add a class to the row to trigger a page break
      return index !== 0 && index % this.itemsPerPage === 0 ? "page-break" : "";
    },
    // printData() {
    //   const printableContent = this.$refs.printableTable.$el.outerHTML;
    //   const printWindow = window.open("", "", "width=600,height=600");
    //   printWindow.document.open();
    //   printWindow.document.write("<html><head><title>Print</title>");
    //   printWindow.document.write("</head><body>");
    //   printWindow.document.write(printableContent);
    //   printWindow.document.write("</body></html>");
    //   printWindow.document.close();
    //   printWindow.print();
    // },
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
  table-layout: dense;
  border: 1px solid black;
}
.page-break {
  page-break-after: always;
}
#bottom-content {
  /* position: fixed; */
  bottom: 0;
  font-size: 16px;
  right: 0;
  text-align: center;
  width: 30%;

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
  .center1, center {
    margin: 0;
    position: absolute;
    top: 5%;
    left: 20%;
  }

  #btn-group {
    display: none;
  }
  /* .page-break{
    page-break-after: always;
  } */
  .wholePage {
    font-size: 20px !important;
  }
  .table {
    border: none; /* Example: Remove borders for print */
  }

  #table-content {
    page-break-before: always; /* Start the table on a new printed page */
    position: relative; /* Change to relative for normal flow on subsequent pages */
    top: 390px; /* Adjust the value based on your desired top margin */
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
