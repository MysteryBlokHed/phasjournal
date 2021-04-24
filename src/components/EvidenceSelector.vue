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
        <button @click="resetEvidence">Reset Evidence</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Evidence, Ghost } from '../types'

export default defineComponent({
  name: 'EvidenceSelector',
  data() {
    return {
      evidence: Evidence,
    }
  },
  computed: {
    evidenceNeeded() {
      // If one ghost is left no evidence is needed
      if (this.ghosts.length === 1) return []

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
    evidenceNotPresent: {
      type: Array as PropType<Array<Evidence>>,
      required: true,
    },
    updateEvidencePresent: { type: Function, required: true },
    updateEvidenceNotPresent: { type: Function, required: true },
    updateEvidenceInCommon: { type: Function, required: true },
  },
  methods: {
    evidenceCycle(event: Event) {
      const target = event.target as HTMLButtonElement
      const buttonEvidence = target.getAttribute('evidence') as Evidence

      let newPresent = this.evidencePresent.slice()
      let newNotPresent = this.evidenceNotPresent.slice()

      switch (target.className) {
        case 'neutral':
          newPresent.push(buttonEvidence)
          this.updateEvidencePresent(newPresent)
          target.className = 'present'
          break
        case 'present':
          newPresent.splice(newPresent.indexOf(buttonEvidence), 1)
          newNotPresent.push(buttonEvidence)
          this.updateEvidencePresent(newPresent)
          this.updateEvidenceNotPresent(newNotPresent)
          target.className = 'not-present'
          break
        case 'not-present':
          newNotPresent.splice(newNotPresent.indexOf(buttonEvidence), 1)
          this.updateEvidenceNotPresent(newNotPresent)
          target.className = 'neutral'
          break
      }
    },
    resetEvidence() {
      const buttons = document.querySelector(
        '.evidence-types'
      ) as HTMLUListElement

      for (let element of buttons.children)
        element.children[0].className = 'neutral'

      this.updateEvidencePresent([])
      this.updateEvidenceNotPresent([])
      this.updateEvidenceInCommon([])
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
</style>
<style scoped>
ul.evidence-types {
  list-style: none;
  display: inline-block;
}

ul.evidence-types li {
  float: left;
}

ul.evidence-types li:last-child {
  margin-left: 5rem;
}

span.not-present {
  color: red;
}

button {
  width: 9rem;
  height: 9rem;
  font-size: 1.125rem;
  font-family: Arial, sans-serif;
  margin: 1px;
  border: 0;
}
</style>
