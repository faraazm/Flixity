<template>
  <b-navbar-nav class="ml-auto mt-3 mb-3">
    <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search for movies"></b-form-input>
      <b-button variant="dark" size="sm" class="my-2 my-sm-0" type="submit" :click="search">Search</b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
// import axios from "axios";

export default {
  name: "Search",
  methods: {
    search(e) {
      e.preventDefault();
      console.log('test');
    }
  }
};
</script>

<style scoped>
</style>