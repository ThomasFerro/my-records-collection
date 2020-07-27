<template>
  <label>
    Search:
    <input type="text" v-model="filter">
  </label>
  <transition-group tag="ul" name="list" class="columns is-multiline mt-1">
      <li 
        v-for="{ id, title, artists, year, coverPath } in records"
        :key="id"
        class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
      >
          <mrc-record
            :title="title"
            :artists="artists"
            :year="year"
            :cover-path="coverPath"
          ></mrc-record>
      </li>
  </transition-group>
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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
