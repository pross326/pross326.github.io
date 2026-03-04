<template>
  <header class="site-header" :class="{ 'header-scrolled': isScrolled, 'header-hidden': isHidden }">
    <div class="header-inner">
      <div class="logo" @click="scrollToSection('home')">
        <span class="logo-text">PR</span>
        <span class="logo-dot">.</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          @click.prevent="scrollToSection(item.id)"
          :class="{ active: activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <v-btn
        class="cta-header-btn desktop-nav"
        color="primary"
        size="small"
        @click="scrollToSection('contact')"
      >
        <v-icon start size="small">mdi-email-outline</v-icon>
        Let's Talk
      </v-btn>

      <!-- Mobile Menu Button -->
      <v-btn
        icon
        variant="text"
        class="mobile-menu-btn"
        @click="mobileMenu = !mobileMenu"
      >
        <v-icon color="white">{{ mobileMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
    </div>

    <!-- Mobile Nav Drawer -->
    <transition name="slide-down">
      <div v-if="mobileMenu" class="mobile-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          @click.prevent="scrollToSection(item.id); mobileMenu = false"
          class="mobile-nav-link"
        >
          {{ item.label }}
        </a>
        <v-btn
          color="primary"
          block
          class="mt-3"
          @click="scrollToSection('contact'); mobileMenu = false"
        >
          Let's Talk
        </v-btn>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lastScrollY: 0,
      isScrolled: false,
      isHidden: false,
      activeSection: 'home',
      mobileMenu: false,
      navItems: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Credentials' },
        { id: 'contact', label: 'Contact' },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        const headerHeight = 80;
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrolled = currentScrollY > 50;
      this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 300;
      this.lastScrollY = currentScrollY;

      // Update active section
      const sections = this.navItems.map(item => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop - 150 <= currentScrollY) {
          this.activeSection = sections[i];
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-scrolled {
  background: rgba(10, 15, 28, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 10px 0;
}

.header-hidden {
  transform: translateY(-100%);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  user-select: none;
}

.logo-text {
  color: var(--text-primary);
}

.logo-dot {
  color: var(--accent-primary);
  font-size: 2rem;
  line-height: 1;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gradient);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.cta-header-btn {
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.3px;
  text-transform: none;
}

.mobile-menu-btn {
  display: none;
}

.mobile-nav {
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.mobile-nav-link:hover {
  color: var(--text-primary);
  background: rgba(99, 102, 241, 0.1);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
