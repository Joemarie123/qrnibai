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

   <!--  <v-col cols="12">
      <v-btn class="mt-3 ml-1 card"  rounded-lg color="success" variant="outlined">EVENT DETAILS</v-btn>
</v-col>
 -->
<v-row>


<v-col class="mt-2 ml-3 my-3 card" cols="12" md="7">
  <input v-model="search" class="textbox textboxbai"  placeholder="Search Full Name">
<!--   <v-text-field  density="compact"    append-inner-icon="mdi-magnify" variant="outlined"  label="Search Event"></v-text-field> -->
</v-col>

<v-col class="d-flex justify-center mt-md-5 mt-9 my-3" cols="12" md="4" >
     
     <div class="text-center">
         <p class=" "><b>DATE:</b> {{ currentDate }} - <b> TIME:</b> {{ currentTime }}</p>
       </div>
   
   </v-col>
</v-row>

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
 
      <v-btn  class="custom-btn colorfortext mt-2 mt-md-0 rounded-lg cardbaibai"  block @click="checkDateTime()">Scan QR Code
        <v-icon class="colorfortext mx-4">mdi-qrcode-scan</v-icon>
      </v-btn>

    <v-dialog max-width="600px"  v-model="showDialog" v-if="showDialog">
     <v-card class="custom-btn colorfortext" >
      <p class="d-flex justify-center mt-2">Tagum City Employees QR Code</p>
    <div id="qr-code-full-region" class="my-3 mx-3 ">
      <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>
    </div>
    <v-btn class="custom-btn colorfortext" @click="showDialog = false">Close</v-btn>
  </v-card>
   
  </v-dialog>

  <v-dialog v-model="notExceedDialog" max-width="400">
      <v-card>
        <v-card-title>MESSAGE</v-card-title>
        <v-card-text>
       Event Will Start On Date:<span>{{formattedDate_bai (Event.Event_date) }}  </span> Time: <span>{{formattedTime_From(Event.Event_from) }}</span> 
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="notExceedDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
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
      <!--   {{ RealDate }} {{ RealTime }} -->
  <v-col cols="12">
   <!--  <p style="font-size:15px"> <b>Event Name:</b> {{ Pangalan.ID }} </p> -->
      <p style="font-size:15px"> <b>Event Name:</b> {{ Event.Event_name }} </p>
  </v-col>
  <v-col cols="12" class="mt-n6">
    <p style="font-size:15px"><b>Date of Event:</b> {{ formattedDate_bai(Event.Event_date) }} </p>
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
   <!--    <p style="font-size:15px"> <b>Time From:</b> {{ Event.Event_from }} </p> -->
      <p style="font-size:15px"> <b>Time From:</b> {{ formattedTime_From(Event.Event_from) }} </p>
  </v-col>
  <v-col cols="12" class="mt-n6">
      <p style="font-size:15px"><b>Time To:</b> {{ formattedTime_To(Event.Event_to) }} </p>
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
    :items-per-page="30"
     class="custom-height-table-mobile my_class td btn-hover color-1 elevation-1"
     tile 
     height="470"
>
<template #bottom></template>
<!-- <template v-slot:item.remarks="{ item }">
  <div id="app" class="mt-n1">
    <select v-if="!item.columns.time" v-model="item.columns.selectedRemarks" id="select-element">
  <option v-for="remark in remarks">{{ remark }}</option>
</select>
</div>
</template> -->

<template v-slot:item="{ item }">

<tr >
<td class="card" :style="{ textAlign: 'left' }">{{ item.columns.Controlno }}</td>
<td :style="{ textAlign: 'left' }">{{ item.columns.fullname }}</td>
<td class="card" :style="{ textAlign: 'left' }">{{ item.columns.designation }}</td>
<td :style="{ textAlign: 'left' }">{{ item.columns.timescanned }}</td>
<td v-if="passremark" class="card" :style="{ textAlign: 'left' }">{{ item.raw.remarks }}</td>

<td v-if="!passremark">
<select   v-if="!item.columns.timescanned" @change="saveremarks(item)" v-model="item.raw.Remarks" class="elementobai mt-n2 card" id="select-element">
  <option value="DNP">DNP</option>
  <option value="OB">OB</option>
  <option value="OF">OF</option>
  <option value="OL">OL</option>
  <option value="FWS">FWS</option>
  <option value="Late">Late</option>
  <option value="PM Shift">PM Shift</option>
  <option value=""></option>
</select>

</td>
</tr>

</template>



</v-data-table>

</v-card>

<v-dialog v-model="dialogVisible" persistent max-width="280">
    <v-card >
      <v-row >
        <v-col cols="10" class="mt-5">
          <v-card-title class="headline">Successfully Saved</v-card-title>
        </v-col>
        <v-col cols="3" class="ml-n10">
          <v-avatar class="my-5 image" size="50" >
            <v-img src="/save.png" ></v-img>
            </v-avatar>
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-center mt-n7">  
        <v-btn color="green" text @click="dialogVisible = false">OK</v-btn>
      </v-card-actions>
  
    </v-card>
  </v-dialog>
  <!-- <div>
<p v-if="passremark">passremark is true</p>
    <p v-else>passremark is false</p>
    
</div> -->

       <!--  <tbody>
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>{{ item.value.office_id }}</td>
       
          <td>{{ item.value.office }}</td>
          <td>{{ item.value.fullname }}</td>
          <td>{{ item.value.Controlno }}</td>
          <td>{{ item.value.designation }}</td>
          <td>{{ item.value.status }}</td>
          <td>{{ item.value.time }}</td>
          <td >{{ item.value.Remarks }}</td>
        </tr>
      </tbody> -->
 

    </v-col>
    <v-col cols="12" class="mt-n4 d-flex justify-end">
        <v-btn v-if="!passremark" class="custom-btn rounded-lg card"  @click="saveAllData()" >
          
          <p class="colorfortext ">Submit Remarks</p>
          <v-icon  class="colorfortext mx-1">mdi-content-save-all</v-icon>
        </v-btn>
    </v-col>
  </v-row>
</v-container>
</div>
<!-- <h1 class="grey--text ">Event ID{{ userData.office_id }}</h1> -->
<!-- <p>Data from Local Storage with key "ID": {{ eventayde }}</p> -->
</v-main>
</v-layout>

</v-card>

</template>


<script>
import axios from 'axios'; // Import Axios library
import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import NavBarUser from "@/components/NavBarUser.vue";
import HtmlQrCodes from "@/views/HtmlQrCodes.vue";
import { mapActions, mapGetters , mapState} from 'vuex';



export default {

components: {
  NavBarUser,
  HtmlQrCodes,
},

data() {
return {
 //RealDate: new Date().toISOString().substr(0, 10), // Real date value
 //RealTime: new Date().toTimeString().substr(0, 5), // Real time value
  
  notExceedDialog:false,
 // selectedRemark: "",
 passremark:false,
 dialogVisible:false,
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

  items: [ /* Your data goes here */ ],
  selectedItems: [],
  // items: [
  //   { title: "My Account", icon: "mdi-account",  },
  //   { title: "Settings", icon: "mdi-clock" },
  //   { title: "Create Account", icon: "mdi-account", route: "/CreateAccount", },
  // ],

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
      { key: "selectedRemarks", title: "Remarks",align: ' d-none d-sm-table-cell'  },
    
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

  setInterval(() => {
    this.RealDate =  new Date().toISOString().substr(0, 10), // Real date value
      this.RealTime = new Date().toTimeString().substr(0, 5);
    }, 1000);
 
// this.fetchOffices().then(req=>{
  
//   this.fetchData();
//   this.searchByOffice();
//   // console.log("offices=",this.Offices);
// })
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

formattedTime_From(time) {
  const eventTime = new Date(`2000-01-01T${time}`);
  let hours = eventTime.getHours();
  const minutes = eventTime.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock

  // Format minutes to have leading zero if less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${period}`;
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


checkDateTime() {
    const dynamicDateTime = new Date(this.Event.Event_date + "T" + this.Event.Event_from);
    const RealDateTime = new Date(this.RealDate + "T" + this.RealTime);

    if (dynamicDateTime >= RealDateTime) {
      this.notExceedDialog = true; // Show not exceed dialog if date and time do not exceed static values
    } else {
      this.showDialog = true;
    
    setTimeout(() => {
   this.creatScan_htmlfive();
    // this.creatScan(1);
  }, 500);
    }
  },


showScannerDialog() {
    this.showDialog = true;
    
    setTimeout(() => {
   this.creatScan_htmlfive();
    // this.creatScan(1);
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

  stopqrcodenibai(){
    const html5QrCode = new Html5Qrcode("qr-code-full-region");
html5QrCode.stop().then((ignore) => {
// QR Code scanning is stopped.
this.showDialog = false
}).catch((err) => {
// Stop failed, handle it.
});
},

// FOR QR CODE CREATE SCAN START

creatScan_htmlfive() {
      
      const config = { fps: 10, qrbox: 250 };
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-code-full-region",
        config
      );
      html5QrcodeScanner.render(this.onScanSuccess);
     
    },

//   creatScan_htmlfive() {
//     const html5QrCode = new Html5Qrcode("qr-code-full-region");
// const qrCodeSuccessCallback = () => {
//   /* handle success */
// };
// const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// // If you want to prefer back camera
// html5QrCode.start({ facingMode: "environment" }, config, this.onScanSuccess); 

// // If you want to prefer front camera
// // html5QrCode.start({ facingMode: "user" }, config, this.onScanSuccess);

// html5QrCode.render(this.onScanSuccess);

//   },

// FOR QR CODE CREATE SCAN END




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

/*   clicktosaveall()
  {
    let data = new FormData();
    data.append('Controlno', this.item.value.Controlno);
   data.append('event_id', this.item.value.Controlno);
    data.append('office', this.item.value.office);
    data.append('fullname', this.item.value.fullname);
    data.append('status', this.item.value.status);
    data.append('designation', this.item.value.designation);
    data.append('time', this.item.value.timescanned);
    data.append('remarks', this.item.value.Remarks);
  
  this.registerScan(data)
      .then(() => {
        console.log('Registration All successful');
      })
      .catch(e => {
        console.error('Error during registration:', e.message);
      });

  },
 */
  async saveAllData() {
    this.dialogVisible = true;
   
    console.log("selecteditems=",Object.values(this.selectedItems))
    // const data= this.selectedItems;
    // data.append('data',this.selectedItems);
    // console.log("Data NI=",data);
    // const data = new FormData();
    // data.append('data',JSON.stringify(this.selectedItems));
    // this.employeeremarks=this.selectedItems;
    // console.log("employeeremarks=",this.employeeremarks);

    // this.saveallremarks();

    let res = await axios.post(`/saveremarks.php`, Object.values(this.selectedItems) );
      console.log("radsf",res.data)
      this.selectedItems = []; 
      this.passremark=true;

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
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    this.currentTime = `${formattedHours}:${this.padZero(minutes)}:${seconds} ${ampm}`;
  },
  saveremarks(item) {
      console.log("remarks=", item);

      const existingItemIndex = this.selectedItems.findIndex(
        (selectedItem) =>
          selectedItem.value.Controlno === item.value.Controlno
      );

      if (existingItemIndex !== -1) {
        // If an item with the same Controlno exists, update it
        this.selectedItems[existingItemIndex].value = { ...item.value };
        this.selectedItems[existingItemIndex].value.Remarks = item.raw.Remarks;
      } else {
        // If not, add a new item with Event.ID
        this.selectedItems.push({
          value: { ...item.value, Remarks: item.raw.Remarks, event_id: this.Event.ID },
        });
      }

      // Include userData.office_id
    /*   const officeId = this.userData.office_id; */
      // console.log("office_id=", officeId);

      console.log("new employees=", this.employees);
      
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

@media screen and (min-width: 600px) {

.cardbaibai{
  display: none; /* Hide the card on screens with a max-width of 768px (adjust as needed) */
}



}

@media screen and (max-width: 1290px) {
  .textboxbai {
padding: 10px;
border: 1px solid #168904;
border-radius: 10px;
margin-bottom: 10px;
width: 100px;
height: 40px;
}

}

@media screen and (min-width: 100px) {
.textbox {
padding: 10px;
border: 1px solid #168904;
border-radius: 10px;
margin-bottom: 10px;
width: 500px;
height: 40px;
}
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

.custom-height-table {
  height: 420px; /* Set the desired height here */
  /* You can also use other CSS properties like max-height, min-height, overflow, etc. */
}


@media screen and (max-width: 600px) {

  .custom-height-table-mobile {
  height: 294px; /* Set the desired height here */
  /* You can also use other CSS properties like max-height, min-height, overflow, etc. */
}

}


</style>