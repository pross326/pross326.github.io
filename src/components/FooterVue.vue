<template>
  <v-footer class="footer" fixed padless>
    <v-col cols="12" class="text-center">
      <p>&copy; 2024 Paul Ross. All rights reserved.</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 2px 0;
}

p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .footer {
    text-align: center;
  }
}
</style>
