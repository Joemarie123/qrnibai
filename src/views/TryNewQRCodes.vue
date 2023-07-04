<template>
    <div>
      <div ref="qrCodeFullRegion"></div>
      <h1>{{ decodedString }}</h1>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, toRefs } from 'vue';
  
  export default {
    props: {
      qrbox: {
        type: Number,
        default: 250
      },
      fps: {
        type: Number,
        default: 10
      }
    },
    setup(props) {
      const { qrbox, fps } = toRefs(props);
      const decodedString = ref('');
  
      onMounted(async () => {
        const qrCodeFullRegion = document.getElementById('qr-code-full-region');
  
        const { Html5QrcodeScanner } = await import('html5-qrcode');
  
        const config = {
          fps: fps.value,
          qrbox: qrbox.value,
        };
  
        const html5QrcodeScanner = new Html5QrcodeScanner(qrCodeFullRegion, config, (decodedText) => {
          decodedString.value = decodedText;
        });
  
        html5QrcodeScanner.render();
      });
  
      return {
        decodedString
      };
    }
  };
  </script>
  