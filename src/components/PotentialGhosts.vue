<template>
  <div>
    <h1>Potential Ghosts</h1>
    <table v-if="ghosts.length">
      <thead>
        <tr>
          <th width="10%">Ghost Type</th>
          <th width="20%">Evidence</th>
          <th width="35%">Strength</th>
          <th width="35%">Weakness</th>
        </tr>
      </thead>
      <tbody align="center">
        <tr v-for="ghost in ghosts" :key="ghost.type">
          <td>{{ ghost.type }}</td>
          <td v-html="formatEvidence(ghost.evidence)"></td>
          <td>{{ ghost.strength }}</td>
          <td>{{ ghost.weakness }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No possible ghosts.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence } from '../types'
import { ghosts } from '../state/ghosts'
import { evidence } from '../state/evidence'

export default defineComponent({
  name: 'PotentialGhosts',
  data() {
    return {
      ghosts: ghosts.ghosts,
      evidencePresent: evidence.evidencePresent,
      evidenceNotPresent: evidence.evidenceNotPresent,
      evidenceInCommon: evidence.evidenceInCommon,
    }
  },
  methods: {
    formatEvidence(evidence: Evidence[]) {
      let htmlEvidence = [] as Array<string>

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
table {
  padding: 0.5rem;
  border: 1px solid #fcecdd;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
}
</style>
