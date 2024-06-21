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
@import '@unocss/reset/tailwind.css';
@import '@unocss/reset/normalize.css';
div {
  font-family: Inter, sans-serif;
}
</style>