<template>
  <v-footer app>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <span>&copy; {{ new Date().getFullYear() }} Paul Ross's Portfolio</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.v-footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}
</style>
