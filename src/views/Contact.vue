<template>
  <section id="contact" class="contact-section">
    <v-container class="contact-container">
      <div class="section-header" v-animate>
        <span class="section-tag">Contact</span>
        <h2 class="section-title">Let's work together.</h2>
        <p class="section-subtitle">
          Have a project in mind, a role to fill, or just want to chat? I'd love to hear from you.
        </p>
      </div>

      <v-row justify="center">
        <v-col cols="12" md="8" lg="7" v-animate="{ type: 'left', delay: '0.1s' }">
          <v-card class="contact-card">
            <v-form ref="contactForm" v-model="valid" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    label="Your Name"
                    variant="outlined"
                    density="comfortable"
                    :rules="[v => !!v || 'Name is required']"
                    name="name"
                    bg-color="transparent"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="Your Email"
                    variant="outlined"
                    density="comfortable"
                    :rules="[
                      v => !!v || 'Email is required',
                      v => /.+@.+\..+/.test(v) || 'Must be a valid email',
                    ]"
                    name="email"
                    bg-color="transparent"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.subject"
                    label="Subject"
                    variant="outlined"
                    density="comfortable"
                    :rules="[v => !!v || 'Subject is required']"
                    name="subject"
                    bg-color="transparent"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Your Message"
                    variant="outlined"
                    density="comfortable"
                    rows="5"
                    :rules="[v => !!v || 'Message is required']"
                    name="message"
                    bg-color="transparent"
                  />
                </v-col>
              </v-row>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                :disabled="!valid || sending"
                :loading="sending"
                block
                class="submit-btn"
              >
                <v-icon start>mdi-send</v-icon>
                Send Message
              </v-btn>
            </v-form>

            <div class="alt-contact">
              <span>Or reach me directly at</span>
              <a href="mailto:pross326@gmail.com" class="email-link">pross326@gmail.com</a>
            </div>
          </v-card>
        </v-col>

        <!-- Side info -->
        <v-col cols="12" md="4" lg="3" v-animate="{ type: 'right', delay: '0.2s' }">
          <div class="contact-info-cards">
            <div class="info-item" v-for="info in contactInfo" :key="info.label">
              <div class="info-icon-wrapper">
                <v-icon :color="info.color" size="22">{{ info.icon }}</v-icon>
              </div>
              <div>
                <span class="info-label">{{ info.label }}</span>
                <a v-if="info.href" :href="info.href" target="_blank" class="info-value link">{{ info.value }}</a>
                <span v-else class="info-value">{{ info.value }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" :timeout="5000" color="success" location="top">
      {{ snackbarMessage }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: { name: '', email: '', subject: '', message: '' },
      valid: false,
      sending: false,
      snackbar: false,
      snackbarMessage: '',
      contactInfo: [
        {
          label: 'Email',
          value: 'pross326@gmail.com',
          icon: 'mdi-email-outline',
          color: '#6366f1',
          href: 'mailto:pross326@gmail.com',
        },
        {
          label: 'LinkedIn',
          value: 'paul-ross-ny-nc',
          icon: 'mdi-linkedin',
          color: '#0077b5',
          href: 'https://www.linkedin.com/in/paul-ross-ny-nc/',
        },
        {
          label: 'GitHub',
          value: 'pross326',
          icon: 'mdi-github',
          color: '#f1f5f9',
          href: 'https://github.com/pross326',
        },
        {
          label: 'Location',
          value: 'Rolesville, NC',
          icon: 'mdi-map-marker-outline',
          color: '#10b981',
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      const { valid } = await this.$refs.contactForm.validate();
      if (!valid) return;

      this.sending = true;
      try {
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('subject', this.form.subject);
        formData.append('message', this.form.message);

        await fetch('https://formspree.io/f/mzzppagp', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });

        this.snackbarMessage = 'Message sent! I\'ll get back to you soon.';
        this.snackbar = true;
        this.$refs.contactForm.reset();
      } catch (error) {
        this.snackbarMessage = 'Something went wrong. Please try again.';
        this.snackbar = true;
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 72px 0 56px;
}

.contact-container {
  max-width: 1200px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(99,102,241,0.1);
  border: 1px solid var(--border-subtle);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-primary);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -1px;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-subtle);
  padding: 32px;
}

.submit-btn {
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 8px;
}

.alt-contact {
  text-align: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.9rem;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.email-link {
  color: var(--accent-primary);
  font-weight: 600;
  transition: color 0.2s;
}

.email-link:hover {
  color: var(--accent-secondary);
}

.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.info-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

.info-value.link {
  color: var(--accent-primary);
  transition: color 0.2s;
}

.info-value.link:hover {
  color: var(--accent-secondary);
}

@media (max-width: 960px) {
  .contact-info-cards {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
    justify-content: center;
  }
}
</style>
