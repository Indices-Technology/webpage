<template>
  <LegalDoc
    title="Privacy Policy"
    :updated="updated"
    :intro="intro"
    :sections="sections"
  />
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy',
  ogTitle: 'Privacy Policy — Indices Technology LTD',
  description: 'How Indices Technology LTD collects, uses, stores and protects personal data across indicestech.com and our products, in line with the Nigeria Data Protection Act 2023.',
  ogDescription: 'How Indices Technology LTD handles personal data — what we collect, why, how long we keep it, and your rights under the NDPA.',
  ogUrl: 'https://indicestech.com/privacy',
})

const updated = '29 August 2026'

const intro = 'Indices Technology LTD ("Indices", "we", "us") is the data controller for personal data collected through indicestech.com. This policy explains what we collect, why, how long we keep it, and what you can ask us to do with it.'

const sections = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    body: [
      'Indices Technology LTD is a company registered in Nigeria under RC7529506, with its registered office at 1, Zion International School Plaza, Agingi, Jebba-Bassa, Plateau State, Nigeria.',
      'We process personal data in line with the Nigeria Data Protection Act 2023 (NDPA). Where we serve clients or visitors in other jurisdictions, we apply equivalent standards.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What we collect',
    body: [
      'We keep collection deliberately narrow. On this website, we collect only what you send us:',
    ],
    list: [
      'Contact form submissions — your name, email address, and optionally your phone number, subject, service of interest and the content of your message.',
      'Direct correspondence — anything you include when you email or call us.',
      'Technical logs — our hosting provider records standard server logs (IP address, browser type, pages requested, timestamps) for security and reliability.',
    ],
  },
  {
    id: 'what-we-dont',
    heading: 'What we do not do',
    body: [
      'We do not run advertising or analytics trackers on this website, and we do not set marketing cookies. We do not sell, rent or trade personal data to anyone.',
      'The only thing this site stores in your browser is a single preference value recording whether you chose light or dark mode. It is kept in your browser’s local storage, is never sent to us, and you can clear it at any time through your browser settings.',
    ],
  },
  {
    id: 'why',
    heading: 'Why we process your data',
    body: [
      'We rely on the following lawful bases under the NDPA:',
    ],
    list: [
      'Consent — when you choose to submit the contact form or write to us, so that we can reply.',
      'Legitimate interest — keeping our systems secure, preventing abuse, and maintaining ordinary business records.',
      'Contract — where you become a client, to deliver, support and invoice the services agreed between us.',
      'Legal obligation — where Nigerian law requires us to retain records.',
    ],
  },
  {
    id: 'how-we-handle',
    heading: 'How enquiries are handled',
    body: [
      'Contact form submissions are delivered to our company inbox by email over an encrypted connection. They are read by the people at Indices responsible for responding, and are not used for automated decision-making or profiling.',
      'If your enquiry concerns a specific service, it may be shared internally with the relevant team so that the right person answers you.',
    ],
  },
  {
    id: 'client-data',
    heading: 'Data we process for clients',
    body: [
      'When we build or operate systems for a client — including Axioms and Dasah deployments — the client is the data controller for the data in those systems, and Indices acts as a data processor on their instructions.',
      'Those engagements are governed by the written agreement and data processing terms signed with that client, which take precedence over this policy for that data. We do not use client data to train models for other clients, and we do not move it outside the agreed environment without written instruction.',
    ],
  },
  {
    id: 'sharing',
    heading: 'Who we share data with',
    body: [
      'We share personal data only with service providers that make our operations possible, and only to the extent needed:',
    ],
    list: [
      'Our website hosting and email providers, which process data on our behalf.',
      'Professional advisers (legal, accounting) where necessary and under a duty of confidence.',
      'Regulators or law enforcement, where we are legally required to respond to a valid request.',
    ],
  },
  {
    id: 'retention',
    heading: 'How long we keep it',
    body: [
      'Enquiries that do not become a business relationship are kept for up to 24 months, so that we have context if you contact us again, and are then deleted.',
      'Records relating to clients and contracts are kept for as long as the relationship lasts and afterwards for the period Nigerian tax and company law requires.',
      'You can ask us to delete your enquiry sooner, and we will unless we are legally required to keep it.',
    ],
  },
  {
    id: 'security',
    heading: 'How we protect it',
    body: [
      'The website is served over HTTPS, and enquiry email is transmitted over encrypted connections. Access to our inbox and systems is restricted to the people who need it, and protected by strong authentication.',
      'No system is perfectly secure. If a breach affects your personal data and poses a risk to you, we will notify you and the Nigeria Data Protection Commission as required by the NDPA.',
    ],
  },
  {
    id: 'rights',
    heading: 'Your rights',
    body: [
      'Under the NDPA you may ask us to:',
    ],
    list: [
      'Confirm whether we hold personal data about you, and give you a copy.',
      'Correct data that is inaccurate or incomplete.',
      'Delete data where we no longer have a lawful reason to keep it.',
      'Restrict or object to certain processing.',
      'Withdraw consent at any time, without affecting processing already carried out.',
      'Lodge a complaint with the Nigeria Data Protection Commission if you believe we have handled your data improperly.',
    ],
  },
  {
    id: 'requests',
    heading: 'Making a request',
    body: [
      'Email us with "Data Request" in the subject line and tell us what you would like us to do. We will respond within 30 days. We may ask you to confirm your identity before acting, so that we do not disclose your data to someone else.',
    ],
  },
  {
    id: 'children',
    heading: 'Children',
    body: [
      'This website is intended for businesses and adults. We do not knowingly collect personal data from children. Where our education and outreach programmes involve minors, data is collected offline with the consent of a parent or guardian and governed by the terms of that programme.',
    ],
  },
  {
    id: 'links',
    heading: 'Other sites',
    body: [
      'This site links to products and platforms we operate, such as marketx.africa, and to third-party sites. Our products carry their own privacy terms; third-party sites are outside our control and have their own policies. We encourage you to read them.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: [
      'We update this policy when our practices change. The date at the top always reflects the current version. Material changes affecting how we use data you have already given us will be communicated directly where we have a way to reach you.',
    ],
  },
]
</script>
