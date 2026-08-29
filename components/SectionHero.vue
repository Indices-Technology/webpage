<template>
  <section class="relative h-[86vh] min-h-[560px] bg-ink overflow-hidden mt-14 sm:mt-16 lg:mt-[72px]">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-700 ease-out"
      :class="[currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none']"
    >
      <!-- Background image. Single-direction scrim so type always has contrast. -->
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }">
        <div class="absolute inset-0 bg-ink/80 sm:bg-gradient-to-r sm:from-ink sm:via-ink/85 sm:to-ink/30"></div>
      </div>

      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div class="max-w-2xl">
          <p class="label !text-brand-400 mb-6">{{ slide.sector }}</p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-[-0.03em] mb-6">
            {{ slide.title }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
            {{ slide.story }}
          </p>

          <div class="flex flex-wrap gap-3 mb-12">
            <NuxtLink :to="slide.link" class="btn-primary">
              Explore this arm
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-ghost-dark">Talk to us</NuxtLink>
          </div>

          <dl class="grid grid-cols-3 gap-6 max-w-lg pt-8 border-t border-white/10">
            <div v-for="stat in [slide.stat1, slide.stat2, slide.stat3]" :key="stat.label">
              <dt class="text-xl sm:text-2xl font-semibold text-white mb-1 tabular-nums">{{ stat.value }}</dt>
              <dd class="label !text-slate-500">{{ stat.label }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Slide controls: one cluster, bottom-right, instead of arrows + dots + hints -->
    <div class="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 z-20 flex items-center gap-4">
      <div class="flex gap-1.5">
        <button
          v-for="(slide, i) in slides"
          :key="i"
          @click="$emit('goto', i)"
          class="h-1 rounded-full transition-all"
          :class="currentSlide === i ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/60'"
          :aria-label="`Go to slide ${i + 1}: ${slide.sector}`"
          :aria-current="currentSlide === i"
        />
      </div>
      <span class="font-mono text-[11px] text-white/50 tabular-nums">
        {{ String(currentSlide + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}
      </span>
      <div class="flex gap-1">
        <button @click="$emit('prev')" aria-label="Previous slide"
          class="w-8 h-8 rounded-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors">
          <Icon name="lucide:arrow-left" class="w-3.5 h-3.5" />
        </button>
        <button @click="$emit('next')" aria-label="Next slide"
          class="w-8 h-8 rounded-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors">
          <Icon name="lucide:arrow-right" class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(slide =>
        slide.sector && slide.title && slide.story && slide.image &&
        slide.link && slide.stat1 && slide.stat2 && slide.stat3
      )
  },
  currentSlide: { type: Number, required: true }
})

defineEmits(['prev', 'next', 'goto'])
</script>
