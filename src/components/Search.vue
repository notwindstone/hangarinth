<template>
  <input
      border="amber 1 solid"
      type="text"
      placeholder="Enter username"
      @input="onInput(($event.currentTarget as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import debounce from '@/composables/debounce'

const onInput = debounce((input) => {
  console.log(input)
}, 250)
</script>
