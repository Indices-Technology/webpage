<template>
  <footer class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Main Footer Content -->
      <div class="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold">
              I
            </div>
            <div class="text-xl font-black tracking-tighter">
              INDICES TECHNOLOGY LTD
            </div>
          </div>
          <p class="text-slate-400 mb-6 leading-relaxed max-w-md text-sm sm:text-base">
            Vertically integrated solutions for economic transformation across Africa. 
            Seven operational arms, one unified vision.
          </p>
          
          <!-- Social Links -->
          <div class="flex gap-3">
            <a 
              href="#" 
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a 
              href="#" 
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Twitter/X"
            >
              𝕏
            </a>
            <a 
              href="#" 
              class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm"
              aria-label="Instagram"
            >
              IG
            </a>
          </div>
        </div>
        
        <!-- Ecosystem Links -->
        <div>
          <h4 class="font-bold mb-4 text-sm tracking-wider uppercase">Ecosystem</h4>
          <ul class="space-y-3 text-slate-400 text-sm">
            <li>
              <NuxtLink to="/tech" class="hover:text-blue-400 transition-colors inline-block">
                Industrial Technology
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/agriculture" class="hover:text-orange-400 transition-colors inline-block">
                Agribusiness
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/logistics" class="hover:text-red-400 transition-colors inline-block">
                Logistics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/security" class="hover:text-slate-300 transition-colors inline-block">
                Security Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/education" class="hover:text-indigo-400 transition-colors inline-block">
                Education & Training
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/outreach" class="hover:text-emerald-400 transition-colors inline-block">
                Outreach & Impact
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Platforms & Resources -->
        <div>
          <h4 class="font-bold mb-4 text-sm tracking-wider uppercase">Platforms</h4>
          <ul class="space-y-3 text-slate-400 text-sm mb-8">
            <li>
              <NuxtLink to="/tech/axioms" class="hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Axioms AI
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/tech/styli" class="hover:text-pink-400 transition-colors inline-flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                Styli Commerce
              </NuxtLink>
            </li>
          </ul>

          <h4 class="font-bold mb-4 text-sm tracking-wider uppercase">Company</h4>
          <ul class="space-y-3 text-slate-400 text-sm">
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors inline-block">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors inline-block">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors inline-block">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors inline-block">
                Investor Portal
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-slate-800 py-6 sm:py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p class="text-slate-500 text-center sm:text-left">
            © {{ currentYear }} Indices Technology LTD. All rights reserved.
          </p>
          <div class="flex flex-wrap justify-center gap-6 text-slate-500">
            <a href="#" class="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" class="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" class="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>