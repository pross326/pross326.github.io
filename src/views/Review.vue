<template>
  <v-container class="reviews-container" fluid>
    <v-row class="reviews-row" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="headline">Reviews</h1>
      </v-col>
      <v-col cols="12" class="text-center mt-4">
        <div class="leave-review-container">
          <span class="review-note">Have we worked together?</span>
          <v-btn color="primary" class="review-btn" @click="goToLeaveAReview">
            Leave a Review
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="reviews-col">
        <v-row class="reviews-grid">
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
  </v-container>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      reviews: [
        {
          name: "John Doe",
          placeOfWork: "ABC Corp",
          position: "Manager",
          text: "Paul was a fantastic colleague!",
        },
        {
          name: "Jane Smith",
          placeOfWork: "XYZ Inc",
          position: "Developer",
          text: "Paul's expertise was invaluable to our project.",
        },
        {
          name: "Emily Johnson",
          placeOfWork: "Teleflex",
          position: "Senior Engineer",
          text: "Paul is a great team player!",
        },
        {
          name: "Michael Brown",
          placeOfWork: "SEO",
          position: "SEO Specialist",
          text: "Paul's skills in web development are top-notch.",
        },
        // Add more reviews as needed
      ],
    };
  },
  methods: {
    goToLeaveAReview() {
      this.$router.push({ path: "/leave-a-review" });
    },
  },
};
</script>

<style scoped>
.reviews-container {
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

.reviews-row {
  margin-top: 0;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4e6c8a;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.reviews-col {
  margin-top: 20px;
}

.reviews-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.review-column {
  display: flex;
  align-items: stretch;
  max-width: 90%; /* Adjusted max width */
}

.review-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin: 10px;
  width: 100%; /* Ensure cards take up the full width within the column */
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.review-header {
  margin-bottom: 10px;
}

.review-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #4e6c8a;
}

.review-position {
  margin: 0;
  font-size: 1rem;
  color: #666;
}

blockquote {
  font-style: italic;
  margin: 0;
  padding: 0 20px;
  position: relative;
}

blockquote:before {
  content: "“";
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -10px;
  left: -10px;
}

.leave-review-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.review-note {
  font-size: 1.2rem;
  font-weight: 500;
  color: #4e6c8a;
}

.review-btn {
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.review-btn:hover {
  background-color: #369963;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .headline {
    font-size: 2rem;
  }

  .v-card {
    margin: 0 auto;
  }

  .reviews-row {
    flex-direction: column;
  }

  .leave-review-container {
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
