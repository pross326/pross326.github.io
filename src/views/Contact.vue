<template>
  <v-container class="contact-container" id="contact" fluid>

    <v-row align="center" style="display: flex; justify-content: center; flex-direction: column;">
      <h2 class="headline">Contact</h2>

      <v-col cols="12" md="10" class="text-content">
        <v-card class="info-card">
          <div class="card-styling">
            <div style="margin-left: 16px;">
              <p class="subheading">
                Have a question or want to work together? Let me know below!
              </p>

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
                <v-btn class="contact-btn" :disabled="!valid" type="submit" block>
                  Send Message
                </v-btn>
              </v-form>

              <!-- Alternative Contact -->
              <p class="location">
                Or email me directly at:
                <a href="mailto:pross326@gmail.com">pross326@gmail.com</a>
              </p>
            </div>
          </div>
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
.contact-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101820;
  color: #e2e8f0;
  padding: 20px;
  font-family: "Inter", sans-serif;
  padding-top: 4em;
  margin: auto;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-card {
  width: 85vw;
  height: auto;
  background: linear-gradient(0deg, #020917, #2563EB);
  border-radius: 16px;
  border: 8px solid black;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 25px;
  color: #ffffff;
}

.card-styling {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.headline {
  font-size: 2.7rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
}

.subheading {
  font-size: 1.2rem;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 20px;
}

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
.contact-btn {
  font-weight: bold;
  padding: 16px;
  border-radius: 8px;
  background: linear-gradient(0deg, #020917, #2563EB);
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.location {
  margin-top: 12px;
}

/* Alternative Contact */
.location a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: bold;
}

.location a:hover {
  color: #4098ff;
  text-decoration: underline;
}

/* Mobile Adjustments */
@media (max-width: 600px) {
  .headline {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .contact-btn {
    font-size: 0.9rem;
  }
}
</style>
