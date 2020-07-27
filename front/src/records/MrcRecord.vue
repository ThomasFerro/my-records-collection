<template>
  <article>
      <h2>{{ displayedTitle }}</h2>
      <img :src="coverPath" :alt="displayedTitle" />
  </article>
</template>

<script>
export default {
  name: 'mrc-record',
  props: {
    title: String,
    artists: String,
    year: Number,
    coverPath: String,
  },
  computed: {
      displayedTitle() {
        return `${this.title} - ${this.artists} (${this.year})`;
      },
  },
};
</script>
