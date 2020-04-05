<template>
  <div>
    <nav class="navbar is-info is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class='container is-pulled-left has-background-dark'  @click="showComponent('video')" style='cursor: pointer; border-radius: 12px; text-align: center'>
	  <h1 style='padding-top: 10%;'>
            <router-link tag="div" :to="{ name: 'stories' }">
              Covid Chronicles
            </router-link>
          </h1>
        </div>
      </div>
  
      <div id="elderly-navbar" class="navbar-menu">
        <div class="navbar-end">
          <router-link :to="{ name: 'volunteer' }" class="is-tab navbar-item">
            Volunteer
          </router-link>
  
          <router-link  :to="{ name: 'share' }" class="is-tab navbar-item">
            Tell Your Story
          </router-link>
  
          <router-link :to="{ name: 'stories' }" class="is-tab navbar-item">
           Stories Of Inspiration
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

