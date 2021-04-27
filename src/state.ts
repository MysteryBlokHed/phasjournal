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

  setGhosts(newValue: Ghost[]) {
    if (this.debug) console.log('setGhosts called with new value', newValue)
    this.state.ghosts.length = 0
    this.state.ghosts.push(...newValue)
  },

  clearGhosts() {
    if (this.debug) console.log('clearGhosts called')
    this.state.ghosts.length = 0
  },

  setEvidencePresent(newValue: Evidence[]) {
    if (this.debug)
      console.log('setEvidencePresent called with new value', newValue)
    this.state.evidencePresent.length = 0
    this.state.evidencePresent.push(...newValue)
  },

  clearEvidencePresent() {
    if (this.debug) console.log('clearEvidencePresent called')
    this.state.evidencePresent.length = 0
  },

  setEvidenceNotPresent(newValue: Evidence[]) {
    if (this.debug)
      console.log('setEvidenceNotPresent called with new value', newValue)
    this.state.evidenceNotPresent.length = 0
    this.state.evidenceNotPresent.push(...newValue)
  },

  clearEvidenceNotPresent() {
    if (this.debug) console.log('clearEvidenceNotPresent called')
    this.state.evidenceNotPresent.length = 0
  },

  setEvidenceInCommon(newValue: Evidence[]) {
    if (this.debug)
      console.log('setEvidenceInCommon called with new value', newValue)
    this.state.evidenceInCommon.length = 0
    this.state.evidenceInCommon.push(...newValue)
  },

  clearEvidenceInCommon() {
    if (this.debug) console.log('clearEvidenceInCommon called')
    this.state.evidenceInCommon.length = 0
  },
  setEvidenceNeeded(newValue: Evidence[]) {
    if (this.debug)
      console.log('setEvidenceNeeded called with new value', newValue)
    this.state.evidenceNeeded.length = 0
    this.state.evidenceNeeded.push(...newValue)
  },

  clearEvidenceNeeded() {
    if (this.debug) console.log('clearEvidenceNeeded called')
    this.state.evidenceNeeded.length = 0
  },
}

export default store
