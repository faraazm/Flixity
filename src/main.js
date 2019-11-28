import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-material-design-icons/styles.css';
import MovieIcon from 'vue-material-design-icons/Movie.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.component('movie-icon', MovieIcon);
Vue.component('star-icon', StarIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
