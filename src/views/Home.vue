<template>
  <section id="home" class="hero-section">
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <v-container class="hero-container">
      <v-row align="center" justify="center" class="hero-row">
        <v-col cols="12" md="7" class="hero-text-col">
          <div class="hero-content" :class="{ 'animate-in': mounted }">
            <div class="hero-badge">
              <v-icon size="14" color="primary" class="mr-1">mdi-circle</v-icon>
              <span>Available for opportunities</span>
            </div>

            <h1 class="hero-name">Paul Ross</h1>

            <p class="hero-title">
              Front End Developer <span class="accent-amp">&amp;</span> UI/UX Designer
            </p>

            <p class="hero-description">
              I build polished, <span class="tech-hl">AI-integrated</span> web applications
              with <span class="tech-hl">Vue.js</span> and <span class="tech-hl">Vuetify</span> —
              from real-time social platforms to Claude-powered health dashboards.
              Currently crafting interfaces at
              <span class="company-hl">Teleflex</span>.
            </p>

            <div class="hero-actions">
              <v-btn color="primary" size="large" class="hero-btn-primary" @click="scrollTo('projects')">
                View My Work
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn variant="outlined" size="large" class="hero-btn-secondary" @click="openResume">
                <v-icon start>mdi-file-document-outline</v-icon>
                Resume
              </v-btn>
            </div>

            <div class="hero-socials">
              <a href="https://github.com/pross326" target="_blank" rel="noopener" aria-label="GitHub">
                <v-icon>mdi-github</v-icon>
              </a>
              <a href="https://www.linkedin.com/in/paul-ross-ny-nc/" target="_blank" rel="noopener"
                aria-label="LinkedIn">
                <v-icon>mdi-linkedin</v-icon>
              </a>
              <a href="mailto:pross326@gmail.com" aria-label="Email">
                <v-icon>mdi-email-outline</v-icon>
              </a>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5" class="hero-image-col">
          <div class="headshot-wrapper" :class="{ 'animate-in': mounted }">
            <div class="headshot-glow"></div>
            <img :src="headshotImage" alt="Paul Ross" class="headshot-img" @error="headshotImage = fallbackImage" />
            <div class="headshot-ring"></div>
          </div>
        </v-col>
      </v-row>

      <div class="scroll-indicator" @click="scrollTo('about')">
        <v-icon class="bounce" color="primary" size="28">mdi-chevron-double-down</v-icon>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      mounted: false,
      headshotImage: new URL('/src/assets/headshot.jpg', import.meta.url).href,
    };
  },
  mounted() {
    setTimeout(() => { this.mounted = true; }, 100);
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    openResume() {
      window.open(new URL('../assets/PaulRossResume2026.pdf', import.meta.url).href, "_blank");
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 72px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.22), transparent 70%);
  top: -160px;
  right: -160px;
}

.orb-2 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.16), transparent 70%);
  bottom: -80px;
  left: -80px;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
}

.hero-row {
  min-height: calc(100vh - 144px);
}

.hero-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--border-subtle);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-primary);
  margin-bottom: 18px;
}

.hero-badge .v-icon {
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {

  0%,
  100% {
    opacity: 1
  }

  50% {
    opacity: 0.3
  }
}

.hero-name {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -2px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.hero-title {
  font-size: clamp(1.05rem, 2.5vw, 1.35rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 14px;
}

.accent-amp {
  color: var(--accent-primary);
  font-weight: 700;
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 480px;
  margin-bottom: 24px;
}

.tech-hl {
  color: var(--accent-primary);
  font-weight: 600;
}

.company-hl {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.hero-btn-primary {
  text-transform: none;
  font-weight: 600;
  padding: 0 28px;
}

.hero-btn-secondary {
  text-transform: none;
  font-weight: 600;
  color: var(--text-secondary) !important;
  border-color: var(--border-subtle) !important;
  padding: 0 24px;
}

.hero-btn-secondary:hover {
  border-color: var(--accent-primary) !important;
  color: var(--text-primary) !important;
}

.hero-socials {
  display: flex;
  gap: 16px;
}

.hero-socials a {
  color: var(--text-muted);
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid transparent;
}

.hero-socials a:hover {
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--border-subtle);
  transform: translateY(-2px);
}

.hero-image-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headshot-wrapper {
  position: relative;
  width: 310px;
  height: 390px;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.headshot-wrapper.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.headshot-glow {
  position: absolute;
  inset: -24px;
  background:
    radial-gradient(ellipse at 65% 30%, rgba(134, 197, 100, 0.14), transparent 55%),
    radial-gradient(ellipse at 30% 75%, rgba(99, 102, 241, 0.18), transparent 65%),
    radial-gradient(ellipse at 80% 80%, rgba(245, 197, 80, 0.08), transparent 50%);
  border-radius: 32px;
  filter: blur(2px);
}

.headshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 24px;
  position: relative;
  z-index: 1;
  border: 2px solid rgba(160, 185, 130, 0.25);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.04);
}

.headshot-ring {
  position: absolute;
  inset: -8px;
  border-radius: 28px;
  border: 1px dashed rgba(160, 185, 130, 0.3);
  animation: slow-rotate 30s linear infinite;
}

@keyframes slow-rotate {
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.scroll-indicator:hover {
  opacity: 1;
}

.bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0)
  }

  40% {
    transform: translateY(-8px)
  }

  60% {
    transform: translateY(-4px)
  }
}

@media (max-width: 960px) {
  .hero-row {
    text-align: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-description {
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-socials {
    justify-content: center;
  }

  .headshot-wrapper {
    width: 230px;
    height: 290px;
    margin-bottom: 24px;
  }

  .hero-image-col {
    order: -1;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 60px;
  }

  .headshot-wrapper {
    width: 180px;
    height: 230px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
}
</style>
