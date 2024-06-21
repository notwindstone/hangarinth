<script setup lang="ts">
const counter = useState('counter', () => '')
</script>

<template>
  <button
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      font="mono light"
      p="y-2 x-4"
      border="2 rounded-2xl blue-200"
  >
    134
  </button>
  <input class="" @input="counter = ($event.target as HTMLInputElement).value" />
  <div>
    Input: {{ counter }}
  </div>
</template>