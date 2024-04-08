<template>
  <div>
    <qr-scanner ref="scanner" @qr="onScan"></qr-scanner>
    <div v-if="scannedText">Scanned Text: {{ scannedText }}</div>
  </div>
</template>

<script>
import QrScanner from 'qr-scanner';

export default {
  name: 'QRScannerComponent',
  data() {
    return {
      scannedText: null
    };
  },
  mounted() {
    this.initScanner();
  },
  methods: {
    initScanner() {
      const scannerElement = this.$refs.scanner.$el; // Accessing the underlying element
      const scanner = new QrScanner(scannerElement);

      scanner.start();

      scanner.onScan(result => {
        this.scannedText = this.decodeURIComponentSafe(result);
      });
    },
    // A safe way to decode URI component
    decodeURIComponentSafe(str) {
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
