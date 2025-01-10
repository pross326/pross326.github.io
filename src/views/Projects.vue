<template>
  <section id="projects">
    <h2 class="section-title">Featured Projects</h2>
    <v-container fluid>
      <v-row>
        <!-- First Project -->
        <v-col cols="12" md="6">
          <v-card class="info-card">
            <v-img src="../assets/memento-mori.png" alt="Memento Mori" class="project-image"></v-img>
            <v-card-text>
              <h3 class="project-title">Memento Mori</h3>
              <p class="project-description">
                A Vue.js app inspired by Stoic philosophy. Built with Vue and focused on promoting mindfulness and
                productivity.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="cta-btn" @click="goToProject('https://memento-mori.example.com')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Second Project -->
        <v-col cols="12" md="6">
          <v-card class="info-card">
            <v-img src="../assets/accessibility-tool.png" alt="Accessibility Tool" class="project-image"></v-img>
            <v-card-text>
              <h3 class="project-title">Accessibility Tool</h3>
              <p class="project-description">
                A tool that evaluates web accessibility and suggests improvements for compliance with WCAG guidelines.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn class="cta-btn" @click="goToProject('https://accessibility-tool.example.com')" block>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Instagram Feed Section -->
      <v-row>
        <v-col cols="12">
          <div class="instagram-feed">
            <h3 class="feed-title">Instagram Feed</h3>
            <div class="feed-container">
              <!-- Placeholder for Instagram feed -->
              <iframe src="https://snapwidget.com/embed/12345" title="Instagram Feed" class="instagram-iframe"
                scrolling="no" frameborder="0" allowtransparency="true"
                style="border: none; overflow: hidden; width: 100%; height: 400px;"></iframe>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  methods: {
    goToProject(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
/* Section Styling */
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  color: #ffffff;
}

/* Info Card Styling */
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
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

/* Project Image */
.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Project Text */
.project-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1rem;
  color: #d1d5db;
  text-align: center;
  margin-bottom: 20px;
}

/* Button Styling */
.cta-btn {
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  background: linear-gradient(0deg, #020917, #2563EB);
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Instagram Feed */
.instagram-feed {
  margin-top: 40px;
  text-align: center;
}

.feed-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

.instagram-iframe {
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 600px) {
  .project-title {
    font-size: 1.5rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .project-image {
    height: 150px;
  }

  .cta-btn {
    font-size: 0.9rem;
    padding: 8px;
  }

  .feed-title {
    font-size: 1.5rem;
  }
}
</style>
