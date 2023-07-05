<template>
 <v-app>


    <v-card class="" >

      <h1>Gee Daw</h1>
    <div id="qr-code-full-region"></div>
    

    <div class="table-wrapper">
    <table class="ml-12">
        <thead>
        
          <v-row>
            <v-col cols="10">
          <th >ID & NAME</th>
        </v-col>

        <v-col  cols="2">
          <th >TIME</th>
        </v-col>

        </v-row>

      </thead>

      

      </table>
    </div>
      
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


    <!-- <p class="mt-1">ID: {{ msg.id }}</p>  
    <p class="mt-2"> {{ msg.name }}</p>  
 -->
     <!--   <p>ID: {{ id }}</p>
      <p>{{ name }}</p> -->
    
      <div class="table-wrapper mt-n5">
        <table>
      <tbody>
        <tr >
          <p>{{ msg.id }}</p>
          <p class="mt-n2 ml-3"> {{ msg.name }}</p> 
        </tr>
      </tbody>
    </table> 
      </div>
   


  </v-col>

  <v-col cols="5">

   <!--  <h4 class="mt-1">{{ currentDate }}</h4> -->
    <!-- <table>
      <tbody>
        <tr v-for="(time, index) in transferredTimes" :key="index">
          <h3>{{ time }}</h3>
        </tr>
      </tbody>
    </table>
  -->
    <p class="ml-10 mt-5">{{ currentTime }}</p>
  
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
      transferredTimes: [],

     
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
     /*  console.log("obj",obj.decodedResult) */
     if(this.message.find(item => item.name === this.name(obj.decodedResult)) )
     {
      this.message.unshift({name: this.name(obj.decodedResult), id: this.id(obj.decodedResult)});
    }
    /*   this.transferredTimes.push(this.currentTime); */

   

      
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
  
 
 
  .table-wrapper {
  overflow-x: auto;
}

.table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: var(--darkblue);
  border-radius: 40px;
}

.table-wrapper::::-webkit-scrollbar-track {
  background: var(--white);
  border-radius: 40px;
}

.table-wrapper table {
  margin: 10px 0 10px;
  border-collapse: collapse;
  text-align: center;
  
}

.table-wrapper table th,
.table-wrapper table td {
  padding: 10px;
  min-width: 100px;
}

.table-wrapper table th {
  color: var(--white);
  background: var(--darkblue);
}

.table-wrapper table tbody tr:nth-of-type(even) > * {
  background: var(--lightblue);
}

.table-wrapper table td:first-child {
  display: grid;
  grid-template-columns: 5px 1fr;
  grid-gap: 10px;
  text-align: left;
}

.table-credits {
  font-size: 12px;
  margin-top: 10px;
}
  </style>
  


