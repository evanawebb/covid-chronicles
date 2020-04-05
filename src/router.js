import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Volunteer from './views/Volunteer.vue'
import Share from './views/Share.vue'
import Stories from './views/Stories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      linkExactActiveClass: 'is-active',
      component: Home
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      linkExactActiveClass: 'is-active',
      component: Volunteer
    },
    {
      path: '/share',
      name: 'share',
      linkExactActiveClass: 'is-active',
      component: Share
    },
    {
      path: '/stories',
      name: 'stories',
      linkExactActiveClass: 'is-active',
      component: Stories
    }
  ]
})
