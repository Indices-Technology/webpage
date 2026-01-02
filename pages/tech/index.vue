<template>
  <main class="bg-slate-50">
    <section class="relative bg-white overflow-hidden border-b border-blue-100">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwTDQwIDAiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-100"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest">
                Industrial Hardware & Robotics
              </span>
            </div>

            <h1 class="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase">
              Heavy <br/>
              <span class="text-blue-600 font-serif italic lowercase text-6xl lg:text-8xl">Infrastructure.</span>
            </h1>

            <p class="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              From the fabrication of high-criteria machinery to the deployment of autonomous mining fleets, we build the physical assets that drive Africa's GDP.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all">
                View Project Portfolio
              </button>
              <button class="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Hardware Specs
              </button>
            </div>
          </div>

          <div class="relative group">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 aspect-square flex items-center justify-center">
               <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
               <div class="relative z-10 text-center">
                  <div class="text-7xl mb-4">🤖</div>
                  <div class="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest">Edge Node ID: IND-TX-091</div>
               </div>
               
               <div class="absolute top-10 left-10 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-blue-100 animate-float">
                  <p class="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Motor Torque</p>
                  <p class="text-xl font-black text-blue-600">450 Nm</p>
               </div>
               <div class="absolute bottom-10 right-10 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-emerald-100 animate-float-delayed">
                  <p class="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Energy Efficiency</p>
                  <p class="text-xl font-black text-emerald-600">Grade A++</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in techSectors" :key="item.title" 
            class="group p-8 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {{ item.icon }}
            </div>
            <h3 class="text-lg font-black mb-3">{{ item.title }}</h3>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">{{ item.desc }}</p>
            <div class="pt-4 border-t border-slate-100">
              <span class="text-[9px] font-bold uppercase tracking-widest text-blue-600">Edge AI Integrated</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">Precision <br/><span class="text-blue-500 italic">Fabrication.</span></h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              Our facilities combine traditional craftsmanship with high-criteria robotics. We specialize in high-end wood fabrication and textile manufacturing, all monitored by IoT telemetry for zero-defect output.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 class="font-bold mb-2">Textile Automation</h4>
                <p class="text-xs text-slate-500 italic">AxiomsAI quality control for 100% thread-count accuracy.</p>
              </div>
              <div class="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 class="font-bold mb-2">Wood Engineering</h4>
                <p class="text-xs text-slate-500 italic">Robotic CNC milling for aerospace and luxury interior grades.</p>
              </div>
            </div>
          </div>
          
          <div class="relative order-1 lg:order-2 aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5">
             <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070')] bg-cover bg-center"></div>
             <div class="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>
             <div class="relative h-full flex items-center justify-center">
                <div class="text-center">
                   <p class="text-5xl mb-4 font-black">98.4%</p>
                   <p class="text-xs font-bold uppercase tracking-widest text-blue-400">Yield Precision</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const techSectors = [
  {
    title: 'Mining Technology',
    icon: '⚒️',
    desc: 'Autonomous extraction equipment and subsurface remote sensing integrated with Edge AI nodes.'
  },
  {
    title: 'Robotics & CNC',
    icon: '🤖',
    desc: 'High-criteria fabrication for metal, wood, and composite materials using multi-axis robotic arms.'
  },
  {
    title: 'Renewable Grids',
    icon: '⚡',
    desc: 'Deployment of solar and wind micro-grids for industrial parks, managed by predictive power software.'
  },
  {
    title: 'Textile Industry 4.0',
    icon: '🧵',
    desc: 'Automated factory floors for large-scale textile production with integrated AI quality inspection.'
  }
]
</script>