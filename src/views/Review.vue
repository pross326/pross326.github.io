<template>
  <v-container class="reviews-container" fluid>
    <v-row class="reviews-row" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="headline">Reviews</h1>
      </v-col>
      <v-col
        cols="12"
        class="text-center mt-4 leave-review-container"
        :class="{ hidden: showForm }"
      >
        <span class="review-note">Have we worked together?</span>
        <v-btn color="primary" class="review-btn" @click="toggleReviewForm">
          Leave a Review
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        xl="4"
        lg="6"
        md="8"
        sm="8"
        class="reviews-col leave-review-form"
        :class="{ hidden: !showForm }"
      >
        <v-card class="review-form-card mx-auto">
          <v-card-title class="headline-2">Leave a Review</v-card-title>
          <v-card-text>
            <p class="note">
              Thank you for taking the time to share your experience working
              with me. Your feedback is invaluable and will be published on my
              portfolio to help me attract new opportunities. I truly appreciate
              your support and participation in my journey.
            </p>
            <v-form
              ref="reviewForm"
              v-model="valid"
              @submit.prevent="submitReview"
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
              <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                :disabled="!valid"
                >Submit</v-btn
              >
              <v-btn
                color="secondary"
                class="mt-4 ml-4"
                @click="toggleReviewForm"
              >
                Cancel
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="reviews-col" v-if="!showForm">
        <v-row class="reviews-grid">
          <v-col
            cols="12"
            class="text-center no-reviews"
            v-if="reviews.length === 0"
          >
            <p>No reviews yet. New reviews will appear here shortly.</p>
          </v-col>
          <v-col
            v-for="(review, index) in reviews"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="review-column"
          >
            <v-card class="review-card mx-auto">
              <v-card-text>
                <div class="review-header">
                  <h3>{{ review.name }}</h3>
                  <p class="review-position">
                    {{ review.position }} at {{ review.placeOfWork }}
                  </p>
                </div>
                <blockquote>"{{ review.text }}"</blockquote>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
  name: "Reviews",
  data() {
    return {
      reviews: [],
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
      showForm: false,
    };
  },
  methods: {
    toggleReviewForm() {
      this.showForm = !this.showForm;
    },
    async submitReview() {
      if (this.$refs.reviewForm.validate()) {
        try {
          await this.sendEmail();
          this.snackbarMessage =
            "Thank you for your review! Your review has been sent successfully.";
          this.snackbar = true;
          this.$refs.reviewForm.reset();
          this.valid = false; // Reset form validity
          this.toggleReviewForm();
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
.reviews-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(50, 127, 214, 0.74), #42b983bb);
  animation: fadeIn 1.5s ease-in-out;
  width: 100%;
  overflow-x: hidden;
  padding: 20px;
}

.reviews-row {
  margin-top: 0;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.headline-2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.reviews-col {
  margin-top: 20px;
  width: 100%;
}

.reviews-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.review-column {
  display: flex;
  align-items: stretch;
  max-width: 90%;
}

.review-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  background-color: #2c2c2c; /* Dark background color */
  border-radius: 12px;
  margin: 10px;
  width: 100%;
  color: #ffffff;
}

.review-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.review-header {
  margin-bottom: 10px;
}

.review-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #ffffff;
}

.review-position {
  margin: 0;
  font-size: 1rem;
  color: #bbb;
}

blockquote {
  font-style: italic;
  margin: 0;
  padding: 0 20px;
  position: relative;
  color: #ffffff;
}

blockquote:before {
  content: "“";
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: -10px;
  left: -10px;
}

.no-reviews {
  margin-top: 20px;
  color: #2c3e50;
}

.leave-review-container,
.leave-review-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition:
    opacity 0.5s ease-in-out,
    display 0.5s ease-in-out;
}

.leave-review-container.hidden,
.leave-review-form.hidden {
  opacity: 0;
  display: none;
}

.leave-review-form {
  width: 100%;
}

.review-note {
  font-size: 1.2rem;
  font-weight: 500;
  color: #2c3e50;
}

.review-btn {
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.review-btn:hover {
  background-color: #369963;
}

.review-form-card {
  padding: 20px;
  color: white;
  background-color: #2c2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.review-form-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.note {
  font-size: 1rem;
  color: #bbb;
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

  .headline-2 {
    font-size: 2rem;
  }

  .review-form-card,
  .review-card {
    margin: 0 auto;
  }

  .reviews-row {
    flex-direction: column;
  }

  .leave-review-container,
  .leave-review-form {
    flex-direction: column;
    gap: 10px;
  }

  .review-column {
    max-width: 100%;
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
