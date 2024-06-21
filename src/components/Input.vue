<script setup lang="ts">
import { inject } from 'vue'

const { input, updateInput } = inject('searchInput')
</script>

<template>
  {{ console.log('update Input.vue') }}
  <input class="" @input="updateInput(($event.target as HTMLInputElement).value)" />
  <div>
    Input: {{ input }}
  </div>
</template>