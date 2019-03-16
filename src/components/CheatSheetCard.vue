<template>
  <div>
    <v-card :color="colorCode">
      <v-card-title class="white--text">
        {{ cheat.category }}
      </v-card-title>
      <v-divider dark/>
      <v-layout row @click="show = !show">
        <v-flex xs10>
          <v-card-title class="white--text font-weight-bold">{{ cheat.example }}</v-card-title>
        </v-flex>
        <v-flex xs2 class="mr-3">
          <v-btn icon >
            <v-icon class="white--text">{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-slide-y-transition>
        <v-card-text v-show="show"
          class="white--text">{{ cheat.purpose }}</v-card-text>
      </v-slide-y-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CheatSheetCard',
  data () {
    return {
      show: false
    }
  },
  props: {
    cheat: {
      type: Object,
      required: true
    }
  },
  computed: {
    cheatSheet () {
      return [
        { label:'Category', value: this.cheat.category },
        { label:'Purpose', value: this.cheat.purpose },
        { label: 'Example', value: this.cheat.example }
      ]
    },
    colorCode () {
      if(this.cheat.category === 'Need to Know') {
        return 'success'
      } else if (this.cheat.category === 'Create') {
        return '#af4cac' 
      } else if (this.cheat.category === 'Local Changes') {
        return '#af4f4c'
      } else if (this.cheat.category === 'Commit History') {
        return '#302a92'
      } else if (this.cheat.category === 'Branches and Tags') {
        return '#289a9d'
      } else if (this.cheat.category === 'Update and Publish') {
        return '#af4cac'
      } else if (this.cheat.category === 'Merge and Rebase') {
        return '#289d66'
      } else if (this.cheat.category === '') {
        return '#af4cac'
      } else {
        return '#2a5992'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
