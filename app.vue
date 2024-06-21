<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/">Home</NuxtLink>
    <CustomComponent>
      This is really fast
    </CustomComponent>
    <Search />
    <button>
      123
    </button>
  </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';
@import '@unocss/reset/normalize.css';
</style>

<script setup lang="ts">
import Search from "~/components/Search.vue";
</script>