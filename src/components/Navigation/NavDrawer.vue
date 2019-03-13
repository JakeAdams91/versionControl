<template>
  <v-navigation-drawer
    app
    fixed
    clipped
    stateless
    class="elevation-3"
    :value="displayingSiteNavigation"
  >
    <v-list>
      <v-list-tile @click="route('home')">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('version')">
        <v-list-tile-content>
          <v-list-tile-title>Version Control</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('cheat')">
        <v-list-tile-content>
          <v-list-tile-title>Cheat Sheet</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  computed: {
    displayingSiteNavigation () {
      return this.$store.getters.getNavigationDisplay
    }
  },
  methods: {
    route (path) {
      if(path === 'home') {
        this.$store.commit('setPath', 'home')
      } else if(path === 'version') {
        this.$store.commit('setPath', 'version')
      } else {
        this.$store.commit('setPath', 'cheat')
      }
      this.$store.commit('toggleNavigationDisplay')
    }
  }
}
</script>