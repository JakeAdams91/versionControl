<template>
  <v-toolbar
    app
    dark
    clipped-left
    color="success"
  >
    <v-toolbar-side-icon @click="toggleNavigationDisplay"></v-toolbar-side-icon>
    <v-toolbar-title>Git: Version Control</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>Jake Adams</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleNavigationDisplay () {
      this.$store.commit('toggleNavigationDisplay')
    }
  }
}
</script>