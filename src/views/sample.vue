<template>
  <div>
    <h1>{{ currentTime }}</h1>
    <button @click="pushTime">Push Time</button>
    <h2 v-if="transferredTimes.length > 0">{{ transferredTimes[transferredTimes.length - 1] }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      transferredTimes: [],
    };
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    },
    pushTime() {
      this.transferredTimes.push(this.currentTime);
    },
  },
  mounted() {
    this.getCurrentTime();
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  },
};
</script>
