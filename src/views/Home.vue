<template>
  <v-container class="home-container" id="home" fluid>
    <v-row class="home-row" align="center">
      <!-- Info Section -->
      <v-col cols="12" md="10" class="text-content">
        <v-card class="info-card">

          <div class="card-styling">
            <div v-if="isMobile" style="display: flex; justify-self: start; padding-left: 25px;">
              <v-img :src="fullBodyImage" alt="Paul Ross" class="header-image" />
            </div>
            <div style="margin-left: 16px;">
              <h1 class="headline">
                Paul Ross
              </h1>
              <p class="subheading">
                Web Developer | Front End Developer
              </p>
              <p class="location">
                Rolesville, North Carolina
              </p>
              <div class="chips-container">
                <v-btn class="chip-btn linkedin" @click="goToLinkedIn">
                  LinkedIn
                </v-btn>
                <v-btn class="chip-btn resume" @click="goToResume">
                  Resume
                </v-btn>
                <v-btn class="chip-btn andela" @click="goToAndela">
                  Andela
                </v-btn>
                <v-btn class="chip-btn github" @click="goToGithub">
                  GitHub
                </v-btn>
              </div>
              <v-btn class="contact-btn" @click="scrollToContact" block>
                Contact
              </v-btn>
            </div>
            <div v-if="!isMobile" style="display: flex; justify-self: start; padding-left: 25px;">
              <v-img :src="fullBodyImage" alt="Paul Ross" class="header-image" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      showImage: true,
      windowWidth: window.innerWidth,
      fullBodyImage: new URL('/headshot9.png', import.meta.url).href,
      headshotImage: new URL('/headshot4.png', import.meta.url).href,
    };
  },
  created() {
    this.updateImageVisibility();
    window.addEventListener("resize", this.updateImageVisibility);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateImageVisibility);
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 600;
    }
  },
  methods: {
    updateImageVisibility() {
      this.showImage = window.innerWidth > 600;
    },
    scrollToContact() {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    goToLinkedIn() {
      window.open("https://www.linkedin.com/in/paul-ross-ny-nc/", "_blank");
    },
    goToResume() {
      window.open(new URL('../assets/resume2025.pdf', import.meta.url).href, "_blank");
    },
    goToAndela() {
      window.open("https://client.andela.com/talent/profile/95e035e9-b743-4d4e-8fba-59405e7b8ab5", "_blank");
    },
    goToGithub() {
      window.open("https://github.com/pross326", "_blank");
    },
  },
};
</script>

<style scoped>
/* General Styling */
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101820;
  color: #e2e8f0;
  padding: 20px;
  font-family: "Inter", sans-serif;
  padding-top: 4em;
  background: linear-gradient(135deg, #0f172a, #1e293b)
}

.main-card {
  width: 95%;
  border-radius: 24px;
  border: 8px solid black;

  margin: auto;
  background: linear-gradient(0deg, #020917, #2563EB);
  display: flex;
  padding: 24px;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  margin: auto;
}

.card-styling {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-card {
  width: 85vw;
  height: 80vh;
  background: linear-gradient(0deg, #020917, #2563EB);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 25px;
  color: #ffffff;
  border: 8px solid rgb(0, 0, 0);
  display: flex;
  justify-content: center;
}

.header-image {
  width: 250px;
  height: 250px;
  padding-left: 20px;
  border-radius: 24px;
}

.headline {
  font-size: 2.7rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 5px;
  border-bottom: 3px solid #ffffff;
}

.subheading {
  font-size: 1.2rem;
  font-weight: 500;
  color: #d1d5db;
}

.location {
  font-size: 1rem;
  font-weight: 400;
  color: #d1d5db;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.chip-btn {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  width: 100px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.chip-btn.linkedin {
  background: linear-gradient(180deg, #0077b5, #004c8c);
}

.chip-btn.resume {
  background: linear-gradient(180deg, #ff6a00, #cc5200);
}

.chip-btn.andela {
  background: linear-gradient(180deg, #00c4cc, #007e80);
}

.chip-btn.github {
  background: linear-gradient(180deg, #333333, #000000);
}

.chip-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.contact-btn {
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  background: linear-gradient(0deg, #020917, #2563EB);
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Mobile-Only Adjustments */
/* Mobile-Only Adjustments */
@media (max-width: 600px) {
  .info-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .info-card {
    padding: 16px;
    /* Adjust height for better fit */
  }

  .card-styling {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header-image {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
    /* Add spacing below the image */
  }

  .headline {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  .subheading {
    font-size: 1rem;
    margin-bottom: 4px;
  }

  .location {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .chips-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }

  .chip-btn {
    width: 40%;
    font-size: 0.9rem;
    padding: 5px;
  }

  .contact-btn {
    font-size: 0.9rem;
    margin-top: 16px;
  }
}
</style>