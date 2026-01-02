<template>
  <div class="flex flex-col min-h-screen selection:bg-blue-100">
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />

    <div class="fixed bottom-6 right-6 z-40">
       <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Component logic for the layout
 * Can be used for global scroll listeners or theme management
 */
</script>

<style>
/* Smooth scrolling for anchor links (Strategy, Ecosystem, Impact) */
html {
  scroll-behavior: smooth;
}

/* Ensure footer stays at the bottom on short pages */
#__nuxt {
  height: 100%;
}
</style>