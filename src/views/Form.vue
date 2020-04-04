<template>
 <div>
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="Email input" value="hello@">
    </div>
  </div>

  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" :placeholder="message"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button @click="sayHello" class="button is-link">Submit</button>
      <div v-if="showMessage">{{message}}</div>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
 </div>
</template>
