<template>
  <div class="paragraph-text">
    <h3 v-if="$slots.title" class="title">
      <slot name="title" />
    </h3>
    <slot name="default" />
  </div>
</template>

<style lang="css" scoped>
  .paragraph-text {
    margin: 0 auto;
  }
</style>
