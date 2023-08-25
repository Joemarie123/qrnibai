<template>
  <div>
    <input v-model="searchQuery" @input="searchEmployees" placeholder="Search by full name" />
    <div class="virtual-scroll" ref="scrollContainer">
      <div v-for="employee in visibleEmployees" :key="employee.id" class="employee-item">
        {{ employee.fullName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],         // To store the fetched employee data
      searchQuery: '',       // Search query input
      visibleEmployees: [],  // Employees visible in the virtual scroll container
      chunkSize: 50,         // Number of employees to render at a time
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      // Fetch data from the API and populate this.employees
      // Example using fetch:
      fetch('http://10.0.1.23/HRQR/employees.php')
        .then(response => response.json())
        .then(data => {
          this.employees = data;
          this.updateVisibleEmployees();
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    searchEmployees() {
      this.updateVisibleEmployees();
    },
    updateVisibleEmployees() {
      // Apply filtering based on search query and update visibleEmployees
      const filteredEmployees = this.employees.filter(employee =>
        employee.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.visibleEmployees = filteredEmployees.slice(0, this.chunkSize);
    },
    handleScroll() {
      // Implement virtual scroll logic here
      // You can use this.$refs.scrollContainer to get the scroll container element
      // and detect scroll events to load more data as the user scrolls.
    },
  },
  watch: {
    searchQuery: 'updateVisibleEmployees',
  },
};
</script>

<style>
.virtual-scroll {
  height: 400px; /* Set an appropriate height for your virtual scroll container */
  overflow-y: auto;
}

.employee-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s;
}

.employee-item:hover {
  background-color: #f0f0f0;
}
</style>
