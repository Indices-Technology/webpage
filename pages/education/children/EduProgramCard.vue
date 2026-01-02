<template>
  <div class="group relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-600/10">
    <!-- Icon -->
    <div class="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-3xl mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-600">
      <span class="group-hover:scale-110 transition-transform">{{ program.icon }}</span>
    </div>
    
    <!-- Content -->
    <div class="space-y-3 mb-6">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-xl font-black text-slate-900 leading-tight">
          {{ program.title }}
        </h3>
        <div class="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 text-xl">
          →
        </div>
      </div>
      
      <p class="text-sm text-slate-600 leading-relaxed">
        {{ program.description }}
      </p>
    </div>
    
    <!-- Focus Badge -->
    <div class="mb-4">
      <span class="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-200">
        <span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
        {{ program.focus }}
      </span>
    </div>

    <!-- Program Details -->
    <div v-if="program.duration || program.certification" class="flex flex-wrap gap-3 mb-4">
      <span v-if="program.duration" class="inline-flex items-center gap-1.5 text-xs text-slate-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ program.duration }}
      </span>
      <span v-if="program.certification" class="inline-flex items-center gap-1.5 text-xs text-slate-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        {{ program.certification }}
      </span>
    </div>

    <!-- Tags -->
    <div v-if="program.tags" class="flex flex-wrap gap-2">
      <span 
        v-for="tag in program.tags" 
        :key="tag" 
        class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 rounded-md text-slate-500 border border-slate-100"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Hover Gradient Accent -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
  </div>
</template>

<script setup>
defineProps({
  program: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        value.title &&
        value.description &&
        value.icon &&
        value.focus
      )
    }
  }
})
</script>