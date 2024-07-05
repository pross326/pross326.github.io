<template>
  <v-app>
    <v-main class="main-content">
      <HeaderVue />
      <router-view />
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.main-content {
  padding-top: 32px !important;
}
</style>
