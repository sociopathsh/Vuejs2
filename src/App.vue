<template>
  <div>
    <app-header></app-header>
    <app-avengers></app-avengers>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Avengers from './components/Avengers.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-avengers': Avengers
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
