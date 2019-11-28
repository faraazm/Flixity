<template>
  <b-navbar-nav class="ml-auto mt-3 mb-3">
    <b-nav-form @submit="search">
      <b-form-input size="sm" v-model="input" class="mr-sm-2" placeholder="Search for movies"></b-form-input>
      <b-button variant="dark" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "Search",
  data(){
    return {
      input: '',
    }
  },
  methods: {
    search(evt) {
      evt.preventDefault();
      this.$router.push({ path: 'view-all', 
        query: { 
          url: '/search/movie',
          title: 'Search Results',
          searchFor: this.input 
        }
      })
    }
  }
};
</script>

<style scoped>
</style>