<template>
  <main class="bg-slate-950 text-white selection:bg-purple-500/30">
    <section class="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSJyZ2JhKDE2OCw4NSwyNDcsMC4xNSkiLz48L2c+PC9zdmc+')] opacity-100"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              RAG-Enabled Intelligence Active
            </div>

            <h1 class="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase">
              Axioms<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 italic font-serif lowercase">intelligence.</span>
            </h1>

            <p class="text-xl text-slate-400 leading-relaxed max-w-xl font-light">
              We deploy **EdgeAI** and **IoT** networks to harvest industrial telemetry, processed through **RAG-optimized** LLMs for zero-hallucination decision making.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all">
                Talk to DAssah AI
              </button>
              <button class="border-2 border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                IoT Device Management
              </button>
            </div>
          </div>

          <div class="relative flex justify-center lg:justify-end">
            <div class="w-80 h-[500px] bg-slate-900 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden p-4">
              <div class="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-xs font-bold">D</div>
                <div>
                  <p class="text-[10px] font-bold">DAssah Chatbot</p>
                  <p class="text-[8px] text-emerald-500 uppercase tracking-widest animate-pulse">Online • RAG Synced</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-white/5 p-3 rounded-2xl rounded-tl-none text-[10px] text-slate-300">
                  Welcome to Indices. I have analyzed current soil moisture from the North Sector IoT nodes. Should I initiate irrigation?
                </div>
                <div class="bg-purple-600 p-3 rounded-2xl rounded-tr-none text-[10px] ml-6">
                  Yes, cross-reference with the weather forecast for the next 48 hours.
                </div>
                <div class="bg-white/5 p-3 rounded-2xl rounded-tl-none text-[10px] text-slate-300">
                  <span class="font-bold text-purple-400">RAG Analysis:</span> Forecast predicts heavy rain in 12hrs. I recommend delaying irrigation to save energy and water.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="tech in techStack" :key="tech.title" 
            class="p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-all group">
            <div class="text-3xl mb-6 group-hover:scale-110 transition-transform">{{ tech.icon }}</div>
            <h3 class="text-lg font-black mb-3">{{ tech.title }}</h3>
            <p class="text-xs text-slate-500 leading-relaxed mb-6">{{ tech.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in tech.tags" :key="tag" class="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-purple-500/10 text-purple-400 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const techStack = [
  {
    title: 'Edge AI Deployment',
    icon: '📡',
    desc: 'Local model execution on farm and mining hardware to ensure zero-latency responses without internet dependency.',
    tags: ['NVIDIA Jetson', 'TensorRT', 'Offline-First']
  },
  {
    title: 'Industrial IoT Hub',
    icon: '🚥',
    desc: 'Real-time telemetry from thousands of sensors tracking soil health, livestock vitals, and fleet locations.',
    tags: ['MQTT', 'Sensors', 'Real-time Analytics']
  },
  {
    title: 'RAG Architecture',
    icon: '📚',
    desc: 'Retrieval-Augmented Generation connects our LLMs to private Indices data, eliminating hallucinations in corporate reports.',
    tags: ['Vector DB', 'Knowledge Retrieval', 'Accuracy']
  },
  {
    title: 'DAssah Interface',
    icon: '💬',
    desc: 'The conversational hub for the Indices Group. Interact with any sector via natural language voice or text.',
    tags: ['NLP', 'Multi-Sector Hub', 'Assistant']
  }
]
</script>