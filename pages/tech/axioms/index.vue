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

    <!-- AI Services Section -->
    <section class="py-28 px-6 border-b border-white/5">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-4">
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">What We Build For You</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tighter uppercase">AI Services</h2>
          <p class="text-slate-400 text-lg font-light max-w-2xl mx-auto">Enterprise-grade intelligence deployed across your operations — from raw data to real decisions.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in aiServices" :key="service.title"
            class="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.03] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-all -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all"
                :class="service.iconBg">
                {{ service.icon }}
              </div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/15 text-purple-400 text-[8px] font-black uppercase tracking-widest mb-4">
                {{ service.badge }}
              </div>
              <h3 class="text-base font-black text-white mb-3 leading-tight">{{ service.title }}</h3>
              <p class="text-xs text-slate-500 leading-relaxed mb-6">{{ service.desc }}</p>
              <ul class="space-y-2">
                <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2 text-[10px] text-slate-400">
                  <span class="w-1 h-1 rounded-full bg-purple-500 shrink-0"></span>
                  {{ feat }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA strip -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5">
          <div>
            <p class="text-lg font-black">Ready to deploy intelligence in your business?</p>
            <p class="text-sm text-slate-400 mt-1">Book a scoping call and we'll design a solution around your data.</p>
          </div>
          <button class="shrink-0 bg-purple-600 text-white px-10 py-4 rounded-xl font-bold text-sm hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 transition-all whitespace-nowrap">
            Request a Demo →
          </button>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
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
useSeoMeta({
  title: 'Axioms AI',
  ogTitle: 'Axioms AI — Indices Technology LTD',
  description: 'Axioms AI is the intelligence core of Indices Technology — offering RAG chatbots, predictive analytics, computer vision, document processing, and voice AI for African enterprises.',
  ogDescription: 'RAG chatbots, predictive analytics, computer vision, and voice AI — Axioms AI powers the INDICES ecosystem.',
  ogUrl: 'https://indicestech.com/tech/axioms',
})

const aiServices = [
  {
    title: 'Custom RAG Chatbot Development',
    icon: '🤖',
    iconBg: 'bg-purple-500/10 group-hover:bg-purple-600 group-hover:text-white',
    badge: 'Most Popular',
    desc: 'We build private, hallucination-free chatbots trained on your documents, SOPs, and internal knowledge base — deployed on your infrastructure.',
    features: ['PDF, database & API ingestion', 'Multi-language support', 'Role-based access control', 'White-label ready']
  },
  {
    title: 'Predictive Analytics & Forecasting',
    icon: '📈',
    iconBg: 'bg-blue-500/10 group-hover:bg-blue-600 group-hover:text-white',
    badge: 'Industrial',
    desc: 'Time-series models that predict equipment failure, demand surges, and yield outcomes before they happen — trained on your historical data.',
    features: ['Anomaly detection', 'Demand & yield forecasting', 'Maintenance scheduling', 'Dashboard integration']
  },
  {
    title: 'Computer Vision Systems',
    icon: '👁️',
    iconBg: 'bg-pink-500/10 group-hover:bg-pink-600 group-hover:text-white',
    badge: 'Edge AI',
    desc: 'Visual inspection, product quality control, and surveillance automation deployed on edge devices — no cloud latency, fully offline capable.',
    features: ['Defect & anomaly detection', 'People & object counting', 'NVIDIA Jetson deployment', 'Real-time alerts']
  },
  {
    title: 'AI-Powered Document Processing',
    icon: '📄',
    iconBg: 'bg-amber-500/10 group-hover:bg-amber-600 group-hover:text-white',
    badge: 'Automation',
    desc: 'Automate extraction, classification, and summarization of invoices, contracts, customs documents, and reports at scale.',
    features: ['OCR + LLM extraction', 'Contract clause analysis', 'Multilingual processing', 'ERP system integration']
  },
  {
    title: 'Voice & Conversational AI',
    icon: '🎙️',
    iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white',
    badge: 'NLP',
    desc: 'Build voice-first interfaces and multilingual call automation for customer support, field operations, and logistics dispatch.',
    features: ['African language support', 'Voice-to-action workflows', 'IVR replacement', 'Real-time transcription']
  },
  {
    title: 'AI Strategy & Integration Consulting',
    icon: '🧩',
    iconBg: 'bg-indigo-500/10 group-hover:bg-indigo-600 group-hover:text-white',
    badge: 'Consulting',
    desc: 'Not sure where to start? We audit your data pipeline, identify the highest-ROI AI use cases, and deliver a phased implementation roadmap.',
    features: ['Data readiness audit', 'Use-case prioritization', 'Vendor & model selection', 'Team training & handoff']
  }
]

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