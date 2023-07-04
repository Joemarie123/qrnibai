<template>
  <div>
    <h1>{{ currentDate }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: '',
    };
  },
  mounted() {
    this.updateDate(); // Call it once on mount
    this.timer = setInterval(this.updateDate, 1000); // Update date every second
  },
  beforeUnmount() {
    clearInterval(this.timer); // Clear the timer on component unmount to prevent memory leaks
  },
  methods: {
    updateDate() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = now.toLocaleDateString(undefined, options);
    },
  },
};
</script>
