<template>
  <div>
    <h1>QR CODE SCANNER</h1>
    <div id="qr-code-full-region"></div>
    <h1>{{ decodedString }}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Html5QrcodeScanner from 'html5-qrcode';

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
  setup() {
    const decodedString = ref('');

    onMounted(() => {
      const qrCodeFullRegion = document.getElementById('qr-code-full-region');
      
      const config = {
        fps: this.fps,
        qrbox: this.qrbox,
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
