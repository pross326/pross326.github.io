<template>
  <footer class="site-footer">
    <v-container class="footer-container">
      <v-row align="center" justify="space-between">
        <v-col cols="12" sm="auto" class="footer-left">
          <div class="footer-logo">
            <span class="logo-text">PR</span><span class="logo-dot">.</span>
          </div>
          <span class="footer-copy">&copy; {{ new Date().getFullYear() }} Paul Ross. Built with Vue.js & Vuetify.</span>
        </v-col>
        <v-col cols="12" sm="auto" class="footer-right">
          <div class="footer-links">
            <a href="https://github.com/pross326" target="_blank" rel="noopener" aria-label="GitHub">
              <v-icon size="20">mdi-github</v-icon>
            </a>
            <a href="https://www.linkedin.com/in/paul-ross-ny-nc/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <v-icon size="20">mdi-linkedin</v-icon>
            </a>
            <a href="mailto:pross326@gmail.com" aria-label="Email">
              <v-icon size="20">mdi-email-outline</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.site-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding: 32px 0;
}

.footer-container {
  max-width: 1200px;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 800;
}

.logo-text {
  color: var(--text-primary);
}

.logo-dot {
  color: var(--accent-primary);
  font-size: 1.5rem;
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-right {
  display: flex;
  justify-content: flex-end;
}

.footer-links {
  display: flex;
  gap: 12px;
}

.footer-links a {
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.25s ease;
}

.footer-links a:hover {
  color: var(--accent-primary);
  background: rgba(99,102,241,0.1);
}

@media (max-width: 600px) {
  .footer-left,
  .footer-right {
    justify-content: center;
    text-align: center;
  }
}
</style>
