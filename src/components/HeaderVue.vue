<template>
  <v-app-bar id="header" :elevation="8" app color="grey-darken-4">
    <v-toolbar-title class="text-h5" id="title">
      <RouterLink class="router-link" to="/">Paul's Portfolio</RouterLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Menu Icon for Mobile -->
    <v-btn icon @click="$emit('toggleDrawer')" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- Regular Navigation for Desktop -->
    <nav class="hidden-sm-and-down">
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/projects">Projects</RouterLink>
      <RouterLink class="router-link" to="/contact">Contact</RouterLink>
    </nav>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style scoped>
#header {
  background-color: #2b3a47; /* Darker background for header */
  color: #ecf0f1; /* Light text for better visibility */
  z-index: 1001; /* Ensure header is above other elements */
}

nav {
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-right: 30px;
  display: flex;
  align-items: center;
}

nav a.router-link {
  color: #ecf0f1; /* Light text for better visibility */
}

nav a.router-link-exact-active {
  color: #1abc9c; /* Highlight color for active link */
}

nav a.router-link-exact-active:hover {
  color: #16a085; /* Darker shade for hover state */
}

#title {
  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  white-space: nowrap;
}

#title:hover {
  color: #1abc9c; /* Highlight color for hover state */
}

.router-link {
  padding: 15px;
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw + 0.5rem, 1.5rem);
  color: #ecf0f1; /* Light text for better visibility */
  text-decoration: none;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.router-link:hover {
  color: #1abc9c; /* Highlight color for hover state */
  transform: translateY(-2px);
}

@media (max-width: 500px) {
  #title {
    font-size: 1.2em;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  nav a.router-link {
    font-size: 1em;
  }

  .router-link {
    font-size: 1em;
  }
}
</style>
