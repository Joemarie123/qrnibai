<template>
  <div>
    <div class="video-container">
      <video ref="video" class="video-preview"></video>
    </div>
    <div v-if="scannedData">
      <p>Decoded String: {{ scannedData.text }}</p>
      <p>Time of Scan: {{ scannedData.time }}</p>
    </div>
  </div>
</template>

<script>
import qrcodeReader from 'qrcode-reader';

export default {
  data() {
    return {
      scannedData: null,
    };
  },
  mounted() {
    const video = this.$refs.video;
    const qrScanner = new qrcodeReader();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          video.srcObject = stream;
          video.setAttribute('playsinline', true);
          video.play();
          this.scanQRCode(qrScanner, video);
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  },
  methods: {
    scanQRCode(qrScanner, video) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const scanFrame = () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = qrScanner.process(imageData);

          if (code) {
            const scannedData = {
              text: code.result,
              time: new Date().toLocaleTimeString(),
            };
            this.scannedData = scannedData;
          }

          requestAnimationFrame(scanFrame);
        } else {
          requestAnimationFrame(scanFrame);
        }
      };

      scanFrame();
    },
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.video-preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
