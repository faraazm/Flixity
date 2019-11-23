<template>
  <div>
    <h1>{{ this.title }}</h1>
    <b-row v-if="movies.length">
        <b-col cols="3" v-bind:key="movie.id" v-for="movie in movies">
          <MovieItem :movie="movie" />
        </b-col> 
    </b-row>
  </div>
</template>

<script>
import MovieItem from './MovieItem';

export default {
  name: "MovieList",
  components: {
    MovieItem
  },
  props: ['title', 'movies']
};
</script>

<style scoped>
.movies-list {
    width: 75%;
    margin: 0 auto;
    display: block;
}
</style>