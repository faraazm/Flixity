<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

body {
  background-color: linear-gradient(90deg, rgb(15, 17, 21) 0%, rgb(15, 17, 21) 25%, rgb(0, 0, 0) 50%, rgb(15, 17, 21) 75%, rgb(15, 17, 21) 100%) !important;
  color: #fff !important;
  font-family: 'Open Sans', sans-serif !important;
  background: #000000; /* fallback for old browsers */
  background: linear-gradient(90deg, rgb(15, 17, 21) 0%, rgb(15, 17, 21) 25%, rgb(0, 0, 0) 50%, rgb(15, 17, 21) 75%, rgb(15, 17, 21) 100%);
}
</style>
