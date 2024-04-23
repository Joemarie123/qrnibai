<template>
  <div>

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
