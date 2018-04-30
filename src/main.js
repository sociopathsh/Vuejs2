import Vue from 'vue'
import App from './App.vue'
import Avengers from './Avengers.vue'

Vue.component('avengers', Avengers);

new Vue({
  el: '#app',
  render: h => h(App)
});
