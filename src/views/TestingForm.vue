<template>
  <div>
<<<<<<< HEAD

<!--     <h2>The decoded value in QR/barcode is</h2> -->


      <v-btn color="green" @click="create_scanqr">
        CLICK TO SHOW DIALOG
      </v-btn>
      <h2>{{ decodedText }}</h2>

      <v-dialog max-width="600px" v-model="showDialog" v-if="showDialog">
                    <v-card class="custom-btn colorfortext">
                      <p class="d-flex justify-center mt-2">Tagum City Employees QR Code</p>

                     <!--  <div id="qr-code-full-region" class="my-3 mx-3 ">
                        <div v-if="showMessage" class="alreadyscan">{{ mensahenibai }}</div>
                      </div>


 -->
                <StreamBarcodeReader @decode="onScanSuccess"></StreamBarcodeReader>

                      <v-btn class="custom-btn colorfortext" @click="showDialog = false">Close</v-btn>
                    </v-card>

                  </v-dialog>
=======
   <!--  <h2>Signatories</h2>
    <div v-for="item in signatory" :key="item.ID">
      <p>ID: {{ item.ID }}</p>
      <p>Office_id: {{ item.Office_id }}</p> -->
      <!-- <p>Control Number: {{ foundSignatory.controlno }}</p> -->
   <!--  </div> -->
>>>>>>> 7fbfe08e482f308115079023a77d0e6a1c6812e1
  </div>
</template>

<script>
/* import { Q } from "dist/assets/index.cb8ac621"; */
/* import { ref } from "vue"; */
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  /* name: "BarcodeReaderComponent", */

  data() {
    return {
<<<<<<< HEAD
      showDialog:false,
      decodedText:'',
    }

  },

  methods:{
    create_scanqr()
    {
      this.showDialog = true
      /* const decodedText = ref(""); */
    },


    onScanSuccess  (decodedResult){
  try {
    // Perform any processing on the decoded text if needed
    this.decodedText = decodedResult;
  } catch (error) {
    console.error("Error decoding:", error);
    // Handle the error appropriately
=======
      controlnoclone:'7',
      foundSignatory:'',
      signatory: [
        {
          ID: 2,
          Office_id: 8,
          controlno: "003041"
        },
        {
          ID: 3,
          Office_id: 7,
          controlno: "125454"
        }
      ]


    };

  },
  created() {

    this.foundSignatory = this.signatory.find(item => item.Office_id == this.controlnoclone);
    console.log("Control Number:", this.foundSignatory.controlno);

>>>>>>> 7fbfe08e482f308115079023a77d0e6a1c6812e1
  }
}


  },

  components: {
    StreamBarcodeReader,
  },
/*   setup() {

  }, */
};
</script>

<style scoped>
a {
  color: #42b983;
}
.information {
  margin-top: 100px;
}
</style>
