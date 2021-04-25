import { reactive } from 'vue'
import { AllGhosts } from '../types'

export const ghosts = reactive({
  ghosts: AllGhosts.slice(),
})
