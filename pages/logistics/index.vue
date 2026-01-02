<template>
  <main class="bg-slate-50">
    <section class="relative bg-white overflow-hidden border-b border-red-100">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSJyZ2JhKDIzOSw2OCw2OCwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-100"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest">
                Fleet Status: Active & Optimized
              </span>
            </div>

            <h1 class="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Velocity <br/>
              <span class="text-red-600 font-serif italic text-6xl lg:text-8xl">Unbound.</span>
            </h1>

            <p class="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Indices Logistics is the circulatory system of the group. We integrate autonomous fleet management with smart cold-chain infrastructure to move Africa at global speeds.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="bg-red-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-red-600/20 hover:bg-red-700 hover:scale-105 transition-all">
                Track Global Shipment
              </button>
              <button class="border-2 border-red-200 text-red-700 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all">
                Compliance & Customs
              </button>
            </div>
          </div>

          <div class="relative group">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-50 bg-slate-900 aspect-square flex items-center justify-center">
               <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
               <div class="relative z-10 text-center p-8">
                  <div class="text-6xl mb-4 animate-pulse">🚚</div>
                  <div class="font-mono text-[10px] text-red-400 tracking-tighter uppercase italic font-bold">Axioms AI Route Optimization: Active</div>
               </div>
               
               <div class="absolute top-10 right-10 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-red-100 animate-float">
                  <p class="text-[10px] font-bold text-slate-400 uppercase">On-Time Delivery</p>
                  <p class="text-xl font-black text-red-600">99.8%</p>
               </div>
               <div class="absolute bottom-10 left-10 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-blue-100 animate-float-delayed">
                  <p class="text-[10px] font-bold text-slate-400 uppercase">Fleet Idle Time</p>
                  <p class="text-xl font-black text-blue-600">-14.2%</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="text-4xl font-black tracking-tight mb-4">Integrated <span class="text-red-600 italic">Supply Chain.</span></h2>
          <p class="text-slate-500 max-w-2xl leading-relaxed">High-criteria logistics engineered for the Agribusiness and Industrial Tech sectors.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in logisticsStack" :key="item.title" 
            class="group p-8 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-red-200 hover:shadow-2xl transition-all duration-500">
            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
              {{ item.icon }}
            </div>
            <h3 class="text-xl font-black mb-3">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">{{ item.description }}</p>
            <div class="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
              <span v-for="tag in item.tags" :key="tag" class="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-red-50 text-red-600 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">Intelligent <br/><span class="text-red-500">Infrastructure.</span></h2>
            
            <div class="space-y-8">
              <div v-for="(step, i) in ['Predictive Maintenance', 'Blockchain Compliance', 'Cross-Border 5G']" :key="i" class="flex gap-6 items-start">
                <div class="text-red-500 text-2xl font-mono">0{{ i+1 }}</div>
                <div>
                  <h4 class="font-bold text-xl mb-1">{{ step }}</h4>
                  <p class="text-slate-400 text-sm">Automating the physical movement of goods with the same precision as our software code.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative bg-white/5 rounded-3xl p-8 border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
             
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
             <div class="relative z-10 text-center">
                <div class="grid grid-cols-2 gap-4">
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p class="text-red-500 font-black text-2xl">48hr</p>
                      <p class="text-[10px] uppercase text-slate-400">Avg Cross-Border</p>
                   </div>
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p class="text-red-500 font-black text-2xl">0%</p>
                      <p class="text-[10px] uppercase text-slate-400">Cold Chain Loss</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const logisticsStack = [
  { 
    title: 'Smart Cold Chain', 
    description: 'Autonomous temperature tracking for high-value perishables. Integrated with Agri arm exports.', 
    icon: '❄️',
    tags: ['IoT', 'Cold Chain', 'Agri-Link']
  },
  { 
    title: 'Fleet Automation', 
    description: 'Proprietary Axioms AI algorithms for fuel reduction and dynamic route optimization.', 
    icon: '🚛',
    tags: ['AI', 'Fleet Management']
  },
  { 
    title: 'Customs Tech', 
    description: 'Digitized trade compliance and automated customs clearance for African corridors.', 
    icon: '🛂',
    tags: ['TradeTech', 'Compliance']
  },
  { 
    title: 'Warehouse Robotics', 
    description: 'IoT-enabled sorting and retrieval systems within Indices Real Estate hubs.', 
    icon: '🏗️',
    tags: ['Robotics', 'Real Estate']
  }
]
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