<template>
  <div id="app">
    <div class="site has-background-grey-light">
      <navigation-component />
      <div class="site-content">
        <router-view/>
      </div>
      <footer />
    </div>
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue'
export default {
  name: 'home',
  components: {
    NavigationComponent,
  },
  data () {
    return {
      showVolunteerForm: false,
      showStoryForm: false,
      showVideo: true,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.site {
  min-height: 100vh;
}
</style>
