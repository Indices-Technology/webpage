<template>
  <main>
    <SectionHero 
      title="Outreach & Impact" 
      subtitle="Building a sustainable future through community empowerment, evangelism, and strategic philanthropy."
      bg-class="bg-emerald-50/50"
      decorator-class="bg-emerald-600"
    >
      <template #actions>
        <NuxtLink to="/contact" class="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-emerald-900/20 shadow-lg">
          Get involved
        </NuxtLink>
      </template>
    </SectionHero>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SolutionCard 
          v-for="item in impactSolutions" 
          :key="item.title"
          v-bind="item"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Outreach & Impact',
  ogTitle: 'Outreach & Impact — Indices Technology LTD',
  description: 'Indices Outreach & Impact arm drives community empowerment, strategic philanthropy, and digital evangelism to create lasting social value across Nigeria and Africa.',
  ogDescription: 'Community empowerment, strategic philanthropy, and digital evangelism — Indices Outreach & Impact.',
  ogUrl: 'https://indicestech.com/outreach',
})

const impactSolutions = [
  { 
    title: 'Community Empowerment', 
    description: 'Planned: investment in infrastructure and job creation in the host communities of future industrial sites.',
    icon: '🤝',
    focus: 'Social License'
  },
  { 
    title: 'Strategic Philanthropy', 
    description: 'Planned: targeted grants for health, nutrition, and early-childhood education through a proposed Agri-impact fund.',
    icon: '🎁',
    focus: 'Direct Intervention'
  },
  { 
    title: 'Digital Evangelism', 
    description: 'Leveraging technology to spread knowledge, ethics, and connectivity to underserved regions.', 
    icon: '📢',
    focus: 'Inspirational Growth'
  }
]
</script>