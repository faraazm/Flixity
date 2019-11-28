<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="2">
        <Sidebar />
      </b-col>
      <b-col cols="8">
        <!-- Now Playing Movies  -->
        <MovieList
          :title="nowPlayingMovies.title"
          :movies="nowPlayingMovies.data"
          :link="nowPlayingMovies.link"
        />
        <div class="text-center">
          <router-link
            :to="{ name: 'ViewAll', query: { url: this.nowPlayingMovies.url, title: 'Now Playing' } }"
          >
            <b-button class="mt-3 mb-3 green-btn">View all</b-button>
          </router-link>
        </div>

        <hr class="header-custom" />

        <!-- Top Rated Movies  -->
        <MovieList
          :title="topRatedMovies.title"
          :movies="topRatedMovies.data"
          :link="topRatedMovies.link"
        />
        <div class="text-center">
          <router-link
            :to="{ name: 'ViewAll', query: { url: this.topRatedMovies.url, title: 'Top Rated' } }"
          >
            <b-button class="mt-3 mb-3 green-btn">View all</b-button>
          </router-link>
        </div>

        <hr class="header-custom" />

        <!-- Trending Movies  -->
        <MovieList
          :title="trendingMovies.title"
          :movies="trendingMovies.data"
          :link="trendingMovies.link"
        />
        <div class="text-center">
          <router-link
            :to="{ name: 'ViewAll', query: { url: this.trendingMovies.url, title: 'Trending' } }"
          >
            <b-button class="mt-3 mb-3 green-btn">View all</b-button>
          </router-link>
        </div>
      </b-col>
      <b-col class="p-0" cols="2">

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
        url: "/movie/now_playing"
      },
      topRatedMovies: {
        title: "Top Rated",
        data: [],
        url: "/movie/top_rated"
      },
      trendingMovies: {
        title: "Trending Movies",
        data: [],
        url: "/trending/movie/day"
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

<style scoped>
.green-btn {
  border-radius: 24px;
  background: #1ac566; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1ac566,
    #068c9a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1ac566, #068c9a);
  font-weight: 600;
  color: white;
  border: none;
}
.header-custom {
  border-top: 1px solid rgba(140, 140, 140, 0.1) !important;
}
</style>