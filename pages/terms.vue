<template>
  <LegalDoc
    title="Terms of Service"
    :updated="updated"
    :intro="intro"
    :sections="sections"
  />
</template>

<script setup>
useSeoMeta({
  title: 'Terms of Service',
  ogTitle: 'Terms of Service — Indices Technology LTD',
  description: 'The terms governing use of indicestech.com and engagement of Indices Technology LTD for technology, agribusiness, logistics, security, education and software services.',
  ogDescription: 'Terms governing use of indicestech.com and engagement of Indices Technology LTD services.',
  ogUrl: 'https://indicestech.com/terms',
})

const updated = '29 August 2026'

const intro = 'These terms govern your use of indicestech.com. They are not the contract for our services — that is agreed separately in writing for each engagement — but they set out the basis on which this website is provided.'

const sections = [
  {
    id: 'about',
    heading: 'About these terms',
    body: [
      'This website is operated by Indices Technology LTD, a company registered in Nigeria under RC7529506. By using the site you accept these terms. If you do not accept them, please do not use the site.',
      'We may update these terms as our business changes. The date at the top reflects the current version, and continued use of the site after an update means you accept the revised terms.',
    ],
  },
  {
    id: 'website-use',
    heading: 'Using this website',
    body: [
      'You may browse the site, and read, download and print its content for your own information or to evaluate working with us. In doing so you agree not to:',
    ],
    list: [
      'Use the site for any unlawful purpose, or in a way that could damage, disable or impair it.',
      'Attempt to gain unauthorised access to the site, its server, or any connected system.',
      'Scrape, harvest or systematically extract content or contact details for bulk marketing.',
      'Submit false information, or impersonate another person or organisation, through our contact form.',
      'Republish or redistribute our content commercially without our written permission.',
    ],
  },
  {
    id: 'ip',
    heading: 'Intellectual property',
    body: [
      'The content of this website — text, design, graphics, logos, the INDICES and Axioms marks, and the underlying code — is owned by Indices Technology LTD or used under licence, and is protected by Nigerian and international intellectual property law.',
      'Nothing on this site transfers any right or licence in our intellectual property to you, beyond the limited permission to view and reference content described above. Where third-party names or marks appear, they remain the property of their respective owners.',
    ],
  },
  {
    id: 'information',
    heading: 'Information on this site',
    body: [
      'The site describes our capabilities, products and areas of operation for general information. Descriptions of our platforms — including Axioms, Dasah and marketx — cover both features available today and the architectural direction we are building toward, and are not a commitment that any particular feature is available to you at a given time.',
      'Nothing on this site is professional, technical, legal or financial advice, and nothing on it is an offer capable of acceptance or a binding quotation. We take care to keep the site accurate, but we do not warrant that it is complete, current, or error-free.',
    ],
  },
  {
    id: 'enquiries',
    heading: 'Enquiries and communication',
    body: [
      'Submitting the contact form does not create a client relationship or any obligation on either side. We aim to respond to enquiries promptly, but we do not guarantee a response, and we may decline any enquiry.',
      'Please do not send confidential or sensitive information through the contact form. If you need to share something confidential, ask us and we will arrange an appropriate channel or a non-disclosure agreement first.',
      'Personal data you submit is handled in accordance with our Privacy Policy.',
    ],
  },
  {
    id: 'services',
    heading: 'Services and engagements',
    body: [
      'Our services are provided under a separate written agreement — a proposal, statement of work, service agreement or purchase order — signed by both parties. That agreement governs scope, deliverables, timelines, fees, intellectual property in the work, warranties, data processing terms and liability for the engagement.',
      'Where these website terms conflict with a signed engagement agreement, the engagement agreement prevails for that engagement.',
      'Our products, including marketx and Dasah, have their own terms of use, which apply to your use of those products in addition to any agreement with us.',
    ],
  },
  {
    id: 'third-party',
    heading: 'Third-party links and platforms',
    body: [
      'This site links to platforms we operate and to third-party websites. We do not control third-party sites and are not responsible for their content, availability, or practices. A link is not an endorsement, and your use of any linked site is at your own risk and subject to that site’s terms.',
    ],
  },
  {
    id: 'availability',
    heading: 'Availability',
    body: [
      'We provide this website on an "as available" basis. We may change, suspend or withdraw any part of it, at any time, without notice. We are not liable to you if the site is unavailable at any time or for any period.',
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    body: [
      'To the fullest extent permitted by Nigerian law, Indices Technology LTD is not liable for any indirect, incidental, special or consequential loss, or for loss of profit, revenue, business, goodwill or data, arising from your use of, or inability to use, this website or reliance on its content.',
      'Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded.',
    ],
  },
  {
    id: 'indemnity',
    heading: 'Indemnity',
    body: [
      'You agree to indemnify Indices Technology LTD against claims, losses and reasonable costs arising from your breach of these terms or your unlawful use of this website.',
    ],
  },
  {
    id: 'law',
    heading: 'Governing law',
    body: [
      'These terms, and any dispute arising out of or in connection with them or with this website, are governed by the laws of the Federal Republic of Nigeria. The courts of Nigeria have exclusive jurisdiction, and the parties will attempt to resolve any dispute in good faith before commencing proceedings.',
    ],
  },
  {
    id: 'severability',
    heading: 'Severability',
    body: [
      'If any provision of these terms is found to be unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will stay in full force.',
    ],
  },
]
</script>
