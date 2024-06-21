<script setup lang="ts">
const counter = useState('counter', () => '')
</script>

<template>
  <input class="b-rounded b-amber" @input="counter = ($event.target as HTMLInputElement).value" />
  <div>
    Input: {{ counter }}
  </div>
</template>