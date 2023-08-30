<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        @keyup.enter="login"
      ></v-text-field>

      <v-btn type="submit" color="primary">Login</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Perform login logic here
      console.log('Logging in...');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // Reset form fields after login attempt
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
