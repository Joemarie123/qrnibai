<template>
    <div>
     <!--  <p>{{ concatenatedString }}</p>  -->
      <p>ID: {{ id }}</p>
      <p>Name: {{ name }}</p>
     <!--  <p>Address: {{ address }}</p> -->

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        concatenatedString: 'City Government of Tagum - ABARICO, APRIL REY FORMOSO - 011709 - CMO - DETAILED AT NATIONAL LINE AGENCIES - CHRMO contact no. (645-3300) LOCAL (217 or 218)',
      };
    },
    computed: {
      name() {

        const regex = / - ([^-]+) -/;
        const match = this.concatenatedString.match(regex);
        return match ? match[1].trim() : '';
      },
      id() {
       
        const regex = / - (\d+) /;
        const match = this.concatenatedString.match(regex);
        return match ? match[1].trim() : '';
      },
      

   /*    address() {
        const regex = / - (\d+)  /  ;
        const match = this.concatenatedString.match(regex);
        return match ? match[1].trim() : '';
      },
 */


    },
  };
  </script>
  