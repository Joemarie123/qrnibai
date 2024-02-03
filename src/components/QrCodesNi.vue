<template>
    <v-app>


     <v-card>

      <!--    <h1>ssdsdsdsdsdsd</h1> -->

         <v-row>

           <v-col cols="12" >
             <div class="text-center ">
           <v-alert dense dark color="green darken-3">
          SCAN QR CODES<strong>
         </strong>
           </v-alert>
       </div>


       </v-col>


         </v-row>

     </v-card>

       <v-card>


       <div id="qr-code-full-region" >

         <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>

       </div>

       <div class="text-center">
     <h4 class="mt-1">DATE: {{ currentDate }} - TIME: {{ currentTime }} </h4>

   </div>


       </v-card>
   ``


   </v-app>
   </template>

   <script>
   import { Html5QrcodeScanner } from "html5-qrcode";
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


       };
     },



     methods: {

       tawaganisaqrcode(){

           this.scannerqr = true;
           this.creatScan();
             this.updateTime(); // Call it once on mount
       },


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

     /*   formatTime(decodedresult) {
         const [hours, minutes] = decodedresult.split(':');
         let formattedHours = parseInt(hours);
         let period = 'AM';

         if (formattedHours === 0) {
           formattedHours = 12;
         } else if (formattedHours > 12) {
           formattedHours -= 12;
           period = 'PM';
         }

         return `${formattedHours}:${minutes} ${period}`;
       },
    */

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


      /*   onScanSuccess(decodedText, decodedResult) {
         const obj = { decodedResult: decodedResult };
         this.message.push(obj);
       }, */
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
     computed: {

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
   /*
   .red-text input {
     color: red !important;
   }

   .red-row {
     background-color: red !important;
     color: white !important;
   }
    */

/*    .alreadyscan {
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
    */

 /*    .qrcode-container {
     position: relative;
   } */

  /*  .success-message {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #fffffffb;
     color: rgb(9, 230, 27);
     padding: 10px;
     border-radius: 5px;
     z-index: 9999;
   } */


 /*     .sentro {
       width:50%;
       height:60%;
       margin: 0 auto;

       position: absolute;
     left: 50%;
     top: 50%;

     transform: translate(-50%,-50%);


     box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);


     } */

  /*    table, th, td {
     border: 1px solid black;
     border-collapse: collapse;

   }

   .TableHead{
       box-sizing: border-box;
       width: 363.29px;
       height: 10px;
       background: #F9F9F9;
       border: 1px solid #DDE0E2;
       border-style: solid !important;
       border-width: thin !important;
     }
    */
     </style>



