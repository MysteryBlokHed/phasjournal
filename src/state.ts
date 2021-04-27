import { Ghost, AllGhosts, Evidence } from './types'
import { reactive } from 'vue'

const store = {
  debug: false,

  state: reactive({
    ghosts: AllGhosts.slice(),
    evidencePresent: [] as Evidence[],
    evidenceNotPresent: [] as Evidence[],
    evidenceInCommon: [] as Evidence[],
    evidenceNeeded: Object.values(Evidence),
  }),

  setGhosts(newValue: Ghost[]): void {
    if (this.debug) console.log('setGhosts called with new value', newValue)
    this.state.ghosts.length = 0
    this.state.ghosts.push(...newValue)
  },

  clearGhosts(): void {
    if (this.debug) console.log('clearGhosts called')
    this.state.ghosts.length = 0
  },

  setEvidencePresent(newValue: Evidence[]): void {
    if (this.debug)
      console.log('setEvidencePresent called with new value', newValue)
    this.state.evidencePresent.length = 0
    this.state.evidencePresent.push(...newValue)
  },

  clearEvidencePresent(): void {
    if (this.debug) console.log('clearEvidencePresent called')
    this.state.evidencePresent.length = 0
  },

  setEvidenceNotPresent(newValue: Evidence[]): void {
    if (this.debug)
      console.log('setEvidenceNotPresent called with new value', newValue)
    this.state.evidenceNotPresent.length = 0
    this.state.evidenceNotPresent.push(...newValue)
  },

  clearEvidenceNotPresent(): void {
    if (this.debug) console.log('clearEvidenceNotPresent called')
    this.state.evidenceNotPresent.length = 0
  },

  setEvidenceInCommon(newValue: Evidence[]): void {
    if (this.debug)
      console.log('setEvidenceInCommon called with new value', newValue)
    this.state.evidenceInCommon.length = 0
    this.state.evidenceInCommon.push(...newValue)
  },

  clearEvidenceInCommon(): void {
    if (this.debug) console.log('clearEvidenceInCommon called')
    this.state.evidenceInCommon.length = 0
  },
  setEvidenceNeeded(newValue: Evidence[]): void {
    if (this.debug)
      console.log('setEvidenceNeeded called with new value', newValue)
    this.state.evidenceNeeded.length = 0
    this.state.evidenceNeeded.push(...newValue)
  },

  clearEvidenceNeeded(): void {
    if (this.debug) console.log('clearEvidenceNeeded called')
    this.state.evidenceNeeded.length = 0
  },
}

export default store
