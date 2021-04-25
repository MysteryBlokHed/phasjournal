import { reactive } from 'vue'
import { Evidence } from '../types'

export const evidence = reactive({
  evidencePresent: [] as Evidence[],
  evidenceNotPresent: [] as Evidence[],
  evidenceInCommon: [] as Evidence[],
  evidenceNeeded: Object.values(Evidence),
})
