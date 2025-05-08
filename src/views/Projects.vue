<template>
  <v-container id="projects" fluid>
    <div class="projects-section">
      <h2 class="headline" style="text-align: center;">Featured Projects</h2>
      <v-row>
        <!-- First Project: Memento Mori -->
        <v-col cols="12" md="6">
          <v-card class="info-card fixed-height">
            <v-img src="/memento-mori.png" alt="Memento Mori Logo" class="project-image" loading="lazy" />
            <v-card-text>
              <h2>Memento Mori</h2>
              <p class="project-description">
                A Vue.js app inspired by Stoic philosophy. Built with Vue and focused on promoting mindfulness.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="cta-btn" @click="goToProject('https://paulross-memento-mori.netlify.app/')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Second Project: Accessibility Tool -->
        <v-col cols="12" md="6">
          <v-card class="info-card fixed-height">
            <v-img src="/accessibility-tool.png" alt="Accessibility Tool Logo" class="project-image" loading="lazy" />
            <v-card-text>
              <h2>Accessibility Tool</h2>
              <p class="project-description">
                A tool that evaluates web accessibility and suggests improvements for WCAG compliance.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="cta-btn" @click="goToProject('https://paulrossdev.github.io/index.html')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Section Divider -->
      <v-divider class="my-10" style="border-color: rgba(255,255,255,0.1);" />

      <!-- Comedy Designs Section -->
      <v-row>
        <v-col cols="12">
          <v-card class="info-card">
            <div class="carousel-wrapper">
              <Splide :options="splideOptions" class="poster-carousel">
                <SplideSlide v-for="(img, index) in posters" :key="index">
                  <img :src="img" class="poster-img" />
                </SplideSlide>
              </Splide>
            </div>
            <v-card-text>
              <h2 class="section-title">Comedy Designs</h2>
              <p class="section-description">
                I have a passion for UI/UX design, which I channel into crafting custom posters for stand‑up comedians
                to promote their shows. By combining solid design principles with my enthusiasm for comedy, I create
                engaging, on‑brand social media graphics optimized for Instagram Stories.
              </p>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Section Divider -->
      <v-divider class="my-10" style="border-color: rgba(255,255,255,0.1);" />

    </div>
  </v-container>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import BeforeAfter from '/src/components/BeforeAfter.vue';
import poster1 from '/src/assets/glassman.png';
import poster2 from '/src/assets/goblikon.png';
import poster3 from '/src/assets/morril.png';
import poster4 from '/src/assets/virzi.png';
import poster5 from '/src/assets/timdillon.png';

export default {
  components: { Splide, SplideSlide, BeforeAfter },
  data() {
    return {
      posters: [poster1, poster2, poster3, poster4, poster5],
      splideOptions: {
        type: 'loop',
        perPage: 3,
        perMove: 3,
        autoplay: true,
        speed: 20000,
        interval: 3,
        rewind: false,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        easing: 'linear',
        breakpoints: {
          768: {
            perPage: 1
          }
        }
      }
    };
  },
  methods: {
    goToProject(link) {
      window.open(link, '_blank');
    },
    openBeforeAfter() {
      window.open('/before-after.html', '_blank');
    }
  }
};
</script>

<style scoped>
.section-title {
  font-size: 2.2rem;
  font-weight: bold;
  padding: 0 1rem 1rem 1rem;
  color: #ffffff;
}

.section-description {
  color: #d1d5db;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  padding: 0 1rem 0rem 1rem;
}

#projects {
  padding-bottom: 4em;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.projects-section {
  width: 85vw;
  margin: 0 auto;
  padding-top: 2em;
}

.info-card {
  width: 100%;
  background: linear-gradient(0deg, #020917, #2563EB);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.fixed-height {
  min-height: 460px;
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.cta-btn {
  color: #ffffff;
  text-transform: uppercase;
  background: #2563EB;
  border-radius: 4px;
  padding: 8px 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.carousel-wrapper {
  width: 90%;
  margin: 2rem auto;
}

.poster-img {
  max-width: 200px;
  border-radius: 12px;
}

.headline {
  font-size: 2.7rem;
  font-weight: 800;
  color: #ffffff;
  padding: 20px;
  padding-bottom: 45px;
}
</style>
