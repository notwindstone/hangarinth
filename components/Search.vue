<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>

<template>
  <input :placeholder="counter">
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>