<template>
  <main>
    <SectionHero 
      title="Industrial Real Estate" 
      subtitle="Developing the physical foundations for Africa's industrial and technological expansion."
      bg-class="bg-zinc-50"
      decorator-class="bg-zinc-400"
    >
      <template #actions>
        <button class="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold">Lease Facilities</button>
        <button class="border border-zinc-300 px-8 py-4 rounded-xl font-bold bg-white">Development Map</button>
      </template>
    </SectionHero>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SolutionCard 
          v-for="item in estateSolutions" 
          :key="item.title"
          v-bind="item"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const estateSolutions = [
  { 
    title: 'Smart Warehousing', 
    description: 'IoT-enabled storage facilities designed for high-efficiency logistics and cold chain.', 
    icon: '🏗️',
    focus: 'Automated Storage'
  },
  { 
    title: 'Agri-Industrial Parks', 
    description: 'Integrated zones combining primary production with high-tech processing units.', 
    icon: '🚜',
    focus: 'Value-Chain Hubs'
  },
  { 
    title: 'Tech Hubs', 
    description: 'Sustainable office and data center environments powered by Indices Renewable Energy.', 
    icon: '🏢',
    focus: 'Green Infrastructure'
  }
]
</script>