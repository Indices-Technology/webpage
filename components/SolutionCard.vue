<template>
  <NuxtLink
    :to="sector.path"
    class="group relative flex flex-col bg-white dark:bg-slate-800/70 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Colored accent bar at top -->
    <div class="h-0.5 w-full shrink-0" :class="sector.accentBg"></div>

    <div class="p-5 sm:p-6 flex flex-col flex-1">
      <!-- Icon + index -->
      <div class="flex items-start justify-between mb-5">
        <div
          :class="[
            'w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110',
            sector.iconBg
          ]"
        >
          {{ sector.icon }}
        </div>
        <span class="text-xs font-black text-slate-200 dark:text-slate-700 tracking-wider select-none tabular-nums">
          {{ sector.index }}
        </span>
      </div>

      <!-- Name + description -->
      <div class="flex-1 mb-4 space-y-2">
        <h3 class="text-base sm:text-[17px] font-black text-slate-900 dark:text-white leading-snug">
          {{ sector.name }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {{ sector.desc }}
        </p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mb-5">
        <span
          v-for="tag in sector.tags"
          :key="tag"
          class="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-slate-50 dark:bg-slate-700/60 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700/80"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA row -->
      <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <span :class="['text-xs font-bold', sector.arrowColor]">Explore</span>
        <span :class="['text-sm font-bold transition-transform duration-200 group-hover:translate-x-1', sector.arrowColor]">→</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  sector: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        value.name &&
        value.icon &&
        value.path &&
        value.desc &&
        value.tags &&
        value.borderColor &&
        value.accentBg &&
        value.iconBg &&
        value.arrowColor &&
        value.index
      )
    }
  }
})
</script>
