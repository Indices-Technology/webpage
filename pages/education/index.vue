<template>
    <main>
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEyOSwxNDAsMjQ4LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div class="max-w-4xl">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-3 mb-6 sm:mb-8">
              <span class="h-px w-8 sm:w-12 bg-indigo-600"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">
                Ecosystem / Education & Training
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6 sm:mb-8">
              Education & <span class="text-indigo-600">Talent Development</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-12 max-w-3xl">
              Engineering the specialized workforce required for Africa's industrial and digital future through world-class vocational training and certification programs.
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="inline-flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 transition-all group">
                <span>Enroll in Academy</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button class="inline-flex items-center justify-center gap-3 border-2 border-slate-300 px-8 py-4 rounded-xl font-bold bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all">
                <span>Curriculum Standards</span>
              </button>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-indigo-200">
              <div>
                <div class="text-3xl sm:text-4xl font-black text-indigo-600 mb-1 sm:mb-2">10K+</div>
                <div class="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">Graduates</div>
              </div>
              <div>
                <div class="text-3xl sm:text-4xl font-black text-indigo-600 mb-1 sm:mb-2">95%</div>
                <div class="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">Employment Rate</div>
              </div>
              <div>
                <div class="text-3xl sm:text-4xl font-black text-indigo-600 mb-1 sm:mb-2">50+</div>
                <div class="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Section -->
      <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="mb-12 sm:mb-16">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                Our Programs
              </span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
              Industry-Aligned Training Pathways
            </h2>
            <p class="text-base sm:text-lg text-slate-600 max-w-3xl">
              From technical vocational skills to digital certifications, our programs are designed to meet the exact needs of Africa's evolving industrial landscape.
            </p>
          </div>

          <!-- Programs Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <EduProgramCard 
              v-for="item in eduSolutions" 
              :key="item.title"
              :program="item"
            />
          </div>
        </div>
      </section>

      <!-- Learning Approach Section -->
      <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 to-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Content -->
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="h-px w-8 sm:w-12 bg-indigo-600"></span>
                <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-indigo-600 uppercase">
                  Our Approach
                </span>
              </div>

              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Practical Learning for Real-World Impact
              </h2>

              <p class="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Our training methodology combines hands-on workshops, industry mentorship, and cutting-edge simulation technology to ensure graduates are job-ready from day one.
              </p>

              <div class="space-y-4">
                <div class="flex items-start gap-4 p-5 rounded-xl border-2 border-indigo-100 bg-white hover:border-indigo-300 hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    🛠️
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Hands-On Workshops</h4>
                    <p class="text-xs sm:text-sm text-slate-600">State-of-the-art facilities with real industrial equipment and tools.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-5 rounded-xl border-2 border-indigo-100 bg-white hover:border-indigo-300 hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    👥
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Industry Mentorship</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Direct guidance from experienced professionals across all sectors.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-5 rounded-xl border-2 border-indigo-100 bg-white hover:border-indigo-300 hover:shadow-lg transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 mb-1 text-sm sm:text-base">Digital Learning Platform</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Powered by Axioms AI for personalized learning paths and progress tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Visual -->
            <div class="relative order-first lg:order-last">
              <div class="relative aspect-square bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl p-12 border-2 border-indigo-200">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDk5LDEwMiwyNDEsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
                
                <!-- Center Hub -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <div class="text-4xl mb-2">📚</div>
                    <div class="text-white font-bold text-xs">Learning Hub</div>
                  </div>
                </div>

                <!-- Orbiting Elements -->
                <div class="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float">
                  <div class="text-2xl">🔧</div>
                </div>
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
                  <div class="text-2xl">💻</div>
                </div>
                <div class="absolute left-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float">
                  <div class="text-2xl">🎓</div>
                </div>
                <div class="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
                  <div class="text-2xl">🌾</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pathways Section -->
      <section class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 sm:mb-16">
            <div class="flex items-center justify-center gap-3 mb-4">
              <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                Career Pathways
              </span>
              <span class="h-px w-8 sm:w-12 bg-slate-300"></span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
              From Training to Employment
            </h2>
            <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Our integrated ecosystem ensures graduates transition seamlessly into high-demand roles across Indices' operational arms.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 hover:shadow-xl transition-all group">
              <div class="text-4xl mb-4">⚙️</div>
              <h3 class="font-black text-lg mb-2 text-slate-900">Industrial Tech</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Robotics, automation, and renewable energy roles.</p>
              <div class="absolute top-4 right-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </div>

            <div class="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 hover:shadow-xl transition-all group">
              <div class="text-4xl mb-4">💻</div>
              <h3 class="font-black text-lg mb-2 text-slate-900">Software</h3>
              <p class="text-sm text-slate-600 leading-relaxed">AI development, cybersecurity, and data analytics.</p>
              <div class="absolute top-4 right-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </div>

            <div class="relative p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 hover:shadow-xl transition-all group">
              <div class="text-4xl mb-4">🌾</div>
              <h3 class="font-black text-lg mb-2 text-slate-900">Agribusiness</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Precision farming, livestock management, and export.</p>
              <div class="absolute top-4 right-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </div>

            <div class="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 hover:shadow-xl transition-all group">
              <div class="text-4xl mb-4">🚚</div>
              <h3 class="font-black text-lg mb-2 text-slate-900">Logistics</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Fleet management, cold chain, and supply operations.</p>
              <div class="absolute top-4 right-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 sm:py-20 lg:py-24 bg-indigo-600 px-4 sm:px-6 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-700/50 via-transparent to-purple-800/50"></div>
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div class="max-w-4xl mx-auto text-center relative z-10">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Invest in Africa's Future Workforce
          </h2>
          <p class="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Whether you're an aspiring professional or an organization seeking skilled talent, our academy connects ambition with opportunity.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="group inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-2xl">
              <span>Enroll Today</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button class="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              <span>Partner with Us</span>
            </button>
          </div>

          <div class="grid grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/20">
            <div>
              <div class="text-3xl sm:text-4xl font-black text-white mb-2">100%</div>
              <div class="text-xs sm:text-sm text-indigo-200">Practical Training</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-white mb-2">6-12mo</div>
              <div class="text-xs sm:text-sm text-indigo-200">Program Duration</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-black text-white mb-2">₦250K</div>
              <div class="text-xs sm:text-sm text-indigo-200">Avg. Starting Salary</div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script setup>
useSeoMeta({
  title: 'Education & Training',
  ogTitle: 'Education & Training — Indices Technology LTD',
  description: 'Indices Education & Training arm offers vocational technical programmes, digital certifications, and agri-business school — building workforce capacity across Africa.',
  ogDescription: 'Vocational training, digital certifications, and agri-business education — Indices Education & Training.',
  ogUrl: 'https://indicestech.com/education',
})

const eduSolutions = [
  { 
    title: 'Vocational Technical (VoTech)', 
    description: 'Hands-on training for robotics maintenance, advanced welding, and smart-grid engineering.', 
    icon: '🔧',
    focus: 'Industrial Skills',
    tags: ['Robotics', 'Welding', 'Engineering'],
    duration: '6-12 months',
    certification: 'Industry-Recognized'
  },
  { 
    title: 'Digital Certifications', 
    description: 'Industry-standard training in AI development, cybersecurity, and data analytics via Axioms AI.', 
    icon: '🎓',
    focus: 'Tech Proficiency',
    tags: ['AI/ML', 'Cybersecurity', 'Data'],
    duration: '3-6 months',
    certification: 'Professional Cert'
  },
  { 
    title: 'Agri-Business School', 
    description: 'Specialized training in precision farming, export compliance, and livestock dietetics.', 
    icon: '📖',
    focus: 'Value-Chain Management',
    tags: ['Farming', 'Export', 'Livestock'],
    duration: '4-8 months',
    certification: 'Specialist Diploma'
  }
]
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite 1s;
}
</style>