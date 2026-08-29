<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { init } = useTheme()
onMounted(() => init())

// Global OG defaults — individual pages override title/description
useSeoMeta({
  ogType: 'website',
  ogSiteName: 'Indices Technology LTD',
  twitterCard: 'summary_large_image',
})

// Organisation structured data (JSON-LD)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Indices Technology LTD',
        alternateName: 'INDICES',
        url: 'https://indicestech.com',
        logo: 'https://indicestech.com/favicon.svg',
        description:
          'A vertically integrated technology group operating across seven sectors: Industrial Technology, Agribusiness, Logistics, Security, Education & Training, Community Outreach, and Software & Digital services.',
        foundingDate: '2023',
        identifier: 'RC7529506',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1, Zion International School Plaza, Agingi',
          addressLocality: 'Jebba-Bassa',
          addressRegion: 'Plateau State',
          addressCountry: 'NG',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+2348066838217',
          contactType: 'customer service',
          email: 'contactindices@gmail.com',
          availableLanguage: 'English',
        },
        sameAs: [
          'https://www.linkedin.com/company/110836287',
          'https://marketx.africa',
          'https://stylex.indicestech.com',
        ],
      }),
    },
  ],
})
</script>
