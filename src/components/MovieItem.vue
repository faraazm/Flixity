<template>
  <div>
    <h1>{{ movie.original_title }}</h1>
    <img :src="getMovieImage(movie.poster_path)" />
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  data(){
      return {
          imageURL: "https://image.tmdb.org/t/p/w500"
      }
  },
  methods: {
    getMovieImage(image) {
      return `${this.imageURL}/${image}`;
    }
  }
};
</script>

<style scoped>
</style>