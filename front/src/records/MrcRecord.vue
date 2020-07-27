<template>
  <article>
      <h2>{{ displayedTitle }}</h2>
      <img :src="coverPath" :alt="displayedTitle" loading=lazy>
  </article>
</template>

<script>
export default {
  name: 'mrc-record',
  props: {
    title: String,
    artist: String,
    year: Number,
    coverPath: String,
  },
  computed: {
      displayedTitle() {
        return `${this.title} - ${this.artist} (${this.year})`;
      },
  },
};
</script>
