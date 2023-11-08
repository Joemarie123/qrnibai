<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">
    <v-btn class="bg-green" @click="print"> Print </v-btn>
  </div>
  <div>
    <v-container
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
      rounded
      max-width="90%"
      width="100%"
    >
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
          This is to authorize the following personnel enumerated below to claim
          Meal Allowance for the 123 PCSA FIESTA DE PAMILIA & LARONG PINOY on
          September 23, 2023 to be held at the Energy Park, Apokon, Tagum City.
        </p>
      </v-col>
      <v-col cols="12">
        <h4 class="text-left">Office: Diria ang Office Name</h4>
      </v-col>
      <v-container>
        <v-table>
          <v-data-table
            :headers="headers"
            :items-per-page="40"
            :items="employees"
            class="table"
            density="compact"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td :style="{ textAlign: 'center' }" class="cell-border">
                  <!-- {{ incrementID(item) }} -->
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
      initialID: 1,
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
      this.fetchData();
      this.searchByOffice();
    });
    let data = new FormData();
    const adminrecords = JSON.parse(localStorage.getItem("user"));
    console.log("ID=", adminrecords.office_id);

    console.log("EventName=", this.$route.params.Event_name);
    data.append("event_id", localStorage.getItem("ID"));

    this.eventayde = localStorage.getItem("ID");

    data.append("office_id", adminrecords.office_id);
    this.fetchPangalan(data).then((res) => {
      this.employees = this.Pangalan;
      this.searchByOffice();
      console.log("employees=", this.employees);
    });
  },

  methods: {
    ...mapActions("events", ["fetchPangalan"]),
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions("scaninsert", ["registerScan"]),
    ...mapActions("office", ["fetchOffices"]),
    ...mapActions("scaninsert", ["saveallremarks"]),

    print() {
      if (window) window.print();
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
th,
td {
  padding: 3px;
}
#bottom-content {
  /* position: fixed; */
  bottom: 0;

  right: 0;
  text-align: center;
  width: 30%;
}
/* .cell-border {
  border: 1px solid #ccc;
} */
.top {
  font-size: 14px;
}
.table {
  font-size: 14px;
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
  .center1 {
    margin: 0;
    position: absolute;
    top: 5%;
    left: 20%;
  }
  .center {
    margin: 0;
    position: absolute;
    top: 5%;
    right: 20%;
  }
  #btn-group {
    display: none;
  }
}
</style>
