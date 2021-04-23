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
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Evidence } from '../types'

export default defineComponent({
  name: 'EvidenceSelector',
  data() {
    return {
      evidence: Evidence,
    }
  },
  props: {
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
  },
  methods: {
    evidenceCycle(event: Event) {
      const target = event.target as HTMLButtonElement
      const buttonEvidence = target.getAttribute('evidence') as Evidence

      let newPresent = [...this.evidencePresent]
      let newNotPresent = [...this.evidenceNotPresent]

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
ul {
  list-style: none;
  display: inline-block;
}

ul li {
  float: left;
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
