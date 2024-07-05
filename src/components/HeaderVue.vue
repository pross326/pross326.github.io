<template>
  <v-app-bar id="header" :elevation="8" app color="grey-darken-4 #FFFFFF00">
    <v-toolbar-title class="text-h5" id="title">
      <RouterLink class="router-link" to="/">Paul's Portfolio</RouterLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Menu Icon for Mobile -->
    <v-btn icon class="d-none d-sm-flex d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- Regular Navigation for Desktop -->
    <nav class="hidden-sm-and-down">
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/projects">Projects</RouterLink>
      <!-- <RouterLink class="router-link" to="/reviews">Reviews</RouterLink> -->
      <RouterLink class="router-link" to="/contact">Contact</RouterLink>
      <RouterLink class="router-link" to="/resume">Resume</RouterLink>
    </nav>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style scoped>
nav {
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-right: 30px;
  display: flex;
  align-items: center;
}
nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  color: #42b983;
}

#title {
  font-size: 1.8em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

#title:hover {
  color: #3a404d;
}

.router-link {
  padding: 15px;
  font-weight: bold;
  font-size: 1.3em;
  color: #4e6c8a;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.router-link:hover {
  color: #abd5ff;
  transform: translateY(-2px);
}
</style>
