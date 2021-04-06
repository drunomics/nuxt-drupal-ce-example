<template>
  <div class="node" :class="`node--${type}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Node',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>
