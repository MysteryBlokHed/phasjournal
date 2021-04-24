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
    <div id="unique-i-swear" v-if="evidenceNeeded.length">
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

      let needed = [] as Evidence[]

      // Get evidence from all present ghosts
      for (let ghost of this.ghosts)
        for (let e of ghost.evidence) if (!needed.includes(e)) needed.push(e)

      // Remove evidence marked as present/not present
      let newNeeded = needed.slice()
      for (let e of needed)
        if (
          this.evidencePresent.includes(e) ||
          this.evidenceNotPresent.includes(e)
        )
          newNeeded.splice(newNeeded.indexOf(e), 1)

      needed = newNeeded

      // Remove evidence potential ghosts have in common
      let combinedEvidence = [] as Evidence[][]
      for (let ghost of this.ghosts) combinedEvidence.push(ghost.evidence)

      if (this.ghosts.length > 1) {
        let commonEvidence = combinedEvidence.reduce((p, c) =>
          p.filter((e) => c.includes(e))
        )

        this.updateEvidenceInCommon(commonEvidence)

        for (let e of commonEvidence)
          if (needed.includes(e)) needed.splice(needed.indexOf(e), 1)
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
