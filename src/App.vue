<template>
  <v-app>
    <HeaderVue @toggleDrawer="toggleDrawer" />
    <!-- Main Content Area -->
    <v-main>
      <router-view
        style="
          background: linear-gradient(
            135deg,
            rgba(50, 127, 214, 0.74),
            #42b983bb
          );
        "
      ></router-view>
    </v-main>
    <!-- Footer -->
    <FooterVue />
    <!-- Drawer for Mobile Navigation -->
    <v-navigation-drawer v-model="drawer" app temporary bottom>
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
  </v-app>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
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

<style>
/* Add any global styles here */
.v-navigation-drawer {
  background-color: #333;
  color: #fff;
  z-index: 2000;
  bottom: 0;
  top: auto;
  height: 50%;
}

.drawer-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw + 0.5rem, 1.5rem);
  padding: 10px;
  display: block;
}

.drawer-link:hover {
  color: #42b983;
}
</style>
