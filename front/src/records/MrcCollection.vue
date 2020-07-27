<template>
  <label>
    Search:
    <input type="text" v-model="filter">
  </label>
  <ul>
      <li v-for="{ id, title, artists, year, coverPath } in records" :key="id">
          <mrc-record
            :title="title"
            :artists="artists"
            :year="year"
            :cover-path="coverPath"
          ></mrc-record>
      </li>
  </ul>
</template>

<script>
import { recordsManagement } from './index.js';
import MrcRecord from './MrcRecord.vue';

export default {
  name: 'mrc-collection',
  setup() {
    const recordsData = recordsManagement();
    return {
      records: recordsData.filteredRecords,
      filter: recordsData.filter
    };
  },
  components: {
    MrcRecord
  },
};
</script>
