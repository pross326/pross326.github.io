<template>
  <v-container class="leave-review-container" fluid>
    <v-row class="leave-review-row" align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card class="review-form-card mx-auto">
          <v-card-title class="headline">Leave a Review</v-card-title>
          <v-card-text>
            <p class="note">
              Thank you for taking the time to share your experience working
              with me. Your feedback is invaluable and will be published on my
              portfolio to help me attract new opportunities. I truly appreciate
              your support and participation in my journey.
            </p>
            <v-form
              ref="reviewForm"
              @submit.prevent="submitReview"
              v-model="valid"
            >
              <v-text-field
                v-model="newReview.name"
                label="Name"
                :rules="[(v) => !!v || 'Name is required']"
                required
                name="name"
              ></v-text-field>
              <v-select
                v-model="newReview.placeOfWork"
                :items="companies"
                label="Company"
                :rules="[(v) => !!v || 'Company is required']"
                required
                name="company"
              ></v-select>
              <v-text-field
                v-model="newReview.position"
                label="Position"
                :rules="[(v) => !!v || 'Position is required']"
                required
                name="position"
              ></v-text-field>
              <v-text-field
                v-model="newReview.email"
                label="Email"
                :rules="[
                  (v) => !!v || 'Email is required',
                  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ]"
                required
                name="email"
              ></v-text-field>
              <v-textarea
                v-model="newReview.text"
                label="Describe your experience working with me."
                :rules="[(v) => !!v || 'Review is required']"
                required
                name="message"
              ></v-textarea>
              <v-btn type="submit" color="primary" class="mt-4">Submit</v-btn>
            </v-form>
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
  name: "LeaveAReview",
  data() {
    return {
      newReview: {
        name: "",
        placeOfWork: "",
        position: "",
        email: "",
        text: "",
      },
      companies: [
        "Teleflex",
        "SEO",
        "Andela",
        "Greatminds",
        "Hyde",
        "Humanities",
      ],
      valid: false,
      snackbar: false,
      snackbarMessage: "",
    };
  },
  methods: {
    async submitReview() {
      if (this.$refs.reviewForm.validate()) {
        try {
          await this.sendEmail();
          this.snackbarMessage =
            "Thank you for your review! Your review has been sent successfully.";
          this.snackbar = true;
          this.$refs.reviewForm.reset();
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 5000);
        } catch (error) {
          console.error("Failed to send review:", error);
          this.snackbarMessage =
            "Failed to send your review. Please try again.";
          this.snackbar = true;
        }
      }
    },
    sendEmail() {
      const form = this.$refs.reviewForm.$el;
      const formData = new FormData(form);
      return fetch("https://formspree.io/f/mzzppagp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
    },
  },
};
</script>

<style scoped>
.leave-review-container {
  min-height: 100vh;
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
}

.leave-review-row {
  margin-top: 0;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.review-form-card {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.review-form-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.note {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.v-btn {
  margin-top: 10px;
}

.v-snackbar {
  border: 2px solid #4caf50;
  color: white;
}

@media (max-width: 600px) {
  .headline {
    font-size: 2rem;
  }

  .review-form-card {
    margin: 0 auto;
  }

  .leave-review-row {
    flex-direction: column;
  }
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
