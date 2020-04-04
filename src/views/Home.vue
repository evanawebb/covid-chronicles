<template>
  <div>
    <nav class="navbar is-info is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class='container is-pulled-left has-background-dark'  @click="showComponent('video')" style='cursor: pointer; border-radius: 12px; text-align: center'>
	  <h1 style='padding-top: 10%;'>Covid Chronicles</h1>
        </div>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="elderly-navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div id="elderly-navbar" class="navbar-menu">
        <div class="navbar-start">
          <a @click="showComponent('volunteer')" :class="{'is-active': showVolunteerForm}" class="is-tab navbar-item">
            Volunteer
          </a>
  
          <a @click="showComponent('story')" :class="{'is-active': showStoryForm}" class="is-tab navbar-item">
            Tell Your Story
          </a>
  
          <a @click="showComponent('video')" :class="{'is-active': showVideo}" class="is-tab navbar-item">
           Stories Of Inspiration
          </a>
  
        </div>
      </div>
    </nav>
    <div >
      <slot v-if="showVolunteerForm">
        <contact-form subject="volunteer"/>
      </slot>
      <slot v-if="showStoryForm">
        <contact-form subject="story"/>
      </slot>
      <slot v-if="showVideo">
        <video-component />
      </slot>
    </div>
    <footer class="footer has-background-grey-light">
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue'
import VideoComponent from '@/components/VideoComponent.vue'

export default {
  name: 'home',
  components: {
    ContactForm,
    VideoComponent
  },
  data () {
    return {
      showVolunteerForm: false,
      showStoryForm: false,
      showVideo: true,
    }
  },
  methods: {
    showComponent(name) {
      this.showVolunteerForm = (name === 'volunteer') 
      this.showStoryForm = (name === 'story') 
      this.showVideo = (name === 'video') 
    }
  }

}
</script>
