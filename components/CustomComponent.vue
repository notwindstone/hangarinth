<script setup lang="ts">
import { ref, provide } from 'vue'
import Search from "~/components/Search.vue";

const input = ref('')

function updateInput(message: string) {
  input.value = message;
}

provide('searchInput', {
  input,
  updateInput,
})
</script>

<template>
  {{ console.log('update CustomComponent.vue', input) }}
  <span class="bg-amber">
    <slot />
    <Search />
  </span>
</template>