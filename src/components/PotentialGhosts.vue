<template>
  <div>
    <h1>Potential Ghosts</h1>
    <ul>
      <li v-for="ghost in ghosts" :key="ghost.type">
        <b class="ghost-type">{{ ghost.type }}</b>
        <ul>
          <li v-html="formatEvidence(ghost.evidence, evidencePresent)"></li>
          <li>
            <u>Strength:</u>
            {{ ghost.strength }}
          </li>
          <li>
            <u>Weakness:</u>
            {{ ghost.weakness }}
          </li>
        </ul>
      </li>
    </ul>
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

  return `<u>Evidence:</u> ${htmlEvidence.join(', ')}`
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
ul {
  list-style-type: none;
}

li {
  margin-top: 1rem;
}

li::before {
  content: '- ';
}

.ghost-type {
  font-size: 1.375rem;
}
</style>
