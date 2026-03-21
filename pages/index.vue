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
      <section class="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <span class="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-wide">ENTERPRISE GRADE</span>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
              <span>ISO 27001 Certified</span>
              <span class="hidden sm:inline text-slate-300">•</span>
              <span>SOC 2 Type II</span>
              <span class="hidden sm:inline text-slate-300">•</span>
              <span>GDPR Compliant</span>
            </div>
            <div class="text-xs text-slate-400 dark:text-slate-500">Trusted by 10+ Organizations</div>
          </div>
        </div>
      </section>

      <!-- Solution Matrix Section -->
      <section class="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 transition-colors duration-300">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="mb-12 sm:mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">Our Solutions</span>
            </div>
            
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
              <div class="max-w-2xl">
                <h2 class="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] text-slate-900 dark:text-white">
                  Integrated Infrastructure for <span class="text-blue-600">Industrial Africa</span>
                </h2>
                <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
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
      <section class="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 transition-colors duration-300">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="h-px w-8 sm:w-12 bg-slate-300 dark:bg-slate-700"></span>
                <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">Integration</span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight text-slate-900 dark:text-white">
                One Ecosystem.<br/>Infinite Possibilities.
              </h2>

              <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                Our vertically integrated model ensures seamless collaboration across all seven operational arms, creating synergies that drive exponential value for our partners and stakeholders.
              </p>

              <div class="space-y-3 sm:space-y-4">
                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    🔄
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">Cross-Vertical Synergy</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Resources and expertise flow freely between all operational arms.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50/30 dark:hover:bg-green-900/10 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">Rapid Deployment</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Leverage existing infrastructure to launch initiatives at scale.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-800 hover:bg-purple-50/30 dark:hover:bg-purple-900/10 transition-all group">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">Data-Driven Intelligence</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Axioms AI provides unified analytics across all operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Hub diagram -->
            <div class="relative order-first lg:order-last">
              <div class="rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 overflow-hidden p-6 sm:p-10">
                <p class="text-[9px] font-black tracking-[0.25em] text-slate-500 uppercase mb-6 text-center">Seven Arms · One Core</p>

                <svg viewBox="0 0 400 400" class="w-full max-w-xs sm:max-w-sm mx-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Outer ring -->
                  <circle cx="200" cy="200" r="145" stroke="white" stroke-width="0.5" opacity="0.04"/>

                  <!-- Connection lines (dashed, colored per arm) -->
                  <line x1="200" y1="200" x2="200" y2="55" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="313" y2="109" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="341" y2="232" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="263" y2="331" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="137" y2="331" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="59" y2="232" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
                  <line x1="200" y1="200" x2="87" y2="109" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>

                  <!-- Center hub: concentric glow + solid core -->
                  <circle cx="200" cy="200" r="56" fill="#2563eb" fill-opacity="0.07"/>
                  <circle cx="200" cy="200" r="42" fill="#2563eb" fill-opacity="0.13"/>
                  <circle cx="200" cy="200" r="30" fill="#2563eb"/>

                  <!-- Center labels -->
                  <text x="200" y="197" text-anchor="middle" fill="white" font-size="8.5" font-weight="900" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1.5">AXIOMS</text>
                  <text x="200" y="211" text-anchor="middle" fill="rgba(147,197,253,0.75)" font-size="6.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">AI CORE</text>

                  <!-- Node 01: Industrial Tech (200, 55) - blue -->
                  <circle cx="200" cy="55" r="26" fill="#0f172a" stroke="#2563eb" stroke-width="1.5"/>
                  <text x="200" y="51" text-anchor="middle" fill="#2563eb" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">01</text>
                  <text x="200" y="63" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">TECH</text>

                  <!-- Node 02: Agribusiness (313, 109) - orange -->
                  <circle cx="313" cy="109" r="26" fill="#0f172a" stroke="#f97316" stroke-width="1.5"/>
                  <text x="313" y="105" text-anchor="middle" fill="#f97316" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">02</text>
                  <text x="313" y="117" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">AGRI</text>

                  <!-- Node 03: Logistics (341, 232) - red -->
                  <circle cx="341" cy="232" r="26" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
                  <text x="341" y="228" text-anchor="middle" fill="#ef4444" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">03</text>
                  <text x="341" y="240" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">LOGI</text>

                  <!-- Node 04: Security (263, 331) - slate -->
                  <circle cx="263" cy="331" r="26" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="263" y="327" text-anchor="middle" fill="#94a3b8" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">04</text>
                  <text x="263" y="339" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">SEC</text>

                  <!-- Node 05: Education (137, 331) - indigo -->
                  <circle cx="137" cy="331" r="26" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
                  <text x="137" y="327" text-anchor="middle" fill="#6366f1" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">05</text>
                  <text x="137" y="339" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">EDU</text>

                  <!-- Node 06: Outreach (59, 232) - emerald -->
                  <circle cx="59" cy="232" r="26" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
                  <text x="59" y="228" text-anchor="middle" fill="#10b981" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">06</text>
                  <text x="59" y="240" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">OTR</text>

                  <!-- Node 07: Software/Digital (87, 109) - purple -->
                  <circle cx="87" cy="109" r="26" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
                  <text x="87" y="105" text-anchor="middle" fill="#a855f7" font-size="8.5" font-weight="900" font-family="system-ui, sans-serif">07</text>
                  <text x="87" y="117" text-anchor="middle" fill="#64748b" font-size="6.5" font-weight="700" font-family="system-ui, sans-serif">DEV</text>
                </svg>

                <!-- Legend -->
                <div class="grid grid-cols-4 gap-x-3 gap-y-2 mt-6 pt-5 border-t border-slate-800 dark:border-slate-700">
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Tech</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>Agri</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>Logi</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>Sec</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>Edu</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>Otr</div>
                  <div class="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wide col-span-2"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>Dev Svc</div>
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
    accentBg: 'bg-blue-500',
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
    accentBg: 'bg-orange-500',
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
    accentBg: 'bg-red-500',
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
    accentBg: 'bg-purple-500',
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
    accentBg: 'bg-indigo-500',
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
    accentBg: 'bg-slate-400',
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
    accentBg: 'bg-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-600',
    arrowColor: 'text-emerald-600',
    index: '07'
  },
  {
    name: 'Development Services',
    icon: '🛠️',
    path: '/services',
    desc: 'End-to-end digital systems — e-commerce, AI insights, logistics tools, and custom builds.',
    tags: ['E-commerce', 'AI', 'Custom Builds'],
    borderColor: 'border-blue-100 hover:border-blue-500',
    accentBg: 'bg-blue-500',
    iconBg: 'bg-blue-50 text-blue-600',
    arrowColor: 'text-blue-600',
    index: '08'
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
</style>