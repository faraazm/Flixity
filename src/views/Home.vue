<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="2">
        <Sidebar />
      </b-col>
      <b-col cols="10">
        <!-- Now Playing Movies  -->
        <MovieList
          :title="nowPlayingMovies.title"
          :movies="nowPlayingMovies.data"
          :link="nowPlayingMovies.link"
        />
        <router-link :to="{ name: 'ViewAll', params: { url: this.nowPlayingMovies.url, title: 'Now Playing' } }">
          <b-button class="mt-3 mb-3" variant="danger">View all</b-button>
        </router-link>
        <!-- Top Rated Movies  -->
        <MovieList
          :title="topRatedMovies.title"
          :movies="topRatedMovies.data"
          :link="topRatedMovies.link"
        />
        <router-link :to="{ name: 'ViewAll', params: { url: this.topRatedMovies.url, title: 'Top Rated' } }">
          <b-button class="mt-3 mb-3" variant="danger">View all</b-button>
        </router-link>
        <!-- Trending Movies  -->
        <MovieList
          :title="trendingMovies.title"
          :movies="trendingMovies.data"
          :link="trendingMovies.link"
        />
        <router-link :to="{ name: 'ViewAll', params: { url: this.trendingMovies.url, title: 'Trending' } }">
          <b-button class="mt-3 mb-3" variant="danger">View all</b-button>
        </router-link>
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
  name: "home",
  components: {
    MovieList,
    Sidebar
  },
  data() {
    return {
      nowPlayingMovies: {
        title: "Now Playing",
        data: [],
        url: '/movie/now_playing'
      },
      topRatedMovies: {
        title: "Top Rated",
        data: [],
        url: '/movie/top_rated'
      },
      trendingMovies: {
        title: "Trending Movies",
        data: [],
        url: '/trending/movie'
      },
      newlyReleased: {},
      key: config.key,
      apiURL: "https://api.themoviedb.org/3"
    };
  },
  methods: {
    fetchNowPlaying() {
      axios
        .get(`${this.apiURL}/movie/now_playing?api_key=${this.key}`)
        .then(
          movies =>
            (this.nowPlayingMovies.data = movies.data.results.slice(0, 4))
        )
        .catch(err => console.log(err));
    },
    fetchNewReleased() {
      axios
        .get(`${this.apiURL}/movie/latest?api_key=${this.key}`)
        .then(movie => {
          this.newlyReleased = movie.data.results;
        })
        .catch(err => console.log(err));
    },
    fetchTopRatedMovies() {
      axios
        .get(`${this.apiURL}/movie/top_rated?api_key=${this.key}`)
        .then(movies => {
          this.topRatedMovies.data = movies.data.results.slice(0, 4);
        })
        .catch(err => console.log(err));
    },
    fetchTrendingMovies() {
      axios
        .get(`${this.apiURL}/trending/movie/day?api_key=${this.key}`)
        .then(movies => {
          this.trendingMovies.data = movies.data.results.slice(0, 4);
        })
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