<template>
  <b-container>
    <b-row>
      <b-jumbotron
        v-if="movie"
        class="mt-3 movie-jumbotron"
        v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + movie.backdrop_path + ')' }"
      >
        <template v-slot:header>{{ movie.original_title }}</template>
        <template v-slot:lead>{{ movie.overview }}</template>
        <p>{{ movie.tagline }}</p>

        <b-button variant="danger" href="#">Add to Favorites</b-button>
      </b-jumbotron>
    </b-row>
    <h3 v-if="videos.length">Trailers & Clips</h3>
    <b-row v-if="videos">
      <b-col cols="4" :key="video.key" v-for="video in videos.slice(0, 3)">
        <b-embed
          type="iframe"
          aspect="1by1"
          :src="getVideo(video.key)"
          allowfullscreen
        ></b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["movie", "videos"],
  data() {
    return {
      youtubeURL: "https://www.youtube.com/embed/"
    };
  },
  methods: {
      getVideo(key){
          return `${this.youtubeURL}${key}`;
      }
  }
};
</script>

<style scoped>
.movie-jumbotron {
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
</style>