<template>
  <b-navbar-nav class="mx-auto">
    <b-nav-form @submit="search">
      <b-form-input
        size="md"
        v-model="input"
        class="mr-sm-2 search-input"
        placeholder="Search for movies"
      ></b-form-input>
      <b-button size="md" class="my-2 my-sm-0 search-button" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    search(evt) {
      evt.preventDefault();
      this.$router.push({
        path: "view-all",
        query: {
          url: "/search/movie",
          title: "Search Results",
          searchFor: this.input
        }
      });
    }
  }
};
</script>

<style scoped>
.search-input {
  background-color: rgb(15, 17, 21);
  border: none;
  border-radius: 20px;
}
.search-input:focus {
  background-color: #000;
  border: none;
}
.search-button {
  border-radius: 24px;
  background: #1ac566; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1ac566,
    #068c9a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1ac566,
    #068c9a
  );
  font-weight: 600;
  color: white;
  border: none;
}
</style>