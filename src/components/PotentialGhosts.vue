<template>
  <div>
    <h1>Potential Ghosts</h1>
    <div class="container" v-if="ghosts">
      <div class="ghosts-column type">
        <div>
          <div>Type</div>
          <div v-for="ghost in ghosts" :key="ghost.type">
            {{ ghost.type }}
          </div>
        </div>
      </div>
      <div class="ghosts-column evidence">
        <div>
          <div>Evidence</div>
          <div
            v-for="ghost in ghosts"
            :key="ghost.type"
            v-html="formatEvidence(ghost.evidence)"
          ></div>
        </div>
      </div>
      <div v-if="!isMobile" class="ghosts-column strength">
        <div>
          <div>Strength</div>
          <div v-for="ghost in ghosts" :key="ghost.type">
            {{ ghost.strength }}
          </div>
        </div>
      </div>
      <div v-if="!isMobile" class="ghosts-column weakness">
        <div>
          <div>Weakness</div>
          <div v-for="ghost in ghosts" :key="ghost.type">
            {{ ghost.weakness }}
          </div>
        </div>
      </div>
    </div>
    <p v-else>No possible ghosts.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence } from '../types'
import store from '../state'

export default defineComponent({
  name: 'PotentialGhosts',
  data() {
    return {
      ghosts: store.state.ghosts,
      evidencePresent: store.state.evidencePresent,
      evidenceNotPresent: store.state.evidenceNotPresent,
      evidenceInCommon: store.state.evidenceInCommon,
      isMobile: navigator.userAgent.match(/mobile/i),
    }
  },
  methods: {
    formatEvidence(evidence: Evidence[]): string {
      let htmlEvidence = [] as string[]

      for (let i = 0; i < evidence.length; i++) {
        let e: Evidence = evidence[i]

        if (
          this.evidencePresent.includes(e) ||
          this.evidenceInCommon.includes(e)
        )
          htmlEvidence.push(`<span class="present">${e as string}</span>`)
        else
          htmlEvidence.push(
            `<span class="unknown-presence">${e as string}</span>`
          )
      }

      return htmlEvidence.join(', ')
    },
  },
})
</script>

<style>
span.present {
  color: green;
}
</style>
<style scoped>
@media (max-width: 800px) {
  .container {
    font-size: 0.75rem;
  }
}

.ghosts-column {
  display: inline-block;
  margin: 5px;
}

.ghosts-column div {
  list-style: none;
}

.ghosts-column div div:first-child {
  font-weight: bold;
}
</style>
