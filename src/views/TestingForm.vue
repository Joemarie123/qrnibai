<template>
  <div>
   <!--  <h2>Signatories</h2>
    <div v-for="item in signatory" :key="item.ID">
      <p>ID: {{ item.ID }}</p>
      <p>Office_id: {{ item.Office_id }}</p> -->
      <!-- <p>Control Number: {{ foundSignatory.controlno }}</p> -->
   <!--  </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      controlnoclone:'7',
      foundSignatory:'',
      signatory: [
        {
          ID: 2,
          Office_id: 8,
          controlno: "003041"
        },
        {
          ID: 3,
          Office_id: 7,
          controlno: "125454"
        }
      ]


    };

  },
  created() {

    this.foundSignatory = this.signatory.find(item => item.Office_id == this.controlnoclone);
    console.log("Control Number:", this.foundSignatory.controlno);

  }
};
</script>
