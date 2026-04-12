<template>
  <div class="bg-slate-950 text-white min-h-screen font-sans antialiased">

    <!-- ── HERO ── -->
    <section class="relative pt-32 pb-16 px-5 overflow-hidden">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="max-w-3xl mx-auto text-center space-y-5 relative z-10">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em]">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          We respond within 24 hours
        </div>
        <h1 class="text-5xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
          Get in<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-serif italic lowercase">Touch.</span>
        </h1>
        <p class="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
          Tell us what you need — a new system, an integration, or just a question. We'll get back to you fast.
        </p>
      </div>
    </section>

    <!-- ── FORM + INFO ── -->
    <section class="py-12 px-5 pb-28">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">

        <!-- Left: contact info -->
        <div class="lg:col-span-2 space-y-8">
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.label"
              class="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03]">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" :class="info.iconBg">
                {{ info.icon }}
              </div>
              <div>
                <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{{ info.label }}</p>
                <component
                  :is="info.href ? 'a' : 'p'"
                  :href="info.href"
                  class="text-sm font-semibold text-slate-200 leading-relaxed"
                  :class="info.href ? 'hover:text-blue-400 transition-colors' : ''"
                >{{ info.value }}</component>
              </div>
            </div>
          </div>

          <!-- Service quick-select hint -->
          <div class="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5">
            <p class="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">Not sure where to start?</p>
            <p class="text-xs text-slate-400 leading-relaxed">
              Browse our <NuxtLink to="/services" class="text-blue-400 hover:underline">services page</NuxtLink> and mention the service name in the form — we'll tailor our response accordingly.
            </p>
          </div>
        </div>

        <!-- Right: form -->
        <div class="lg:col-span-3">
          <form @submit.prevent="submit" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full name *</label>
                <input v-model="form.name" type="text" required placeholder="John Doe"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"/>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email address *</label>
                <input v-model="form.email" type="email" required placeholder="you@company.com"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"/>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone number</label>
                <input v-model="form.phone" type="tel" placeholder="+234 800 000 0000"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"/>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service interested in</label>
                <select v-model="form.service"
                  class="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all appearance-none">
                  <option value="">Select a service…</option>
                  <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</label>
              <input v-model="form.subject" type="text" placeholder="Brief summary of your request"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all"/>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message *</label>
              <textarea v-model="form.message" required rows="5"
                placeholder="Describe what you need — the more detail, the better our response."
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all resize-none"></textarea>
            </div>

            <!-- Status messages -->
            <div v-if="status === 'success'"
              class="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
              ✅ Message sent! We'll reply to {{ form.email }} within 24 hours.
            </div>
            <div v-if="status === 'error'"
              class="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold">
              ❌ {{ errorMessage }}
            </div>

            <button type="submit" :disabled="loading"
              class="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-500 hover:scale-[1.01] transition-all shadow-2xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
              <span v-if="loading">Sending…</span>
              <span v-else>Send message →</span>
            </button>

            <p class="text-[10px] text-slate-600 text-center">
              Or email us directly at
              <a href="mailto:contactindices@gmail.com" class="text-slate-500 hover:text-blue-400 transition-colors">contactindices@gmail.com</a>
            </p>
          </form>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us',
  ogTitle: 'Contact Indices Technology LTD',
  description: 'Get in touch with Indices Technology LTD. RC7529506. Reach us at contactindices@gmail.com or +234 806 683 8217. We respond within 24 hours.',
  ogDescription: 'Reach Indices Technology LTD — email, phone, or our contact form. We respond within 24 hours.',
  ogUrl: 'https://indicestech.com/contact',
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const serviceOptions = [
  'Business Digital Setup',
  'E-commerce + Mobile App System',
  'Smart Business Management System',
  'AI-Powered Business Insights',
  'Smart Customer Engagement System',
  'Connectivity & Edge Systems',
  'Logistics & Delivery System',
  'Custom Business Solution',
  'Quick Fix / Integration',
  'General Enquiry',
]

const contactInfo = [
  {
    icon: '📧',
    iconBg: 'bg-blue-500/10',
    label: 'Email',
    value: 'contactindices@gmail.com',
    href: 'mailto:contactindices@gmail.com',
  },
  {
    icon: '📞',
    iconBg: 'bg-emerald-500/10',
    label: 'Phone / WhatsApp',
    value: '+234 806 683 8217',
    href: 'tel:+2348066838217',
  },
  {
    icon: '📍',
    iconBg: 'bg-purple-500/10',
    label: 'Registered Address',
    value: '1, Zion International School Plaza, Agingi, Jebba-Bassa, Plateau State, Nigeria',
    href: null,
  },
  {
    icon: '🏢',
    iconBg: 'bg-amber-500/10',
    label: 'Registration',
    value: 'RC7529506 · Indices Technology LTD',
    href: null,
  },
]

async function submit() {
  loading.value = true
  status.value = 'idle'
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    status.value = 'success'
    // Reset form
    Object.assign(form, { name: '', email: '', phone: '', service: '', subject: '', message: '' })
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.message || 'Something went wrong. Please try again or email us directly.'
  } finally {
    loading.value = false
  }
}
</script>
