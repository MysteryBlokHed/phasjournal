<template>
  <div>
    <h1>Evidence</h1>
    <p>
      Click on evidence to toggle it.
      <span class="present">Green</span>
      = Present,
      <span class="not-present">Red</span>
      = Not Present
    </p>
    <ul class="evidence-types">
      <li v-for="e in evidence" :key="e">
        <button @click="evidenceCycle" class="neutral" :evidence="e">
          {{ e }}
        </button>
      </li>
      <li>
        <button @click="resetEvidence" class="neutral">Reset Evidence</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Evidence, AllGhosts } from '../types'
import { ghosts } from '../state/ghosts'
import { evidence } from '../state/evidence'

export default defineComponent({
  name: 'EvidenceSelector',
  data() {
    return {
      ghosts: ghosts.ghosts,
      evidence: Evidence,
      evidencePresent: evidence.evidencePresent,
      evidenceNotPresent: evidence.evidenceNotPresent,
      evidenceInCommon: evidence.evidenceInCommon,
      evidenceNeeded: evidence.evidenceNeeded,
    }
  },
  methods: {
    evidenceCycle(event: Event) {
      const target = event.target as HTMLButtonElement
      const buttonEvidence = target.getAttribute('evidence') as Evidence

      console.log('evidenceCycle run')
      console.log('evidencePresent before:')
      console.log(this.evidencePresent)

      let newPresent = this.evidencePresent.slice()
      let newNotPresent = this.evidenceNotPresent.slice()

      switch (target.className) {
        case 'neutral':
          newPresent.push(buttonEvidence)
          this.evidencePresent.length = 0
          this.evidencePresent.push(...newPresent)
          target.className = 'present'
          break
        case 'present':
          newPresent.splice(newPresent.indexOf(buttonEvidence), 1)
          newNotPresent.push(buttonEvidence)
          this.evidencePresent.length = 0
          this.evidenceNotPresent.length = 0
          this.evidencePresent.push(...newPresent)
          this.evidenceNotPresent.push(...newNotPresent)
          target.className = 'not-present'
          break
        case 'not-present':
          newNotPresent.splice(newNotPresent.indexOf(buttonEvidence), 1)
          this.evidenceNotPresent.length = 0
          this.evidenceNotPresent.push(...newNotPresent)
          target.className = 'neutral'
          break
      }

      this.updatePotentialGhosts()
      this.updateEvidenceNeeded()
    },
    resetEvidence() {
      const buttons = document.querySelector(
        '.evidence-types'
      ) as HTMLUListElement

      for (let element of buttons.children)
        element.children[0].className = 'neutral'

      this.evidencePresent = []
      this.evidenceNotPresent = []
      this.evidenceInCommon = []

      this.updatePotentialGhosts()
      this.updateEvidenceNeeded()
    },
    updatePotentialGhosts() {
      console.log('p. ghosts updated')
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

      this.ghosts.length = 0
      this.ghosts.push(...newGhosts)
    },
    updateEvidenceNeeded() {
      // If one ghost is left no evidence is needed
      if (this.ghosts.length === 1) {
        this.evidenceNeeded.length = 0
        this.evidenceInCommon.length = 0
        this.evidenceInCommon.push(...this.ghosts[0].evidence)
        return
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

        this.evidenceInCommon.length = 0
        this.evidenceInCommon.push(...commonEvidence)

        needed = needed.filter((v) => !commonEvidence.includes(v))
      }

      this.evidenceNeeded.length = 0
      this.evidenceNeeded.push(...needed)
    },
  },
})
</script>

<style>
button.present {
  background-color: green;
}

button.not-present {
  background-color: red;
}

button.neutral {
  background-color: #fcecdd;
}
</style>
<style scoped>
ul.evidence-types {
  list-style: none;
  display: inline-block;
}

ul.evidence-types li {
  float: left;
}

@media (min-width: 1001px) {
  ul.evidence-types li:last-child {
    margin-left: 5rem;
  }
}

span.not-present {
  color: red;
}

button {
  width: 9rem;
  height: 9rem;
  font-size: 1.125rem;
  margin: 1px;
  border: 0;
}
</style>
