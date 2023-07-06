<template>
  <div>
    <v-btn color="green" @click="displayMessage">Scan</v-btn>
    <div v-if="showMessage" class="message">
      Successful Scan
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showMessage = ref(false);

    const displayMessage = () => {
      showMessage.value = true;
      setTimeout(() => {
        showMessage.value = false;
      }, 2000);
    };

    return {
      showMessage,
      displayMessage
    };
  }
};
</script>

<style>
.message {
  background-color: rgba(0, 128, 0, 0);
  color: rgb(9, 230, 27);
  padding: 10px;
  margin-top: 10px;
  display: inline-block;
}
</style>
