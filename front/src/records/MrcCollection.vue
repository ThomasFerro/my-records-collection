<template>
  <ul>
      <li v-for="{ id, title, artist, year } in records" :key="id">
          <mrc-record
            :title="title"
            :artist="artist"
            :year="year"
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
      records: recordsData.records,
    };
  },
  components: {
    MrcRecord
  },
};
</script>
