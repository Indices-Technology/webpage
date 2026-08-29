<template>
  <NuxtLink :to="sector.path" class="card group flex flex-col p-6">
    <!-- Index + icon: the sector colour appears once, at small size, as a signal -->
    <div class="flex items-baseline justify-between mb-8">
      <span class="font-mono text-[11px] text-slate-400 dark:text-slate-600 tabular-nums">
        {{ sector.index }}
      </span>
      <Icon :name="sector.icon" :class="['w-5 h-5', sector.accent]" />
    </div>

    <h3 class="text-[15px] font-semibold text-ink dark:text-white mb-2 leading-snug">
      {{ sector.name }}
    </h3>
    <p class="text-sm text-ink-muted dark:text-slate-400 leading-relaxed flex-1">
      {{ sector.desc }}
    </p>

    <div class="flex flex-wrap gap-x-3 gap-y-1 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
      <span v-for="tag in sector.tags" :key="tag"
        class="font-mono text-[11px] text-slate-400 dark:text-slate-600">
        {{ tag }}
      </span>
    </div>

    <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-slate-200">
      Explore
      <Icon name="lucide:arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  sector: {
    type: Object,
    required: true,
    validator: (value) =>
      Boolean(value.name && value.icon && value.path && value.desc && value.tags && value.index),
  },
})
</script>
