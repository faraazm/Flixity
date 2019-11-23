<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <router-link to="/">
      <b-navbar-brand>Flixity</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="mx-auto mt-3 mb-3">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search for movies"></b-form-input>
          <b-button variant="dark" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>    
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
</style>