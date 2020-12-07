<template>
  <main
    role="main"
    class="page"
  >
    <drupal-tabs v-if="this.$drupal.$currentPage.localTasks" :tabs="this.$drupal.$currentPage.localTasks" />
    <component
      :is="contentComponent()"
      ref="content"
    />
  </main>
</template>

<script>

export default {
  name: 'PageDefault',
  async asyncData ({ route, $drupal }) {
    return {
      page: await $drupal.fetchPage(route.path)
    }
  },
  methods: {
    contentComponent () {
      return { name: 'DrupalContent', template: '<div>' + this.$drupal.$currentPage.content + '</div>' }
    }
  },
  head () {
    const page = this.$drupal.$currentPage
    return {
      title: page.title,
      meta: page.metadata.meta,
      link: page.metadata.link
    }
  }
}
</script>
