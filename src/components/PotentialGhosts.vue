<template>
  <div>
    <h1>Potential Ghosts</h1>
    <table>
      <thead>
        <tr>
          <th>Ghost Type</th>
          <th>Evidence</th>
          <th>Strength</th>
          <th>Weakness</th>
        </tr>
      </thead>
      <tbody align="center">
        <tr v-for="ghost in ghosts" :key="ghost.type">
          <td width="100">{{ ghost.type }}</td>
          <td
            width="200"
            v-html="formatEvidence(ghost.evidence, evidencePresent)"
          ></td>
          <td width="300">{{ ghost.strength }}</td>
          <td width="300">{{ ghost.weakness }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Evidence, Ghost } from '../types'

let formatEvidence = (
  evidence: Evidence[],
  evidencePresent: Evidence[]
): string => {
  let htmlEvidence = [] as Array<string>

  // Format evidence
  for (let i = 0; i < evidence.length; i++) {
    let e: Evidence = evidence[i]

    if (evidencePresent.includes(e))
      htmlEvidence.push(`<span class="present">${e as string}</span>`)
    else
      htmlEvidence.push(`<span class="unknown-presence">${e as string}</span>`)
  }

  return htmlEvidence.join(', ')
}

export default defineComponent({
  name: 'PotentialGhosts',
  data() {
    return {
      formatEvidence: formatEvidence,
    }
  },
  props: {
    ghosts: Array as PropType<Array<Ghost>>,
    evidencePresent: Array as PropType<Array<Evidence>>,
    evidenceNotPresent: Array as PropType<Array<Evidence>>,
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
