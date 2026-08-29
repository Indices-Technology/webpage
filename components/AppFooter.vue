<template>
  <footer class="bg-ink dark:bg-slate-950 text-white border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="py-16 grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

        <!-- Brand -->
        <div class="col-span-2 lg:col-span-5">
          <div class="text-lg font-semibold tracking-[-0.03em] mb-4">
            INDICES<span class="text-brand-500">.</span>
            <span class="font-mono text-[10px] tracking-label text-slate-500 uppercase ml-2">Technology LTD</span>
          </div>
          <p class="text-slate-400 mb-8 leading-relaxed max-w-sm text-sm">
            Vertically integrated solutions for economic transformation across Africa.
            Seven operational arms, one unified vision.
          </p>

          <div class="mb-8 space-y-2 text-sm">
            <p class="font-mono text-xs text-slate-500">RC7529506 · Nigeria Startup Act Label</p>
            <p class="text-slate-400 leading-relaxed">
              1, Zion International School Plaza, Agingi,<br/>Jebba-Bassa, Plateau State, Nigeria
            </p>
            <a href="tel:+2348066838217" class="text-slate-300 hover:text-white transition-colors block">+234 806 683 8217</a>
            <a href="mailto:contactindices@gmail.com" class="text-slate-300 hover:text-white transition-colors block">contactindices@gmail.com</a>
          </div>

          <a href="https://www.linkedin.com/company/110836287" target="_blank" rel="noopener"
            class="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Indices Technology on LinkedIn">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
            </svg>
          </a>
        </div>

        <!-- Link columns -->
        <div v-for="col in columns" :key="col.heading" class="lg:col-span-2">
          <p class="label !text-slate-500 mb-5">{{ col.heading }}</p>
          <ul class="space-y-3 text-sm">
            <li v-for="link in col.links" :key="link.label">
              <component
                :is="link.external ? 'a' : resolveComponent('NuxtLink')"
                v-bind="link.external
                  ? { href: link.to, target: '_blank', rel: 'noopener' }
                  : { to: link.to }"
                class="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                {{ link.label }}
                <Icon v-if="link.external" name="lucide:arrow-up-right" class="w-3 h-3" />
              </component>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/5 py-6">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p class="text-slate-500">© {{ currentYear }} Indices Technology LTD</p>
          <div class="flex flex-wrap justify-center gap-6 text-slate-500">
            <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, resolveComponent } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const columns = [
  {
    heading: 'Products',
    links: [
      { label: 'marketx', to: 'https://marketx.africa', external: true },
      { label: 'Dasah', to: '/tech/axioms#architecture' },
      { label: 'Axioms', to: '/tech/axioms' },
    ],
  },
  {
    heading: 'Ecosystem',
    links: [
      { label: 'Industrial Technology', to: '/tech' },
      { label: 'Agribusiness', to: '/agriculture' },
      { label: 'Logistics', to: '/logistics' },
      { label: 'Security Services', to: '/security' },
      { label: 'Education & Training', to: '/education' },
      { label: 'Outreach & Impact', to: '/outreach' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Services', to: '/services' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]
</script>
