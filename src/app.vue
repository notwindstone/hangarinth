<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<style>
@import '../node_modules/@unocss/reset/tailwind.css';
@import '../node_modules/@unocss/reset/normalize.css';
body {
  font-family: Inter, sans-serif;
}
</style>