<template>
  <div>
    <NuxtPage />
    <NuxtRouteAnnouncer />
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/">Home</NuxtLink>
    <CustomComponent>
      This is really fast
    </CustomComponent>
    <button>
      123
    </button>
  </div>
</template>

<style>
@import '../node_modules/@unocss/reset/tailwind.css';
@import '../node_modules/@unocss/reset/normalize.css';
div {
  font-family: Inter, sans-serif;
}
</style>