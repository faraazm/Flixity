<template>
  <b-jumbotron v-if="movie" class="mt-3 movie-jumbotron" 
  v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + movie.backdrop_path + ')' }"
  >
    <template v-slot:header>{{ movie.original_title }}</template>
    <template v-slot:lead>{{ movie.overview }}</template>
    <p>{{ movie.tagline }}</p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["movie"]
};
</script>

<style scoped>
.movie-jumbotron {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>