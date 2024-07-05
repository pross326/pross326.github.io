<template>
  <v-container class="home-container" fluid>
    <v-row class="home-row" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center home-col">
        <v-avatar class="avatar" size="200">
          <img
            src="/src/assets/headshot.png"
            alt="Paul Ross"
            class="avatar-image"
          />
        </v-avatar>
        <div class="chips-container">
          <v-chip class="chip linkedin-chip" @click="goToLinkedIn">
            <v-icon left>mdi-linkedin</v-icon>
            LinkedIn
          </v-chip>
          <v-chip class="chip email-chip" @click="sendEmail">
            <v-icon left>mdi-email-outline</v-icon>
            Email
          </v-chip>
          <v-chip class="chip resume-chip" @click="goToResume">
            <v-icon left>mdi-file-document-outline</v-icon>
            Resume
          </v-chip>
          <v-chip class="chip andela-chip" @click="goToAndela">
            <v-icon left>mdi-account-network</v-icon>
            Andela
          </v-chip>
          <v-chip class="chip github-chip" @click="goToGithub">
            <v-icon left>mdi-github</v-icon>
            GitHub
          </v-chip>
        </div>
        <v-divider class="my-4"></v-divider>
        <h1 class="headline">Paul Ross</h1>
        <p class="subheading">Web Developer | Front End Developer</p>
        <p class="subheading">Former High School Math Teacher</p>
        <p class="location">Rolesville, North Carolina</p>
        <v-btn class="contact-btn mt-4" @click="goToContact">Contact Me</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  methods: {
    goToContact() {
      this.$router.push({ path: "/contact" });
    },
    goToLinkedIn() {
      window.open("https://www.linkedin.com/in/paul-ross-ny-nc/", "_blank");
    },
    sendEmail() {
      window.location.href = "mailto:pross326@gmail.com";
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
  background: linear-gradient(
    135deg,
    rgba(74, 144, 226, 0.2),
    rgba(66, 185, 131, 0.2)
  );
  animation: fadeIn 1.5s ease-in-out;
  padding-top: 0px !important;
  width: 100%;
  padding: 0;
}

.home-row {
  margin-top: 0;
  width: 100%;
}

.home-col {
  padding: 0 20px;
}

.avatar {
  border: 5px solid #42b983;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chips-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.chip {
  cursor: pointer;
  font-weight: bold;
  padding: 0 12px;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    box-shadow 0.3s,
    transform 0.3s;
  width: auto;
  max-width: 150px;
  display: flex;
  justify-content: center;
}

.linkedin-chip {
  background-color: #1e88e5;
  color: white;
}

.email-chip {
  background-color: #d32f2f;
  color: white;
}

.resume-chip {
  background-color: #ffca28;
  color: white;
}

.andela-chip {
  background-color: #2a73cc;
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

.avatar-image {
  object-fit: cover;
  object-position: center;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subheading {
  font-size: 1.2rem;
  color: #666;
  margin: 5px 0;
}

.location {
  font-size: 1rem;
  color: #999;
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

@media (max-width: 600px) {
  .headline {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1rem;
  }

  .location {
    font-size: 0.9rem;
  }

  .chips-container {
    gap: 10px;
    display: flex;
    align-content: center;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
