<template>
  <div class="min-h-screen bg-white font-sans antialiased selection:bg-brand/20">

    <!-- ── NAV ── -->
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
            <span class="text-white font-black text-sm italic">sX</span>
          </div>
          <span class="text-xl font-black tracking-tighter text-gray-900 uppercase">styleX<span class="text-brand">.</span></span>
        </div>

        <div class="hidden lg:flex items-center gap-8">
          <a href="#how" class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors">How it works</a>
          <a href="#features" class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors">Platform</a>
          <a href="#creators" class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors">For Creators</a>
          <a href="#sellers" class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand transition-colors">Sell on styleX</a>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://stylex.indicestech.com/login" class="text-xs font-bold text-gray-700 hover:text-brand hidden sm:block transition-colors">Sign in</a>
          <a href="https://stylex.indicestech.com/register" class="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-brand transition-all shadow-xl shadow-slate-900/10">
            Get started free
          </a>
        </div>
      </div>
    </nav>

    <!-- ── HERO ── -->
    <section class="pt-32 pb-20 px-5 overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest">
            <span class="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
            Social Commerce · Live Now
          </div>

          <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter text-gray-900 uppercase">
            See it.<br />
            <span class="text-brand italic font-serif lowercase">Love it.</span><br />
            Buy it.
          </h1>

          <p class="text-xl text-gray-500 max-w-md leading-relaxed font-light">
            styleX is a shoppable social feed where African creators post fashion and lifestyle picks — and you buy directly from the post. No DMs. No "links in bio." Just tap.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="https://stylex.indicestech.com/register"
              class="inline-flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-brand/30 hover:scale-105 transition-all"
            >
              Start shopping free
              <span class="text-xl">→</span>
            </a>
            <div class="flex items-center gap-4 px-6 py-3 border-2 border-slate-100 rounded-2xl bg-slate-50/50">
              <span class="text-3xl">🌍</span>
              <div>
                <p class="text-[9px] font-bold text-slate-400 uppercase">Logistics by</p>
                <p class="text-[11px] font-black text-slate-900 uppercase tracking-tighter">Indices Global</p>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-8 pt-4">
            <div>
              <p class="text-3xl font-black text-gray-900">10K+</p>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Verified Sellers</p>
            </div>
            <div class="w-px h-10 bg-gray-100"></div>
            <div>
              <p class="text-3xl font-black text-gray-900">30+</p>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Countries</p>
            </div>
            <div class="w-px h-10 bg-gray-100"></div>
            <div>
              <p class="text-3xl font-black text-gray-900">₦2B+</p>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">GMV Processed</p>
            </div>
          </div>
        </div>

        <!-- Phone mockup -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="w-72 h-[580px] bg-gray-950 rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-white overflow-hidden">
              <div class="h-7 bg-white flex items-center justify-center">
                <div class="w-24 h-5 bg-gray-950 rounded-b-2xl"></div>
              </div>
              <div class="h-12 border-b border-gray-100 flex items-center justify-between px-5">
                <span class="font-black italic text-sm text-brand lowercase">styleX.</span>
                <div class="flex gap-4 opacity-40"><span>🔍</span><span>❤️</span></div>
              </div>
              <div>
                <div class="flex items-center gap-2.5 px-4 py-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-brand to-pink-300"></div>
                  <div>
                    <p class="text-xs font-bold text-gray-900">amara_styles</p>
                    <p class="text-[9px] text-gray-400 uppercase font-bold">Lagos, NG</p>
                  </div>
                </div>
                <div class="aspect-square bg-slate-100 relative overflow-hidden">
                  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                  <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black text-gray-900 shadow-xl">
                    Ankara Wrap Dress · ₦22,500
                  </div>
                  <div class="absolute bottom-4 right-4 bg-brand text-white px-3 py-1.5 rounded-full text-[10px] font-black shadow-xl animate-bounce">
                    Shop Now
                  </div>
                </div>
                <div class="px-4 py-3 space-y-2">
                  <div class="flex gap-4 text-lg"><span>❤️</span><span>💬</span><span>✈️</span><span class="ml-auto">🔖</span></div>
                  <p class="text-[10px] font-black text-gray-900">3,241 likes</p>
                  <p class="text-[10px] text-gray-500 italic">"Found this at the Balogun thrift market! Absolute steal."</p>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -top-6 -left-6 bg-white px-5 py-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block animate-float">
            <p class="text-[10px] font-black text-slate-400 mb-1 tracking-widest uppercase">Live Settlement</p>
            <p class="text-xl font-black text-emerald-500">+ ₦240,500</p>
            <p class="text-[9px] text-slate-400 italic">Payout via Indices FinTech</p>
          </div>

          <div class="absolute bottom-20 -right-8 bg-slate-900 px-5 py-4 rounded-2xl shadow-2xl border border-white/10 hidden sm:block animate-float-delayed">
            <div class="flex items-center gap-3">
              <span class="text-2xl">📦</span>
              <div>
                <p class="text-[10px] font-bold text-white uppercase tracking-widest">In Transit</p>
                <p class="text-[11px] text-slate-400">London, UK · 3 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SOCIAL PROOF TICKER ── -->
    <div class="py-5 bg-slate-950 overflow-hidden border-y border-white/5">
      <div class="flex gap-12 animate-ticker whitespace-nowrap">
        <span v-for="item in [...ticker, ...ticker]" :key="item + Math.random()" class="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 inline-flex items-center gap-3">
          <span class="text-brand">✦</span> {{ item }}
        </span>
      </div>
    </div>

    <!-- ── HOW IT WORKS ── -->
    <section id="how" class="py-28 px-5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 space-y-3">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-brand">The Experience</p>
          <h2 class="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">From scroll to doorstep</h2>
          <p class="text-gray-400 text-lg font-light max-w-xl mx-auto">Three taps. That's all it takes from discovering a piece to having it shipped to your door.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 relative">
          <!-- connector line (desktop) -->
          <div class="hidden md:block absolute top-14 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-brand/30 via-brand to-brand/30"></div>

          <div v-for="step in howItWorks" :key="step.step" class="text-center space-y-5 relative">
            <div class="w-28 h-28 rounded-3xl mx-auto flex items-center justify-center text-5xl shadow-xl relative z-10"
              :class="step.bg">
              {{ step.icon }}
            </div>
            <div class="w-6 h-6 rounded-full bg-brand text-white text-[10px] font-black flex items-center justify-center mx-auto">
              {{ step.step }}
            </div>
            <h3 class="text-xl font-black text-gray-900">{{ step.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section id="features" class="py-24 px-5 bg-slate-50 border-y border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 space-y-3">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-brand">The Platform</p>
          <h2 class="text-4xl font-black text-gray-900 tracking-tighter">Built for how Africa shops</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feat in features" :key="feat.title"
            class="bg-white rounded-3xl p-8 border border-slate-100 hover:border-brand/30 hover:shadow-2xl transition-all group">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all"
              :class="feat.iconBg">
              {{ feat.icon }}
            </div>
            <h3 class="text-lg font-black text-gray-900 mb-2">{{ feat.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOR CREATORS ── -->
    <section id="creators" class="py-28 px-5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <!-- Left: stats & perks -->
        <div class="space-y-10">
          <div class="space-y-4">
            <p class="text-[10px] font-black uppercase tracking-[0.3em] text-brand">For Creators</p>
            <h2 class="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              Your audience is<br />
              <span class="text-brand italic font-serif lowercase">already buying.</span>
            </h2>
            <p class="text-lg text-gray-500 font-light leading-relaxed max-w-lg">
              Stop losing sales to screenshot DMs. Embed shoppable links directly into your posts and watch commissions land in your wallet in real time.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-5">
            <div v-for="perk in creatorPerks" :key="perk.label"
              class="p-6 rounded-2xl border border-slate-100 bg-slate-50 space-y-2">
              <span class="text-3xl">{{ perk.icon }}</span>
              <p class="text-2xl font-black text-gray-900">{{ perk.value }}</p>
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ perk.label }}</p>
            </div>
          </div>

          <a href="https://stylex.indicestech.com/creators"
            class="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-base shadow-2xl shadow-brand/30 hover:scale-105 transition-all">
            Apply as a creator
            <span>→</span>
          </a>
        </div>

        <!-- Right: creator card stack -->
        <div class="relative flex justify-center">
          <div class="space-y-4 w-full max-w-sm">
            <div v-for="creator in creators" :key="creator.handle"
              class="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div class="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-2xl"
                :class="creator.avatarBg">
                {{ creator.emoji }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-black text-gray-900">{{ creator.handle }}</p>
                <p class="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{{ creator.location }}</p>
              </div>
              <div class="text-right shrink-0">
                <p class="text-base font-black text-emerald-600">{{ creator.earnings }}</p>
                <p class="text-[9px] text-gray-400 uppercase font-bold">This month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SELLERS CTA ── -->
    <section id="sellers" class="py-28 px-5 bg-slate-950 text-white overflow-hidden relative">
      <div class="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none"></div>
      <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-black uppercase tracking-widest">
          <span class="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          Seller Programme · Open Now
        </div>
        <h2 class="text-4xl sm:text-6xl font-black tracking-tighter leading-none uppercase">
          Your followers are<br />
          <span class="text-brand font-serif italic lowercase">Your customers.</span>
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          Post your collection, manage high-volume orders, and receive payments globally — in your local currency. Turn every post into a verified sale.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://stylex.indicestech.com/register?intent=seller"
            class="inline-flex items-center justify-center gap-3 bg-brand text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand/40 hover:scale-105 transition-all">
            Open your store — it's free
            <span class="text-2xl">🏪</span>
          </a>
          <a href="https://stylex.indicestech.com/seller-guide"
            class="inline-flex items-center justify-center gap-3 border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all">
            View seller guide →
          </a>
        </div>

        <!-- Seller perks row -->
        <div class="grid sm:grid-cols-3 gap-6 pt-6">
          <div v-for="perk in sellerPerks" :key="perk.title" class="p-6 rounded-2xl border border-white/5 bg-white/[0.03] text-left">
            <span class="text-3xl block mb-3">{{ perk.icon }}</span>
            <p class="text-sm font-black">{{ perk.title }}</p>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ perk.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer class="py-16 px-5 border-t border-slate-100 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div class="space-y-4 max-w-xs">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-sm italic">sX</div>
              <span class="text-lg font-black tracking-tighter text-slate-900 uppercase">styleX<span class="text-brand">.</span></span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Africa's shoppable social feed. Discover fashion from creators across the continent and buy in one tap.
            </p>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">A product of Indices Technology LTD</p>
            <p class="text-[10px] text-slate-600 font-semibold">RC7529506</p>
            <p class="text-[10px] text-slate-500 leading-relaxed">1, Zion International School Plaza, Agingi,<br/>Jebba-Bassa, Plateau State, Nigeria</p>
            <a href="tel:+2348066838217" class="text-[10px] text-brand font-bold block hover:underline">+234 806 683 8217</a>

            <!-- Nigeria Startup Act Label -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 mt-1">
              <span class="text-base">🇳🇬</span>
              <div>
                <p class="text-[8px] font-black text-green-700 uppercase tracking-widest leading-none">Nigeria Startup Act</p>
                <p class="text-[8px] font-bold text-green-600 leading-none mt-0.5">Label Certified</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-10 text-xs">
            <div class="space-y-4">
              <p class="font-black text-slate-900 uppercase tracking-widest text-[10px]">Product</p>
              <div class="space-y-2.5 text-slate-400 font-medium">
                <a href="#how" class="block hover:text-brand transition-colors">How it works</a>
                <a href="#features" class="block hover:text-brand transition-colors">Features</a>
                <a href="#sellers" class="block hover:text-brand transition-colors">Sell on styleX</a>
                <a href="https://stylex.indicestech.com/creators" class="block hover:text-brand transition-colors">Creator programme</a>
              </div>
            </div>
            <div class="space-y-4">
              <p class="font-black text-slate-900 uppercase tracking-widest text-[10px]">Company</p>
              <div class="space-y-2.5 text-slate-400 font-medium">
                <NuxtLink to="/" class="block hover:text-brand transition-colors">Indices Group</NuxtLink>
                <NuxtLink to="/tech/axioms" class="block hover:text-brand transition-colors">AxiomsAI</NuxtLink>
                <a href="https://stylex.indicestech.com/blog" class="block hover:text-brand transition-colors">Blog</a>
                <a href="tel:+2348066838217" class="block hover:text-brand transition-colors">+234 806 683 8217</a>
                <a href="mailto:hello@stylex.indicestech.com" class="block hover:text-brand transition-colors">Contact</a>
              </div>
            </div>
            <div class="space-y-4">
              <p class="font-black text-slate-900 uppercase tracking-widest text-[10px]">Legal</p>
              <div class="space-y-2.5 text-slate-400 font-medium">
                <NuxtLink to="/privacy" class="block hover:text-brand transition-colors">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms" class="block hover:text-brand transition-colors">Terms of Service</NuxtLink>
                <a href="https://stylex.indicestech.com/cookies" class="block hover:text-brand transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
            © {{ new Date().getFullYear() }} Indices Technology LTD. All rights reserved.
          </p>
          <div class="flex items-center gap-3">
            <span class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Powered by</span>
            <NuxtLink to="/tech/axioms" class="text-[10px] font-black text-purple-500 uppercase tracking-widest hover:text-purple-400 transition-colors">AxiomsAI</NuxtLink>
            <span class="text-slate-200">·</span>
            <span class="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Shipped by Indices Logistics</span>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'styleX — Africa\'s Shoppable Social Feed',
  meta: [
    { name: 'description', content: 'Discover fashion from African creators and buy directly from the post. No DMs. No links in bio. Just tap.' }
  ]
})

const ticker = [
  'Shoppable social feed',
  'Pan-African fashion',
  'Instant checkout',
  'Global shipping',
  'Creator commissions',
  'RAG style intelligence',
  'Real-time payouts',
  'Verified sellers',
  '30+ countries',
]

const howItWorks = [
  {
    step: 1,
    icon: '📱',
    bg: 'bg-brand/10',
    title: 'Scroll your feed',
    desc: 'Browse a curated feed of fashion drops, thrift finds, and lifestyle picks posted by verified African creators.',
  },
  {
    step: 2,
    icon: '👆',
    bg: 'bg-emerald-50',
    title: 'Tap to buy',
    desc: 'Every post has a live price tag. Tap once to add to cart. Checkout in seconds with your saved address and payment method.',
  },
  {
    step: 3,
    icon: '📦',
    bg: 'bg-blue-50',
    title: 'Delivered to your door',
    desc: 'Indices Logistics handles fulfilment. Real-time tracking from Lagos to London, Accra to Atlanta — in 3–7 days.',
  },
]

const features = [
  {
    title: 'RAG Style Intelligence',
    icon: '🧠',
    iconBg: 'bg-purple-50 group-hover:bg-purple-600 group-hover:text-white',
    desc: 'Powered by AxiomsAI. Describe your look in plain English — our RAG search matches your body type and taste without hallucinating trends.',
  },
  {
    title: 'Integrated Global Shipping',
    icon: '🚢',
    iconBg: 'bg-blue-50 group-hover:bg-blue-600 group-hover:text-white',
    desc: 'Direct integration with Indices Logistics. Live rates for DHL, UPS, and local carriers. From Lagos to London in 3–5 days.',
  },
  {
    title: 'Instant Checkout',
    icon: '⚡',
    iconBg: 'bg-amber-50 group-hover:bg-amber-500 group-hover:text-white',
    desc: 'One-tap purchase from any post. Supports card, bank transfer, mobile money, and BNPL — in your local currency.',
  },
  {
    title: 'Advanced Seller CMS',
    icon: '🏪',
    iconBg: 'bg-pink-50 group-hover:bg-brand group-hover:text-white',
    desc: 'Enterprise-grade dashboard for inventory, order tracking, and global payouts. Turn your social presence into a production marketplace.',
  },
  {
    title: 'Live Creator Commissions',
    icon: '💸',
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white',
    desc: 'Creators earn a commission on every sale they drive. Settled in real time via Indices FinTech. No payment delays, ever.',
  },
  {
    title: 'Fraud-Proof Reviews',
    icon: '✅',
    iconBg: 'bg-slate-100 group-hover:bg-slate-800 group-hover:text-white',
    desc: 'Only verified buyers can leave reviews. Every seller badge is earned, not paid for. Authentic reputation you can trust.',
  },
]

const creatorPerks = [
  { icon: '💰', value: '15%', label: 'Avg. commission rate' },
  { icon: '⚡', value: '< 1hr', label: 'Payout settlement' },
  { icon: '🌍', value: '30+', label: 'Countries reached' },
  { icon: '📈', value: '4.2×', label: 'Avg. follower conversion' },
]

const creators = [
  { handle: 'amara_styles', location: 'Lagos, NG', emoji: '👗', avatarBg: 'bg-pink-100', earnings: '₦840,200' },
  { handle: 'kofi.couture', location: 'Accra, GH', emoji: '🧵', avatarBg: 'bg-amber-100', earnings: '₦520,000' },
  { handle: 'nairobi.drip', location: 'Nairobi, KE', emoji: '🕶️', avatarBg: 'bg-blue-100', earnings: '₦390,500' },
  { handle: 'ade_vintage', location: 'Abuja, NG', emoji: '👟', avatarBg: 'bg-emerald-100', earnings: '₦710,000' },
]

const sellerPerks = [
  { icon: '🆓', title: 'Zero listing fees', desc: 'List unlimited products with no upfront cost. We only earn when you earn.' },
  { icon: '🌐', title: 'Global storefront', desc: 'Your store is live to shoppers in 30+ countries the moment you publish.' },
  { icon: '📊', title: 'Real-time analytics', desc: 'See views, conversions, and revenue as they happen — with zero delay.' },
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-1deg); }
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 1.5s; }
.animate-ticker { animation: ticker 30s linear infinite; }
</style>
