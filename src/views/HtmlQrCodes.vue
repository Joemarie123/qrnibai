<template>
     <div>
    <h2 v-if="scannedData">{{ scannedData }}</h2>
    <div ref="reader"></div>
  </div>
  </template>
  
  <script>
  import { Html5Qrcode } from 'html5-qrcode';
  
  export default {
    data() {
      return {
        scanner: null,
        scannedData: '',
      };
    },
    mounted() {
      this.initializeScanner();
    },
    methods: {
      initializeScanner() {
        this.scanner = new Html5Qrcode('reader');
        this.scanner
          .start()
          .then(() => {
            console.log('QR code scanner started');
            this.scanner.scan((result) => this.onScanSuccess(result), (error) => this.onScanError(error));
          })
          .catch((err) => {
            console.error('Error while starting QR code scanner:', err);
          });
      },
      onScanSuccess(qrCodeData) {
        this.scannedData = qrCodeData;
        this.scanner.stop();
      },
      onScanError(error) {
        console.error('QR code scanning error:', error);
      },
    },
    beforeUnmount() {
      if (this.scanner) {
        this.scanner.stop();
      }
    },
  };
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>
  