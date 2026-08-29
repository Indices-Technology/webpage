<template>
  <div class="bg-slate-950 text-white min-h-screen font-sans antialiased">

    <!-- ── HERO ── -->
    <section class="pt-32 pb-12 px-5 border-b border-white/5">
      <div class="max-w-3xl mx-auto">
        <p class="label !text-slate-500 mb-6">Last updated {{ updated }}</p>
        <h1 class="text-4xl sm:text-5xl mb-5 leading-[1.05]">{{ title }}</h1>
        <p class="text-lg text-slate-400 leading-relaxed">{{ intro }}</p>
      </div>
    </section>

    <!-- ── BODY ── -->
    <section class="py-16 px-5 pb-28">
      <div class="max-w-3xl mx-auto space-y-12">
        <section v-for="(section, i) in sections" :key="section.heading" :id="section.id" class="scroll-mt-24 space-y-4">
          <h2 class="text-lg flex items-baseline gap-4">
            <span class="font-mono text-[11px] text-slate-600 shrink-0 tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ section.heading }}
          </h2>
          <p v-for="(para, p) in section.body" :key="p" class="text-sm text-slate-400 leading-relaxed">
            {{ para }}
          </p>
          <ul v-if="section.list" class="space-y-2.5 pl-1">
            <li v-for="item in section.list" :key="item" class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
              <span class="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- Contact block -->
        <div class="p-8 rounded-xl border border-white/10 space-y-3">
          <p class="label !text-slate-500">Questions about this document</p>
          <p class="text-sm text-slate-400 leading-relaxed">
            Write to us and we'll respond. For data protection requests, please put "Data Request" in the subject line.
          </p>
          <div class="pt-2 space-y-1.5 text-sm">
            <a href="mailto:contactindices@gmail.com" class="block text-blue-400 hover:text-blue-300 transition-colors font-semibold">contactindices@gmail.com</a>
            <a href="tel:+2348066838217" class="block text-blue-400 hover:text-blue-300 transition-colors font-semibold">+234 806 683 8217</a>
            <p class="text-slate-500 text-xs leading-relaxed pt-2">
              Indices Technology LTD · RC7529506<br/>
              1, Zion International School Plaza, Agingi,<br/>
              Jebba-Bassa, Plateau State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  updated: { type: String, required: true },
  intro: { type: String, required: true },
  sections: { type: Array, required: true },
})
</script>
