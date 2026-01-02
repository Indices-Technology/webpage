<template>
  <div class="min-h-screen bg-white font-sans selection:bg-pink-100">
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <span class="text-xl font-black tracking-tighter italic">Styli.</span>
        </NuxtLink>
        
        <div class="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#features" class="hover:text-pink-500 transition">Features</a>
          <a href="#vendors" class="hover:text-pink-500 transition">For Vendors</a>
          <a href="#app" class="text-pink-600">Download App</a>
        </div>

        <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-pink-600 transition-all">
          Sell on Styli
        </button>
      </div>
    </nav>

    <header class="pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-rose-50/50 to-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-[10px] font-black uppercase tracking-widest">
            Next-Gen Social Commerce
          </div>
          <h1 class="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900">
            Style <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Discover</span> Shop.
          </h1>
          <p class="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed">
            Styli is the first social marketplace designed for Africa's fashion-forward. An Instagram-style feed where you don't just see trends—you buy them.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-pink-600 transition-all">
              Launch Marketplace
            </button>
            <div class="flex items-center gap-3 px-4 py-2 border border-slate-200 rounded-2xl">
              <span class="text-2xl">📱</span>
              <div class="text-left">
                <p class="text-[10px] font-bold text-slate-400 uppercase leading-none">Available on</p>
                <p class="text-sm font-black text-slate-900">App Store & Play</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end">
          <div class="w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
            <div class="absolute inset-0 bg-white">
              <div class="h-12 border-b flex items-center justify-between px-4">
                <span class="font-black italic text-sm">Styli.</span>
                <span class="text-lg">🔔</span>
              </div>
              <div class="p-0">
                <div class="aspect-square bg-slate-100 relative">
                   <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                      Pink Thread Athleisure • ₦15,000
                   </div>
                </div>
                <div class="p-4 space-y-2">
                  <div class="flex gap-4 text-xl"><span>❤️</span><span>💬</span><span>✈️</span></div>
                  <p class="text-xs font-bold">2,450 likes</p>
                  <p class="text-[10px] text-slate-500">View all 142 comments...</p>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block">
            <p class="text-[10px] font-bold text-slate-400 mb-1">LIVE SALES</p>
            <p class="text-xl font-black text-emerald-500">+ ₦240,500</p>
          </div>
        </div>
      </div>
    </header>

    <section id="features" class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <div class="w-12 h-12 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center text-2xl font-bold italic">S</div>
            <h3 class="text-xl font-black">Social CMS for Sellers</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Don't just list products. Manage your entire social presence, schedule posts, and engage your community from one robust dashboard.</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center text-2xl font-bold">🧠</div>
            <h3 class="text-xl font-black">AI Augmented Search</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Powered by Axioms AI. Find exactly what fits your style and body type with context-aware visual search.</p>
          </div>
          <div class="space-y-4">
            <div class="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold">📦</div>
            <h3 class="text-xl font-black">Unified Logistics</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Seamlessly integrated with Indices Logistics for 48-hour delivery and hassle-free returns across major cities.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="vendors" class="py-20 px-6 bg-slate-50 border-y border-slate-100">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight">The Styli Standard.</h2>
        <p class="text-lg text-slate-600 leading-relaxed italic">
          We maintain high criteria for our sellers. Only verified, high-quality vendors are permitted on Styli, ensuring a marketplace of absolute trust and luxury.
        </p>
        <button class="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-600 transition-all">
          Apply to Sell
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Logic for dynamic product displays or vendor highlights can be added here
</script>