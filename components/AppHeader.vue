<template>
  <nav class="fixed w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-900/5 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 lg:h-[72px] flex items-center justify-between gap-4">

      <!-- ── LOGO ── -->
      <NuxtLink to="/" class="flex items-center gap-2.5 sm:gap-3 group shrink-0">
        <!--
          Combined I/T mark — one shape, two readings:
          • Read with top bar + stem + bottom bar → I (INDICES)
          • Read with dominant blue crossbar + stem → T (TECHNOLOGY)
          7 blocks = 7 operational arms. No background.
          Top bar is all blue (T crossbar, dominant).
          Bottom bar is subtle navy (I base, secondary).
        -->

        <!-- Wordmark -->
        <div class="flex flex-col leading-none">
          <div class="text-lg sm:text-xl lg:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
            INDICES<span class="text-blue-600">.</span>
          </div>
          <div class="hidden sm:block text-[9px] lg:text-[10px] font-bold tracking-[0.18em] text-slate-400 dark:text-slate-500 uppercase mt-0.5">
            Technology LTD
          </div>
        </div>
      </NuxtLink>

      <!-- ── DESKTOP NAV ── -->
      <div class="hidden lg:flex items-center gap-8">
        <div class="flex items-center gap-5 border-r border-slate-200 dark:border-slate-700 pr-8">
          <NuxtLink to="/tech/axioms" class="group flex items-center gap-2 hover:-translate-y-px transition-all">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            <span class="text-[11px] font-black tracking-widest uppercase text-slate-600 dark:text-slate-300 group-hover:text-purple-600 transition-colors">Axioms AI</span>
          </NuxtLink>
          <a href="https://marketx.indicestech.com" target="_blank" rel="noopener" class="group flex items-center gap-2 hover:-translate-y-px transition-all">
            <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
            <span class="text-[11px] font-black tracking-widest uppercase text-slate-600 dark:text-slate-300 group-hover:text-pink-600 transition-colors">marketx ↗</span>
          </a>
        </div>
        <div class="flex gap-5 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">
          <NuxtLink to="/tech"        class="hover:text-blue-600   transition-colors">Industrial</NuxtLink>
          <NuxtLink to="/agriculture" class="hover:text-orange-600 transition-colors">Agri</NuxtLink>
          <NuxtLink to="/logistics"   class="hover:text-red-600    transition-colors">Logistics</NuxtLink>
          <NuxtLink to="/security"    class="hover:text-slate-900  transition-colors">Security</NuxtLink>
        </div>
      </div>

      <!-- ── RIGHT SIDE ── -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Theme toggle -->
        <button
          type="button"
          @click="toggle()"
          class="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun (shown in dark mode) -->
          <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>
          </svg>
          <!-- Moon (shown in light mode) -->
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
          </svg>
        </button>
        <NuxtLink to="/contact"
          class="inline-flex items-center gap-1.5 bg-blue-600 text-white rounded-full font-black uppercase tracking-wider hover:bg-blue-500 transition-all shadow-md shadow-blue-600/25 hover:scale-105 px-3 py-2 text-[10px] sm:px-4 sm:py-2.5 lg:px-5">
          <span class="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
          <span class="hidden sm:inline">Contact Us</span>
          <span class="sm:hidden">Contact</span>
        </NuxtLink>

        <!-- Hamburger — mobile & tablet only -->
        <button
          type="button"
          @click="mobileMenuOpen = true"
          class="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- ── MOBILE DRAWER — teleported to <body> to escape nav stacking context ── -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[200] flex justify-end lg:hidden">

        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="mobileMenuOpen = false"/>

        <!-- Slide-in panel -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="mobileMenuOpen"
            class="relative w-72 sm:w-80 max-w-[88vw] h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col overflow-hidden">

            <!-- Panel header -->
            <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <div class="flex items-center gap-2.5">
                <svg class="h-7 w-auto" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- I (navy) -->
                  <rect x="0"  y="0"  width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.20"/>
                  <rect x="8"  y="0"  width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.55"/>
                  <rect x="16" y="0"  width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.85"/>
                  <rect x="8"  y="8"  width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.65"/>
                  <rect x="8"  y="16" width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.65"/>
                  <rect x="0"  y="24" width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.20"/>
                  <rect x="8"  y="24" width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.55"/>
                  <rect x="16" y="24" width="6" height="6" rx="1.5" fill="#0f172a" opacity="0.85"/>
                  <!-- T (blue) -->
                  <rect x="24" y="0"  width="6" height="6" rx="1.5" fill="#2563eb"/>
                  <rect x="32" y="0"  width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.70"/>
                  <rect x="40" y="0"  width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.40"/>
                  <rect x="32" y="8"  width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.80"/>
                  <rect x="32" y="16" width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.80"/>
                </svg>
                <span class="text-base font-black tracking-tighter text-slate-900 dark:text-white">INDICES<span class="text-blue-600">.</span></span>
              </div>
              <button
                type="button"
                @click="mobileMenuOpen = false"
                class="flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Scrollable body -->
            <div class="flex-1 overflow-y-auto px-4 py-5 space-y-6">

              <div>
                <p class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-2 mb-2">Platforms</p>
                <NuxtLink to="/tech/axioms" @click="mobileMenuOpen = false"
                  class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 transition-colors">
                  <span class="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span>Axioms AI
                </NuxtLink>
                <a href="https://marketx.indicestech.com" target="_blank" rel="noopener" @click="mobileMenuOpen = false"
                  class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-700 transition-colors">
                  <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>marketx ↗
                </a>
              </div>

              <div>
                <p class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-2 mb-2">Seven Arms</p>
                <NuxtLink to="/tech"        @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20   hover:text-blue-700   transition-colors"><span class="text-base">⚙️</span> Industrial Technology</NuxtLink>
                <NuxtLink to="/agriculture" @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-700 transition-colors"><span class="text-base">🌾</span> Agribusiness</NuxtLink>
                <NuxtLink to="/logistics"   @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20    hover:text-red-700    transition-colors"><span class="text-base">🚚</span> Logistics</NuxtLink>
                <NuxtLink to="/security"    @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900  transition-colors"><span class="text-base">🛡️</span> Security Services</NuxtLink>
                <NuxtLink to="/education"   @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-700 transition-colors"><span class="text-base">📚</span> Education & Training</NuxtLink>
                <NuxtLink to="/outreach"    @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 transition-colors"><span class="text-base">🤝</span> Outreach & Impact</NuxtLink>
                <NuxtLink to="/services"    @click="mobileMenuOpen = false" class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20   hover:text-blue-700   transition-colors"><span class="text-base">🛠️</span> Dev Services</NuxtLink>
              </div>
            </div>

            <!-- Panel footer -->
            <div class="px-4 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 shrink-0">
              <NuxtLink to="/contact" @click="mobileMenuOpen = false"
                class="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-blue-500 transition-all">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
                Contact Us
              </NuxtLink>
              <p class="text-center text-[10px] text-slate-400 dark:text-slate-600">RC7529506 · Indices Technology LTD</p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
const { isDark, toggle } = useTheme()
</script>
