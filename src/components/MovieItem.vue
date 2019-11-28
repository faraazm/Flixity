<template>
  <div class="movie-item">
    <b-img :src="getMovieImage(movie.poster_path)" class="movie-image" rounded fluid></b-img>
    <p class="lead mb-0">{{ movie.original_title }}</p>
    <star-icon class="star" />{{ movie.vote_average }}
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  data(){
      return {
          imageURL: "https://image.tmdb.org/t/p/w500"
      }
  },
  methods: {
    getMovieImage(image) {
      return `${this.imageURL}/${image}`;
    }
  }
};
</script>

<style scoped>
.star {
  color: orange;
}
.movie-image {
  width: 80% !important;
  box-shadow: 0px 0px 15px black;
}
</style>