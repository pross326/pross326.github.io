<template>
  <v-app>
    <HeaderVue @toggleDrawer="toggleDrawer" />
    <v-navigation-drawer v-model="drawer" app temporary right>
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
    <v-main class="main-content">
      <router-view></router-view>
      <FooterVue />
    </v-main>
  </v-app>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
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
        { text: "Reviews", route: "/reviews" },
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
html,
body,
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

.v-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    rgba(50, 127, 214, 0.74),
    rgba(66, 185, 131, 0.2)
  );
  min-height: 100%;
}

.v-navigation-drawer {
  background-color: #2c3e50 !important;
  color: #ecf0f1;
  z-index: 1000;
}

.drawer-link {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
  display: block;
}

.drawer-link:hover {
  color: #1abc9c;
}
</style>
