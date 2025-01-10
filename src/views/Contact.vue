<template>
  <v-container class="contact-container" id="contact" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">

        <!-- Contact Card -->
        <v-card class="contact-card" elevation="2">
          <div class="header-container"></div>
          <h1 class="section-title">Get in Touch</h1>

          <v-form ref="contactForm" v-model="valid" @submit.prevent="submitForm">
            <!-- Form Fields -->
            <v-text-field v-model="form.name" label="Your Name" outlined dense class="input-field"
              :rules="[(v) => !!v || 'Name is required']"></v-text-field>

            <v-text-field v-model="form.email" label="Your Email" outlined dense class="input-field" :rules="[
              (v) => !!v || 'Email is required',
              (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]"></v-text-field>

            <v-text-field v-model="form.subject" label="Subject" outlined dense class="input-field"
              :rules="[(v) => !!v || 'Subject is required']"></v-text-field>

            <v-textarea v-model="form.message" label="Your Message" outlined dense rows="4" class="input-field"
              :rules="[(v) => !!v || 'Message is required']"></v-textarea>

            <!-- Submit Button -->
            <v-btn class="submit-btn" :disabled="!valid" type="submit" block>
              Send Message
            </v-btn>
          </v-form>

          <!-- Alternative Contact -->
          <p class="alternative-contact">
            Or email me directly at:
            <a href="mailto:pross326@gmail.com">pross326@gmail.com</a>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      valid: false,
    };
  },
  methods: {
    submitForm() {
      alert("Your message has been sent!");
    },
  },
};
</script>

<style scoped>
/* Overall Container */
#contact {
  background: radial-gradient(circle at center, #101820, #0f172a);
  color: #e2e8f0;
  font-family: "Inter", sans-serif;
  padding: 20px 20px;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card Design */
.contact-card {
  padding: 40px 30px;
  background: linear-gradient(135deg, #1e293b, #16202e);
  border: 1px solid rgba(37, 99, 235, 0.5);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
  text-align: center;
  color: #e2e8f0;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 1em;
}

/* Input Fields */
.input-field {
  margin-bottom: 20px;
}

.input-field .v-input__control {
  background-color: #2d3748;
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.input-field .v-input__control:hover,
.input-field .v-input__control:focus {
  border-color: #4098ff;
  box-shadow: 0 0 12px rgba(64, 152, 255, 0.7);
}

.v-label {
  color: #94a3b8 !important;
}

/* Submit Button */
.submit-btn {
  background: linear-gradient(135deg, #2563eb, #4098ff);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.4);
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #4098ff, #2563eb);
  box-shadow: 0 6px 14px rgba(64, 152, 255, 0.5);
  transform: translateY(-2px);
}

/* Alternative Contact */
.alternative-contact {
  margin-top: 20px;
  font-size: 1rem;
  color: #94a3b8;
}

.alternative-contact a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: bold;
}

.alternative-contact a:hover {
  color: #4098ff;
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .section-title {
    font-size: 2rem;
  }

  .contact-card {
    padding: 20px;
  }

  .submit-btn {
    font-size: 0.9rem;
    padding: 10px;
  }

  .alternative-contact {
    font-size: 0.9rem;
  }
}
</style>
