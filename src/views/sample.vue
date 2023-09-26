<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn @click="dialog = !dialog" color="primary">Open Dialog</v-btn>
      </template>
      <v-card>
      
        <v-data-table
         :headers="headers" 
         :items="items" 
         :items-per-page="5" 
         :single-select="false">
         <template v-slot:item="{ item }">
            <tr>
              <td><v-checkbox v-model="item.selected" @input="selectRow(item)"></v-checkbox></td>
              <td class="card" :style="{ textAlign: 'left' }">{{ item.columns.Controlno}}</td>
              <td class="card" :style="{ textAlign: 'left' }">{{ item.columns.fullname}}</td>
              <td :style="{ textAlign: 'left' }">{{ item.columns.designation }}</td>
            </tr>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-btn @click="addRow" color="primary">Add</v-btn>
          <v-btn @click="cancelDialog" color="error">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectAll: false,
      selectedItems: [], // Array to store selected items
      items: [
        { Controlno:'02144', fullname: 'John Doe', designation: 'Manager', selected: false },
        { Controlno:'02144', fullname: 'Jane Smith', designation: 'Developer', selected: false },
        // Add more sample data here
      ],
      headers: [
        { title: 'Chechbox', key: 'selected', sortable: false },
        { title: 'Controlno', key: 'Controlno' },
        { title: 'Fullname', key: 'fullname' },
        { title: 'Designation', key: 'designation' },

      ],
    };
  },
  methods: {

    selectRow(item) {
  if (item.selected) {
    // If the item is selected, push it to selectedItems
    this.selectedItems.push(item);
    console.log(`Item selected: ${item.columns.Controlno}`);
  } else {
    // If the item is deselected, remove it from selectedItems
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      console.log(`Item deselected: ${item.columns.Controlno}`);
    }
  }
},


    selectAllRows() {
      this.items.forEach(item => (item.selected = this.selectAll));
    },
    selectRow(item) {
      item.selected = !item.selected;
    },
    addRow() {
      // Logic to add a new row goes here
      // You can push a new item into this.items array
      // Example: this.items.push({ fullname: 'New Name', designation: 'New Designation', selected: false });
    },
    cancelDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.selected {
  background-color: #f0f0f0;
}
</style>
