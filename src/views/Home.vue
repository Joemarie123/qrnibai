<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.columns.fullName }}</td>
        <td>{{ item.columns.designation }}</td>
        <td>
          <v-btn @click="removeEmployee(item)" color="error">Remove</v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'Full Name', key: 'fullName' },
        { title: 'Designation', key: 'designation' },
        // Add more headers here if needed
      ],
      employees: [
        { id: 1, fullName: 'John Doe', designation: 'Manager' },
        { id: 2, fullName: 'Jane Smith', designation: 'Developer' },
        // Add more employee data here
      ],
    };
  },
  methods: {
    removeEmployee(employee) {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
