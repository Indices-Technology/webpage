<template>
  <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
  <NuxtLink to="/" class="flex items-center gap-3 group">
    <!-- Stacked Containers Icon representing operational arms -->
    <div class="relative w-10 h-7">
      <!-- Container Stack - 5 lines for cleaner look -->
      <div class="absolute inset-0 flex flex-col justify-between">
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-600 transition-all duration-300"></div>
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-500 transition-all duration-300 delay-[75ms]"></div>
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-600 transition-all duration-300 delay-[150ms]"></div>
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-500 transition-all duration-300 delay-[225ms]"></div>
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-600 transition-all duration-300 delay-[250ms]"></div>
        <div class="h-[2.5px] w-full bg-slate-900 rounded-sm group-hover:bg-blue-600 transition-all duration-300 delay-[300ms]"></div>
      </div>
    </div>
    
    <!-- Text -->
    <div class="flex flex-col leading-none">
      <div class="text-2xl font-black tracking-tighter">
        INDICES<span class="text-blue-600">.</span>
      </div>
      <div class="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mt-0.5">
        Technology LTD
      </div>
    </div>
  </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <!-- Featured Platforms -->
        <div class="flex items-center gap-6 border-r border-slate-200 pr-10">
          <NuxtLink to="/tech/axioms" class="group flex items-center gap-2 hover:translate-y-[-2px] transition-all">
            <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span class="text-xs font-black tracking-widest uppercase hover:text-purple-600 transition-colors">
              Axioms AI
            </span>
          </NuxtLink>
          <NuxtLink to="https://stylex.indicestech.com/landing" class="group flex items-center gap-2 hover:translate-y-[-2px] transition-all">
            <span class="w-2 h-2 rounded-full bg-pink-500"></span>
            <span class="text-xs font-black tracking-widest uppercase hover:text-pink-600 transition-colors">
              StyleX
            </span>
          </NuxtLink>
        </div>
        
        <!-- Quick Links -->
        <div class="flex gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
          <NuxtLink to="/tech" class="hover:text-blue-600 transition-colors">
            Industrial
          </NuxtLink>
          <NuxtLink to="/agriculture" class="hover:text-orange-600 transition-colors">
            Agri
          </NuxtLink>
          <NuxtLink to="/logistics" class="hover:text-red-600 transition-colors">
            Logistics
          </NuxtLink>
          <NuxtLink to="/security" class="hover:text-slate-900 transition-colors">
            Security
          </NuxtLink>
        </div>
      </div>

      <!-- CTA Button -->
      <button class="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:scale-105">
        Partner Network
      </button>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen" 
        class="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            v-if="!mobileMenuOpen"
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 lg:hidden">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" 
          @click="mobileMenuOpen = false"
        />
        
        <!-- Menu Panel -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="mobileMenuOpen" class="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
            <div class="p-6">
              <!-- Close Button -->
              <button 
                @click="mobileMenuOpen = false" 
                class="absolute top-6 right-6 text-slate-400 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              
              <div class="mt-12 space-y-8">
                <!-- Platforms Section -->
                <div>
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Platforms
                  </p>
                  <div class="space-y-4">
                    <NuxtLink 
                      to="/tech/axioms" 
                      class="flex items-center gap-3 text-lg font-bold hover:text-purple-600 transition-colors"
                      @click="mobileMenuOpen = false"
                    >
                      <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                      Axioms AI
                    </NuxtLink>
                    <NuxtLink 
                      to="https://stylex.indicestech.com/landing" 
                      class="flex items-center gap-3 text-lg font-bold hover:text-pink-600 transition-colors"
                      @click="mobileMenuOpen = false"
                    >
                      <span class="w-2 h-2 rounded-full bg-pink-500"></span>
                      StyleX
                    </NuxtLink>
                  </div>
                </div>
                
                <!-- Solutions Section -->
                <div>
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Solutions
                  </p>
                  <div class="space-y-3">
                    <NuxtLink 
                      to="/tech" 
                      class="block text-slate-600 hover:text-blue-600 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Industrial Technology
                    </NuxtLink>
                    <NuxtLink 
                      to="/agriculture" 
                      class="block text-slate-600 hover:text-orange-600 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Agribusiness
                    </NuxtLink>
                    <NuxtLink 
                      to="/logistics" 
                      class="block text-slate-600 hover:text-red-600 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Logistics
                    </NuxtLink>
                    <NuxtLink 
                      to="/security" 
                      class="block text-slate-600 hover:text-slate-900 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Security Services
                    </NuxtLink>
                    <NuxtLink 
                      to="/education" 
                      class="block text-slate-600 hover:text-indigo-600 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Education & Training
                    </NuxtLink>
                    <NuxtLink 
                      to="/outreach" 
                      class="block text-slate-600 hover:text-emerald-600 transition-colors py-2"
                      @click="mobileMenuOpen = false"
                    >
                      Outreach & Impact
                    </NuxtLink>
                  </div>
                </div>

                <!-- CTA Button -->
                <button 
                  class="w-full bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg"
                  @click="mobileMenuOpen = false"
                >
                  Partner Network
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>