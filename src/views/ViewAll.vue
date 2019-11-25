<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="3">
        <Sidebar />
      </b-col>
      <b-col cols="9">
        <MovieList :title="this.$route.query.title" :movies="movies" />
        <b-pagination-nav pills size="md" align="center" class="mt-3 mb-3 pagination-custom" :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
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
      page: null,
      movies: [],
      key: config.key,
      apiURL: "https://api.themoviedb.org/3"
    };
  },
  methods: {
    fetchMovies(title, url, page) {
      axios
        .get(`${this.apiURL}${url}?api_key=${this.key}&page=${page}`)
        .then(movies => (this.movies = movies.data.results))
        .catch(err => console.log(err));
    },
    linkGen(pageNum){
      return {
        name: 'ViewAll',
        query: { 
          page: pageNum,
          url: this.$route.query.url,
          title: this.$route.query.title
        }
      }
    }
  },
  created() {
    this.fetchMovies(this.$route.query.title, this.$route.query.url, this.$route.query.page);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchMovies(to.query.title, to.query.url, to.query.page);
    next();
  }
};
</script>

<style scoped>
.page-item a {
  background-color: #000 !important;
  color: red !important;
  border: none !important;
}
</style>