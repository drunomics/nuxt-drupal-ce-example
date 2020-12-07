<template>
  <div class="nuxt-error">
      <h2>Error</h2>
      <h4><strong>Error:</strong> {{ error.message }}</h4>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  layout: 'default',
  created: () => {
    console.log(this)
  },
  props: {
    error: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>
