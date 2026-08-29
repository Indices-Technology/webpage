<template>
  <main class="bg-ink text-white">
    <!-- Hero -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="grid lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-6">
            <p class="label !text-slate-500 mb-6">Intelligent infrastructure</p>

            <h1 class="text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.035em] mb-6">
              Axioms
            </h1>

            <p class="text-xl text-slate-400 leading-relaxed max-w-xl mb-10">
              The intelligent infrastructure arm of Indices Technology — conversational AI, machine intelligence,
              edge computing, IoT and secure digital infrastructure, built as one shared layer instead of
              isolated AI systems bolted onto each product.
            </p>

            <div class="flex flex-wrap gap-3">
              <NuxtLink to="/contact" class="btn-primary">
                Talk to Dasah
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
              <a href="#architecture" class="btn-ghost-dark">See the architecture</a>
            </div>
          </div>

          <!-- Capability trace, not a fake chat window -->
          <div class="lg:col-span-6">
            <div class="rounded-xl border border-white/10 overflow-hidden">
              <div class="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <p class="label !text-slate-500">Dasah · capability trace</p>
                <span class="font-mono text-[11px] text-slate-600">one interface, many systems</span>
              </div>

              <div class="p-5 space-y-5">
                <div>
                  <p class="label !text-slate-600 mb-2">Asked</p>
                  <p class="text-sm text-slate-200 leading-relaxed">
                    "Where is my order from the Kaduna seller, and is that seller verified?"
                  </p>
                </div>

                <div>
                  <p class="label !text-slate-600 mb-2">Resolved</p>
                  <ul class="font-mono text-xs space-y-1.5 text-slate-400">
                    <li v-for="call in traceCalls" :key="call" class="flex items-center gap-2.5">
                      <Icon name="lucide:corner-down-right" class="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      {{ call }}
                    </li>
                  </ul>
                </div>

                <div class="pt-4 border-t border-white/5">
                  <p class="label !text-slate-600 mb-2">Answered</p>
                  <p class="text-sm text-slate-300 leading-relaxed">
                    Order <span class="font-mono text-white">#4821</span> left the Kaduna hub this morning and is
                    out for delivery. The seller is verified, with a trust score of 92.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Positioning -->
    <section class="border-b border-white/5">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-24">
        <p class="label !text-slate-500 mb-6">What Axioms is</p>
        <p class="text-2xl sm:text-[1.75rem] leading-snug text-slate-200 mb-6 tracking-[-0.02em]">
          Rather than building isolated AI systems for each product, Axioms provides a
          <span class="text-white">shared intelligence layer</span> through which applications expose
          capabilities, exchange events and access intelligent services.
        </p>
        <p class="text-lg text-slate-400 leading-relaxed">
          At its centre is <span class="text-white">Dasah</span> — a universal conversational interface
          through which people and systems interact with capabilities across the Indices ecosystem.
          <a href="https://marketx.africa" target="_blank" rel="noopener"
            class="text-white border-b border-white/30 hover:border-white transition-colors">MarketX</a>
          is one of the first clients of this infrastructure; future Indices platforms connect to the same
          underlying intelligence.
        </p>
      </div>
    </section>

    <!-- Architecture -->
    <section id="architecture" class="border-b border-white/5 scroll-mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">How it fits together</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Architecture</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            Dasah is not a chatbot for one product. It is the conversational layer of Axioms, and every Indices
            platform is a client of the same infrastructure.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <div class="rounded-xl border border-white/10 p-8 overflow-x-auto">
            <pre class="font-mono text-xs leading-[1.9] text-slate-400"><span class="text-white">Axioms</span>
   │
   └── <span class="text-white">Dasah</span>  <span class="text-slate-600">— conversational layer</span>
        │
        ├── MarketX
        ├── Logistics
        ├── Security
        ├── IoT
        ├── Edge systems
        └── Future Indices platforms</pre>
          </div>

          <dl class="divide-y divide-white/5 border-y border-white/5">
            <div v-for="layer in architectureLayers" :key="layer.title" class="flex gap-5 py-6">
              <Icon :name="layer.icon" class="w-5 h-5 mt-0.5 shrink-0 text-slate-500" />
              <div>
                <dt class="font-semibold mb-1.5">{{ layer.title }}</dt>
                <dd class="text-sm text-slate-400 leading-relaxed">{{ layer.desc }}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Capability layer -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">The contract</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Capabilities, not tightly coupled apps</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            Every system publishes what it can do as a named, versioned capability. Dasah never needs to understand
            the internals of MarketX, a logistics hub or an edge device — it asks Axioms for the capability.
            New Indices products can be added without rebuilding Dasah.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          <div v-for="ns in capabilities" :key="ns.namespace" class="bg-ink p-6">
            <div class="flex items-center gap-2.5 mb-5">
              <Icon :name="ns.icon" class="w-4 h-4 text-slate-500" />
              <span class="font-mono text-xs text-white">{{ ns.namespace }}</span>
            </div>
            <ul class="space-y-2">
              <li v-for="tool in ns.tools" :key="tool" class="font-mono text-xs text-slate-500">
                {{ tool }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Event fabric -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <p class="label !text-slate-500 mb-5">The nervous system</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Event-driven by design</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            Systems in the ecosystem emit events rather than calling each other directly. Those events trigger
            workflows, notifications, analytics and AI reasoning — which is what turns a set of applications into
            an ecosystem instead of a web of hidden dependencies.
          </p>
        </div>

        <ul class="lg:col-span-7 grid sm:grid-cols-2 gap-2">
          <li v-for="evt in events" :key="evt"
            class="font-mono text-xs px-4 py-3 rounded-lg border border-white/10 text-slate-300">
            {{ evt }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Intelligence vs orchestration -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">A deliberate separation</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Intelligence is not orchestration</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            An automation platform is not the brain. Dasah decides what should happen; a workflow layer makes sure
            it happens reliably.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-white/10 p-8">
            <p class="label !text-brand-400 mb-4">Decides</p>
            <h3 class="text-xl mb-3">Dasah</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-6">
              Understands intent, holds conversational state, selects capabilities and reasons over results.
            </p>
            <ul class="space-y-3">
              <li v-for="item in decidesList" :key="item" class="flex gap-3 text-sm text-slate-400">
                <Icon name="lucide:check" class="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="rounded-xl border border-white/10 p-8">
            <p class="label !text-slate-500 mb-4">Executes</p>
            <h3 class="text-xl mb-3">Workflow layer</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-6">
              Durable execution, retries, scheduling and long-running processes — replaceable, and never the
              foundation of the intelligence itself.
            </p>
            <ul class="space-y-3">
              <li v-for="item in executesList" :key="item" class="flex gap-3 text-sm text-slate-400">
                <Icon name="lucide:check" class="w-4 h-4 mt-0.5 shrink-0 text-slate-600" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Capability domains -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">What we build</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Capability domains</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            The disciplines Axioms covers — deployed inside the Indices ecosystem, and available to partners
            who need the same infrastructure.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          <div v-for="domain in domains" :key="domain.title" class="bg-ink p-8">
            <Icon :name="domain.icon" class="w-5 h-5 text-slate-500 mb-6" />
            <h3 class="font-semibold text-white mb-2.5 leading-snug">{{ domain.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-6">{{ domain.desc }}</p>
            <ul class="space-y-1.5">
              <li v-for="feat in domain.features" :key="feat" class="font-mono text-[11px] text-slate-600">
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6 p-8 rounded-xl border border-white/10">
          <div>
            <p class="font-semibold mb-1">Want your systems to speak this language?</p>
            <p class="text-sm text-slate-400">Book a scoping call and we'll map your data, capabilities and events.</p>
          </div>
          <NuxtLink to="/contact" class="btn-primary shrink-0">
            Talk to us
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Engineering principles -->
    <section class="border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">Built to be inherited</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Engineering principles</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            What we build now is infrastructure that future teams will inherit. The goal isn't a heavyweight
            enterprise architecture on day one — it's avoiding the hidden coupling that becomes a nightmare later.
          </p>
        </div>

        <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-px">
          <li v-for="(p, i) in principles" :key="p"
            class="flex items-baseline gap-4 py-4 border-b border-white/5 text-sm text-slate-300">
            <span class="font-mono text-[11px] text-slate-600 tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ p }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Technology direction -->
    <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">Technology direction</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">The stack, and why</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            Languages are chosen for the work they do, not for fashion. The Axioms backend is a service in its own
            right — interfaces are clients of it, never its foundation.
          </p>
        </div>

        <dl class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          <div v-for="tech in techStack" :key="tech.title" class="pt-6 border-t border-white/10">
            <dt class="font-semibold mb-3">{{ tech.title }}</dt>
            <dd class="text-sm text-slate-400 leading-relaxed mb-4">{{ tech.desc }}</dd>
            <dd class="font-mono text-[11px] text-slate-600">{{ tech.tags.join(' · ') }}</dd>
          </div>
        </dl>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Axioms — Intelligent Infrastructure',
  ogTitle: 'Axioms — Intelligent Infrastructure | Indices Technology LTD',
  description: 'Axioms is the intelligent infrastructure arm of Indices Technology, bringing together conversational AI, machine intelligence, edge computing, IoT and secure digital infrastructure. At its centre is Dasah, a universal conversational interface to capabilities across the Indices ecosystem.',
  ogDescription: 'A shared intelligence layer for the Indices ecosystem — capabilities, events and Dasah, the universal conversational interface.',
  ogUrl: 'https://indicestech.com/tech/axioms',
})

const traceCalls = [
  'marketx.get_order',
  'marketx.get_seller',
  'logistics.track_delivery',
]

const architectureLayers = [
  {
    title: 'Axioms — the infrastructure',
    icon: 'lucide:layers',
    desc: 'The shared intelligence and interaction layer of Indices. It owns the capability registry, the event fabric, identity and the intelligent services every platform draws on.'
  },
  {
    title: 'Dasah — the conversational layer',
    icon: 'lucide:message-square',
    desc: 'The universal interface to Axioms. People and systems speak to it in text, voice and eventually other modalities; Dasah works out what is needed and reaches for the right capability.'
  },
  {
    title: 'Clients — the platforms',
    icon: 'lucide:plug',
    desc: 'MarketX, logistics, security, IoT and edge systems connect as clients. MarketX is the first major use case for Dasah, not its owner — new platforms plug in without rebuilding it.'
  }
]

const capabilities = [
  { namespace: 'marketx.*',   icon: 'lucide:shopping-cart', tools: ['get_order', 'get_seller', 'get_trust_score'] },
  { namespace: 'logistics.*', icon: 'lucide:truck',         tools: ['track_delivery', 'get_route', 'assign_dispatch'] },
  { namespace: 'security.*',  icon: 'lucide:shield',        tools: ['get_alerts', 'get_incident', 'verify_access'] },
  { namespace: 'iot.*',       icon: 'lucide:radio',         tools: ['get_sensor', 'list_devices', 'set_threshold'] },
  { namespace: 'edge.*',      icon: 'lucide:cpu',           tools: ['get_device_status', 'deploy_model', 'sync_state'] },
  { namespace: 'knowledge.*', icon: 'lucide:book-open',     tools: ['search_documents', 'summarize', 'cite_source'] }
]

const events = [
  'order.completed',
  'seller.verified',
  'payment.completed',
  'delivery.updated',
  'device.alert',
  'trust.score.changed'
]

const decidesList = [
  'Intent understanding across text and voice',
  'Conversation and session state',
  'Capability selection and tool calling',
  'Reasoning over results and context',
  'Access decisions on behalf of the user'
]

const executesList = [
  'Durable, retryable execution',
  'Long-running and scheduled processes',
  'Fan-out to downstream services',
  'Visual automation for external integrations',
  'Swappable — the intelligence does not depend on it'
]

const domains = [
  {
    title: 'Conversational AI',
    icon: 'lucide:message-square',
    desc: 'The universal interface layer — text and voice interaction that resolves intent and routes it to capabilities across the ecosystem.',
    features: ['Text and voice', 'African languages', 'Tool calling', 'Session state']
  },
  {
    title: 'Machine Learning & Forecasting',
    icon: 'lucide:trending-up',
    desc: 'Models that predict equipment failure, demand surges and yield outcomes before they happen — trained on operational data from across the group.',
    features: ['Anomaly detection', 'Demand forecasting', 'Maintenance scheduling']
  },
  {
    title: 'RAG & Knowledge Systems',
    icon: 'lucide:book-open',
    desc: 'Retrieval-augmented reasoning over private documents, SOPs and databases, so answers carry citations instead of confidence alone.',
    features: ['Vector retrieval', 'Source citation', 'Role-based access']
  },
  {
    title: 'Edge AI',
    icon: 'lucide:cpu',
    desc: 'Local model execution on farm, mining and field hardware — decisions that survive a lost connection and sync when the link returns.',
    features: ['On-device inference', 'Offline-first sync', 'Remote deployment']
  },
  {
    title: 'IoT & Telemetry',
    icon: 'lucide:radio',
    desc: 'Real-time telemetry from sensor fleets — soil health, livestock vitals, vehicle position, facility conditions — normalised into shared event streams.',
    features: ['MQTT device fabric', 'Device registry', 'Threshold rules']
  },
  {
    title: 'Computer Vision',
    icon: 'lucide:scan-eye',
    desc: 'Visual inspection, quality control and surveillance automation running at the edge, where the cameras are.',
    features: ['Defect detection', 'Object counting', 'Real-time alerting']
  },
  {
    title: 'Document Intelligence',
    icon: 'lucide:file-text',
    desc: 'Extraction, classification and summarisation of invoices, contracts, customs papers and reports — at the volume real operations produce.',
    features: ['OCR + LLM extraction', 'Clause analysis', 'ERP integration']
  },
  {
    title: 'Secure Digital Infrastructure',
    icon: 'lucide:shield-check',
    desc: 'Identity, authorisation, auditability and observability across every capability call — security as a property of the platform, not an afterthought.',
    features: ['Auth and access control', 'Audit trails', 'Model and data isolation']
  },
  {
    title: 'APIs, Integration & Automation',
    icon: 'lucide:workflow',
    desc: 'Versioned APIs, capability schemas and event contracts that let internal platforms and third-party systems join the ecosystem cleanly.',
    features: ['Versioned APIs', 'Capability schemas', 'Workflow automation']
  }
]

const techStack = [
  {
    title: 'TypeScript core',
    desc: 'Axioms and Dasah live where APIs, realtime communication, tool calling, auth, events and workflows meet — the work TypeScript is genuinely good at.',
    tags: ['Services', 'Realtime', 'Tool calling']
  },
  {
    title: 'Interfaces as clients',
    desc: 'Nuxt and Vue front-ends are clients of the Axioms backend, not its foundation. The intelligence is reachable from any surface, not trapped in a web app.',
    tags: ['Nuxt', 'Vue', 'Decoupled']
  },
  {
    title: 'Python for ML',
    desc: 'A specialised layer for machine learning, computer vision and scientific workloads — behind clear service boundaries rather than woven through the core.',
    tags: ['ML', 'Vision', 'Research']
  },
  {
    title: 'Go and Rust at the edge',
    desc: 'Introduced where edge, networking, security or performance requirements genuinely justify them — and not before.',
    tags: ['Edge', 'Networking', 'Performance']
  }
]

const principles = [
  'Clear service boundaries',
  'Explicit contracts',
  'Versioned APIs',
  'Capability & tool schemas',
  'Event contracts',
  'Authentication & authorisation',
  'Observability',
  'Auditability',
  'Documentation',
  'Replaceable components',
  'Database ownership boundaries',
  'Architecture Decision Records'
]
</script>
