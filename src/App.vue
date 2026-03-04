<template>
  <v-app class="app-root">
    <HeaderVue />
    <v-main class="main-content">
      <Home />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Certifications from "./views/Certifications.vue";
import Contact from "./views/Contact.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  components: {
    HeaderVue,
    Home,
    About,
    Projects,
    Certifications,
    Contact,
    FooterVue,
  },
};
</script>

<style>
.app-root {
  background: var(--bg-primary) !important;
}

.main-content {
  background: var(--bg-primary);
}
</style>
