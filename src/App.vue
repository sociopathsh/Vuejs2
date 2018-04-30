<template>
  <div>
    <h1>{{ title }}</h1>
    <avengers></avengers>
  </div>
</template>

<script>
import Avengers from './Avengers.vue'

export default {
  components: {
    avengers: Avengers
  },
  data () {
    return {
      title: 'Avenger App',
    }
  }
}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
