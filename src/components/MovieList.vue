<template>
  <div class="mt-4 ml-4 mr-4">
    <h1 class="mb-5">{{ this.title }}</h1>
    <b-row v-if="movies.length">
        <b-col cols="3" v-bind:key="movie.id" v-for="movie in movies">
          <router-link class="link" :to="{ name: 'Detail', query: { id: movie.id } }">
            <MovieItem :movie="movie" />
          </router-link>
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
.link {
  color: #FFF;
  font-weight: 600;
}
.link:hover {
  text-decoration: none;
  color: gray;
}
</style>