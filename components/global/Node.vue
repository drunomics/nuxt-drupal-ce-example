<template>
  <div class="node">
    <h2>{{ title }}</h2>
    <slot name="paragraphs" />
  </div>
</template>

<script>
export default {
  name: 'Node',
  props: {
    title: {
      type: String
    }
  }
}
</script>
