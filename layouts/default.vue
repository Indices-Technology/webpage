<template>
  <div class="flex flex-col min-h-screen selection:bg-blue-100 bg-white dark:bg-slate-950 transition-colors duration-300">
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
</script>

<style>
html {
  scroll-behavior: smooth;
}

#__nuxt {
  height: 100%;
}
</style>
