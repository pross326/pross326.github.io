<template>
  <v-container id="projects" fluid>
    <div class="projects-section">
      <h2 class="section-title">Featured Projects</h2>
      <v-row>
        <!-- First Project: Memento Mori -->
        <v-col cols="12" md="6">
          <v-card class="info-card fixed-height">
            <v-img src="/memento-mori.png" alt="Memento Mori Logo" class="project-image" loading="lazy"></v-img>
            <v-card-text>
              <h3 class="project-title">Memento Mori</h3>
              <p class="project-description">
                A Vue.js app inspired by Stoic philosophy. Built with Vue and
                focused on promoting mindfulness.
              </p>
            </v-card-text>
            <v-card-actions style="width: 100%">
              <v-btn class="cta-btn" @click="goToProject('https://paulross-memento-mori.netlify.app/')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Second Project: Accessibility Tool -->
        <v-col cols="12" md="6">
          <v-card class="info-card fixed-height">
            <v-img src="/accessibility-tool.png" alt="Accessibility Tool Logo" class="project-image"
              loading="lazy"></v-img>
            <v-card-text>
              <h3 class="project-title">Accessibility Tool</h3>
              <p class="project-description">
                A tool that evaluates web accessibility and suggests
                improvements for compliance with WCAG guidelines.
              </p>
            </v-card-text>
            <v-card-actions style="width: 100%">
              <v-btn class="cta-btn" @click="goToProject('https://paulrossdev.github.io/index.html')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Instagram Embed -->
      <v-row>
        <v-col cols="12">
          <v-card class="info-card">
            <v-card-text style="width: 80%; padding: 10px 0px;">
              <h3 class="project-title blurb-title">Showcasing Comedy Through Design</h3>
              <p class="project-description blurb-description">
                I’m passionate about comedy and creative design. Using Figma, I'm able to combine my hobbies to create
                eye-catching posters for upcoming comedy shows, helping comedians amplify their reach and connect with
                audiences.
                Below, you’ll find some of my recent designs and inspirations.
              </p>
            </v-card-text>

            <div v-if="embedLoaded" class="instagram-feed-container">
              <blockquote class="instagram-media" :data-instgrm-permalink="instagramEmbedLink" data-instgrm-version="14"
                style="background: #000; border: 0; margin: 12px; padding: 12px; width: 100%; border-radius: 16px; text-align: center;">
              </blockquote>
            </div>
            <div v-else class="error-message">
              <p>
                Instagram content may not load due to an ad blocker or VPN. Please disable them to view the embed.
              </p>
              <v-btn class="cta-btn" @click="viewInstagram" block>
                Go To Instagram
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      instagramEmbedLink: "https://www.instagram.com/upcomingcomedyshows/?utm_source=ig_embed&amp;utm_campaign=loading",
      embedLoaded: true,
    };
  },
  methods: {
    goToProject(link) {
      window.open(link, "_blank");
    },
    viewInstagram() {
      window.open(this.instagramEmbedLink, "_blank");
    },
    checkInstagramEmbed() {
      setTimeout(() => {
        const embedScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
        if (!embedScript || !window.instgrm) {
          this.embedLoaded = false;
        }
      }, 4000);
    },
  },
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
    this.checkInstagramEmbed();
  },
};
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  color: #ffffff;
}

#projects {
  padding-bottom: 5em;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.projects-section {
  width: 85vw;
  margin: auto;
  padding-top: 2em;
}

.info-card {
  width: 100%;
  background: linear-gradient(0deg, #020917, #2563EB);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 8px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  height: 100%;
}

.fixed-height {
  min-height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.error-message {
  color: #ff6a00;
  text-align: center;
  margin: 20px 0;
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 6px;
}

.instagram-feed-container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 4px solid black;
}

.cta-btn {
  color: #ffffff;
  text-transform: uppercase;
  background: #2563EB;
  border-radius: 4px;
  padding: 2px 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.blurb-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  align-items: center;
  gap: 10px;
  text-align: left;
}

.blurb-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #f3f4f6;
  margin-bottom: 20px;
  text-align: left;
}

@media (max-width: 600px) {
  #projects {
    width: 100vw;
    padding: 0 !important;
  }

  .projects-section {
    width: 100vw;
    margin: auto;
    padding-top: 2em;
  }

  .section-title {
    margin: 20px 0;
  }

  .fixed-height {
    min-height: unset;
  }
}
</style>
