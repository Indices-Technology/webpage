<template>
  <div class="min-h-screen bg-slate-50">

    <main class="overflow-x-hidden">
      <SectionHero 
        :slides="slides" 
        :current-slide="currentSlide"
        @prev="prevSlide"
        @next="nextSlide"
        @goto="goToSlide"
      />

      <!-- Trust Bar -->
      <section class="bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <span class="text-xs font-bold text-slate-600 tracking-wide">ENTERPRISE GRADE</span>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span>ISO 27001 Certified</span>
              <span class="hidden sm:inline text-slate-300">•</span>
              <span>SOC 2 Type II</span>
              <span class="hidden sm:inline text-slate-300">•</span>
              <span>GDPR Compliant</span>
            </div>
            <div class="text-xs text-slate-400">Trusted by 10+ Organizations</div>
          </div>
        </div>
      </section>

      <!-- Solution Matrix Section -->
      <section class="py-16 sm:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="mb-12 sm:mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">Our Solutions</span>
            </div>
            
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
              <div class="max-w-2xl">
                <h2 class="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1]">
                  Integrated Infrastructure for <span class="text-blue-600">Industrial Africa</span>
                </h2>
                <p class="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Seven operational verticals working in concert to deliver comprehensive solutions across technology, agriculture, logistics, and beyond.
                </p>
              </div>
              
              <NuxtLink to="/tech/axioms" 
                class="group inline-flex items-center gap-3 text-blue-600 font-bold hover:gap-4 transition-all self-start lg:self-auto">
                <span class="relative text-sm sm:text-base">
                  Powered by Axioms AI
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Matrix Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <SolutionCard 
              v-for="sector in matrix" 
              :key="sector.path"
              :sector="sector"
            />
          </div>

          <!-- Additional Arms Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <SolutionCard 
              v-for="arm in additionalArms" 
              :key="arm.path"
              :sector="arm"
            />
          </div>
        </div>
      </section>

      <!-- Integration Section -->
      <section class="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
                <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">Integration</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight">
                One Ecosystem.<br/>Infinite Possibilities.
              </h2>
              
              <p class="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Our vertically integrated model ensures seamless collaboration across all seven operational arms, creating synergies that drive exponential value for our partners and stakeholders.
              </p>

              <div class="space-y-3 sm:space-y-4">
                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    🔄
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Cross-Vertical Synergy</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Resources and expertise flow freely between all operational arms.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Rapid Deployment</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Leverage existing infrastructure to launch initiatives at scale.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-100 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Data-Driven Intelligence</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Axioms AI provides unified analytics across all operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative order-first lg:order-last">
              <!-- Integration Diagram -->
              <div class="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-slate-200">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDAwMCwwLDAsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-50"></div>
                
                <!-- Center Hub -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <div class="text-2xl sm:text-4xl mb-1 sm:mb-2">🧠</div>
                    <div class="text-white font-bold text-[10px] sm:text-xs">Axioms AI</div>
                  </div>
                </div>

                <!-- Orbiting Elements -->
                <div class="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float">
                  <div class="text-xl sm:text-2xl">⚙️</div>
                </div>
                <div class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
                  <div class="text-xl sm:text-2xl">🌾</div>
                </div>
                <div class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float">
                  <div class="text-xl sm:text-2xl">🚚</div>
                </div>
                <div class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
                  <div class="text-xl sm:text-2xl">💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 sm:py-20 lg:py-24 bg-slate-900 px-4 sm:px-6 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div class="max-w-4xl mx-auto text-center relative z-10">
          <h2 class="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6">Ready to Transform Your Operations?</h2>
          <p class="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Partner with Indices Technology to unlock integrated solutions tailored for Africa's industrial future.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 hover:shadow-blue-500/40">
              <span>Schedule Consultation</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button class="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              <span>Download Overview</span>
            </button>
          </div>

          <div class="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
            <div>
              <div class="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">₦2B+</div>
              <div class="text-xs sm:text-sm text-slate-400">Target Revenue</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">7</div>
              <div class="text-xs sm:text-sm text-slate-400">Verticals</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">100%</div>
              <div class="text-xs sm:text-sm text-slate-400">African Owned</div>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const slides = [
  {
    sector: 'Industrial Technology & AI',
    title: 'Precision in Every Gear.',
    story: 'From autonomous mining sites to robotic fabrication, Axioms AI powers the heartbeat of African industry with intelligent automation and renewable energy systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    link: '/tech',
    stat1: { value: '10K+', label: 'Automated Tasks' },
    stat2: { value: '45%', label: 'Cost Reduction' },
    stat3: { value: '24/7', label: 'Monitoring' }
  },
  {
    sector: 'Agribusiness & Export',
    title: 'Securing the Harvest.',
    story: 'We connect precision farming with global export corridors, ensuring every seed reaches its highest market value through integrated biotechnology and logistics.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2070',
    link: '/agriculture',
    stat1: { value: '500K+', label: 'Hectares' },
    stat2: { value: '30+', label: 'Countries' },
    stat3: { value: '60%', label: 'Yield Increase' }
  },
  {
    sector: 'Logistics & Supply Chain',
    title: 'Africa Without Borders.',
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
    icon: '⚙️', 
    path: '/tech', 
    desc: 'Advanced robotics, mining automation, and renewable energy infrastructure.',
    tags: ['Mining', 'Robotics', 'Solar'],
    borderColor: 'border-blue-100 hover:border-blue-500',
    iconBg: 'bg-blue-50 text-blue-600',
    arrowColor: 'text-blue-600',
    index: '01'
  },
  { 
    name: 'Agribusiness', 
    icon: '🌾', 
    path: '/agriculture', 
    desc: 'End-to-end food value chain from precision farming to global markets.',
    tags: ['Livestock', 'Export', 'Biotech'],
    borderColor: 'border-orange-100 hover:border-orange-500',
    iconBg: 'bg-orange-50 text-orange-600',
    arrowColor: 'text-orange-600',
    index: '02'
  },
  { 
    name: 'Logistics', 
    icon: '🚚', 
    path: '/logistics', 
    desc: 'Automated cold chain networks and intelligent cross-border trade.',
    tags: ['Fleet', 'Cold Chain', 'Customs'],
    borderColor: 'border-red-100 hover:border-red-500',
    iconBg: 'bg-red-50 text-red-600',
    arrowColor: 'text-red-600',
    index: '03'
  },
  { 
    name: 'Software & Digital', 
    icon: '💻', 
    path: '/tech/axioms', 
    desc: 'Enterprise AI, FinTech platforms, and social commerce solutions.',
    tags: ['Axioms AI', 'styleX', 'FinTech'],
    borderColor: 'border-purple-100 hover:border-purple-500',
    iconBg: 'bg-purple-50 text-purple-600',
    arrowColor: 'text-purple-600',
    index: '04'
  }
]

const additionalArms = [
  { 
    name: 'Education & Training', 
    icon: '📚', 
    path: '/education', 
    desc: 'Vocational training and professional certification programs.',
    tags: ['Technical', 'Vocational', 'Certification'],
    borderColor: 'border-indigo-100 hover:border-indigo-500',
    iconBg: 'bg-indigo-50 text-indigo-600',
    arrowColor: 'text-indigo-600',
    index: '05'
  },
  { 
    name: 'Security Services', 
    icon: '🛡️', 
    path: '/security', 
    desc: 'Comprehensive cybersecurity and physical protection systems.',
    tags: ['Cyber', 'Physical', 'Defense'],
    borderColor: 'border-slate-200 hover:border-slate-500',
    iconBg: 'bg-slate-100 text-slate-700',
    arrowColor: 'text-slate-700',
    index: '06'
  },
  { 
    name: 'Outreach & Impact', 
    icon: '🤝', 
    path: '/outreach', 
    desc: 'Strategic philanthropy and community development initiatives.',
    tags: ['Community', 'Grants', 'Impact'],
    borderColor: 'border-emerald-100 hover:border-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-600',
    arrowColor: 'text-emerald-600',
    index: '07'
  }
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

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite 1s;
}
</style>