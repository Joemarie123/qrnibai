<template>
  <div id="qr-code-full-region"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    qrbox: {
      type: Number,
      default: 250
    },
    fps: {
      type: Number,
      default: 10
    },
  },
  mounted () {
    const qrCodeFullRegion = ref(null);

    onMounted(() => {
      const config = {
        fps: this.fps,
        qrbox: this.qrbox,
      };
      
      const html5QrcodeScanner = new Html5QrcodeScanner(qrCodeFullRegion.value, config);
      html5QrcodeScanner.render(this.onScanSuccess);
    });

    const onScanSuccess = (decodedText, decodedResult) => {
      this.$emit('result', decodedText, decodedResult);
    };

    return {
      qrCodeFullRegion,
      onScanSuccess
    };
  }
};
</script>
