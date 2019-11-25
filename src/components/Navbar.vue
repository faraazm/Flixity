<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <router-link to="/">
      <b-navbar-brand>Flixity</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <Search />
    </b-collapse>
  </b-navbar>
</div>    
</template>

<script>
import Search from './Search';

export default {
    name: 'Navbar',
    components: { Search }
}
</script>

<style scoped>
</style>