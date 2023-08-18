<template>
    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
   
      <v-layout>
        <v-app-bar>
          <template v-slot:image> </template>
          <template v-slot:prepend>
            <v-avatar :size="50">
              <v-img src="/Tagum.png" alt="altText"></v-img>
            </v-avatar>
          </template>
  
          <v-app-bar-title>
            <span  :style="{ color: 'green' }">HOME EVENTS</span>
          </v-app-bar-title>
  
          <v-spacer></v-spacer> 
  
          <v-avatar class="mx-2 my-2" :size="50">
            <v-img src="img5.png"></v-img>
          </v-avatar>
        </v-app-bar>
      </v-layout>
    </v-card>
       <v-dialog v-model="scannerqr"  max-width="400px" height="100px">

<QrCodesNi/>
   </v-dialog>
    <v-container>
      <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-16"
        elevation="4"
        rounded
        max-width="90%"
        width="100%"
      >
       <!--  <v-row>
          <v-col cols="4">
            <div class="center1">
              <v-img :width="100" src="/phil.png" class=""></v-img>
            </div>
          </v-col>
          <v-col cols="4">
            <h3 class="mt-12">Republic of the Philippines</h3>
            <h3 class="">Province of Davao del Norte</h3>
            <h3 class="">CITY OF TAGUM</h3>
          </v-col>
          <v-col cols="4">
            <div class="center">
              <v-img :width="100" src="/Tagum.png" class=""></v-img>
            </div>
          </v-col>
        </v-row> -->
        <v-divider color="blue" :thickness="5" class="mt-2"></v-divider>
        <v-col cols="12">
          <!-- <h2>ATTENDANCE REPORT</h2> -->
        </v-col>
        <v-container>
          <v-row no-gutters style="text-align: justify">
            <v-col cols="12" md="6">
              <div v-for="items in selected_event" :key="items.id">
              <p><strong>Department:</strong> {{ items.Department }}</p>
              <p><strong>Division:</strong> {{ items.Division }}</p>
              <p><strong>Section/Unit:</strong> {{ items.Section_unit  }}</p>
              <p><strong>Project:</strong> {{ items.Project }}</p>
            </div>
            </v-col>
            <v-col cols="12" md="6">
              <div v-for="items in selected_event" :key="items.id">
              <p><strong>Date:</strong> {{ items.eventDates }}</p>
              <p><strong>Activity:</strong> {{ items.eventName }}</p>
              <p><strong>Venue:</strong> {{ items.venue }}</p>
            </div>
            </v-col>
          </v-row>
        </v-container>
        <v-col class="d-flex justify-end mb-6" >
          <v-btn @click="scannerqr = true"  id="buttonScan">Start Scanning</v-btn>
        </v-col>

      



        <v-container>
          <v-table density="compact">
            <thead>
              <tr>
                <th id="head">No.</th>
                <th id="head">Name</th>
                <th id="head">Position</th>
                <th id="head">Time Scanned</th>
                <th id="head">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.no }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.timeScanned }}</td>
                <td>{{ item.remarks }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
        <!-- <p class="text-justify font-italic pa-4">
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
        </v-row> -->
      </v-sheet>
    </v-container>

    
  </template>
    <script>
    import { Html5QrcodeScanner } from "html5-qrcode";
    import QrCodesNi from "../components/QrCodesNi"

  export default {
    data() {
    

      return {
        selectedTime: getCurrentTime(),
      timeThreshold: '',
      dataTable: [],
      currentTime: '',
      currentDate: '',
      showMessage: false,
      message: [],
      messagealreadyscan:[],
      transferredTimes: [],
      mensahenibai: false,
      lastScannedTime: '',
      timeThreshold: '',
        scannerqr:false,

        desserts: [
          {
            no: "1",
            name: "Honey Curay",
            position: "Hatdog",
            timeScanned: "2121",
            remarks: "zxdfd",
          },
          {
            no: "1",
            name: "Honey Curay",
            position: "Hatdog",
            timeScanned: "2121",
            remarks: "zxdfd",
          },
          {
            no: "1",
            name: "Honey Curay",
            position: "Hatdog",
            timeScanned: "2121",
            remarks: "zxdfd",
          },
        ],

        selected_event:[],

        tableData_HomeEvents: [
        { id: 1, eventName: 'Araw Nang Tagum', eventDates: '2023-07-20', attendance: '50',venue:'Tagum City Hall'  ,Department:'City Mayor' ,Division:'City Mayor' ,Section_unit:'Section Durian' ,Project:'Project Night Fall' , employee:'5000' },
        { id: 2, eventName: 'Kantahan of the Night', eventDates: '2023-07-21', attendance: '75' ,venue:'Davao City Hall' ,Department:'City Mayor 1' ,Division:'City Vice-Mayor' ,Section_unit:'Section Nangka' ,Project:'Project Night Fall 1', employee:'5000'  },
        { id: 3, eventName: 'Civil Service Event', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 2' ,Division:'Human Resource' ,Section_unit:'Section Santol' ,Project:'Project Night Fall 2' , employee:'5000' },
        { id: 4, eventName: 'Tagum October Fest', eventDates: '2023-07-22', attendance: '90'  ,venue:'Tagum City Hall' ,Department:'City Mayor 3' ,Division:'Engineering' ,Section_unit:'Section Saging' ,Project:'Project Night Fall 3'  , employee:'5000'},
        { id: 5, eventName: 'Beer of the Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 4' ,Division:'Treasure' ,Section_unit:'Section Lansones' ,Project:'Project Night Fall 4' , employee:'5000'},
        { id: 6, eventName: 'Nutrition Month', eventDates: '2023-07-22', attendance: '90' ,venue:'Tagum City Hall' ,Department:'City Mayor 5' ,Division:'HR NI BAI' ,Section_unit:'Section Rambotan' ,Project:'Project Night Fall 5' , employee:'5000'},
        // Add more sample data here...
      ]

      };
    },

    components:{
        QrCodesNi
      },
    created() {
  console.log("params=",history.state.id)
      this.selected_event.push(this.tableData_HomeEvents.find(e => e.id == history.state.id));
  },

  methods: {

    timeExceedsThreshold(time) {
      if (!this.timeThreshold) {
        return false;
      }
      return time > this.timeThreshold;
    },

    isTimeHigh(currentTime, threshold) {
      if (!currentTime || !threshold) return false; // Handle empty time or threshold case

      const timeParts = currentTime.split(':');
      const thresholdParts = threshold.split(':');
      const hour = parseInt(timeParts[0], 10);
      const minute = parseInt(timeParts[1], 10);
      const thresholdHour = parseInt(thresholdParts[0], 10);
      const thresholdMinute = parseInt(thresholdParts[1], 10);

      return hour > thresholdHour || (hour === thresholdHour && minute > thresholdMinute);
    },




    creatScan() {
      
      const config = { fps: 10, qrbox: 250 };
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-code-full-region",
        config
      );
      html5QrcodeScanner.render(this.onScanSuccess);
     
    },


    onScanSuccess( decodedResult) {

const obj = {decodedResult: decodedResult};
/*      const currentTime = new Date().toLocaleTimeString(); */
 const timeValue = this.selectedTime;
const [selectedHour, selectedMinute] = timeValue.split(':');
let hour = parseInt(selectedHour, 10);
const minute = parseInt(selectedMinute, 10);
let ampm = 'AM';

if (hour >= 13) {
  ampm = 'PM';
  if (hour > 13) {
    hour -= 13;
  }
} else if (hour === 0) {
  hour = 13;
}

const formattedHour = hour.toString().padStart(2, '0');
const formattedMinute = minute.toString().padStart(2, '0');
const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;


/*  console.log("obj",obj.decodedResult) */
if(this.message.find(item => item.name === this.name(obj.decodedResult))){

this.showMessage = true;
this.mensahenibai = 'Already Scanned';
setTimeout(() => {
  this.showMessage = false;
}, 1500);

}

else{
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
this.message.unshift({name: this.name(obj.decodedResult), id: this.id(obj.decodedResult) , time: currentTime});


this.showMessage = true;
this.mensahenibai = 'Successfully Scanned';
setTimeout(() => {
  this.showMessage = false;

}, 1500);

}

},


name(decodedresult) {
    
    const regex = / - ([^-]+) -/;
    const match = decodedresult.match(regex);
    return match ? match[1].trim() : '';
    
  },
  id(decodedresult) {
    const regex = / - (\d+) /;
    const match = decodedresult.match(regex);
    return match ? match[1].trim() : '';
  },

  updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      this.currentTime = `${formattedHours}:${this.padZero(minutes)} ${ampm}`;


    },

    updateDate() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = now.toLocaleDateString(undefined, options);
      
    },
    
    padZero(num) {
      return num.toString().padStart(2, '0');

      
    },
 

  
  },

  async mounted() {

setInterval(() => {
  this.selectedTime = getCurrentTime();
}, 1000);

this.creatScan();
this.updateTime(); // Call it once on mount
this.timer = setInterval(this.updateTime, 1000); // Update time every second
this.updateDate(); // Call it once on mount
this.timer = setInterval(this.updateDate, 1000); // Update date every second
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
  const ampm = hours >= 12 ? 'PM' : 'AM';

  let formattedHours = hours % 12;
  formattedHours = formattedHours === 0 ? 12 : formattedHours; // Convert 0 to 12
  formattedHours = formattedHours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
  </script>
    <style scoped>
  .center1 {
    margin: 0;
    position: absolute;
    top: 10%;
    left: 20%;
  }
  #buttonScan{
      background-color: #70b354;
      color: white;
      margin-bottom: -30px;
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