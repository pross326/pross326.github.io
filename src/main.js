import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#0a0f1c',
    surface: '#1a2035',
    'surface-variant': '#111827',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#a78bfa',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    'on-background': '#f1f5f9',
    'on-surface': '#f1f5f9',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      rounded: 'lg',
    },
    VCard: {
      rounded: 'xl',
      elevation: 0,
    },
    VChip: {
      rounded: 'lg',
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);

// Global scroll-triggered animation directive
app.directive('animate', {
  mounted(el, binding) {
    const opts = typeof binding.value === 'object' ? binding.value : {};
    const delay = opts.delay || '0s';
    const type = opts.type || 'up';
    const distance = opts.distance || '24px';

    el.style.opacity = '0';
    el.style.willChange = 'opacity, transform';

    if (type === 'up')    el.style.transform = `translateY(${distance})`;
    if (type === 'down')  el.style.transform = `translateY(-${distance})`;
    if (type === 'left')  el.style.transform = `translateX(-${distance})`;
    if (type === 'right') el.style.transform = `translateX(${distance})`;
    if (type === 'scale') el.style.transform = 'scale(0.95)';
    if (type === 'fade')  el.style.transform = 'none';

    el.style.transition =
      `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}, ` +
      `transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
  },
});

app.mount("#app");
