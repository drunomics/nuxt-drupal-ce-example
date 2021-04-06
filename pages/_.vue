<template>
  <main role="main">
    <main-navigation />
    <drupal-tabs v-if="page.localTasks" :tabs="page.localTasks" />
    <component :is="$drupal.contentComponent(page.content)" />
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData ({ route, $drupal }) {
    // Do not return the data here to avoid hydrating data twice. The drupal-ce module is taking care of it already.
    await $drupal.fetchPage(route.path)
  },
  computed: {
    ...mapState('drupalCe', ['page'])
  },
  head () {
    return {
      title: this.page.title,
      meta: this.page.metatags.meta,
      link: this.page.metatags.link,
      script: [{
        vmid: 'ldjson-schema',
        json: this.page.metatags.jsonld || [],
        type: 'application/ld+json'
      }]
    }
  }
}
</script>
