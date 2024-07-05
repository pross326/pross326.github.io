<template>
  <v-footer class="footer" padless>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <p>&copy; 2024 Paul Ross. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: "FooterVue",
};
</script>
<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
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
