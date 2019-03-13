<template>
  <div>
    <v-card>
      <v-list
        v-for="(cheat, index) in cheatSheet"
        :key="index"
      >
        <v-list-tile>
          <v-list-tile-sub-title>
            {{ cheat.label }}
          </v-list-tile-sub-title>
          <v-list-tile-title>
            {{ cheat.value }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
