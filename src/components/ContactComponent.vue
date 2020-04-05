<template>
 <div class="container form-container">
  <h3 class="title">{{ title }}</h3>
  <div class="field">
    <div class="control">
      <input class="input" type="text" :placeholder="name.placeholder" v-model="name.value">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input class="input" type="email" :placeholder="email.placeholder" v-model="email.value">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <textarea class="textarea" :placeholder="textAreaText.placeholder" v-model="textAreaText.value"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button @click="submit" class="button is-link">Submit</button>
      <div v-if="this.showMessage">{{message}}</div>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
 </div>
</template>

<script>
import api from '@/api'
export default {
  props: ['subject'],
  data () { 
    return {
      textAreaText: { placeholder: 'Please tell us a little about yourself, it doesn\'t have to be too long but just so we know who we are talking too. :)', value: '' },
      message: 'Thank you for reaching out, we will be in contact soon!',
      showMessage: false,
      name: { placeholder: 'Name', value: '' },
      email: { placeholder: 'Email', value: '' },
      storyTitle: 'Please fill out the form below and we will contact you regarding sharing your story!',
      volunteerTitle: 'Please fill out the form below and we will contact you regarding volunteering!'
    }
  },
  computed: {
    title: function () {
      return this.subject == 'share' ? this.storyTitle : this.volunteerTitle
    }
  }, 
  methods: {
    async submit () {
      let data = {
        email: this.email.value,
	text: '<!doctype html><html><body><div><strong>NAME:</strong> ' + this.name.value + '<br><strong>EMAIL:</strong> ' + this.email.value + '<br><strong>ABOUT:</strong> ' + this.textAreaText.value + '</div></body></html>',
        subject: this.subject == 'share' ? 'Share my story!' : 'Volunteer!',
      }
      let success = await api.sendEmail(data)
      if (success) {
        alert(this.message)
      } else {
        alert("Oops! Something went wrong, please try again!")
      }      
    }	
  }

}
</script>

<style scoped>
  .form-container {
     width: 50%;
  }
  
  .title {
     padding: 5%;
  }
</style>

