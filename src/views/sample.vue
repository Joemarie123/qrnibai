<template>
  <div class="datatable-container">
    <table class="datatable">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <!-- Add more columns as needed -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.column1 }}</td>
          <td>{{ item.column2 }}</td>
          <td>{{ item.column3 }}</td>
          <!-- Render more columns as needed -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        // Sample data for demonstration
        { column1: 'Value 1', column2: 'Value 2', column3: 'Value 3' },
        { column1: 'Value 4', column2: 'Value 5', column3: 'Value 6' },
        // Add more data rows as needed
      ],
    };
  },
};
</script>

<style>
.datatable-container {
  overflow-x: auto;
}

@media (max-width: 600px) {
  .datatable-container {
    width: 100%;
  }

  .datatable {
    width: 100%;
  }

  .datatable th,
  .datatable td {
    white-space: nowrap;
  }
}
</style>
