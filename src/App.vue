<template>
  <v-app>
    <HeaderVue />
    <div id="app-container">
      <Home />
      <Projects />
      <Contact />
    </div>
  </v-app>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";

export default {
  components: {
    HeaderVue,
    Home,
    Projects,
    Contact,
  },
};
</script>

<style scoped>
#app-container {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #e2e8f0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
}

section {
  padding: 100px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

section:not(:last-child) {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 50px;
}
</style>
