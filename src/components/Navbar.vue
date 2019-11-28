<template>
  <div>
    <b-navbar class="custom-navbar" toggleable="lg">
      <router-link to="/">
        <b-navbar-brand class="logo-text"><movie-icon /> Flixity
        </b-navbar-brand>
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
import Search from "./Search";

export default {
  name: "Navbar",
  components: { Search }
};
</script>

<style scoped>
.custom-navbar {
  background-color: #000000;
  color: #fff;
}
.logo-text {
  color: #ffffff !important;
  font-size: 2.5em;
  font-weight: 700;
}
</style>