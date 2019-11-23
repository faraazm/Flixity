<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="3">
        <Sidebar />
      </b-col>
      <b-col cols="9">
        <MovieList :title="movies.title" :movies="movies.data" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";
import config from "../config";

export default {
  name: "ViewAll",
  components: { MovieList, Sidebar },
  data() {
    return {
      title: this.$route.params.title,
      movies: this.$route.params.movies,
      key: config.key,
      apiURL: "https://api.themoviedb.org/3"
    };
  },
  created() {
      axios
        .get(`${this.apiURL}/movie/now_playing?api_key=${this.key}`)
        .then(movies => (this.movies.data = movies.data.results))
        .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>