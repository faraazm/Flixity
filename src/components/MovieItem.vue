<template>
  <div class="movie-item">
    <p>{{ movie.original_title }}</p>
    <b-img :src="getMovieImage(movie.poster_path)" rounded fluid></b-img>
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