import { Ghost, AllGhosts, Evidence } from './types'
import { reactive } from 'vue'

const store = {
  debugLevel: 0,

  state: reactive({
    ghosts: AllGhosts.slice(),
    evidencePresent: [] as Evidence[],
    evidenceNotPresent: [] as Evidence[],
    evidenceInCommon: [] as Evidence[],
    evidenceNeeded: Object.values(Evidence),
  }),

  setGhosts(newValue: Ghost[]): void {
    if (this.debugLevel === 1)
      console.log('setGhosts called with new value', newValue)
    else if (this.debugLevel === 2) {
      console.groupCollapsed('setGhosts called with new value', newValue)
      console.trace()
      console.groupEnd()
    }
    this.state.ghosts.length = 0
    this.state.ghosts.push(...newValue)
  },

  clearGhosts(): void {
    if (this.debugLevel === 1) console.log('clearGhosts called')
    else if (this.debugLevel === 2) {
      console.groupCollapsed('clearGhosts called')
      console.trace()
      console.groupEnd()
    }
    this.state.ghosts.length = 0
  },

  setEvidencePresent(newValue: Evidence[]): void {
    if (this.debugLevel === 1)
      console.log('setEvidencePresent called with new value', newValue)
    else if (this.debugLevel === 2) {
      console.groupCollapsed(
        'setEvidencePresent called with new value',
        newValue
      )
      console.trace()
      console.groupEnd()
    }
    this.state.evidencePresent.length = 0
    this.state.evidencePresent.push(...newValue)
  },

  clearEvidencePresent(): void {
    if (this.debugLevel === 1) console.log('clearEvidencePresent called')
    else if (this.debugLevel === 2) {
      console.groupCollapsed('clearEvidencePresent called')
      console.trace()
      console.groupEnd()
    }
    this.state.evidencePresent.length = 0
  },

  setEvidenceNotPresent(newValue: Evidence[]): void {
    if (this.debugLevel === 1)
      console.log('setEvidenceNotPresent called with new value', newValue)
    else if (this.debugLevel === 2) {
      console.groupCollapsed(
        'setEvidenceNotPresent called with new value',
        newValue
      )
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceNotPresent.length = 0
    this.state.evidenceNotPresent.push(...newValue)
  },

  clearEvidenceNotPresent(): void {
    if (this.debugLevel === 1) console.log('clearEvidenceNotPresent called')
    else if (this.debugLevel === 2) {
      console.groupCollapsed('clearEvidenceNotPresent called')
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceNotPresent.length = 0
  },

  setEvidenceInCommon(newValue: Evidence[]): void {
    if (this.debugLevel === 1)
      console.log('setEvidenceInCommon called with new value', newValue)
    else if (this.debugLevel === 2) {
      console.groupCollapsed(
        'setEvidenceInCommon called with new value',
        newValue
      )
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceInCommon.length = 0
    this.state.evidenceInCommon.push(...newValue)
  },

  clearEvidenceInCommon(): void {
    if (this.debugLevel === 1) console.log('clearEvidenceInCommon called')
    else if (this.debugLevel === 2) {
      console.groupCollapsed('clearEvidenceInCommon called')
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceInCommon.length = 0
  },
  setEvidenceNeeded(newValue: Evidence[]): void {
    if (this.debugLevel === 1)
      console.log('setEvidenceNeeded called with new value', newValue)
    else if (this.debugLevel === 2) {
      console.groupCollapsed(
        'setEvidenceNeeded called with new value',
        newValue
      )
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceNeeded.length = 0
    this.state.evidenceNeeded.push(...newValue)
  },

  clearEvidenceNeeded(): void {
    if (this.debugLevel === 1) console.log('clearEvidenceNeeded called')
    else if (this.debugLevel === 2) {
      console.groupCollapsed('clearEvidenceNeeded called')
      console.trace()
      console.groupEnd()
    }
    this.state.evidenceNeeded.length = 0
  },
}

export default store
