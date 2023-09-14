<template>
  <div>
    <v-btn @click="openDialog">Open QR Code Scanner</v-btn>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>QR Code Scanner</v-card-title>
        <v-card-text>
          <div id="qr-code-full-region"></div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import {Html5QrcodeScanner} from 'html5-qrcode';

export default {
  setup() {
    const dialog = ref(false);
    let html5QrcodeScanner = null;

    const openDialog = () => {
      dialog.value = true;
      initializeScanner();
    };

    const closeDialog = () => {
      dialog.value = false;
      if (html5QrcodeScanner) {
        html5QrcodeScanner.stop();
      }
    };

    const initializeScanner = () => {
      const config = { fps: 10, qrbox: 250 };
      html5QrcodeScanner = new Html5QrcodeScanner("qr-code-full-region", config);
      html5QrcodeScanner.render(onScanSuccess);
    };

    const onScanSuccess = (qrCodeMessage) => {
      // Handle the scanned QR code here
      console.log("Scanned QR Code:", qrCodeMessage);
    };

    return {
      dialog,
      openDialog,
      closeDialog,
    };
  },
};
</script>
