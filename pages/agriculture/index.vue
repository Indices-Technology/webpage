<template>
  <main class="bg-slate-50">
    <section class="relative bg-white overflow-hidden border-b border-emerald-100">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSJyZ2JhKDE2LDE4NSwxMjksMC4xNSkiLz48L2c+PC9zdmc+')] opacity-100"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest">
                System Status: Optimal
              </span>
            </div>

            <h1 class="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Digital <br/>
              <span class="text-emerald-600 font-serif italic text-6xl lg:text-8xl">Ecosystems.</span>
            </h1>

            <p class="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Indices Agribusiness fuses biological science with digital infrastructure. We use green technology to secure Africa’s food future.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all">
                Launch Agri-Dashboard
              </button>
              <button class="border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all">
                Download ESG Report
              </button>
            </div>
          </div>

          <div class="relative group">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50 bg-emerald-900 aspect-square flex items-center justify-center">
               <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
               <div class="relative z-10 text-center p-8">
                  <div class="text-6xl mb-4 animate-pulse">📡</div>
                  <div class="font-mono text-[10px] text-emerald-400 tracking-tighter uppercase">Axioms AI Analytics: 0.04ms Latency</div>
               </div>
               
               <div class="absolute top-10 right-10 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-emerald-100 animate-float">
                  <p class="text-[10px] font-bold text-slate-400 uppercase">Yield Velocity</p>
                  <p class="text-xl font-black text-emerald-600">+24.8%</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="text-4xl font-black tracking-tight mb-4">The AgriTech <span class="text-emerald-600 italic">Stack.</span></h2>
          <p class="text-slate-500 max-w-2xl leading-relaxed">Precision-engineered systems for livestock, biotechnology, and global commodities.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in agriTechStack" :key="item.title" 
            class="group p-8 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-emerald-200 hover:shadow-2xl transition-all duration-500">
            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              {{ item.icon }}
            </div>
            <h3 class="text-xl font-black mb-3">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">{{ item.description }}</p>
            <div class="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
              <span v-for="tag in item.tags" :key="tag" class="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-emerald-50 text-emerald-600 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-emerald-950 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">Biotech & <br/><span class="text-emerald-400">Genetics.</span></h2>
            
            <div class="space-y-8">
              <div v-for="(step, i) in ['Data Collection', 'AI Processing', 'Targeted Action']" :key="i" class="flex gap-6 items-start">
                <div class="text-emerald-500 text-2xl font-mono">0{{ i+1 }}</div>
                <div>
                  <h4 class="font-bold text-xl mb-1">{{ step }}</h4>
                  <p class="text-emerald-100/60 text-sm">Automated precision metrics integrated into our core Axioms AI infrastructure.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative bg-white/5 rounded-3xl p-1 border border-white/10 overflow-hidden">
             
             <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Agribusiness',
  ogTitle: 'Agribusiness — Indices Technology LTD',
  description: 'Indices Agribusiness arm brings smart ranching, biotech labs, drone NDVI crop analysis, and IoT cold chain management to transform African agriculture.',
  ogDescription: 'Smart ranching, drone NDVI, biotech, and cold chain IoT — Indices Agribusiness arm.',
  ogUrl: 'https://indicestech.com/agriculture',
})

const agriTechStack = [
  { 
    title: 'Smart Ranching', 
    description: 'IoT vital tracking for cattle and poultry. Precision health monitoring via wearable nodes.', 
    icon: '🐄',
    tags: ['IoT', 'Vitals', 'RanchTech']
  },
  { 
    title: 'Biotech Lab', 
    description: 'Developing climate-resilient genetics and nutritional science for high-performance feed.', 
    icon: '🧬',
    tags: ['Genetics', 'Laboratory']
  },
  { 
    title: 'Drone NDVI', 
    description: 'Autonomous crop health mapping using multispectral imagery and automated fertilizer nodes.', 
    icon: '🛸',
    tags: ['Drones', 'NDVI', 'Autonomy']
  },
  { 
    title: 'Cold Chain IoT', 
    description: 'Global transparency through 5G-enabled temperature-controlled container networks.', 
    icon: '❄️',
    tags: ['5G', 'Logistics']
  }
]
</script>