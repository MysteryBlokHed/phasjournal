<template>
  <div id="app">
    <PotentialGhosts
      :ghosts="ghosts"
      :evidencePresent="evidencePresent"
      :evidenceNotPresent="evidenceNotPresent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence, AllGhosts } from './types'
import PotentialGhosts from './components/PotentialGhosts.vue'

let possibleGhosts = AllGhosts
let evidencePresent: Evidence[] = []
let evidenceNotPresent: Evidence[] = []

evidencePresent.push(Evidence.Emf5)
evidenceNotPresent.push(Evidence.SpiritBox)

export default defineComponent({
  name: 'App',
  components: {
    PotentialGhosts,
  },
  data() {
    return {
      ghosts: possibleGhosts,
      evidencePresent: evidencePresent,
      evidenceNotPresent: evidenceNotPresent,
    }
  },
})
</script>

<style>
body {
  background-color: #1a1a2e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fcecdd;
}
</style>
