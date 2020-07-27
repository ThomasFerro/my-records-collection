<template>
  <article class="card">
      <section class="card-image">
        <figure class="image is-128x128">
          <img :src="coverPath" :alt="completeTitle" loading="lazy"/>
        </figure>
      </section>
      <section class="card-title">
        <p class="title is-4">{{ title }}</p>
        <p class="subtitle is-6">{{ artistAndYear }}</p>
      </section>
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
      artistAndYear() {
        return `${this.artists} (${this.year})`;
      },
      completeTitle() {
        return `${this.title} - ${this.artistAndYear}`;
      },
  },
};
</script>
