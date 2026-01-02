<template>
  <main class="bg-slate-50">
    <section class="relative bg-slate-900 text-white overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-100"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/30">
                Threat Intelligence: Level 1 Secure
              </span>
            </div>

            <h1 class="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              Total <br/>
              <span class="text-blue-500 font-serif italic text-6xl lg:text-8xl lowercase">Resilience.</span>
            </h1>

            <p class="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Indices Security provides an uncompromising shield for African industry. We integrate military-grade physical protection with self-learning AI defense systems.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all">
                Request Security Audit
              </button>
              <button class="border-2 border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                Compliance Standards
              </button>
            </div>
          </div>

          <div class="relative group">
            <div class="relative rounded-3xl overflow-hidden border-4 border-white/5 bg-slate-800 aspect-square flex items-center justify-center">
               <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
               <div class="relative z-10 text-center">
                  <div class="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">🛡️</div>
                  <div class="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest animate-pulse">Encryption: AES-256 Protocol</div>
               </div>
               
               <div class="absolute top-10 right-10 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-blue-500/30 animate-float">
                  <p class="text-[9px] font-bold text-slate-500 uppercase">Cyber Shield</p>
                  <p class="text-xl font-black text-blue-400">Active</p>
               </div>
               <div class="absolute bottom-10 left-10 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-red-500/30 animate-float-delayed">
                  <p class="text-[9px] font-bold text-slate-500 uppercase">Physical Breach</p>
                  <p class="text-xl font-black text-red-500">Zero</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <h2 class="text-4xl font-black tracking-tight mb-4 uppercase italic">Defense <span class="text-blue-600">Capabilities.</span></h2>
          <p class="text-slate-500 max-w-2xl leading-relaxed">Protecting every node of the Indices ecosystem through integrated surveillance and intelligence.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in securityStack" :key="item.title" 
            class="group p-8 rounded-3xl border-2 border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {{ item.icon }}
            </div>
            <h3 class="text-xl font-black mb-3">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">{{ item.description }}</p>
            <div class="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
              <span v-for="tag in item.tags" :key="tag" class="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-blue-50 text-blue-600 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white bg-slate-200 shadow-inner">
             <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
             <div class="flex items-center justify-center h-full">
                <div class="text-center p-12">
                   <h4 class="text-6xl font-black text-slate-900 mb-4 tracking-tighter italic">100%</h4>
                   <p class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">IP Data Sovereignty</p>
                   <p class="mt-4 text-sm text-slate-500 max-w-xs mx-auto">All organizational data remains encrypted on Indices private servers.</p>
                </div>
             </div>
          </div>

          <div>
            <h2 class="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter">Strategic <br/><span class="text-blue-600">Data Governance.</span></h2>
            <p class="text-slate-600 text-lg mb-8 leading-relaxed italic">
              "We don't just protect fences; we protect the code that runs the farms, the mines, and the marketplaces."
            </p>
            
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="text-blue-600">✔</div>
                <p class="text-sm font-bold text-slate-700 underline decoration-blue-200 decoration-2">SOC 2 Type II Compliance Architecture</p>
              </div>
              <div class="flex gap-4">
                <div class="text-blue-600">✔</div>
                <p class="text-sm font-bold text-slate-700 underline decoration-blue-200 decoration-2">Zero-Trust Network Access (ZTNA)</p>
              </div>
              <div class="flex gap-4">
                <div class="text-blue-600">✔</div>
                <p class="text-sm font-bold text-slate-700 underline decoration-blue-200 decoration-2">Biometric Multi-Factor Authentication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const securityStack = [
  { 
    title: 'Industrial Cybersecurity', 
    description: 'Protection for SCADA and PLC systems in the Technology and Energy arms. Prevents digital intrusion into physical machinery.', 
    icon: '💻',
    tags: ['OT Security', 'Encryption', 'Firewall']
  },
  { 
    title: 'Physical Asset Defense', 
    description: 'Specialized security for Mining, Agriculture, and Logistics sites using AI-patrol drones and high-criteria field units.', 
    icon: '🚁',
    tags: ['Drone Patrol', 'Surveillance', 'K9']
  },
  { 
    title: 'Supply Chain Integrity', 
    description: 'End-to-end monitoring for Logistics to prevent theft and transit tampering. Includes GPS-fencing and load sensors.', 
    icon: '📦',
    tags: ['GPS', 'Anti-Tamper', 'Recovery']
  },
  { 
    title: 'IP & Data Sovereignty', 
    description: 'Comprehensive protection for Axioms AI models and FinTech data layers. Ensuring proprietary secrets never leave the ecosystem.', 
    icon: '🧬',
    tags: ['Data Privacy', 'GDPR', 'ISO 27001']
  }
]
</script>