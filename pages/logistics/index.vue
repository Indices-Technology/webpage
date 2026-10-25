<template>
  <main class="bg-white dark:bg-slate-950">
    <!-- Hero -->
    <section class="border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="grid lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-6">
            <p class="label mb-6">Logistics · Posta</p>

            <h1 class="text-5xl lg:text-6xl leading-[1.02] tracking-[-0.035em] mb-6">Posta</h1>

            <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-4">
              A logistics aggregator built on Nigeria's national postcode network. Parcels ride on trips people are
              already making, partner shops hand them on, and local couriers finish the last mile.
            </p>
            <p class="text-slate-500 dark:text-slate-500 leading-relaxed max-w-xl mb-10">
              For people sending a parcel, and for businesses that want delivery handled for them.
              <a href="https://marketx.africa" target="_blank" rel="noopener"
                class="text-ink dark:text-white border-b border-slate-300 hover:border-ink transition-colors">MarketX</a>
              is the first business client.
            </p>

            <div class="flex flex-wrap gap-3">
              <a v-if="postaLive" :href="POSTA_URL" class="btn-primary">
                Open Posta
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </a>
              <NuxtLink v-else to="/contact" class="btn-primary">
                Join the pilot
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
              <a href="#connect" class="btn-secondary">Connect your business</a>
            </div>
          </div>

          <!-- One real journey, not a dashboard of invented numbers -->
          <div class="lg:col-span-6">
            <div class="card overflow-hidden hover:border-slate-200 dark:hover:border-slate-800">
              <div class="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800">
                <p class="label">Parcel #1001 · Jos to Lagos</p>
                <span class="font-mono text-[11px] text-slate-400">every handover proven</span>
              </div>
              <ol class="p-5 space-y-5">
                <li v-for="(stop, i) in journey" :key="stop.title" class="flex gap-4">
                  <div class="flex flex-col items-center">
                    <span class="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <Icon :name="stop.icon" class="w-4 h-4 text-slate-500" />
                    </span>
                    <span v-if="i < journey.length - 1" class="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-1" />
                  </div>
                  <div class="pb-1">
                    <p class="font-medium text-sm">{{ stop.title }}</p>
                    <p class="font-mono text-xs text-slate-500 mt-0.5">{{ stop.where }}</p>
                    <p class="text-xs text-slate-500 mt-1">{{ stop.proof }}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label mb-5">How it works</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Two legs, one parcel</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Posta does not run a fleet. It matches parcels to trips already happening between cities, then hands
            them to couriers for the last stretch. Nobody needs to see the whole network: each person sees only
            what to collect, where, by when, and how to prove it.
          </p>
        </div>

        <ol class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <li v-for="(step, i) in steps" :key="step.title" class="bg-white dark:bg-slate-950 p-6">
            <p class="font-mono text-xs text-slate-400 mb-6">0{{ i + 1 }}</p>
            <Icon :name="step.icon" class="w-5 h-5 text-brand-600 dark:text-brand-400 mb-4" />
            <h3 class="text-lg mb-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Proof + postcode -->
    <section class="border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <p class="label mb-5">Proof at every handover</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">The receiver holds the code</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Whoever receives the parcel reads a six-digit code to whoever hands it over. A carrier can only have
            that code if they stood in front of the right person, so every step is recorded with who, where and when.
          </p>
          <ul class="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            <li v-for="rule in proofRules" :key="rule" class="flex gap-3 py-4 text-sm text-slate-600 dark:text-slate-400">
              <Icon name="lucide:check" class="w-4 h-4 mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
              {{ rule }}
            </li>
          </ul>
        </div>

        <div>
          <p class="label mb-5">Built on the national postcode</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Down to the building</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Every pickup, centre and delivery point is a national postcode, checked against the official registry.
            No more "behind the big church".
          </p>
          <div class="card p-6 hover:border-slate-200 dark:hover:border-slate-800">
            <div class="grid grid-cols-5 gap-2 text-center">
              <div v-for="seg in postcode" :key="seg.part">
                <p class="font-mono text-2xl sm:text-3xl font-semibold tracking-tight">{{ seg.part }}</p>
                <p class="label mt-2 !tracking-normal normal-case">{{ seg.means }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who it's for -->
    <section class="border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label mb-5">The network</p>
          <h2 class="text-3xl sm:text-4xl leading-[1.1]">Who Posta works with</h2>
        </div>

        <dl class="grid md:grid-cols-2 gap-x-16 divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800 md:divide-y-0">
          <div v-for="who in network" :key="who.title"
            class="flex gap-5 py-6 md:border-b md:border-slate-200 md:dark:border-slate-800">
            <Icon :name="who.icon" class="w-5 h-5 mt-0.5 shrink-0 text-slate-400" />
            <div>
              <dt class="font-semibold mb-1.5">{{ who.title }}</dt>
              <dd class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ who.desc }}</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>

    <!-- Axioms + third parties -->
    <section id="connect" class="bg-ink text-white scroll-mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div class="max-w-2xl mb-14">
          <p class="label !text-slate-500 mb-5">Connect</p>
          <h2 class="text-3xl sm:text-4xl mb-5 leading-[1.1]">Two doors into Posta</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            Posta is a provider on
            <NuxtLink to="/tech/axioms" class="text-white border-b border-white/30 hover:border-white transition-colors">Axioms</NuxtLink>,
            the shared layer through which Indices systems publish what they can do. Businesses can connect
            directly, and AI assistants such as Dasah reach Posta through Axioms.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 items-start mb-14">
          <div class="rounded-xl border border-white/10 p-8 overflow-x-auto">
            <pre class="font-mono text-xs leading-[1.9] text-slate-400"><span class="text-white">Clients</span>
 MarketX · any business
 Dasah · apps · AI agents
      │              │
 <span class="text-white">Posta API</span>        <span class="text-white">Axioms</span>
 API keys       capabilities
 webhooks       identity
      │         events
      └──────┬───────┘
             ▼
           <span class="text-white">Posta</span>
 travellers · couriers
 fulfilment centres
 GIG, DHL <span class="text-slate-600">(planned)</span></pre>
          </div>

          <dl class="divide-y divide-white/5 border-y border-white/5">
            <div v-for="door in doors" :key="door.title" class="flex gap-5 py-6">
              <Icon :name="door.icon" class="w-5 h-5 mt-0.5 shrink-0 text-slate-500" />
              <div>
                <dt class="font-semibold mb-1.5">{{ door.title }}</dt>
                <dd class="text-sm text-slate-400 leading-relaxed">{{ door.desc }}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div class="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          <div class="bg-ink p-6">
            <p class="label !text-brand-400 mb-5">Available now</p>
            <ul class="space-y-2.5">
              <li v-for="cap in capabilitiesNow" :key="cap.name" class="font-mono text-xs">
                <span class="text-white">{{ cap.name }}</span>
                <span class="text-slate-500"> · {{ cap.does }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-ink p-6">
            <p class="label !text-slate-500 mb-5">Next</p>
            <ul class="space-y-2.5">
              <li v-for="cap in capabilitiesNext" :key="cap.name" class="font-mono text-xs">
                <span class="text-slate-300">{{ cap.name }}</span>
                <span class="text-slate-600"> · {{ cap.does }}</span>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-slate-500 mt-6 max-w-2xl">
          Actions that move money or commit a delivery, such as booking, ask the person to confirm first.
          Answers never include handover codes or carriers' phone numbers.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-12 gap-10 items-end">
        <div class="lg:col-span-8">
          <p class="label mb-5">Pilot</p>
          <h2 class="text-3xl sm:text-4xl mb-4 leading-[1.1]">Deliver with us, or deliver through us</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            We are opening Posta city by city. Travellers, couriers, courier companies, shops that want to be
            fulfilment centres, and businesses that need deliveries can join the pilot now.
          </p>
        </div>
        <div class="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          <NuxtLink to="/contact" class="btn-primary">
            Talk to us
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink to="/tech/axioms" class="btn-secondary">About Axioms</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Flip postaLive to true once posta.indicestech.com is serving (see posta/docs/HOSTING.md).
const POSTA_URL = 'https://posta.indicestech.com'
const postaLive = false

useSeoMeta({
  title: 'Posta · Logistics',
  ogTitle: 'Posta: logistics on the national postcode network · Indices Technology LTD',
  description:
    'Posta is a logistics aggregator built on Nigeria\'s national postcode network. Parcels ride on trips already happening, partner shops hand them on, and couriers finish the last mile, with proof at every handover.',
  ogDescription:
    'Parcels ride on trips already happening, with proof at every handover. Built on the national postcode. Connects through Axioms.',
  ogUrl: 'https://indicestech.com/logistics',
})

const journey = [
  { icon: 'lucide:package', title: 'Booked in Jos', where: 'PL-01-A01-TM-01', proof: 'Matched to John, already driving to Lagos' },
  { icon: 'lucide:car', title: 'Collected by John', where: 'Terminus, Jos', proof: 'Sender read John the pickup code' },
  { icon: 'lucide:store', title: 'At a Lagos fulfilment centre', where: 'LA-02-A01-YB-01', proof: 'Shop read John the handover code' },
  { icon: 'lucide:bike', title: 'Delivered by a courier', where: 'Recipient\'s door', proof: 'Recipient read the courier their code' },
]

const steps = [
  { icon: 'lucide:map-pin', title: 'Book with a postcode', desc: 'Sender, recipient, what it is and its size. The pickup and delivery points are national postcodes.' },
  { icon: 'lucide:route', title: 'Matched to a trip', desc: 'The first traveller going the same way with room takes it. They get one link on WhatsApp: no app, no account.' },
  { icon: 'lucide:store', title: 'Handed to a centre', desc: 'A partner shop near the recipient receives it and confirms with its code.' },
  { icon: 'lucide:bike', title: 'Last mile by a courier', desc: 'The least busy approved courier in the city takes it to the door. The recipient tracks it from a link.' },
]

const proofRules = [
  'The code can only come from the person receiving the parcel.',
  'Five wrong codes lock the job and alert Posta staff.',
  'The recipient\'s code is on their tracking page, never in the carrier\'s link.',
  'Each step is stamped with the postcode, the time and who did it.',
]

const postcode = [
  { part: 'FC', means: 'State' },
  { part: '01', means: 'LGA' },
  { part: 'A01', means: 'District' },
  { part: 'KP', means: 'Area' },
  { part: '27', means: 'Building' },
]

const network = [
  { icon: 'lucide:package', title: 'People sending parcels', desc: 'Book in a few taps, share a tracking link with the recipient on WhatsApp.' },
  { icon: 'lucide:building-2', title: 'Businesses', desc: 'Hand Posta your deliveries through the API. You keep your own checkout and payments; Posta handles the movement. MarketX is first.' },
  { icon: 'lucide:car', title: 'Travellers', desc: 'Already driving between cities? Post the trip and carry parcels going your way.' },
  { icon: 'lucide:bike', title: 'Couriers', desc: 'On a bike, car or van. Apply, get approved, receive jobs in your city.' },
  { icon: 'lucide:truck', title: 'Courier companies', desc: 'Your riders take Posta jobs. Receive them on WhatsApp, or in your own system through signed webhooks.' },
  { icon: 'lucide:store', title: 'Fulfilment centres', desc: 'Shops that receive and hand on parcels. Register from the shop in one minute; Posta staff approve.' },
]

const doors = [
  {
    icon: 'lucide:key-round',
    title: 'Posta API, for businesses',
    desc: 'Get prices, book, track. Updates arrive as signed webhooks your system can verify. The same API MarketX uses: no private shortcuts.',
  },
  {
    icon: 'lucide:network',
    title: 'Through Axioms, for assistants and apps',
    desc: 'Posta publishes capabilities on Axioms. Dasah, and approved third-party apps and AI agents, call them on a person\'s behalf, with that person\'s identity and consent.',
  },
  {
    icon: 'lucide:webhook',
    title: 'For courier companies',
    desc: 'Jobs arrive as signed webhooks. Your riders open the job link and prove each handover with the same codes as everyone else.',
  },
]

const capabilitiesNow = [
  { name: 'posta.list_parcels@1', does: 'my parcels and where each one is' },
  { name: 'posta.get_parcel_status@1', does: '"has my parcel been handed over?"' },
]

const capabilitiesNext = [
  { name: 'posta.quote@1', does: 'price a delivery between two postcodes' },
  { name: 'posta.book_shipment@1', does: 'book it, after the person confirms' },
  { name: 'events', does: 'parcel.matched · handover.completed · parcel.delivered' },
]
</script>
