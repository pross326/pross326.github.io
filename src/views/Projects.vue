<template>
  <section id="projects" class="projects-section">
    <v-container class="projects-container">
      <div class="section-header" v-animate>
        <span class="section-tag">Projects</span>
        <h2 class="section-title">Things I've built.</h2>
        <p class="section-subtitle">
          Full-stack Vue.js applications with AI integration, real-time data, and thoughtful design.
        </p>
      </div>

      <!-- Featured Projects 2-column grid -->
      <div class="featured-projects-grid">
        <v-card v-for="(project, i) in featuredProjects" :key="project.title" class="project-card-featured"
          v-animate="{ delay: (i * 0.15) + 's' }">
          <!-- Screenshot Visual -->
          <div class="project-visual" @click="goToProject(project.url)">
            <div class="project-screenshot">
              <!-- Real screenshot (show if image loads) -->
              <img :src="project.screenshot" :alt="project.title + ' preview'" class="screenshot-img"
                @error="project.imgError = true" v-show="!project.imgError" />
              <!-- Gradient fallback (show if no screenshot) -->
              <div class="screenshot-fallback" :style="{ background: project.gradient }" v-show="project.imgError">
                <v-icon size="56" color="white" style="opacity:0.9;">{{ project.icon }}</v-icon>
              </div>
              <!-- Hover overlay -->
              <div class="screenshot-overlay">
                <v-icon size="22" color="white" class="mr-1">mdi-open-in-new</v-icon>
                <span>View Live</span>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="project-info">
            <div class="project-label">{{ project.label }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-highlights">
              <div class="highlight" v-for="hl in project.highlights" :key="hl">
                <v-icon size="13" color="primary" style="flex-shrink:0; margin-top:2px;"
                  class="mr-2">mdi-check-circle</v-icon>
                <span>{{ hl }}</span>
              </div>
            </div>
            <div class="project-tech">
              <span class="tech-chip" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-links">
              <v-btn color="primary" :href="project.url" target="_blank" class="project-link-btn" size="small">
                <v-icon start size="15">mdi-open-in-new</v-icon>
                Live Demo
              </v-btn>
            </div>
          </div>
        </v-card>
      </div>

      <!-- Other Projects -->
      <div class="other-projects-header" v-animate>
        <h3 class="other-title">Other Projects</h3>
      </div>

      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(project, i) in otherProjects" :key="project.title">
          <v-card class="project-card-small" @click="goToProject(project.url)" v-animate="{ delay: (i * 0.1) + 's' }">
            <div class="small-card-top">
              <v-icon size="28" color="primary">{{ project.icon }}</v-icon>
              <v-icon v-if="project.url" size="18" class="ext-link">mdi-open-in-new</v-icon>
            </div>
            <h4 class="small-card-title">{{ project.title }}</h4>
            <p class="small-card-desc">{{ project.description }}</p>
            <div class="project-tech small-tech">
              <span class="tech-chip" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Comedy Designs -->
      <v-divider class="my-10" style="border-color: var(--border-subtle); opacity: 0.5;" />

      <div class="comedy-section" v-animate>
        <div class="section-header">
          <span class="section-tag">Design Work</span>
          <h2 class="section-title" style="font-size: clamp(1.5rem, 3vw, 2.2rem);">Comedy Show Posters</h2>
          <p class="section-subtitle">
            Custom promotional graphics for stand-up comedians, blending solid design principles
            with personality-driven branding. Optimized for Instagram Stories.
          </p>
        </div>

        <div class="poster-scroll">
          <div class="poster-track">
            <img v-for="(img, idx) in [...posters, ...posters]" :key="idx" :src="img" class="poster-img"
              loading="lazy" />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import poster1 from '/src/assets/glassman.png';
import poster2 from '/src/assets/goblikon.png';
import poster3 from '/src/assets/morril.png';
import poster4 from '/src/assets/virzi.png';
import poster5 from '/src/assets/timdillon.png';

export default {
  name: "ProjectsView",
  data() {
    return {
      posters: [poster1, poster2, poster3, poster4, poster5],
      featuredProjects: [
        {
          title: 'Restaurant Rater',
          label: 'Featured: Full-Stack Social App',
          description: 'A social check-in app for logging and sharing restaurant experiences with friends. Users search via Google Places API, rate across four dimensions, log orders by course, and share with companions.',
          highlights: [
            'Real-time social feed with photo cards, likes & comments',
            'Google Places autocomplete with live photo previews',
            'Multi-dimensional rating with auto-calculated composite scores',
            'Auto-healing photo system that refreshes expired image URLs',
            'JWT-based auth via Supabase with Row Level Security',
          ],
          tech: ['Vue 3', 'Vuetify 3', 'Supabase', 'Google Places API', 'Vercel'],
          url: 'https://restaurant-rater-psi.vercel.app/',
          screenshot: '/src/assets/project-restaurant-rater.png',
          imgError: false,
          icon: 'mdi-silverware-fork-knife',
          gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
        },
        {
          title: 'Health AI Dashboard',
          label: 'Featured: AI-Powered Analytics',
          description: 'A personal health analytics dashboard connecting Apple Health data with Claude AI for intelligent trend analysis. Visualizes 90 days of metrics across activity, sleep, heart rate, and body composition.',
          highlights: [
            'Claude AI integration for contextual health insights',
            'Interactive ApexCharts with custom dark theme',
            'Serverless proxy to solve CORS for browser-based AI calls',
            'Privacy-first: all data stays on device via local storage',
            'Consumer-grade design with gradient accents & sparklines',
          ],
          tech: ['Vue 3', 'Vuetify 3', 'Pinia', 'Claude AI', 'ApexCharts', 'Vercel'],
          url: 'https://health-ai-dashboard-eosin.vercel.app/#/',
          screenshot: '/src/assets/project-health-ai-dashboard.png',
          imgError: false,
          icon: 'mdi-heart-pulse',
          gradient: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)',
        },
      ],
      otherProjects: [
        {
          title: 'Memento Mori',
          description: 'A Vue.js app inspired by Stoic philosophy, built to promote daily mindfulness and intentional living.',
          tech: ['Vue.js', 'CSS3'],
          icon: 'mdi-meditation',
          url: 'https://paulross-memento-mori.netlify.app/',
        },
        {
          title: 'Accessibility Tool',
          description: 'Evaluates web accessibility and suggests improvements for WCAG compliance standards.',
          tech: ['HTML', 'JavaScript', 'WCAG'],
          icon: 'mdi-human',
          url: 'https://paulrossdev.github.io/index.html',
        },
        {
          title: 'Portfolio (This Site)',
          description: 'This portfolio itself, a Vue 3 + Vuetify SPA with custom theming, animations, and responsive design.',
          tech: ['Vue 3', 'Vuetify 3', 'Vite'],
          icon: 'mdi-web',
          url: null,
        },
      ],
    };
  },
  methods: {
    goToProject(url) {
      if (url) window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.projects-section {
  padding: 72px 0 56px;
}

.projects-container {
  max-width: 1200px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--border-subtle);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-primary);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 2-column Featured Grid */
.featured-projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 56px;
}

.project-card-featured {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-subtle) !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease !important;
}

.project-card-featured:hover {
  border-color: var(--border-hover) !important;
  box-shadow: 0 24px 60px rgba(99, 102, 241, 0.12) !important;
  transform: translateY(-5px);
}

/* Screenshot area */
.project-visual {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-screenshot {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #0d0d12;
}

.screenshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  display: block;
  transition: transform 0.5s ease;
}

.screenshot-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover overlay */
.screenshot-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 28, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(2px);
}

.project-visual:hover .screenshot-overlay {
  opacity: 1;
}

.project-visual:hover .screenshot-img {
  transform: scale(1.03);
}

/* Info */
.project-info {
  padding: 20px 22px 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 6px;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.3px;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 0.86rem;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 14px;
}

.highlight {
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 14px;
  margin-top: auto;
}

.tech-chip {
  padding: 3px 9px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--accent-primary);
  font-family: var(--font-mono);
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-link-btn {
  text-transform: none !important;
  font-weight: 600;
}

/* Other Projects */
.other-projects-header {
  text-align: center;
  margin-bottom: 28px;
}

.other-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
}

.project-card-small {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-subtle);
  padding: 24px;
  height: 100%;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease !important;
}

.project-card-small:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  background: var(--bg-card-hover) !important;
}

.small-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.ext-link {
  color: var(--text-muted);
  opacity: 0;
  transition: opacity 0.2s;
}

.project-card-small:hover .ext-link {
  opacity: 1;
}

.small-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.small-card-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
}

.small-tech {
  margin-bottom: 0;
}

/* Comedy Posters */
.comedy-section {
  margin-top: 32px;
}

.poster-scroll {
  overflow: hidden;
  width: 100%;
  margin-top: 16px;
}

.poster-track {
  display: flex;
  gap: 24px;
  animation: scroll-posters 32s linear infinite;
  width: max-content;
}

.poster-track:hover {
  animation-play-state: paused;
}

.poster-img {
  width: 175px;
  border-radius: 16px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-subtle);
}

.poster-img:hover {
  transform: scale(1.06);
}

@keyframes scroll-posters {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .featured-projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .poster-img {
    width: 140px;
  }
}
</style>
