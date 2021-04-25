<template>
  <div class="container">
    <div v-if="show">
      <p class="timer">{{ minutes }}:{{ String(seconds).padStart(2, '0') }}</p>
      <input
        @change="updateMinutes"
        class="minutes"
        type="number"
        min="0"
        value="5"
      />
      :
      <input
        @change="updateSeconds"
        class="seconds"
        type="number"
        min="0"
        max="59"
        value="00"
      />
      <br />
      <button class="toggle-timer" @click="toggleTimer">Start Timer</button>
      <br />
      <button @click="resetTimer">Reset Timer</button>
      <br />
    </div>
    <a class="toggle-timer-visible" @click="toggleVisible">Hide</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Timer',
  data() {
    return {
      minutes: 5,
      seconds: 0,
      ticking: false,
      show: true,
    }
  },
  methods: {
    toggleTimer(event: Event) {
      const target = event.target as HTMLButtonElement

      if (this.ticking) target.innerText = 'Start Timer'
      else target.innerText = 'Stop Timer'

      this.ticking = !this.ticking
    },
    resetTimer() {
      const minutes = document.querySelector('.minutes') as HTMLInputElement
      const seconds = document.querySelector('.seconds') as HTMLInputElement
      const toggle = document.querySelector(
        '.toggle-timer'
      ) as HTMLButtonElement

      this.ticking = false
      this.minutes = parseInt(minutes.value)
      this.seconds = parseInt(seconds.value)
      toggle.innerText = 'Start Timer'
    },
    updateMinutes(event: Event) {
      const target = event.target as HTMLInputElement
      const minutes = parseInt(target.value)
      this.minutes = minutes > 0 ? minutes : 0
    },
    updateSeconds(event: Event) {
      const target = event.target as HTMLInputElement
      const seconds = parseInt(target.value)
      if (seconds < 59 && seconds > 0) this.seconds = seconds
      else {
        this.seconds = 0
        target.value = '00'
      }
      // Make seconds 2-digit
      target.value = target.value.padStart(2, '0')
    },
    toggleVisible(event: Event) {
      const target = event.target as HTMLSpanElement
      target.innerText = this.show ? 'Show' : 'Hide'
      this.show = !this.show
    },
  },
  mounted() {
    setInterval(() => {
      if (this.ticking)
        if (this.seconds > 0) this.seconds--
        else {
          if (this.minutes > 0) {
            this.seconds = 59
            this.minutes--
          } else {
            const toggle = document.querySelector(
              '.toggle-timer'
            ) as HTMLButtonElement
            toggle.click()
          }
        }
    }, 1000)
  },
})
</script>

<style scoped>
a:hover {
  cursor: pointer;
}

.timer {
  font-size: 5rem;
  margin: 0;
}

div:not(.container) {
  margin-bottom: 0.75rem;
}

button {
  background-color: #fcecdd;
  border: none;
  padding: 1rem;
  margin: 1px;
  font-size: 1.125rem;
  border-radius: 5px;
  width: 75%;
}

input {
  width: 2rem;
  padding: 10px;
  margin: 1px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

input.minutes {
  text-align: right;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

@media (min-width: 1001px) {
  div.container {
    width: 15%;
    text-align: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #141a1f;
  }
}

div.container {
  text-align: center;
  margin: auto;
}
</style>
