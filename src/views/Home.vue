<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0" cols="3">
        <Sidebar />
      </b-col>
      <b-col cols="9">
        <MovieList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";

export default {
  name: "home",
  components: {
    MovieList,
    Sidebar
  }
};
</script>