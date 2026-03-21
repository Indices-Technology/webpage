<template>
  <div class="bg-slate-950 text-white min-h-screen font-sans antialiased">

    <!-- ── HERO ── -->
    <section class="relative pt-32 pb-24 px-5 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-100"></div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Indices Technology · Development Services
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.88] tracking-tighter uppercase">
          We Build<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 italic font-serif lowercase">Systems That Work.</span>
        </h1>

        <p class="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          From e-commerce to AI-powered analytics — we design, build, and deploy complete digital infrastructure for businesses across Africa.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="tel:+2348066838217"
            class="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-base shadow-2xl shadow-blue-600/30 hover:scale-105 hover:bg-blue-500 transition-all">
            Talk to us now
            <span>→</span>
          </a>
          <a href="#services"
            class="inline-flex items-center gap-3 border border-white/10 text-slate-300 px-10 py-5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all">
            Browse services ↓
          </a>
        </div>

        <!-- Quick trust bar -->
        <div class="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-white/5 mt-6">
          <div v-for="t in trust" :key="t.label" class="text-center">
            <p class="text-2xl font-black text-white">{{ t.value }}</p>
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{{ t.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAIN SERVICES ── -->
    <section id="services" class="py-24 px-5 border-t border-white/5">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-3">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">What We Build</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tighter uppercase">Core Services</h2>
          <p class="text-slate-400 font-light max-w-xl mx-auto">Eight specialised solutions — each delivering a concrete, measurable business outcome.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title"
            class="group relative p-7 rounded-3xl border border-white/5 bg-white/[0.03] hover:border-blue-500/40 hover:bg-white/[0.06] transition-all overflow-hidden flex flex-col">
            <!-- glow -->
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all -translate-y-1/2 translate-x-1/2"
              :class="service.glow"></div>

            <div class="relative flex-1 flex flex-col">
              <!-- icon + number -->
              <div class="flex items-start justify-between mb-5">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all"
                  :class="service.iconBg">
                  {{ service.icon }}
                </div>
                <span class="text-[10px] font-black text-slate-700 tracking-widest">{{ service.num }}</span>
              </div>

              <!-- badge -->
              <div class="inline-flex items-center self-start mb-4 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border"
                :class="service.badgeClass">
                {{ service.badge }}
              </div>

              <h3 class="text-base font-black text-white mb-2 leading-tight">{{ service.title }}</h3>
              <p class="text-xs text-slate-500 leading-relaxed mb-5 flex-1">{{ service.desc }}</p>

              <!-- deliverables -->
              <ul class="space-y-1.5 mb-5">
                <li v-for="item in service.includes" :key="item" class="flex items-start gap-2 text-[10px] text-slate-400">
                  <span class="mt-0.5 w-1 h-1 rounded-full shrink-0" :class="service.dot"></span>
                  {{ item }}
                </li>
              </ul>

              <!-- outcome -->
              <div class="mt-auto pt-4 border-t border-white/5">
                <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Outcome</p>
                <p class="text-[11px] font-bold" :class="service.outcomeColor">{{ service.outcome }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── QUICK SERVICES ── -->
    <section class="py-20 px-5 border-t border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div class="space-y-2">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Fast Delivery</p>
            <h2 class="text-3xl sm:text-4xl font-black tracking-tighter uppercase">Quick Services</h2>
            <p class="text-slate-400 text-sm font-light">Smaller fixes and integrations — delivered fast.</p>
          </div>
          <a href="tel:+2348066838217"
            class="shrink-0 inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-emerald-500 hover:scale-105 transition-all shadow-2xl shadow-emerald-600/20">
            Get a quick quote →
          </a>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="q in quickServices" :key="q.title"
            class="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all group">
            <div class="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
              {{ q.icon }}
            </div>
            <p class="text-sm font-bold text-slate-300">{{ q.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROCESS ── -->
    <section class="py-24 px-5 border-t border-white/5 bg-white/[0.01]">
      <div class="max-w-5xl mx-auto space-y-16">
        <div class="text-center space-y-3">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">How We Work</p>
          <h2 class="text-4xl font-black tracking-tighter uppercase">From Brief to Launch</h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="step in process" :key="step.step" class="relative text-center space-y-4 group">
            <div class="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-3xl border border-white/10 bg-white/5 group-hover:border-purple-500/40 group-hover:bg-purple-500/5 transition-all">
              {{ step.icon }}
            </div>
            <div class="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-black flex items-center justify-center mx-auto">
              {{ step.step }}
            </div>
            <h3 class="font-black text-white">{{ step.title }}</h3>
            <p class="text-xs text-slate-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-24 px-5 border-t border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none"></div>
      <div class="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        <h2 class="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none">
          Ready to Build<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-serif italic lowercase">Something great?</span>
        </h2>
        <p class="text-xl text-slate-400 font-light leading-relaxed">
          Tell us what you need. We'll scope it, price it, and deliver it — on time, on budget.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+2348066838217"
            class="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/30 hover:scale-105 hover:bg-blue-500 transition-all">
            📞 +234 806 683 8217
          </a>
          <NuxtLink to="/tech/axioms"
            class="inline-flex items-center justify-center gap-3 border border-white/10 text-slate-300 px-10 py-5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all">
            Explore AxiomsAI →
          </NuxtLink>
        </div>

        <p class="text-xs text-slate-600">Indices Technology LTD · RC7529506 · Plateau State, Nigeria</p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Services — Indices Technology LTD',
  meta: [{ name: 'description', content: 'Digital transformation services: e-commerce, AI analytics, business systems, logistics tools and more — built for African businesses.' }]
})

const trust = [
  { value: '8+', label: 'Service types' },
  { value: '48hr', label: 'Avg. first delivery' },
  { value: '100%', label: 'African-owned' },
  { value: 'RC7529506', label: 'Registered company' },
]

const services = [
  {
    num: '01', icon: '🚀', title: 'Business Digital Setup',
    badge: 'Start Online', badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-600 group-hover:text-white',
    glow: 'bg-blue-600/20', dot: 'bg-blue-500', outcomeColor: 'text-blue-400',
    desc: 'Get your business online and accepting payments within days — not months.',
    includes: ['Website or web app', 'Paystack payment integration', 'Product / service listings', 'Admin dashboard', 'Customer contact system'],
    outcome: 'Start selling online and receiving payments immediately.'
  },
  {
    num: '02', icon: '🛒', title: 'E-commerce + Mobile App',
    badge: 'Scale Sales', badgeClass: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    iconBg: 'bg-orange-500/10 group-hover:bg-orange-600 group-hover:text-white',
    glow: 'bg-orange-600/20', dot: 'bg-orange-500', outcomeColor: 'text-orange-400',
    desc: 'A full selling system — web, mobile, payments, and inventory all in one.',
    includes: ['E-commerce website', 'Android app (optional)', 'Payment gateway integration', 'Order & inventory management', 'Customer accounts'],
    outcome: 'Customers browse, order, and pay from anywhere.'
  },
  {
    num: '03', icon: '📊', title: 'Smart Business Management',
    badge: 'Operate Better', badgeClass: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    iconBg: 'bg-purple-500/10 group-hover:bg-purple-600 group-hover:text-white',
    glow: 'bg-purple-600/20', dot: 'bg-purple-500', outcomeColor: 'text-purple-400',
    desc: 'Replace spreadsheets and paper with a real management system tailored to your workflow.',
    includes: ['Invoice & billing system', 'Inventory tracking', 'Sales dashboard', 'Staff & user roles', 'Reports & analytics'],
    outcome: 'Track operations and make better business decisions.'
  },
  {
    num: '04', icon: '🤖', title: 'AI-Powered Business Insights',
    badge: 'Powered by AxiomsAI', badgeClass: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    iconBg: 'bg-pink-500/10 group-hover:bg-pink-600 group-hover:text-white',
    glow: 'bg-pink-600/20', dot: 'bg-pink-500', outcomeColor: 'text-pink-400',
    desc: 'Use AI to understand your customers, predict demand, and grow revenue intelligently.',
    includes: ['Sales & customer data analysis', 'Product recommendations', 'Customer behaviour insights', 'Predictive demand tools'],
    outcome: 'Know what to sell, when to sell, and who to target.'
  },
  {
    num: '05', icon: '💬', title: 'Smart Customer Engagement',
    badge: 'Automate CX', badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white',
    glow: 'bg-emerald-600/20', dot: 'bg-emerald-500', outcomeColor: 'text-emerald-400',
    desc: 'Automated chatbots and customer workflows so no enquiry ever goes unanswered.',
    includes: ['Web & messaging chatbots', 'Automated responses', 'Customer tracking system', 'Push notifications'],
    outcome: 'Respond faster and never miss a customer.'
  },
  {
    num: '06', icon: '🌐', title: 'Connectivity & Edge Systems',
    badge: 'Infrastructure', badgeClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    iconBg: 'bg-cyan-500/10 group-hover:bg-cyan-600 group-hover:text-white',
    glow: 'bg-cyan-600/20', dot: 'bg-cyan-500', outcomeColor: 'text-cyan-400',
    desc: 'Network and offline-first systems that keep your business running even with poor internet.',
    includes: ['Hotspot / MikroTik setup', 'Network optimisation', 'Offline-first architecture', 'Data sync on reconnect'],
    outcome: 'Your business runs smoothly regardless of connectivity.'
  },
  {
    num: '07', icon: '🚚', title: 'Logistics & Delivery System',
    badge: 'Track & Deliver', badgeClass: 'bg-red-500/10 border-red-500/20 text-red-400',
    iconBg: 'bg-red-500/10 group-hover:bg-red-600 group-hover:text-white',
    glow: 'bg-red-600/20', dot: 'bg-red-500', outcomeColor: 'text-red-400',
    desc: 'End-to-end delivery management — from dispatch to doorstep, fully trackable.',
    includes: ['Order tracking system', 'Sender → courier → receiver flow', 'Real-time status updates', 'Admin dispatch dashboard'],
    outcome: 'Manage every delivery without confusion or delays.'
  },
  {
    num: '08', icon: '🧩', title: 'Custom Business Solutions',
    badge: 'Tailored Build', badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-600 group-hover:text-white',
    glow: 'bg-amber-600/20', dot: 'bg-amber-500', outcomeColor: 'text-amber-400',
    desc: "If it doesn't fit a standard box, we design it from scratch around your exact workflow.",
    includes: ['Booking & scheduling systems', 'School management systems', 'Custom dashboards', 'Specialised business tools'],
    outcome: 'A solution built precisely for the way you work.'
  },
]

const quickServices = [
  { icon: '🔧', title: 'Fix website issues' },
  { icon: '💳', title: 'Integrate payment systems' },
  { icon: '🏪', title: 'Set up a simple online store' },
  { icon: '⚡', title: 'Improve website performance' },
  { icon: '🔐', title: 'Add user login & accounts' },
  { icon: '📩', title: 'Email & notification setup' },
  { icon: '📱', title: 'Make your site mobile-friendly' },
  { icon: '🗄️', title: 'Database setup & migration' },
]

const process = [
  { step: 1, icon: '📞', title: 'Discovery Call', desc: 'We listen to your needs and define the scope, timeline, and budget together.' },
  { step: 2, icon: '🗺️', title: 'Solution Design', desc: 'We map out the architecture and deliverables — no guesswork, just a clear plan.' },
  { step: 3, icon: '⚙️', title: 'Build & Test', desc: 'We build in sprints with regular demos so you always know progress.' },
  { step: 4, icon: '🚀', title: 'Launch & Support', desc: 'We deploy, hand over, and stay available for questions and updates.' },
]
</script>
