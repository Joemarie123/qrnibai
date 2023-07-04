<template>
 <v-app>

    
    <v-card class="" >

    <div id="qr-code-full-region"></div>
    <!-- <div>
      <button type="button" @click="message = []">clear</button>
    </div> -->


     <div
      v-for="(msg, index) in message"
      :key="index"
      style="white-space: pre-line"
    >
    <v-row>

<v-col cols="7" >


    <p class="mt-1">ID: {{ msg.id }}</p>  
    <p class="mt-2"> {{ msg.name }}</p>  
     <!--   <p>ID: {{ id }}</p>
      <p>{{ name }}</p> -->

   
  </v-col>

  <v-col cols="5">

  <h4 class="mt-1">{{ currentDate }}</h4>
    <h4 class="mt-1">TIME: {{ currentTime }}</h4>

  </v-col>

</v-row>

     </div>
     



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
      message: [],
      concatenatedString: 'City Government of Tagum - ABARICO, APRIL REY FORMOSO - 011709 - CMO - DETAILED AT NATIONAL LINE AGENCIES - CHRMO contact no. (645-3300) LOCAL (217 or 218)',
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
      const obj = { decodedResult: decodedResult };
      console.log("obj",obj.decodedResult)
      this.message.push({name: this.name(obj.decodedResult), id: this.id(obj.decodedResult)});

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
   
  },
  computed: {
     

    },

 
};
</script>

<style scoped>
  
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
  
 
  </style>
  


