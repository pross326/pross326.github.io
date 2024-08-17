<template>
  <v-container class="projects-container" fluid>
    <!-- Featured Projects Section -->
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="headline">Featured Projects</h1>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        v-for="(project, index) in highlightedProjects"
        :key="index"
        class="d-flex align-stretch highlighted-project-col"
        v-scroll-reveal
      >
        <v-card
          class="highlighted-project-card"
          @click="openDialog(project)"
          elevation="12"
        >
          <v-img
            :src="project.image"
            :alt="project.title"
            class="highlighted-project-image"
            height="250px"
            cover
          ></v-img>
          <v-card-title class="title">
            {{ project.title }}
            <v-icon class="expand-icon">mdi-magnify</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions class="actions">
            <v-chip class="visit-btn" @click.stop="goToProject(project.link)">
              <v-icon left>mdi-open-in-new</v-icon> Visit
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Other Projects Section -->
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="headline">Other Projects</h2>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(project, index) in projects"
        :key="index"
        class="d-flex align-stretch"
        v-scroll-reveal
      >
        <v-card class="project-card" @click="openDialog(project)" elevation="6">
          <v-img
            :src="project.image"
            :alt="project.title"
            class="project-image"
            height="200px"
            cover
          ></v-img>
          <v-card-title class="title">
            {{ project.title }}
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-img
          :src="selectedProject.image"
          :alt="selectedProject.title"
          max-height="400px"
          contain
        ></v-img>
        <v-card-title>{{ selectedProject.title }}</v-card-title>
        <v-card-text class="description">
          {{ selectedProject.description }}
        </v-card-text>
        <v-card-actions
          v-if="selectedProject.link && selectedProject.isHighlighted"
        >
          <v-btn
            color="primary"
            text
            @click="goToProject(selectedProject.link)"
          >
            Visit Project
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-btn color="secondary" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "ProjectsView",
  data() {
    return {
      dialog: false,
      selectedProject: {},
      highlightedProjects: [
        {
          title: "Memento Mori",
          image: new URL("../assets/memento-mori.png", import.meta.url).href,
          description: `A Vue.js app that helps users reflect on the concept of "Memento Mori" and the Stoic philosophy of life. With the app, users enter their birthday and life expectancy and are shown a visual representation of how much of their life they have already lived and how much time they have left. As I've been reading about Stoicism and Memento Mori, I was inspired to create a user-friendly tool that makes these concepts accessible to a wider audience. It's a reminder to cherish each day and live life to the fullest.`,
          link: "https://paulross-memento-mori.netlify.app/",
          isHighlighted: true,
        },
        {
          title: "Accessibility Tool",
          image: new URL("../assets/accessibility-tool.png", import.meta.url)
            .href,
          description: `This app converts HTML tables to flex/grid with a UI to add padding and margin to make lessons more accessible for students with disabilities. Developed an innovative accessibility tool to assist team members in converting lessons into accessible formats, enhancing content accessibility and usability.`,
          link: "https://paulrossdev.github.io/index.html",
          isHighlighted: true,
        },
      ],
      projects: [
        {
          title: "Show Promotion",
          description:
            "I designed this promotional material for comedian Yannis Pappas to advertise his upcoming shows. The design was used to promote his winter tour and helped attract a larger audience.",
          image: new URL("../assets/yannis.png", import.meta.url).href,
        },
        {
          title: "The Creative Teacher",
          image: new URL("../assets/CreativeTeacher.png", import.meta.url).href,
          description: `While I taught full time and practiced front end development, I also tutored 10 hours per week at a small tutoring company where I was 1 of 3 employees. As I approached my goal of becoming a full time front end developer, I realized I would not be tutoring at the company any longer. As a parting gift, I created a website for the company.`,
        },
        {
          title: "Landscaping Makeover",
          image: new URL("../assets/bromancia.png", import.meta.url).href,
          description: `After The Brother's Mancia landscaping company completed some great work in my yard, I decided to use pictures of my yard to give their website a new and improved look. I used CSS transitions and incorporated JavaScript to bring buttons to life and enhance user experience.`,
        },
        {
          title: "Tutoring Website",
          image: new URL("../assets/tutoring.png", import.meta.url).href,
          description: `As a former math teacher, I tutored students outside of school and gained a following through word of mouth. I created my own tutoring website to mitigate scheduling conflicts. I incorporated a Calendly API so that my clients are able to choose time slots that are convenient for them.`,
        },
        {
          title: "Django Girls Blog",
          image: new URL("../assets/djangogirls.png", import.meta.url).href,
          description: `Using Python, Django, HTML, CSS, and Git, I was able to create a working web application. I learned about Django ORM and Querysets, dynamic data in templates, and Django admin/forms. I practiced using the command line and working in a virtual environment. It was very interesting learning how to run a local server and even deploy my blog.`,
        },
        {
          title: "Math Review Game",
          image: new URL("../assets/math-review-img.png", import.meta.url).href,
          description: `A responsive math game designed for 2nd graders with an intuitive UI, streaks, and points to gamify learning. Incorporates positive reinforcement and error handling to encourage learning.`,
        },
        {
          title: "Credit Card Validator",
          image: new URL("../assets/ccvalidator.png", import.meta.url).href,
          description: `I wrote a program in JavaScript to optimize a credit card validation process. I based the program off of the Luhn algorithm, which uses a check digit and multiple test credentials to validate identification numbers. I created two different versions to experiment with different methods. Image Credit: Codecademy.`,
        },
        {
          title: "Website Style Guide",
          image: new URL("../assets/ws1.png", import.meta.url).href,
          description: `This website style guide describes various types of color schemes, fonts, and text styles. This was one of my first milestone projects in the Codecademy Front-end Development course. This project was used as a reference for flexbox, colors, font APIs, and CSS hover and click properties.`,
        },
      ],
    };
  },
  methods: {
    openDialog(project) {
      this.selectedProject = project;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    goToProject(link) {
      window.open(link, "_blank");
    },
  },
  directives: {
    scrollReveal: {
      inserted(el) {
        ScrollReveal().reveal(el, {
          duration: 1000,
          distance: "50px",
          easing: "ease-in-out",
          origin: "bottom",
        });
      },
    },
  },
};
</script>

<style scoped>
.projects-container {
  padding: 40px;
  background: linear-gradient(135deg, rgba(50, 127, 214, 0.74), #42b983bb);
}

.headline {
  font-size: 2.4rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.v-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background-color: #2c2c2c;
  color: #d4d4d4;
  cursor: pointer;
}

.v-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.highlighted-project-card {
  border-left: 4px solid #1abc9c;
}

.highlighted-project-col {
  margin-bottom: 20px;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.expand-icon {
  font-size: 1.5rem;
  color: #ffffff;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
}

.visit-btn {
  background-color: #1abc9c;
  color: #ffffff;
  font-weight: 600;
  border-radius: 20px;
  padding: 5px 15px;
  transition: background-color 0.3s ease;
}

.visit-btn:hover {
  background-color: #16a085;
}

.description {
  padding: 20px;
  color: #bbbbbb;
  text-align: left;
}

@media (min-width: 960px) {
  .projects-container {
    padding: 80px 60px;
  }

  .headline {
    font-size: 3.2rem;
  }

  .v-card-title {
    font-size: 1.8rem;
  }
}
</style>
