<!-- <template>
  <div>
    <h1 v-if="rowData">Data from Clicked Row:</h1>
    <h1 v-else>No Data Clicked Yet</h1>
    <div v-if="rowData">
      <p>ID: {{ rowData.id }}</p>
      <p>Name: {{ rowData.name }}</p>
      <p>Age: {{ rowData.age }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import eventBus from './eventBus';

export default {
  setup() {
    const rowData = ref(null);

    onMounted(() => {
      eventBus.config.globalProperties.$on('rowClicked', (data) => {
        rowData.value = data;
      });
    });

    return {
      rowData,
    };
  },
};
</script>
 -->
 <template>
  <h1>sd</h1>
 </template>