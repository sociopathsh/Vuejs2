<template>
  <div>
    <form-helper>
      <h1 slot="title">I am the title slot</h1>
      <p slot="text">I am the paragraph text for the slot</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue';

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>

</style>
