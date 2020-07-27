<template>
  <main class="container is-fluid">
    <h1 class="title is-1">My records collection</h1>
    <mrc-collection></mrc-collection>
  </main>
</template>

<script>
import MrcCollection from './records/MrcCollection.vue';

export default {
  name: 'App',
  components: {
    MrcCollection,
  },
};
</script>
