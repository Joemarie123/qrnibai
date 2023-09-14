<template>
  <v-app>
 

    <v-card>
      <!--   <h1>363 nani?</h1> -->
   <!--    <v-btn color="green" > Scan Me</v-btn> -->
      <div id="reader" width="600px">
        <!-- <div v-if="showSuccessMessage" class="success-message">
        Successfully Scanned
      </div> -->
      </div>

      <div class="text-center">
        <h4 class="mt-1">DATE: {{ currentDate }} - TIME: {{ currentTime }}</h4>
      
      </div>

      
    </v-card>

    <div class="mt-2">
        <table class="TableHead">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TIME</th>
          </tr>

          <tr
            v-for="(msg, index) in message"
            :key="index"
            :class="{ 'red-row': isTimeHigh(msg.time, timeThreshold) }"
          >
            <td>
              <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.id }}</p>
            </td>

            <td>
              <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.name }}</p>
            </td>

            <td>
              <p style="font-size: 12px" class="mt-1 ml-1">{{ msg.time }}</p>
            </td>
          </tr>
        </table>
      </div>

     
  </v-app>
</template>

<script>
/* import { Html5QrcodeScanner } from "html5-qrcode"; */
import {Html5Qrcode} from "html5-qrcode";
export default {
  data() {
    return {
   
      selectedTime: getCurrentTime(),
      timeThreshold: "",
      dataTable: [],
      currentTime: "",
      currentDate: "",
      showMessage: false,
      message: [],
      messagealreadyscan: [],
      transferredTimes: [],
      mensahenibai: false,
      lastScannedTime: "",
      timeThreshold: "",

     


    };
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

    creatScan() {
      const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

html5QrcodeScanner.render(this.onScanSuccess);
    },

    onScanSuccess(decodedResult) {
      const obj = { decodedResult: decodedResult };
      /*const currentTime = new Date().toLocaleTimeString(); */
      const timeValue = this.selectedTime;
      const [selectedHour, selectedMinute] = timeValue.split(":");
      let hour = parseInt(selectedHour, 10);
      const minute = parseInt(selectedMinute, 10);
      let ampm = "AM";

      if (hour >= 13) {
        ampm = "PM";
        if (hour > 13) {
          hour -= 13;
        }
      } else if (hour === 0) {
        hour = 13;
      }

      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;

      /*  console.log("obj",obj.decodedResult) */
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

    updateDate() {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      this.currentDate = now.toLocaleDateString(undefined, options);
    },

    padZero(num) {
      return num.toString().padStart(2, "0");
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
  computed: {},
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

<style scoped>
.hideqr {
    display: none; /* Hide the card on screens with a max-width of 768px (adjust as needed) */
  }
.red-text input {
  color: red !important;
}

.red-row {
  background-color: red !important;
  color: white !important;
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
  width: 50%;
  height: 60%;
  margin: 0 auto;

  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

.TableHead {
  box-sizing: border-box;
  width: 363.29px;
  height: 50px;
  background: #f9f9f9;
  border: 1px solid #dde0e2;
  border-style: solid !important;
  border-width: thin !important;
}
</style>