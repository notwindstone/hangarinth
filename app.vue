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
  </div>
</template>

<script setup lang="ts">
import Search from "~/components/Search.vue";
</script>