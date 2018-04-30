<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ greet() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    greet: function () {
      return 'Hello from Vue.js app';
    }
  }
}
</script>

<style>

</style>
