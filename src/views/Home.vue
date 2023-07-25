<!-- <template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <button @click="handleButtonClick(item)">Button</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import eventBus from './eventBus';

export default {
  data() {
    return {
      data: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 40 },
      /*  */
      ],
    };
  },
  methods: {
    handleButtonClick(rowData) {
      eventBus.config.globalProperties.$emit('rowClicked', rowData);
    },
  },
};
</script>
 -->
 <template>
  <h1>df</h1>
 </template>