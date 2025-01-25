<template>
  <div class="floating-header" :class="{ hidden: isHidden }">
    <div class="logo">
      <img src="/logo2.png" alt="PR Logo" />
    </div>
    <nav class="nav-links">
      <a @click.prevent="scrollToSection('home')">Home</a>
      <a @click.prevent="scrollToSection('projects')">Projects</a>
      <a @click.prevent="scrollToSection('contact')">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastScrollY: 0,
      isHidden: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = document.querySelector(`[id="${id}"]`);
      if (section) {
        const headerHeight = document.querySelector(".floating-header").offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style scoped>
.floating-header {
  position: fixed;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 50px;
  padding: 10px 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.floating-header.hidden {
  transform: translate(-50%, -100%);
  opacity: 0;
}

.logo img {
  width: 40px;
  padding-top: 5px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #e2e8f0;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.nav-links a:hover {
  color: #2563eb;
  transform: translateY(-2px);
}
</style>
