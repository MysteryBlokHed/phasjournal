<template>
  <div>
    <h1>Evidence</h1>
    <p>
      Click on evidence to change its state.
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
import { Evidence, Ghost, AllGhosts } from '../types'
import store from '../state'

export default defineComponent({
  name: 'EvidenceSelector',
  data() {
    return {
      ghosts: store.state.ghosts,
      evidence: Evidence,
      evidencePresent: store.state.evidencePresent,
      evidenceNotPresent: store.state.evidenceNotPresent,
      evidenceInCommon: store.state.evidenceInCommon,
      evidenceNeeded: store.state.evidenceNeeded,
    }
  },
  methods: {
    evidenceCycle(event: Event): void {
      const target = event.target as HTMLButtonElement
      const buttonEvidence = target.getAttribute('evidence') as Evidence

      let newPresent = this.evidencePresent.slice()
      let newNotPresent = this.evidenceNotPresent.slice()

      switch (target.className) {
        case 'neutral':
          newPresent.push(buttonEvidence)
          store.setEvidencePresent(newPresent)
          target.className = 'present'
          break
        case 'present':
          newPresent.splice(newPresent.indexOf(buttonEvidence), 1)
          newNotPresent.push(buttonEvidence)
          store.setEvidencePresent(newPresent)
          store.setEvidenceNotPresent(newNotPresent)
          target.className = 'not-present'
          break
        case 'not-present':
          newNotPresent.splice(newNotPresent.indexOf(buttonEvidence), 1)
          store.setEvidenceNotPresent(newNotPresent)
          target.className = 'neutral'
          break
      }

      this.updatePotentialGhosts()
      this.updateEvidenceNeeded()
    },
    resetEvidence(): void {
      const buttons = document.querySelector(
        '.evidence-types'
      ) as HTMLUListElement

      for (let element of buttons.children)
        element.children[0].className = 'neutral'

      store.clearEvidencePresent()
      store.clearEvidenceNotPresent()
      store.clearEvidenceInCommon()

      this.updatePotentialGhosts()
      this.updateEvidenceNeeded()
    },
    updatePotentialGhosts(): void {
      let ghosts = [...AllGhosts]
      let newGhosts = [] as Ghost[]
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

      store.setGhosts(newGhosts)
    },
    updateEvidenceNeeded(): void {
      // If one ghost is left no evidence is needed
      if (this.ghosts.length === 1) {
        store.clearEvidenceNeeded()
        store.setEvidenceInCommon(this.ghosts[0].evidence)
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

        store.setEvidenceInCommon(commonEvidence)

        needed = needed.filter((v) => !commonEvidence.includes(v))
      }

      store.setEvidenceNeeded(needed)
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
