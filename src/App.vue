<template>
  <div id="app">
    <h1 class="title">
      PhasJournal
      <a href="https://github.com/MysteryBlokHed/phasjournal" target="_blank">
        GitHub
      </a>
    </h1>
    <Timer />
    <EvidenceSelector />
    <EvidenceNeeded />
    <PotentialGhosts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from './components/Timer.vue'
import EvidenceSelector from './components/EvidenceSelector.vue'
import EvidenceNeeded from './components/EvidenceNeeded.vue'
import PotentialGhosts from './components/PotentialGhosts.vue'

export default defineComponent({
  name: 'App',
  components: {
    PotentialGhosts,
    EvidenceSelector,
    EvidenceNeeded,
    Timer,
  },
})
</script>

<style>
body {
  background-color: #0b0e11;
  font-size: 1.125rem;
}

button:hover {
  cursor: pointer;
}

button:active {
  filter: brightness(0.75);
}

h1 {
  font-size: 2.25rem;
}

h1 a {
  color: #00a;
  text-decoration: none;
  font-size: 1.5rem;
}

#app {
  color: #fcecdd;
  margin: 0 auto;
}

#app * {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  font-size: 3rem;
}
</style>
