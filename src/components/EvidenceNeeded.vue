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
import { defineComponent, PropType } from 'vue'
import { Evidence, Ghost } from '../types'

export default defineComponent({
  name: 'EvidenceNeeded',
  computed: {
    evidenceNeeded() {
      // If one ghost is left no evidence is needed
      if (this.ghosts.length === 1) {
        this.updateEvidenceInCommon(this.ghosts[0].evidence)
        return []
      }

      let needed = Object.values(Evidence)
      let unneeded = needed.slice()

      // Remove evidence not required by any ghost
      for (let ghost of this.ghosts)
        for (let e of ghost.evidence)
          if (unneeded.includes(e)) unneeded.splice(unneeded.indexOf(e), 1)

      needed = needed.filter((v) => !unneeded.includes(v))

      // Remove evidence marked as present/not present
      needed = needed.filter(
        (v) =>
          !this.evidencePresent.includes(v) && !this.evidencePresent.includes(v)
      )

      // Remove evidence potential ghosts have in common
      let combinedEvidence = [] as Evidence[][]
      for (let ghost of this.ghosts) combinedEvidence.push(ghost.evidence)

      if (this.ghosts.length > 1) {
        let commonEvidence = combinedEvidence.reduce((p, c) =>
          p.filter((e) => c.includes(e))
        )

        this.updateEvidenceInCommon(commonEvidence)

        needed = needed.filter((v) => !commonEvidence.includes(v))
      }

      return needed
    },
  },
  props: {
    ghosts: {
      type: Array as PropType<Array<Ghost>>,
      required: true,
    },
    evidencePresent: {
      type: Array as PropType<Array<Evidence>>,
      required: true,
    },
    updateEvidenceInCommon: { type: Function, required: true },
  },
})
</script>
