<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="3">
        <Sidebar />
      </b-col>
      <b-col cols="9">
        <MovieList :title="title" :movies="movies" />
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
      title: "",
      url: "",
      movies: [],
      key: config.key,
      apiURL: "https://api.themoviedb.org/3"
    };
  },
  methods: {
    fetchMovies(title, url) {
      this.title = title;
      this.url = url;
      axios
        .get(`${this.apiURL}${this.url}?api_key=${this.key}`)
        .then(movies => (this.movies = movies.data.results))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.title = this.$route.query.title;
    this.url = this.$route.query.url;
    axios
      .get(`${this.apiURL}${this.url}?api_key=${this.key}`)
      .then(movies => (this.movies = movies.data.results))
      .catch(err => console.log(err));
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchMovies(to.query.title, to.query.url);
    next();
  }
};
</script>

<style scoped>
</style>