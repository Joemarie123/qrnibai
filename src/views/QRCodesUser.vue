<template>
    <v-card  height="1000" flat color="#F9FAFC" >
  <v-layout>
<NavBarUser/>

<v-main>
<div class="container123">
  <v-container >
      <!-- <p>{{ userData.office_id }}</p> -->
  <!--   <v-btn @click="createevents = true" class="my-10" color="green" height="100">
      <v-icon size="90">mdi-calendar-plus</v-icon>
      <span class="mt-11">Create Events</span></v-btn
    > -->
    
  </v-container>

  <v-container>

    <v-row class="mt-n15 mt-md-1 ">
    <!--   <v-col class="d-flex justify-end ml-n3 " cols="12">
      <v-btn color="success"  rounded-lg variant="outlined" @click="createevents = true"> + Create Events</v-btn>
    </v-col>        
 -->  

      <v-col cols="12">
        <v-btn class="mt-3 ml-1 card"  rounded-lg color="success" variant="outlined">EVENT DETAILS</v-btn>
  </v-col>

  <v-col class="d-flex justify-center " cols="12" >
       
    <div class="text-center">
        <p class="mt-n1 mt-md-n10"><b>DATE:</b> {{ currentDate }} - <b> TIME:</b> {{ currentTime }}</p>
      </div>
<!--    <v-btn variant="outlined" class="mobile-button" color="success" height="30" width="200">
   <p class="mx-5" style="font-size:15px">SCAN QR</p>
</v-btn> -->

</v-col>

<v-col cols="12" class="mt-n6 ">
<!--   <button
      id="scan-button"
      style="background-color: #007bff; color: #fff; padding: 10px 20px; border: none; cursor: pointer;"
      @click="creatScan"
    >
      Scan QR Code
    </button>
  <div  id="qr-code-full-region"  >

        <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>

      </div> -->

      <div>
   
        <v-btn  color="green" block @click="showScannerDialog()">Scan QR Code
          <v-icon class="mx-4">mdi-qrcode-scan</v-icon>
        </v-btn>
 
      <v-dialog max-width="600px"  v-model="showDialog" v-if="showDialog">
        
      <div id="qr-code-full-region">
        <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>
      </div>
      <v-btn color="green" @click="showDialog = false">Close</v-btn>
    </v-dialog>

    

<!--     <v-dialog v-if="showDialog">
      <div id="qr-code-full-region"></div>
      <button @click="closeScannerDialog">Close</button>

    </v-dialog> -->


  </div>



    </v-col>
<!-- <div v-for="(msg, index) in message" :key="index">
  <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.id }}</p>
  <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.time }}</p>
</div> -->




<!-- <div v-for="(msg, index) in message" :key="index">
  <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.id }}</p>
 </div> -->


    <!-- <div class="mt-2">
        <table class="TableHead">
          <tr>
            <th>ID</th>     
            <th>TIME</th>
          </tr>

          <tr
            
            
           
          >
            <td>
              <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.id }}</p>
            </td>
            <td>
              <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.time }}</p>
            </td>
          </tr>
        </table>
      </div> -->
      <!--  </div> -->


  
  <v-col cols="12"  md="12" sm="12" class="mt-n4 mt-md-n5"  >
   <v-card class="image rounded-lg">
    <v-container>
    <v-row >

        <v-col cols="12" md="6" sm="12" >
    <v-col cols="12">
     <!--  <p style="font-size:15px"> <b>Event Name:</b> {{ Pangalan.ID }} </p> -->
        <p style="font-size:15px"> <b>Event Name:</b> {{ Event.Event_name }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Date of Event:</b> {{ Event.Event_date }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Event Venue:</b> {{ Event.Event_venue }} </p>
    </v-col>
</v-col>
<!-- <p>Designation: {{ designation }}</p> -->
<v-col cols="12" md="6" sm="12" class="mt-n9 mt-md-1">
    <v-col cols="12">
        <p  v-if="selectedOffice" style="font-size:15px"> <b>Office:</b> {{ selectedOffice }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"> <b>Time From:</b> {{ Event.Event_name }} </p>
    </v-col>
    <v-col cols="12" class="mt-n6">
        <p style="font-size:15px"><b>Time To:</b> {{ Event.Event_date }} </p>
    </v-col>
    <!-- <p>Designation: {{ designation }}</p>
    <p>Control No: {{ controlno }}</p> -->
    <!-- <p>TIME {{ time }}</p> -->
    
</v-col>

    </v-row>
</v-container>
   </v-card>
  </v-col>

 

  <!-- <v-col cols="12" md="3" sm="12" class="mt-n4 ml-md-n4 mt-md-n9" >
   <v-card class="image card rounded-lg">
    <v-container>
    <v-row >
      <v-col class="d-flex justify-center " cols="12" >
     
   <v-btn color="success" height="90" width="300">
   <p class="mx-5" style="font-size:20px">SCAN QR</p>
   <v-img
  :width="50"
  :height="70"
  cover
  src="/qr.png"
></v-img>
</v-btn>
    

   
    </v-col>

    </v-row>

</v-container>
   </v-card>
  </v-col> -->


 <!--  <v-col class="mt-n4" cols="5">
    <input v-model="search" class="textbox"  placeholder="Search Event">
  </v-col> -->
  
      <v-col cols="12">

        <v-card class='rounded-lg mt-n4  '>
        <v-data-table
        :search="search"
         item-key="ID"
         :items="employees"
       :headers="headers"
      :items-per-page="5"
       class=" my_class td btn-hover color-1 elevation-1"
       tile 
   
  >

  <!-- <template v-slot:item.remarks="{ item }">
    <div id="app" class="mt-n1">
      <select v-if="!item.columns.time" v-model="item.columns.selectedRemarks" id="select-element">
    <option v-for="remark in remarks">{{ remark }}</option>
  </select>
</div>
</template> -->

<template v-slot:item="{ item }">

<tr>
  <td class="card" :style="{ textAlign: 'left' }">{{ item.columns.Controlno }}</td>
  <td :style="{ textAlign: 'left' }">{{ item.columns.fullname }}</td>
  <td class="card" :style="{ textAlign: 'left' }">{{ item.columns.designation }}</td>
  <td :style="{ textAlign: 'left' }">{{ item.columns.timescanned }}</td>
<td>
<select v-if="!item.columns.timescanned" @change="saveremarks(item)" v-model="item.raw.Remarks" class="elementobai mt-n2 " id="select-element">
    <option value="good">Good</option>
    <option value="bad">Excellent</option>
    <option value="absent">Average</option>
    <option value="Poor">Poor</option>
</select>

</td>
</tr>


</template>



</v-data-table>

</v-card>

      </v-col>
      <v-col cols="12" class="mt-n4 d-flex justify-end">
          <v-btn class="custom-btn"   @click="clicktosaveall()" >
            
            <p class="colorfortext">Submit All</p>
            <v-icon  class="colorfortext mx-1">mdi-content-save-all</v-icon>
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</div>
<!-- <h1 class="grey--text ">{{ userData.office_id }}</h1> -->
<!-- <p>Data from Local Storage with key "ID": {{ eventayde }}</p> -->
</v-main>
</v-layout>
</v-card>
</template>


<script>
import { Html5QrcodeScanner } from "html5-qrcode";
import NavBarUser from "@/components/NavBarUser.vue";
import HtmlQrCodes from "@/views/HtmlQrCodes.vue";


import { mapActions, mapGetters } from 'vuex';



export default {

  components: {
    NavBarUser,
    HtmlQrCodes,
  },
  
data() {
  return {
   // selectedRemark: "",
   
   showModal:false,
   showDialog: false,
    selectedOffice: "",
    selectedTime: getCurrentTime(),
    currentTime: "",
      currentDate: "",
    ID: "",
    Event_name:'',
    search: "",
    eventname:'',
      eventdate:'',
       eventfrom:'',
      eventto:'',
      eventvue:'',
      targetOfficeId: 1,
      timeThreshold: "",
      tempmessage:[],
      dataTable: [],
      message: [],
      messagealreadyscan: [],
      transferredTimes: [],
      mensahenibai: false,
      lastScannedTime: "",
      showMessage: false,
      employees:[],
      remarks:"",
      designation:"",
      controlno:"",
      fullname:"",
      time: "", // Add this variable
      formattedTime:"",
      status:"",
      userData: {
   
        office_id: '',
  
      },
      selectedRemarks: "",
      remarks: ['Absent','Late'],
    

    createevents:false,

    items: [
      { title: "My Account", icon: "mdi-account",  },
      { title: "Settings", icon: "mdi-clock" },
      { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
      // { title: "Click Me 2" },
    ],

    headers: [
    {
        align: "start",
        key: "Controlno",
        sortable: false,
        title: "ID",
        align: ' d-none d-sm-table-cell',
      },
        { key: "fullname", title: "Full Name", class: 'header-id', sortable: false },
        { key: "designation", title: "Position", align: ' d-none d-sm-table-cell', sortable: false, },
        { key: "timescanned", title: "Time Scanned", sortable: false, },
        { key: "selectedRemarks", title: "Remarks", sortable: false, },
      
      ],

  };
},

 computed: {
    ...mapGetters('events', {Pangalan: ['getName'], Event: ['getEvent']} ),
    ...mapGetters('users', {fetechEmployees: ['getUsers']} ),
    ...mapGetters("office", { Offices: "getOffices" }),

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

  showScannerDialog() {
      this.showDialog = true;
      
      setTimeout(() => {
      
      this.creatScan(1);
    }, 500);
    },

    closeScannerDialog() {
      // Stop and destroy the scanner when the dialog is closed
      this.creatScan(0)
    },

  handleSelectClick() {
      // This method will be called when the <select> element is clicked
      // You can add your custom logic here
      console.log('Select element was clicked!');
    },

    handleSelectupdated() {
      // This method will be called when the <select> element is clicked
      // You can add your custom logic here
      console.log('Select element was Updated');
    },


  searchByOffice() {
    console.log("offices=",this.Offices)
      const id = parseInt(this.userData.office_id);
      const selectedItem = this.Offices.find(item => 
        
        item.id == id
      );
      console.log("id=" + id + " selecteditem=" + selectedItem);
      this.selectedOffice = selectedItem ? selectedItem.office : "";
    },


timeExceedsThreshold(time) {
      if (!this.timeThreshold) {
        return false;
      }
      return time > this.timeThreshold;
    },

    isTimeHigh(currentTime, threshold) {
      if (!currentTime || !threshold) return false; // Handle empty time or threshold case

      const timeParts = currentTime.split(":");
      const thresholdParts = threshold.split(":");
      const hour = parseInt(timeParts[0], 10);
      const minute = parseInt(timeParts[1], 10);
      const thresholdHour = parseInt(thresholdParts[0], 10);
      const thresholdMinute = parseInt(thresholdParts[1], 10);

      return (
        hour > thresholdHour ||
        (hour === thresholdHour && minute > thresholdMinute)
      );
    },





  creatScan(status) {
    const config = { 
      fps: 10,
        qrbox: {width: 250, height: 250},
        rememberLastUsedCamera: true,
        aspectRatio: 1.7777778,
        supportedScanTypes: [
            
            Html5QrcodeScanType.SCAN_TYPE_CAMERA
        ],
        showTorchButtonIfSupported: true,
        resetCameraActionStartButton: true
       };
      const html5QrcodeScanner = new Html5QrcodeScanner(
         "qr-code-full-region",
        config
      );
    if(status == 1){
      
      html5QrcodeScanner.render(this.onScanSuccess);
    }else{
      
      html5QrcodeScanner.stop().then(() => {
        html5QrcodeScanner.clear();
        this.showDialog = false;
      });
    }
    },

    onScanSuccess(decodedResult) {
      const obj = { decodedResult: decodedResult };
      /*      const currentTime = new Date().toLocaleTimeString(); */
      const timeValue = this.selectedTime;
      
      const [selectedHour, selectedMinute] = timeValue.split(":");
      let hour = parseInt(selectedHour, 10);
      const minute = parseInt(selectedMinute, 10);
      let ampm =timeValue.split(' ')[1];
      console.log("time=",ampm);
      // if (hour >= 13) {
      //   ampm = "PM";
      //   if (hour > 13) {
      //     hour -= 13;
      //   }
      // } else if (hour === 0) {
      //   hour = 13;
      // }
      if (
        this.message.find((item) => item.name === this.name(obj.decodedResult))
      ) {
        this.showMessage = true;
        this.mensahenibai = "Already Scanned";
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);
        
      } else {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        this.message.unshift({
          name: this.name(obj.decodedResult),
          id: this.id(obj.decodedResult),
          time: currentTime,
        });

        this.showMessage = true;
        this.mensahenibai = "Successfully Scanned";
        setTimeout(() => {
          this.showMessage = false;
        }, 1500);

        const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;
      // if (
      //   this.employees.find((item) => item.Controlno === this.id(obj.decodedResult))
      // ){
      //   console.log("Control No = ",this.id(obj.decodedResult));
      //   const index=this.employees.findIndex((item) => item.Controlno === this.id(obj.decodedResult))
      //   const editedemployee=this.employees.splice(index,1)[0]; 
      //   editedemployee.timescanned=formattedTime;
      //   this.employees.unshift(editedemployee)
      //   console.log("Name:",this.name(obj.decodedResult));
      //   console.log("employees=",this.employees);
      // }

  if (this.employees.find((item) => item.Controlno == this.id(obj.decodedResult))) {
  const controlno = this.id(obj.decodedResult);
  
  // Find the employee object with the matching Controlno
  const employeeWithMatchingControlno = this.employees.find((item) => item.Controlno == controlno);

  /// FOR TIME

  const index=this.employees.findIndex((item) => item.Controlno == this.id(obj.decodedResult))
  const editedemployee=this.employees.splice(index,1)[0];


  // Access the office_id from the employee object
  const office_id = employeeWithMatchingControlno.office_id;
  const fullname = employeeWithMatchingControlno.fullname;
  const designation = employeeWithMatchingControlno.designation;
  const status = employeeWithMatchingControlno.status;

/*   const remarks = employeeWithMatchingControlno.remarks; */
this.designation = employeeWithMatchingControlno.designation;
this.controlno = controlno;
this.fullname = employeeWithMatchingControlno.fullname;
this.status = employeeWithMatchingControlno.status;

        const scanTime = new Date();
        this.time = scanTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });



    editedemployee.timescanned=formattedTime;
     this.employees.unshift(editedemployee)
  console.log("Control No =", controlno);
  console.log("Office ID =", office_id);
  console.log("Full Name =", fullname);
  console.log("Designation =", designation);
  console.log("Status=", status);
  console.log("Time Scanned =", editedemployee.timescanned);

    // START CODE FOR ADD TO DATA BASE 
        this.clickmetosave()
     // END CODE FOR ADD TO DATA BASE 

 // START CODE FOR HIDE REMARKS

 console.log("Employees Data =",this.employees);
 const indexnibai = this.employees.findIndex((item) => item.id === parseInt(this.id));
      if (indexnibai !== -1) {
        const updatedItem = this.employees.splice(indexnibai, 1)[0];
        // updatedItem.time = this.time;
        updatedItem.selectedRemarks = this.selectedRemarks;
        this.employees.unshift(updatedItem);
      } else {
        // Handle error or show a message for invalid ID
      }
      // this.id = "";
      // this.time = "";
      this.selectedRemarks = "";
  // END CODE FOR REMARKS
}
this.fetchOffices();
this.searchByOffice();
      }

      
// location.reload();
    },

    clicktosaveall()
    {
      let data = new FormData();
      data.append('Controlno', this.item.columns.Controlno);
     data.append('event_id', this.item.columns.Controlno);
      data.append('office', this.item.columns.selectedOffice);
      data.append('fullname', this.item.columns.fullname);
      data.append('status', this.item.columns.status);
      data.append('designation', this.item.columns.designation);
      data.append('time', this.item.columns.timescanned);
      data.append('remarks', this.item.columns.Remarks);
    
    this.registerScan(data)
        .then(() => {
          console.log('Registration All successful');
        })
        .catch(e => {
          console.error('Error during registration:', e.message);
        });

    },


    clickmetosave(){
      
       let data = new FormData();
      data.append('Controlno', this.controlno);
      data.append('event_id', this.eventayde);
      data.append('office', this.selectedOffice);
      data.append('fullname', this.fullname);
      data.append('status', this.status);
      data.append('designation', this.designation);
      data.append('time', this.time);
      data.append('remarks', this.selectedRemarks);
    
    this.registerScan(data)
        .then(() => {
          console.log('Registration successful');
        })
        .catch(e => {
          console.error('Error during registration:', e.message);
        });
},


  fetchData() {
     const userDataJSON = localStorage.getItem('user');
     if (userDataJSON) {
       this.userData = JSON.parse(userDataJSON);
     }
   },





   
   name(decodedresult) {
      const regex = / - ([^-]+) -/;
      const match = decodedresult.match(regex);
      return match ? match[1].trim() : "";
    },
    id(decodedresult) {
      const regex = / - (\d+) /;
      const match = decodedresult.match(regex);
      return match ? match[1].trim() : "";
    },
  

    
    updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      this.currentTime = `${formattedHours}:${this.padZero(minutes)} ${ampm}`;
    },
    saveremarks(item){
      console.log("remarks=",item)
      //  this.employees.find(e=>e.controlno == item.value.controlno).Remarks=item.Remarks
      // console.log("find=",remarks)
      // remarks.remarks=item.remarks
      
      console.log("new employees=",this.employees)
    },
    updateDate() {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      this.currentDate = now.toLocaleDateString(undefined, options);
    },
    padZero(num) {
      return num.toString().padStart(2, "0");
    },

  editEvent(id) {
    // Handle edit event logic
    console.log("Edit Event:", id);
  },
  deleteEvent(id) {
    // Handle delete event logic
    console.log("Delete Event:", id);
  },

  navigateTo(path) {
        this.$router.push({ 'path': path });
  },

  
},


async mounted() {
  this.selected = 'BMW'
    setInterval(() => {
      this.selectedTime = getCurrentTime();
    }, 1000);


  //  this.fetchData();
  /*  this.creatScan(); */
   this.updateDate(); // Call it once on mount
   this.updateTime(); // Call it once on mount
   this.timer = setInterval(this.updateTime, 1000); 
    // this.updateTime(); // Call it once on mount
    // this.timer = setInterval(this.updateTime, 1000); // Update time every second
    // this.updateDate(); // Call it once on mount
    // this.timer = setInterval(this.updateDate, 1000); // Update date every second
 },

 beforeUnmount() {
    clearInterval(this.timer); // Clear the timer on component unmount to prevent memory leaks

    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.stop();
    }
  },
};

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours; // Convert 0 to 12
  formattedHours = formattedHours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
</script>

<style scoped >
.dialogcssbai {

  width: 300px;
  height: 200px;
  background: pink; 
  padding: 24px;
}
/* .scanner-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(168, 34, 34, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
} */

#qr-code-full-region {

  background-color: #f3f0f0;
}

@media screen and (max-width: 600px) {

#select-element {
  border: 1px solid #1f7b09; 
  border-radius: 5px;
  padding: 1px;
  font-size: 10px;
  width: 48px; 
  height: 20px;
  margin-left: 5px;
}



}


.elementobai{
  border: 1px solid #1f7b09; /* You can change the color code to your preferred color */
  border-radius: 5px;
  padding: 1px;
  padding-left: 10px;
  font-size: 14px;
  width: 100px; /* You can adjust the width as needed */
  height: 25px;
  margin-left: -40px;
}
/* } */




.items-per-page-text {
  /* Add your custom styles for the "Items per page" text here */
  font-weight: bold;
  color: #007bff;
}
.header-id {
  background-color: #701c1c;
  color: #9e3636;
  font-weight: bold;
}

   
/* @media screen and (max-width: 600px) {
  .v-data-table th,
  .v-data-table td {
    font-size: 10px;
  }
} */

.image {
    border: 1px solid #0a7a0e;
}
.my-input.v-input .v-input__slot {
  border-radius: 100px;
}

.v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.10rem;
}


.container123 {
  max-width: 1170px;
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

.mobile-button {
  display: none; /* Initially hide the button */

  /* Use a media query to show the button on mobile devices */
  @media (max-width: 600px) {
    display: block;
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
  border: 1px solid #168904;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 500px;
  height: 40px;
}



.card.purple {
  background: linear-gradient(150deg, #f731db, #edebef 100%);
}

.card.green {
  background: linear-gradient(150deg, #eff2eedc, #f2f0f7 100%);
}



.alreadyscan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffffffb;
  color: rgb(11, 231, 11);
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
}


.success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffffffb;
  color: rgb(9, 230, 27);
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
}


</style>