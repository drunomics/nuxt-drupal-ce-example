# Lupus Nuxt.js Drupal stack - Frontend example

An example project showing the usage of the [Nuxt.js Drupal-CE module](https://github.com/drunomics/nuxt-module-drupal-ce).


## Pre-requisites

* A [Drupal](https://drupal.org) backend with the
  [Lupus Custom Elements Renderer](https://www.drupal.org/project/lupus_ce_renderer)
  module installed.
  
## Usage

* This setup assumes being connected to a Drupal 9 site with the `lupus_ce_renderer`
  and `paragraphs` module being active. It's assuming a field `field_paragraphs` on the node, that
  contains `text` or `quote` paragraphs with the fields `field_text` and `field_author_name`.
  
* You can easily change supported custom elements and how they are rendered by editing
  the Vue components in the `components/global` folder. In order to register a new component
  simply add a respective Vue component with a matching name (kebap-case can be converted
  to CamelCase).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ DRUPAL_BASE_URL=http://yourdrupal.example.com npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out
* [Nuxt.js Drupal-CE module](https://github.com/drunomics/nuxt-module-drupal-ce)
* [Nuxt.js docs](https://nuxtjs.org).
