<template>
  <section class="relative h-screen bg-slate-900 overflow-hidden mt-20">
    <!-- Slides -->
    <div 
      v-for="(slide, index) in slides" 
      :key="index" 
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="[currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0']"
    >
      <!-- Background Image with Ken Burns Effect -->
      <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s]"
        :style="{ 
          backgroundImage: `url(${slide.image})`, 
          transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)' 
        }"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/40"></div>
      </div>

      <!-- Content -->
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div class="max-w-3xl space-y-6 sm:space-y-8">
          <!-- Sector Badge -->
          <div class="flex items-center gap-3">
            <span class="h-px w-8 sm:w-12 bg-blue-500"></span>
            <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              {{ slide.sector }}
            </span>
          </div>
          
          <!-- Title -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
            {{ slide.title }}
          </h1>
          
          <!-- Story -->
          <p class="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
            {{ slide.story }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 sm:pt-6">
            <NuxtLink 
              :to="slide.link" 
              class="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span>Explore Solution</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </NuxtLink>
            <button class="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              <span>View Case Study</span>
            </button>
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
            <div>
              <div class="text-2xl sm:text-3xl font-black text-white mb-1">
                {{ slide.stat1.value }}
              </div>
              <div class="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                {{ slide.stat1.label }}
              </div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-white mb-1">
                {{ slide.stat2.value }}
              </div>
              <div class="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                {{ slide.stat2.label }}
              </div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-black text-white mb-1">
                {{ slide.stat3.value }}
              </div>
              <div class="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                {{ slide.stat3.label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows - Hidden on Mobile -->
      <button 
        @click="$emit('prev')"
        class="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button 
        @click="$emit('next')"
        class="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        →
      </button>
    </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
      <button 
        v-for="(slide, i) in slides" 
        :key="i" 
        @click="$emit('goto', i)"
        class="group relative h-1 transition-all duration-300 rounded-full"
        :class="currentSlide === i ? 'w-12 sm:w-16 bg-blue-500' : 'w-6 sm:w-8 bg-white/30 hover:bg-white/50'"
        :aria-label="`Go to slide ${i + 1}`"
      >
        <span 
          v-if="currentSlide === i" 
          class="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold whitespace-nowrap"
        >
          {{ slide.sector }}
        </span>
      </button>
    </div>

    <!-- Scroll Indicator - Hidden on Mobile -->
    <div class="hidden sm:flex absolute bottom-8 sm:bottom-12 right-8 sm:right-12 z-20 flex-col items-center gap-3 text-white/40">
      <span class="text-[10px] font-bold tracking-widest uppercase rotate-90 origin-center">
        Scroll
      </span>
      <div class="h-12 sm:h-16 w-px bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>

    <!-- Mobile Swipe Hint -->
    <div class="sm:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-white/40 text-xs">
      <span>←</span>
      <span class="font-bold">Swipe</span>
      <span>→</span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(slide => 
        slide.sector &&
        slide.title &&
        slide.story &&
        slide.image &&
        slide.link &&
        slide.stat1 &&
        slide.stat2 &&
        slide.stat3
      )
    }
  },
  currentSlide: {
    type: Number,
    required: true
  }
})

defineEmits(['prev', 'next', 'goto'])
</script>