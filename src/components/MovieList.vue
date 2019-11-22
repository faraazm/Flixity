<template>
  <div>
    <h1>New Releases</h1>
    <div class="movies-list" v-if="movies.length">
        <MovieItem v-bind:key="movie.id" v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieItem from './MovieItem';

export default {
  name: "Movies",
  components: {
    MovieItem
  },
  data() {
    return {
      movies: [],
      key: "bb82315fcde2f160329a49fb32f7cd46",
      apiURL: "https://api.themoviedb.org/3"
    }
  },
  created() {
    axios
      .get(`${this.apiURL}/movie/now_playing?api_key=${this.key}`)
      .then(data => {
        this.movies = data.data.results;
        console.log(this.movies);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.movies-list {
    width: 75%;
    margin: 0 auto;
    display: block;
}
</style>