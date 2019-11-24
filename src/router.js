import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home';
import ViewAll from './views/ViewAll';
import Detail from './views/Detail';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/view-all',
      name: 'ViewAll',
      component: ViewAll,
      props: true
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})