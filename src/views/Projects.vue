<template>
  <v-container class="projects-container" fluid>
    <!-- Featured Projects Section -->
    <v-row class="projects-row" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="headline">Featured Projects</h1>
      </v-col>
      <v-col
        cols="12"
        md="6"
        v-for="(project, index) in highlightedProjects"
        :key="index"
        v-scroll-reveal
      >
        <v-card
          :class="['highlighted-project-card', { expanded: project.expanded }]"
          mx-auto
          @click="toggleExpand(project)"
        >
          <v-img
            :src="project.image"
            :alt="project.title"
            class="highlighted-project-image"
          ></v-img>
          <v-card-title class="left-aligned-title">
            {{ project.title }}
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn class="visit-btn" @click.stop="goToProject(project.link)">
              Visit
            </v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center expand-indicator">
            <v-icon v-if="!project.expanded">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-card-actions>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <v-card-text
              v-show="project.expanded"
              class="description-text left-aligned-text"
              >{{ project.description }}</v-card-text
            >
          </transition>
        </v-card>
      </v-col>
    </v-row>

    <!-- Other Projects Section -->
    <v-row class="projects-row" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="headline">Other Projects</h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="(project, index) in projects"
        :key="index"
        v-scroll-reveal
      >
        <v-card
          :class="['project-card', { expanded: project.expanded }]"
          mx-auto
          @click="toggleExpand(project)"
        >
          <v-img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          ></v-img>
          <v-card-title class="left-aligned-title">{{
            project.title
          }}</v-card-title>
          <v-card-actions class="justify-center expand-indicator">
            <v-icon v-if="!project.expanded">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-card-actions>
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <v-card-text
              v-show="project.expanded"
              class="description-text left-aligned-text"
              >{{ project.description }}</v-card-text
            >
          </transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "ProjectsView",
  data() {
    return {
      highlightedProjects: [
        {
          title: "Memento Mori App",
          image: new URL("../assets/memento-mori.png", import.meta.url).href,
          description: `A Vue.js app that helps users reflect on the concept of "Memento Mori" and the Stoic philosophy of life. With the app, users enter their birthday and life expectancy and are shown a visual representation of how much of their life they have already lived and how much time they have left. As I've been reading about Stoicism and Memento Mori, I was inspired to create a user-friendly tool that makes these concepts accessible to a wider audience. It's a reminder to cherish each day and live life to the fullest. I'm grateful for the opportunity to bring this ancient philosophy into the modern world and make a positive impact on people's lives.`,
          link: "https://paulross-memento-mori.netlify.app/",
          expanded: false,
        },
        {
          title: "Accessibility Tool",
          image: new URL("../assets/accessibility-tool.png", import.meta.url)
            .href,
          description: `This app converts HTML tables to flex/grid with a UI to add padding and margin to make lessons more accessible for students with disabilities. Developed an innovative accessibility tool to assist team members in converting lessons into accessible formats, enhancing content accessibility and usability. Collaborated with a team of former educators and IT professionals, leveraging collective expertise to improve educational content and deliver value.`,
          link: "https://paulrossdev.github.io/index.html",
          expanded: false,
        },
      ],
      projects: [
        {
          title: "Show Promotion",
          description:
            "I designed this promotional material for comedian Yannis Pappas to advertise his upcoming shows. The design was used to promote his winter tour and helped attract a larger audience.",
          image: new URL("../assets/yannis.png", import.meta.url).href,
          expanded: false,
        },
        {
          title: "The Creative Teacher",
          image: new URL("../assets/CreativeTeacher.png", import.meta.url).href,
          description: `While I taught full time and practiced front end development, I also tutored 10 hours per week at a small tutoring company where I was 1 of 3 employees. As I approached my goal of becoming a full time front end developer, I realized I would not be tutoring at the company any longer. As a parting gift, I created a website for the company.`,
          expanded: false,
        },
        {
          title: "Landscaping Makeover",
          image: new URL("../assets/bromancia.png", import.meta.url).href,
          description: `After The Brother's Mancia landscaping company completed some great work in my yard, I decided to use pictures of my yard to give their website a new and improved look. I used CSS transitions and incorporated JavaScript to bring buttons to life and enhance user experience.`,
          expanded: false,
        },
        {
          title: "Tutoring Website",
          image: new URL("../assets/tutoring.png", import.meta.url).href,
          description: `As a former math teacher, I tutored students outside of school and gained a following through word of mouth. I created my own tutoring website to mitigate scheduling conflicts. I incorporated a Calendly API so that my clients are able to choose time slots that are convenient for them.`,
          expanded: false,
        },
        {
          title: "Django Girls Blog",
          image: new URL("../assets/djangogirls.png", import.meta.url).href,
          description: `Using Python, Django, HTML, CSS, and Git, I was able to create a working web application. I learned about Django ORM and Querysets, dynamic data in templates, and Django admin/forms. I practiced using the command line and working in a virtual environment. It was very interesting learning how to run a local server and even deploy my blog.`,
          expanded: false,
        },
        {
          title: "Math Review Game",
          image: new URL("../assets/math-review-img.png", import.meta.url).href,
          description: `A responsive math game designed for 2nd graders with an intuitive UI, streaks, and points to gamify learning. Incorporates positive reinforcement and error handling to encourage learning.`,
          link: "https://github.com/pross326/math-review-game",
          expanded: false,
        },
        {
          title: "Credit Card Validator",
          image: new URL("../assets/ccvalidator.png", import.meta.url).href,
          description: `I wrote a program in JavaScript to optimize a credit card validation process. I based the program off of the Luhn algorithm, which uses a check digit and multiple test credentials to validate identification numbers. I created two different versions to experiment with different methods. Image Credit: Codecademy.`,
          expanded: false,
        },
        {
          title: "Website Style Guide",
          image: new URL("../assets/ws1.png", import.meta.url).href,
          description: `This website style guide describes various types of color schemes, fonts, and text styles. This was one of my first milestone projects in the Codecademy Front-end Development course. This project was used as a reference for flexbox, colors, font APIs, and CSS hover and click properties.`,
          expanded: false,
        },
      ],
    };
  },
  methods: {
    goToProject(link) {
      window.open(link, "_blank");
    },
    toggleExpand(project) {
      project.expanded = !project.expanded;
    },
    beforeEnter(el) {
      el.style.maxHeight = 0;
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.style.transition = "max-height 0.6s ease, opacity 0.6s ease";
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = 1;
      setTimeout(done, 600);
    },
    leave(el, done) {
      el.style.transition = "max-height 0.6s ease, opacity 0.6s ease";
      el.style.maxHeight = 0;
      el.style.opacity = 0;
      setTimeout(done, 600);
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
  padding: 20px;
  background: linear-gradient(
    135deg,
    rgba(74, 144, 226, 0.2),
    rgba(66, 185, 131, 0.2)
  );
  animation: fadeIn 1.5s ease-in-out;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card,
.highlighted-project-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
}

.project-card:hover,
.highlighted-project-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card.expanded,
.highlighted-project-card.expanded {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-image,
.highlighted-project-image {
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.left-aligned-title {
  text-align: left;
  font-weight: 600;
  color: #333;
  font-size: 1.3rem;
  margin: 10px 15px;
}

.left-aligned-text {
  text-align: left;
  color: #555;
  padding: 0 15px 15px;
}

.v-card-text {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.6s ease,
    opacity 0.6s ease;
  opacity: 0;
}

.expanded .v-card-text {
  max-height: 420px;
  opacity: 1;
}

.v-card-actions {
  text-align: center;
  padding-bottom: 15px;
}

.visit-btn {
  background-color: #42b983;
  color: #fff !important;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.visit-btn:hover {
  background-color: #369963;
  transform: translateY(-2px);
}

.expand-indicator {
  cursor: pointer;
  margin-top: -20px;
  margin-bottom: -20px;
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
