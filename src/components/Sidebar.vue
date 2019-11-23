<template>
  <div class="sidebar">
    <ul class="sidebar-nav pl-1 pt-5">
      <li class="nav-item">
        <router-link to="/" class="mt-3 mb-3">
          <h5>Now Playing</h5>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="mt-3 mb-3">
          <h5>Top Rated</h5>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="mt-3 mb-3">
          <h5>Trending</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  background-color: #000;
  height: 100%;
}
.sidebar-nav {
  list-style: none;
}
.nav-item a {
  text-decoration: none;
  color: #fff;
}
.nav-item h5 {
  font-weight: 200;
}
.sidebar-nav li:hover,
 .sidebar-nav li.router-link-active,
 .sidebar-nav li.router-link-exact-active {
   background-color: indianred;
   cursor: pointer;
 }
</style>