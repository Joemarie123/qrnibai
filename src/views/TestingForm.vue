<template>
  <div>
    <v-data-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Time</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sampleData" :key="index" >
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td :class="{ 'late-row': item.remarks.toLowerCase().includes('LATE') }">{{ item.time }}</td>
          <td>{{ item.remarks }}</td>
        </tr>
      </tbody>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: [
        { name: 'John Doe', address: '123 Main St', time: '10:00 AM', remarks: 'Good customer' },
        { name: 'Jane Smith', address: '456 Elm St', time: '02:30 PM', remarks: 'Regular customer' },
        { name: 'Alice Johnson', address: '789 Oak St', time: '06:00 PM', remarks: 'Late customer' },
        // Add more sample data as needed
      ]
    };
  }
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}

.late-row {
  background-color: #f3f0f0; /* Change the background color to red for rows with 'Late' in remarks */
  color:#e01432
}
</style>
