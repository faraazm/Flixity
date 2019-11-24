<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="2">
        <Sidebar />
      </b-col>
      <b-col cols="10">
        <MovieDetail :movie="movie" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import MovieDetail from "../components/MovieDetail";
import Sidebar from "../components/Sidebar";
import config from "../config";

export default {
  name: "detail",
  components: {
    MovieDetail,
    Sidebar
  },
  data() {
    return {
      movie: {},
      key: config.key,
      apiURL: "https://api.themoviedb.org/3",
      imageURL: "https://image.tmdb.org/t/p/original"
    };
  },
  methods: {
    fetchMovie(id) {
      axios
        .get(`${this.apiURL}/movie/${id}?api_key=${this.key}`)
        .then(movie => {
          movie.data.backdrop_path = `${this.imageURL}${movie.data.backdrop_path}`;
          this.movie = movie.data;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.fetchMovie(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchMovie(to.query.id);
    next();
  }
};
</script>