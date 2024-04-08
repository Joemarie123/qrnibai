<template>
  <div>
    <h1>{{ officeName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OfficeName: [
        { id: 1, officename: 'HRMO' },
        { id: 2, officename: 'I.T' },
        { id: 3, officename: 'Treasurer Office' }
      ],
      targetId: 1 // static value of ID you want to find
    };
  },
  computed: {
    officeName() {
      const office = this.OfficeName.find(office => office.id === this.targetId);
      return office ? office.officename : 'Office not found';
    }
  }
};
</script>
