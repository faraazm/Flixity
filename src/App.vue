<template>
  <div id="app">
    <Navbar />
    <MovieList />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MovieList from './components/MovieList.vue'

export default {
  name: 'app',
  components: {
    MovieList,
    Navbar
  }
}
</script>

<style>
#app {
  background-color: #171717;
  color: #FFF;
}
</style>
