<template>
  <div>
    <div v-if="evidenceNeeded.length">
      <p>Evidence to Look For:</p>
      <ul>
        <li v-for="e in evidenceNeeded" :key="e">{{ e }}</li>
      </ul>
    </div>
    <p v-else>No evidence to look for.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '../state'

export default defineComponent({
  name: 'EvidenceNeeded',
  data() {
    return {
      ghosts: store.state.ghosts,
      evidenceNeeded: store.state.evidenceNeeded,
    }
  },
})
</script>
