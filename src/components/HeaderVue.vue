<template>
  <v-app-bar id="header" :elevation="8" app color="grey-darken-4">
    <v-toolbar-title class="text-h5" id="title">
      <RouterLink class="router-link" to="/">Paul's Portfolio</RouterLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Menu Icon for Mobile -->
    <v-btn icon @click="toggleDrawer" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- Regular Navigation for Desktop -->
    <nav class="hidden-sm-and-down">
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/projects">Projects</RouterLink>
      <RouterLink class="router-link" to="/contact">Contact</RouterLink>
      <RouterLink class="router-link" to="/resume">Resume</RouterLink>
    </nav>
    <!-- Drawer for Mobile Navigation -->
    <v-navigation-drawer v-model="drawer" app temporary location="right">
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.text"
          @click="navigate(item.route)"
        >
          <RouterLink class="drawer-link" :to="item.route">{{
            item.text
          }}</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      drawer: false,
      menuItems: [
        { text: "Home", route: "/" },
        { text: "Projects", route: "/projects" },
        { text: "Contact", route: "/contact" },
        { text: "Resume", route: "/resume" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigate(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
#header {
  background-color: #333;
  color: #fff;
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
  color: #fff;
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
  color: #42b983;
}

.router-link {
  padding: 15px;
  font-weight: bold;
  font-size: 1.3em;
  color: #fff;
  text-decoration: none;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.router-link:hover {
  color: #42b983;
  transform: translateY(-2px);
}

.v-navigation-drawer {
  background-color: #333;
  color: #fff;
}

.drawer-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
  display: block;
}

.drawer-link:hover {
  color: #42b983;
}

@media (max-width: 500px) {
  #title {
    font-size: 1.2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
  }

  nav a.router-link {
    font-size: 1em;
  }

  .router-link {
    font-size: 1em;
  }
}
</style>
