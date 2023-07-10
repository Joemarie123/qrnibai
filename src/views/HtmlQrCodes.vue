<template>
 <v-app>


    <v-card class="" >

      <h1>Mao nani?</h1>
    <div id="qr-code-full-region">
      <!-- <div v-if="showSuccessMessage" class="success-message">
        Successfully Scanned
      </div> -->
     
      <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>

    </div>
    
    <div class="text-center">
  <h4 class="mt-1">DATE: {{ currentDate }}</h4> 

</div>
  <!--   <div class="table-wrapper">

    <table class="ml-12 mt-2">
        <thead>
        
          <v-row>
            <v-col class="text-center" cols="10">
          <th >ID & NAME</th>
        </v-col>

        <v-col class="text-center" cols="6">
          <th >TIME</th>
          <div v-for="(msg, index) in arr" :key="index">
       {{ msg.time }}
      </div>
        </v-col>

  
        </v-row>

      </thead>
      </table>
    </div> -->
    <div>

    <table class="TableHead" >
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th >TIME</th>
   
  </tr>

  <tr>
    <td >
  <div
      v-for="(msg, index) in message"
      :key="index"
    
    > 
    <p style="font-size:12px" class="mt-1 ml-1">{{ msg.id }}</p>
  <!--   <p style="font-size:12px" class="mt-1 ml-1"> {{ msg.name }}</p>  -->
    </div>


    </td>

    <td >
  <div v-for="(msg, index) in message" :key="index"> 
    <!-- <p style="font-size:12px">{{ msg.id }}</p> -->
    <p style="font-size:12px" class="mt-1 ml-1"> {{ msg.name }}</p> 
    </div>


    </td>

         <td>
       <div v-for="(msg, index) in arr" :key="index">
       <p style="font-size:12px" class="mt-1 ml-1">{{ msg.time }}</p>
      </div></td>
  
  </tr>

</table>
</div>

 


    <!--  <div
      v-for="(msg, index) in message"
      :key="index"
      style="white-space: pre-line"
    > -->
    
  <!--   <v-row> -->

      
<!-- <v-col cols="7" >


      <div class="table-wrapper mt-n5">

        <table>
      <tbody>
        <thead>
        
        <tr >
          <p >{{ msg.id }}</p>
          <p class="mt-n1 ml-1"> {{ msg.name }}</p> 
        </tr>

    
      </thead>
        
      </tbody>
    </table> 

      </div>
   

  </v-col>
 -->
 <!--  <v-col cols="5"> -->

   <!--  <h4 class="mt-1">{{ currentDate }}</h4> -->
  <!--   <table>
      <tbody>
        <tr v-for="(time, index) in transferredTimes" :key="index">
          <h3>{{ time }}</h3>
        </tr>
      </tbody>
    </table> -->
 
  <!--   <p class="ml-10 mt-1">{{ currentTime }}</p> -->

     
<!--  
  </v-col>
 -->
<!-- </v-row>

     </div> -->

    </v-card>

  

</v-app>
</template>

<script>
import { Html5QrcodeScanner } from "html5-qrcode";
export default {
  data() {
    return {
      
      currentTime: '',
      currentDate: '',
      showMessage: false,
      message: [],
      messagealreadyscan:[],
      transferredTimes: [],
      mensahenibai: false,
      lastScannedTime: '',

      arr: [],
    };
  },



  methods: {
    
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
     
      
     /*  console.log("obj",obj.decodedResult) */
     if(this.message.find(item => item.name === this.name(obj.decodedResult))){

      this.showMessage = true;
      this.mensahenibai = 'Already Scanned';
      setTimeout(() => {
        this.showMessage = false;
      }, 1500);

     }

     else{
      this.message.unshift({name: this.name(obj.decodedResult), id: this.id(obj.decodedResult)});
      
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.arr.unshift({ name: this.name(obj.decodedResult), time: currentTime });
      
      this.showMessage = true;
      this.mensahenibai = 'Successfully Scanned';
      setTimeout(() => {
        this.showMessage = false;

      }, 1500);
 
     
     
    
    }
    /*   this.transferredTimes.push(this.currentTime); */
   /*  this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 1500);
 */


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
 

   /*   onScanSuccess(decodedText, decodedResult) {
      const obj = { decodedResult: decodedResult };
      this.message.push(obj);
    }, */
  },

  async mounted() {
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
</script>

<style scoped>

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


 .qrcode-container {
  position: relative;
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


  .sentro {
    width:50%;
    height:60%;
    margin: 0 auto;

    position: absolute;
  left: 50%;
  top: 50%;
 
  transform: translate(-50%,-50%);

 
  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);


  }
  
  table, th, td {
  border: 1px solid black;
  border-collapse: collapse;

}

.TableHead{
    box-sizing: border-box;
    width: 370.29px;
    height: 50px;
    background: #F9F9F9;
    border: 1px solid #DDE0E2;
    border-style: solid !important;
    border-width: thin !important;
  }

  </style>
  


