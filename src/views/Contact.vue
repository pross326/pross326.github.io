<template>
  <v-container class="contact-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card class="contact-form-card mx-auto">
          <v-card-title class="headline">Contact Me</v-card-title>
          <v-card-text>
            <v-form
              ref="contactForm"
              @submit.prevent="submitForm"
              v-model="valid"
            >
              <v-text-field
                v-model="form.name"
                label="Name"
                :rules="[(v) => !!v || 'Name is required']"
                required
                name="name"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="[
                  (v) => !!v || 'Email is required',
                  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ]"
                required
                name="email"
              ></v-text-field>
              <v-text-field
                v-model="form.subject"
                label="Subject"
                :rules="[(v) => !!v || 'Subject is required']"
                required
                name="subject"
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="Message"
                :rules="[(v) => !!v || 'Message is required']"
                required
                name="message"
              ></v-textarea>
              <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
            </v-form>
            <p class="alternative-contact">
              Or email me directly at
              <a href="mailto:pross326@gmail.com">pross326@gmail.com</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="5000" top outlined color="success">
      {{ snackbarMessage }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      valid: false,
      snackbar: false,
      snackbarMessage: "",
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.contactForm.validate()) {
        try {
          await this.sendForm();
          this.snackbarMessage =
            "Your message has been sent! I will contact you within 1-2 business days.";
          this.snackbar = true;
          this.$refs.contactForm.reset();
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 5000);
        } catch (error) {
          console.error("Failed to send message:", error);
          this.snackbarMessage =
            "Failed to send your message. Please try again.";
          this.snackbar = true;
        }
      }
    },
    sendForm() {
      const form = this.$refs.contactForm.$el;
      const formData = new FormData(form);
      return fetch("https://formspree.io/f/xwpeepaq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
    },
  },
};
</script>

<style scoped>
.contact-container {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(74, 144, 226, 0.2),
    rgba(66, 185, 131, 0.2)
  );
  animation: fadeIn 1.5s ease-in-out;
  padding: 20px;
  background: linear-gradient(135deg, rgba(50, 127, 214, 0.74), #42b983bb);
}

.contact-form-card {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.contact-form-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.alternative-contact {
  margin-top: 20px;
  text-align: center;
}

.alternative-contact a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.alternative-contact a:hover {
  text-decoration: underline;
}

.v-btn {
  margin-top: 10px;
}

.v-snackbar {
  border: 2px solid #4caf50;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
