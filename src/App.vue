<template>
  <v-app id="app">
    <toolbar>
    </toolbar>
    <nav-drawer />
    <v-content id="content">
      <home v-if="getPath === 'Home'"/>
      <cheat-sheet v-if="getPath === 'Cheat-Sheet'"/>
      <version-control v-if="getPath === 'Installation Guide'"/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Navigation/Toolbar'
import NavDrawer from './components/Navigation/NavDrawer'
import Home from './components/Home'
import CheatSheet from './components/CheatSheet'
import VersionControl from './components/VersionControl'
export default {
  name: 'app',
  computed: {
    getPath () {
      return this.$store.getters.getPath
    }
  },
  components: {
    Toolbar,
    NavDrawer,
    Home,
    CheatSheet,
    VersionControl
  }
}
</script>

<style>
  #app {
    /* background-color: #E0E0E0; */
    background-color: #757575;
  }
</style>
