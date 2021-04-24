<template>
  <div id="app">
    <h1 class="title">
      PhasJournal
      <a href="https://github.com/MysteryBlokHed/phasjournal" target="_blank">
        GitHub
      </a>
    </h1>
    <EvidenceSelector
      :ghosts="potentialGhosts"
      :evidencePresent="evidencePresent"
      :evidenceNotPresent="evidenceNotPresent"
      :updateEvidencePresent="updateEvidencePresent"
      :updateEvidenceNotPresent="updateEvidenceNotPresent"
      :updateEvidenceInCommon="updateEvidenceInCommon"
    />
    <EvidenceNeeded
      :ghosts="potentialGhosts"
      :evidencePresent="evidencePresent"
      :updateEvidenceInCommon="updateEvidenceInCommon"
    />
    <PotentialGhosts
      :ghosts="potentialGhosts"
      :evidencePresent="evidencePresent"
      :evidenceNotPresent="evidenceNotPresent"
      :evidenceInCommon="evidenceInCommon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence, AllGhosts } from './types'
import PotentialGhosts from './components/PotentialGhosts.vue'
import EvidenceSelector from './components/EvidenceSelector.vue'
import EvidenceNeeded from './components/EvidenceNeeded.vue'

export default defineComponent({
  name: 'App',
  components: {
    PotentialGhosts,
    EvidenceSelector,
    EvidenceNeeded,
  },
  data() {
    return {
      evidencePresent: [] as Evidence[],
      evidenceNotPresent: [] as Evidence[],
      evidenceInCommon: [] as Evidence[],
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
  methods: {
    updateEvidencePresent(newEvidence: Evidence[]) {
      this.evidencePresent = newEvidence
    },
    updateEvidenceNotPresent(newEvidence: Evidence[]) {
      this.evidenceNotPresent = newEvidence
    },
    updateEvidenceInCommon(newEvidence: Evidence[]) {
      this.evidenceInCommon = newEvidence
    },
  },
})
</script>

<style>
body {
  background-color: #0b0e11;
  font-size: 1.125rem;
}

h1 {
  font-size: 2.25rem;
}

h1 a {
  color: #00a;
  text-decoration: none;
  font-size: 1.5rem;
}

@media (max-width: 1000px) {
  #app {
    /* width: 90%; */
    margin: 0 auto;
  }
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fcecdd;
}

.title {
  font-size: 3rem;
}
</style>
