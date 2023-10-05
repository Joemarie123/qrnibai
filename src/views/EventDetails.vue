<template>

<v-container>
  <v-btn @click="printData">Print All Data</v-btn>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 "
    
    rounded
    max-width="90%"
    width="100%"
  >
  
    <v-row>
      <v-col cols="4">
        <!-- <v-avatar class="d-flex child-flex">
          <v-img src="/phil.png" alt="altText"></v-img>
        </v-avatar> -->
        <div class="center1">
          <v-img :width="100" src="/phil.png" class=""></v-img>
        </div>
      </v-col>
      <v-col cols="4">
        <h3 class="mt-12">Republic of the Philippines</h3>
        <h3 class="">Province of Davao del Norte</h3>
        <h3 class="">CITY OF TAGUM</h3>
      </v-col>
      <v-col cols="4" class="mx-10" >
        <div class="center">
          <v-img
            :width="100"
            src="/Tagum.png"
            
            class=""
          ></v-img>
        </div>
      </v-col>
    </v-row>
   <!--  <v-divider color="blue" :thickness="5" class="mt-2"></v-divider> -->
    <v-col cols="12">
      <h2>ATTENDANCE REPORT</h2>
    </v-col>
    <v-container>
      <v-row no-gutters style="text-align: justify">
        <v-col cols="12" md="6">
          <p>Department:</p>
          <p>Division:</p>
          <p>Section/Unit:</p>
          <p>Project:</p>
        </v-col>
        <v-col cols="12" md="6">
          <p style="font-size:15px"><b>Date:</b> {{ Event.Event_date }} </p>
          <p style="font-size:15px"> <b>Activity:</b> {{ Event.Event_name }} </p>
          <p style="font-size:15px"><b>Venue:</b> {{ Event.Event_venue }} </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-table >
       <!--  <thead>
          <tr>
            <th id="head">No.</th>
            <th id="head">Name</th>
            <th id="head">Position</th>
            <th id="head">Time Scanned</th>
            <th id="head">Remarks</th>
          </tr>
        </thead>
        <tbody dense>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.no }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.position }}</td>
            <td>{{ item.timeScanned }}</td>
            <td>{{ item.remarks }}</td>
          </tr>
        </tbody> -->
        <v-data-table  :headers="headers"   :items-per-page="5"   :items="employees">

          <template v-slot:item="{ item }">

<tr >
<!-- <td class="card" :style="{ textAlign: 'left' }">{{ item.columns.Controlno }}</td> -->
<td :style="{ textAlign: 'left' }">{{ item.columns.fullname }}</td>
<td class="card" :style="{ textAlign: 'left' }">{{ item.columns.designation }}</td>
<td :style="{ textAlign: 'left' }">{{ item.columns.timescanned }}</td>
<td class="card" :style="{ textAlign: 'left' }">{{ item.raw.remarks }}</td>


</tr>

</template>

          <template #bottom></template>

        </v-data-table>
      

      </v-table>
    </v-container>
   <div class="page-break"></div>
    <p class="text-justify font-italic pa-4">
      I hereby certify and attest, to the best of my knowledge, that the above
      declartion are true and correct statements on the whereabouts of the
      personnel of this office.
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
  </v-sheet>
</v-container>
</template>
<script>
import { mapActions, mapGetters , mapState} from 'vuex';
export default {
data() {
  return {
    employees:[],
   

    headers: [
  {
      align: "start",
      key: "Controlno",
      sortable: false,
      title: "ID",
      align: ' d-none',
    },
      { key: "fullname", title: "Full Name", class: 'header-id', sortable: false },
      { key: "designation", title: "Position", sortable: false, },
      { key: "timescanned", title: "Time Scanned", sortable: false, },
      { key: "selectedRemarks", title: "Remarks",  },
    
    ],

  };


  
},


computed: {
  ...mapGetters('events', {Pangalan: ['getName'], Event: ['getEvent']} ),
  ...mapGetters('users', {fetechEmployees: ['getUsers']} ),
  ...mapGetters("office", { Offices: "getOffices" }),
  ...mapState({
      employeeremarks: state => state.remarks,
      
    }),

  filteredUsers() {
    // Filter the users based on office_id
    return this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
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
      return this.employees.some(employee => !!employee.remarks);
    },
}, 



created() {
  
  this.fetchOffices().then(req=>{
    
    this.fetchData();
    this.searchByOffice();
    // console.log("offices=",this.Offices);
  })
    let data = new FormData;
    const adminrecords=JSON.parse(localStorage.getItem('user'))
    console.log("ID=",adminrecords.office_id)
    
    console.log("EventName=",this.$route.params.Event_name)
    data.append('event_id', localStorage.getItem('ID'))
    
    this.eventayde = localStorage.getItem("ID");
  
    data.append('office_id',adminrecords.office_id)
   /*  data.append('Event_name', localStorage.getItem('Event_name')) */
    this.fetchPangalan(data).then(res=>{
      this.employees=this.Pangalan
      this.searchByOffice();
      console.log("employees=",this.employees)
      
    })
    
    // this.fetchUsers().then(rew=>{
    //   this.employees=this.fetechEmployees.filter(user => user.office_id === this.userData.office_id);
    // });
    
  /*   return this.employees.filter(employee => employee.office_id === 1); */
  
  
  // setTimeout(() => {
  //     this.searchByOffice();
     
  //   }, 1000); // Adjust the delay time (in milliseconds) as needed
 
  },
  

methods: {
...mapActions('events', ['fetchPangalan']),
...mapActions('users', ['fetchUsers']), 
...mapActions('scaninsert', ['registerScan']), 
...mapActions('office', ['fetchOffices']),
...mapActions('scaninsert', ['saveallremarks']), 


printData() {
      const printableContent = this.$refs.printableTable.$el.outerHTML;
      const printWindow = window.open('', '', 'width=600,height=600');
      printWindow.document.open();
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(printableContent);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }

},

};
</script>
<style scoped>
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
</style>