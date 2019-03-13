<template>
  <div>
    <v-card :color="colorCode">
      <v-card-title>
        {{ cheat.category }}
      </v-card-title>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>
              {{ cheat.purpose }}
            </div>
          </template>
          <v-card-text>
            {{ cheat.example }}
          </v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <v-list>
        <v-list-tile>
          <v-list-tile-sub-title>
            {{ cheat.label }}
          </v-list-tile-sub-title>
          <v-list-tile-title>
            {{ cheat.purpose }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CheatSheetCard',
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
        return '#d50000'
      } else if (this.cheat.category === 'Create') {
        return '#ff3d00' 
      } else if (this.cheat.category === 'Local Changes') {
        return '#ffab40'
      } else if (this.cheat.category === 'Commit History') {
        return '#ffff00'
      } else if (this.cheat.category === 'Branches and Tags') {
        return '#00bcd4'
      } else if (this.cheat.category === 'Update and Publish') {
        return '#e1ffb1'
      } else if (this.cheat.category === 'Merge and Rebase') {
        return '#58a5f0'
      } else if (this.cheat.category === '') {
        return '#ff7539'
      } else {
        return '#f9a825'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
