<template>
  <v-container class="home-container" fluid>
    <v-row class="home-row" align="center" justify="center">
      <v-col cols="12" md="7" sm="7" xs="7" class="text-center pa-4">
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="5"
            sm="7"
            xs="7"
            class="d-flex justify-center image-col"
            v-if="showImage"
          >
            <v-img
              :src="fullBodyImage"
              width="150"
              alt="Paul Ross"
              class="full-body-image"
            ></v-img>
          </v-col>
          <v-col
            cols="6"
            md="5"
            class="d-flex justify-center headshot-col"
            v-if="!showImage"
          >
            <v-img
              :src="headshotImage"
              width="100"
              alt="Paul Ross"
              class="headshot-image"
            ></v-img>
          </v-col>
          <v-col cols="12" md="7" class="info-col">
            <div class="info-container">
              <h1 class="headline">Paul Ross</h1>
              <p class="subheading">Web Developer | Front End Developer</p>
              <p class="subheading">Former High School Math Teacher</p>
              <p class="location">Rolesville, North Carolina</p>
            </div>
            <div class="chips-container mt-4">
              <v-chip class="chip linkedin-chip mb-2" @click="goToLinkedIn">
                <v-icon left>mdi-linkedin</v-icon>
                LinkedIn
              </v-chip>
              <v-chip class="chip resume-chip mb-2" @click="goToResume">
                <v-icon left>mdi-file-document-outline</v-icon>
                Resume
              </v-chip>
              <v-chip class="chip andela-chip mb-2" @click="goToAndela">
                <v-icon left>mdi-account-network</v-icon>
                Andela
              </v-chip>
              <v-chip class="chip github-chip mb-2" @click="goToGithub">
                <v-icon left>mdi-github</v-icon>
                GitHub
              </v-chip>
            </div>
            <v-btn class="contact-btn mt-4" @click="goToContact">
              Contact Me
            </v-btn>
          </v-col>
        </v-row>
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
      fullBodyImage: new URL("../assets/full-body.png", import.meta.url).href,
      headshotImage: new URL("../assets/headshot.png", import.meta.url).href,
    };
  },
  created() {
    this.updateImageVisibility();
    window.addEventListener("resize", this.updateImageVisibility);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateImageVisibility);
  },
  methods: {
    updateImageVisibility() {
      this.showImage = window.innerWidth > 600;
    },
    goToContact() {
      this.$router.push({ path: "/contact" });
    },
    goToLinkedIn() {
      window.open("https://www.linkedin.com/in/paul-ross-ny-nc/", "_blank");
    },
    goToResume() {
      window.open("/src/assets/resume2024.pdf", "_blank");
    },
    goToAndela() {
      window.open(
        "https://client.andela.com/talent/profile/95e035e9-b743-4d4e-8fba-59405e7b8ab5",
        "_blank"
      );
    },
    goToGithub() {
      window.open("https://github.com/pross326", "_blank");
    },
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(50, 127, 214, 0.74), #42b983bb);
  animation: fadeIn 1.5s ease-in-out;
  padding: 0 !important;
  width: 100%;
  overflow-x: hidden;
}

.home-row {
  margin: 0;
  width: 100%;
}

.full-body-image {
  max-width: 70%;
  height: auto;
  border-radius: 8px;
}

.headshot-image {
  border-radius: 50%;
}

.info-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.headline {
  font-size: 2.4rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subheading {
  font-size: 1.4rem;
  color: #666;
  margin: 5px 0;
}

.location {
  font-size: 1.2rem;
  color: #666;
  margin: 5px 0;
}

.contact-btn {
  background-color: #42b983;
  color: #fff;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.contact-btn:hover {
  background-color: #369963;
  transform: translateY(-2px);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.chip {
  cursor: pointer;
  font-weight: bold;
  padding: 0 16px;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    box-shadow 0.3s,
    transform 0.3s;
  display: flex;
  align-items: center;
}

.linkedin-chip {
  background-color: #1e88e5;
  color: white;
}

.resume-chip {
  background-color: #d32f2f;
  color: white;
}

.andela-chip {
  background-color: #ffca28;
  color: white;
}

.github-chip {
  background-color: #333;
  color: white;
}

.chip:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .headline {
    font-size: 1.8rem;
  }

  .subheading {
    font-size: 1rem;
  }

  .location {
    font-size: 0.9rem;
  }

  .chips-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .chip {
    width: 100%;
    justify-content: center;
  }

  .contact-btn {
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
  }

  .image-col {
    display: none;
  }

  .headshot-col {
    display: flex;
  }

  .info-container {
    margin-bottom: 20px;
  }

  .info-col {
    align-items: center;
  }
}
</style>
