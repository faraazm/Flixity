<template>
  <div>
    <h1>Now Playing</h1>
    <b-row v-if="nowPlayingMovies.length">
        <b-col cols="3" v-bind:key="movie.id" v-for="movie in nowPlayingMovies.slice(0, 4)">
          <MovieItem :movie="movie" />
        </b-col>
        <b-button class="mx-auto mt-3 mb-3" variant="danger">View all</b-button>
    </b-row>
    <h1>Top Rated Movies</h1>
    <b-row v-if="topRatedMovies.length">
        <b-col cols="3" v-bind:key="movie.id" v-for="movie in topRatedMovies.slice(0, 4)">
          <MovieItem :movie="movie" />
        </b-col>
        <b-button class="mx-auto mt-3 mb-3" variant="danger">View all</b-button>
    </b-row>
    <h1>Trending Movies</h1>
    <b-row v-if="trendingMovies.length">
        <b-col cols="3" v-bind:key="movie.id" v-for="movie in trendingMovies.slice(0, 4)">
          <MovieItem :movie="movie" />
        </b-col>
        <b-button class="mx-auto mt-3 mb-3" variant="danger">View all</b-button>
    </b-row>
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
      nowPlayingMovies: [],
      topRatedMovies: [],
      trendingMovies: [],
      newlyReleased: {},
      key: "bb82315fcde2f160329a49fb32f7cd46",
      apiURL: "https://api.themoviedb.org/3"
    }
  },
  methods: {
    fetchNowPlaying(){
      axios
      .get(`${this.apiURL}/movie/now_playing?api_key=${this.key}`)
      .then(movies => this.nowPlayingMovies = movies.data.results)
      .catch(err => console.log(err));
    },
    fetchNewReleased(){
      axios
      .get(`${this.apiURL}/movie/latest?api_key=${this.key}`)
      .then(movie => { this.newlyReleased = movie.data })
      .catch(err => console.log(err));
    },
    fetchTopRatedMovies(){
      axios
      .get(`${this.apiURL}/movie/top_rated?api_key=${this.key}`)
      .then(movies => { this.topRatedMovies = movies.data.results })
      .catch(err => console.log(err));
    },
    fetchTrendingMovies(){
      axios
      .get(`${this.apiURL}/trending/movie/day?api_key=${this.key}`)
      .then(movies => { this.trendingMovies = movies.data.results })
      .catch(err => console.log(err));
    }
  },
  created() {
    this.fetchNowPlaying();
    this.fetchNewReleased();
    this.fetchTopRatedMovies();
    this.fetchTrendingMovies();
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