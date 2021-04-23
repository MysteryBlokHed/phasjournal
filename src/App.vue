<template>
  <div id="app">
    <PotentialGhosts
      :ghosts="potentialGhosts"
      :evidencePresent="evidencePresent"
      :evidenceNotPresent="evidenceNotPresent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence, AllGhosts } from './types'
import PotentialGhosts from './components/PotentialGhosts.vue'

export default defineComponent({
  name: 'App',
  components: {
    PotentialGhosts,
  },
  data() {
    return {
      evidencePresent: [] as Evidence[],
      evidenceNotPresent: [] as Evidence[],
    }
  },
  computed: {
    potentialGhosts() {
      let ghosts = [...AllGhosts]
      let newGhosts
      const evidenceFound = this.evidencePresent.length
      // Filter out ghosts by evidence not present
      for (let i = 0; i < AllGhosts.length; i++)
        for (let e of this.evidenceNotPresent)
          if (AllGhosts[i].evidence.includes(e)) {
            ghosts.splice(ghosts.indexOf(AllGhosts[i]), 1)
            break
          }

      newGhosts = [...ghosts]

      // Filter out ghosts who's evidence can not be found with current
      // found evidence

      for (let i = 0; i < ghosts.length; i++) {
        let evidenceForGhost = 0

        for (let e of this.evidencePresent)
          if (ghosts[i].evidence.includes(e)) evidenceForGhost++

        if (evidenceForGhost < evidenceFound)
          newGhosts.splice(newGhosts.indexOf(ghosts[i]), 1)
      }

      return newGhosts
    },
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
