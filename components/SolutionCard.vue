<template>
  <NuxtLink 
    :to="sector.path"
    class="group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    :class="sector.borderColor"
  >
    <!-- Icon -->
    <div 
      :class="[
        'w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl mb-4 sm:mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
        sector.iconBg
      ]"
    >
      {{ sector.icon }}
    </div>
    
    <!-- Content -->
    <div class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
      <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-tight">
        {{ sector.name }}
      </h3>
      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {{ sector.desc }}
      </p>
    </div>
    
    <!-- Tags -->
    <div class="flex flex-wrap gap-2">
      <span 
        v-for="tag in sector.tags" 
        :key="tag" 
        class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 rounded-md text-slate-500 border border-slate-100"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Hover Arrow -->
    <div 
      class="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl sm:text-2xl" 
      :class="sector.arrowColor"
    >
      →
    </div>

    <!-- Top Right Badge -->
    <div class="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
        {{ sector.index }}
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
        value.iconBg &&
        value.arrowColor &&
        value.index
      )
    }
  }
})
</script>