<template>
  <div class="min-h-screen bg-white dark:bg-slate-950">

    <main class="overflow-x-hidden">
      <SectionHero
        :slides="slides"
        :current-slide="currentSlide"
        @prev="prevSlide"
        @next="nextSlide"
        @goto="goToSlide"
      />

      <!-- Trust Bar -->
      <section class="border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p class="label">Indices Technology LTD</p>
            <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-ink-muted dark:text-slate-400">
              <span>Registered in Nigeria — RC7529506</span>
              <span>Nigeria Startup Act Label</span>
              <span>Trusted by 10+ organisations</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions -->
      <section class="py-20 lg:py-28 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div class="lg:col-span-7">
              <p class="label mb-5">Our solutions</p>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl mb-5 leading-[1.1] text-ink dark:text-white">
                Integrated infrastructure for industrial Africa
              </h2>
              <p class="text-lg text-ink-muted dark:text-slate-400 leading-relaxed max-w-prose">
                Seven operational verticals working in concert across technology, agriculture,
                logistics, security, education and outreach.
              </p>
            </div>

            <div class="lg:col-span-5 lg:text-right">
              <NuxtLink to="/tech/axioms"
                class="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                <span class="border-b border-brand-600/30 group-hover:border-brand-600 transition-colors pb-0.5">
                  Built on Axioms infrastructure
                </span>
                <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </NuxtLink>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SolutionCard v-for="sector in [...matrix, ...additionalArms]" :key="sector.path" :sector="sector" />
          </div>
        </div>
      </section>

      <!-- Integration -->
      <section class="py-20 lg:py-28 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div class="lg:col-span-5">
            <p class="label mb-5">Integration</p>
            <h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] mb-5 leading-[1.1] text-ink dark:text-white">
              One ecosystem, not seven companies
            </h2>
            <p class="text-lg text-ink-muted dark:text-slate-400 mb-10 leading-relaxed max-w-prose">
              Each arm runs on shared infrastructure, so capability built for one becomes
              available to the rest.
            </p>

            <dl class="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
              <div v-for="item in integrationPoints" :key="item.title" class="flex gap-5 py-5">
                <Icon :name="item.icon" class="w-5 h-5 mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
                <div>
                  <dt class="font-semibold text-ink dark:text-white mb-1">{{ item.title }}</dt>
                  <dd class="text-sm text-ink-muted dark:text-slate-400 leading-relaxed">{{ item.desc }}</dd>
                </div>
              </div>
            </dl>
          </div>

          <!-- Hub diagram -->
          <div class="lg:col-span-7">
            <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12">
              <p class="label mb-8">Seven arms · one core</p>

              <svg viewBox="0 0 400 400" class="w-full max-w-md mx-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="145" class="stroke-slate-200 dark:stroke-slate-800" stroke-width="1"/>

                <g class="stroke-slate-300 dark:stroke-slate-700" stroke-width="1">
                  <line x1="200" y1="200" x2="200" y2="55"/>
                  <line x1="200" y1="200" x2="313" y2="109"/>
                  <line x1="200" y1="200" x2="341" y2="232"/>
                  <line x1="200" y1="200" x2="263" y2="331"/>
                  <line x1="200" y1="200" x2="137" y2="331"/>
                  <line x1="200" y1="200" x2="59" y2="232"/>
                  <line x1="200" y1="200" x2="87" y2="109"/>
                </g>

                <circle cx="200" cy="200" r="34" fill="#1f43e0"/>
                <text x="200" y="197" text-anchor="middle" fill="white" font-size="9" font-weight="600" font-family="IBM Plex Sans, sans-serif" letter-spacing="0.5">AXIOMS</text>
                <text x="200" y="209" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="6.5" font-family="IBM Plex Mono, monospace" letter-spacing="0.5">CORE</text>

                <g class="fill-white dark:fill-slate-950 stroke-slate-300 dark:stroke-slate-700" stroke-width="1">
                  <circle cx="200" cy="55"  r="27"/>
                  <circle cx="313" cy="109" r="27"/>
                  <circle cx="341" cy="232" r="27"/>
                  <circle cx="263" cy="331" r="27"/>
                  <circle cx="137" cy="331" r="27"/>
                  <circle cx="59"  cy="232" r="27"/>
                  <circle cx="87"  cy="109" r="27"/>
                </g>

                <g class="fill-slate-400 dark:fill-slate-600" font-size="7" font-family="IBM Plex Mono, monospace" text-anchor="middle">
                  <text x="200" y="52">01</text>
                  <text x="313" y="106">02</text>
                  <text x="341" y="229">03</text>
                  <text x="263" y="328">04</text>
                  <text x="137" y="328">05</text>
                  <text x="59"  y="229">06</text>
                  <text x="87"  y="106">07</text>
                </g>
                <g class="fill-ink dark:fill-slate-300" font-size="7.5" font-weight="500" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">
                  <text x="200" y="64">TECH</text>
                  <text x="313" y="118">AGRI</text>
                  <text x="341" y="241">LOGI</text>
                  <text x="263" y="340">SEC</text>
                  <text x="137" y="340">EDU</text>
                  <text x="59"  y="241">OTR</text>
                  <text x="87"  y="118">DEV</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-ink dark:bg-slate-900 px-4 sm:px-6 py-20 lg:py-28">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div class="lg:col-span-7">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-[1.1]">
                Let's talk about what you need built
              </h2>
              <p class="text-lg text-slate-400 leading-relaxed max-w-prose">
                Tell us the problem and we'll tell you honestly whether we're the right people to solve it.
              </p>
            </div>
            <div class="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <NuxtLink to="/contact" class="btn-primary">
                Start a conversation
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
              <NuxtLink to="/services" class="btn-ghost-dark">What we do</NuxtLink>
            </div>
          </div>

          <dl class="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10">
            <div v-for="stat in stats" :key="stat.label">
              <dt class="text-2xl sm:text-3xl font-semibold text-white mb-1.5 tabular-nums">{{ stat.value }}</dt>
              <dd class="label !text-slate-500">{{ stat.label }}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'Seven Arms, One Vision',
  ogTitle: 'Indices Technology LTD — Seven Arms, One Vision',
  description: 'A vertically integrated technology group operating across Industrial Tech, Agribusiness, Logistics, Security, Education, Outreach, and Software — powered by Axioms AI.',
  ogDescription: 'Seven operational arms. One integrated ecosystem. Powered by Axioms AI.',
  ogUrl: 'https://indicestech.com',
})

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const slides = [
  {
    sector: 'Industrial Technology & AI',
    title: 'Precision in every gear',
    story: 'From autonomous mining sites to robotic fabrication, Axioms powers the heartbeat of African industry with intelligent automation and renewable energy systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    link: '/tech',
    stat1: { value: '10K+', label: 'Automated Tasks' },
    stat2: { value: '45%', label: 'Cost Reduction' },
    stat3: { value: '24/7', label: 'Monitoring' }
  },
  {
    sector: 'Agribusiness & Export',
    title: 'Securing the harvest',
    story: 'We connect precision farming with global export corridors, ensuring every seed reaches its highest market value through integrated biotechnology and logistics.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2070',
    link: '/agriculture',
    stat1: { value: '500K+', label: 'Hectares' },
    stat2: { value: '30+', label: 'Countries' },
    stat3: { value: '60%', label: 'Yield Increase' }
  },
  {
    sector: 'Logistics & Supply Chain',
    title: 'Africa without borders',
    story: 'Automated cold chains and intelligent fleet management, moving commodities across the continent in record time with real-time tracking and optimization.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
    link: '/logistics',
    stat1: { value: '48hr', label: 'Cross-Border' },
    stat2: { value: '99.8%', label: 'On-Time Rate' },
    stat3: { value: '15', label: 'African States' }
  }
]

const matrix = [
  {
    name: 'Industrial Technology',
    icon: 'lucide:cog',
    accent: 'text-brand-600 dark:text-brand-400',
    path: '/tech',
    desc: 'Advanced robotics, mining automation, and renewable energy infrastructure.',
    tags: ['Mining', 'Robotics', 'Solar'],
    index: '01'
  },
  {
    name: 'Agribusiness',
    icon: 'lucide:wheat',
    accent: 'text-amber-600 dark:text-amber-500',
    path: '/agriculture',
    desc: 'End-to-end food value chain from precision farming to global markets.',
    tags: ['Livestock', 'Export', 'Biotech'],
    index: '02'
  },
  {
    name: 'Logistics',
    icon: 'lucide:truck',
    accent: 'text-red-600 dark:text-red-500',
    path: '/logistics',
    desc: 'Automated cold chain networks and intelligent cross-border trade.',
    tags: ['Fleet', 'Cold Chain', 'Customs'],
    index: '03'
  },
  {
    name: 'Software & Digital',
    icon: 'lucide:code',
    accent: 'text-violet-600 dark:text-violet-400',
    path: '/tech/axioms',
    desc: 'Enterprise AI, FinTech platforms, and social commerce solutions.',
    tags: ['Axioms', 'marketx', 'FinTech'],
    index: '04'
  }
]

const additionalArms = [
  {
    name: 'Education & Training',
    icon: 'lucide:graduation-cap',
    accent: 'text-indigo-600 dark:text-indigo-400',
    path: '/education',
    desc: 'Vocational training and professional certification programs.',
    tags: ['Technical', 'Vocational', 'Certification'],
    index: '05'
  },
  {
    name: 'Security Services',
    icon: 'lucide:shield',
    accent: 'text-slate-600 dark:text-slate-400',
    path: '/security',
    desc: 'Comprehensive cybersecurity and physical protection systems.',
    tags: ['Cyber', 'Physical', 'Defense'],
    index: '06'
  },
  {
    name: 'Outreach & Impact',
    icon: 'lucide:handshake',
    accent: 'text-emerald-600 dark:text-emerald-500',
    path: '/outreach',
    desc: 'Strategic philanthropy and community development initiatives.',
    tags: ['Community', 'Grants', 'Impact'],
    index: '07'
  },
  {
    name: 'Development Services',
    icon: 'lucide:wrench',
    accent: 'text-brand-600 dark:text-brand-400',
    path: '/services',
    desc: 'End-to-end digital systems — e-commerce, AI insights, logistics tools, and custom builds.',
    tags: ['E-commerce', 'AI', 'Custom Builds'],
    index: '08'
  }
]

const integrationPoints = [
  {
    title: 'Cross-vertical capability',
    icon: 'lucide:git-merge',
    desc: 'Resources and engineering built for one arm are reused by the others rather than rebuilt.'
  },
  {
    title: 'Faster deployment',
    icon: 'lucide:zap',
    desc: 'New initiatives launch on infrastructure that already exists, tested by real operations.'
  },
  {
    title: 'Shared intelligence',
    icon: 'lucide:activity',
    desc: 'Axioms provides one analytics and interaction layer across every operation.'
  }
]

const stats = [
  { value: '₦2B+', label: 'Target revenue' },
  { value: '7', label: 'Verticals' },
  { value: '100%', label: 'African owned' }
]

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
  resetAutoplay()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetAutoplay()
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
  startAutoplay()
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 8000)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})
</script>
