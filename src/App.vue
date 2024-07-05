<template>
  <v-app>
    <HeaderVue />
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
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

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
    rgba(74, 144, 226, 0.2),
    rgba(66, 185, 131, 0.2)
  );
  min-height: 100%;
}
</style>
