<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="success"
  >
    <v-toolbar-side-icon @click="toggleNavigationDisplay"></v-toolbar-side-icon>
    <v-img max-width="110px" max-height="46px" :src="require('@/assets/logo.png')"></v-img>
    <v-spacer />
    <v-toolbar-title>{{ path }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title class="caption font-weight-bold mt-4">Jake Adams</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleNavigationDisplay () {
      this.$store.commit('toggleNavigationDisplay')
    }
  },
  computed: {
    getPath () {
      return this.$store.getters.getPath
    },
    path () {
      if(this.getPath === 'Home') {
        return 'An intro to Version Control Software'
      } else {
        return this.getPath
      }
    }
  }
}
</script>