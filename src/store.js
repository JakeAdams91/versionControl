import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NavigationDisplay: false,
    path: 'home',
    Cheatsheet: [{category: "", purpose: "", example: ""}]
  },
  // {type:"Fiat", model:"500", color:"white"}
  getters: {
    getNavigationDisplay (state) {
      return state.NavigationDisplay
    },
    getPath (state) {
      return state.path
    }
  },
  mutations: {
    toggleNavigationDisplay (state) {
      state.NavigationDisplay = !state.NavigationDisplay
    },
    setPath (state, newPath) {
      state.path = newPath
    }
  },
  actions: {

  }
})
