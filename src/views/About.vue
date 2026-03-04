<template>
  <section id="about" class="about-section">
    <v-container class="about-container">
      <div class="section-header" v-animate>
        <span class="section-tag">About Me</span>
        <h2 class="section-title">Developer, designer, problem solver.</h2>
        <p class="section-subtitle">
          From the classroom to the codebase. I bring empathy, clarity, and creativity to every project.
        </p>
      </div>

      <v-row class="about-grid" justify="center">
        <v-col cols="12" md="5">
          <div class="about-text" v-animate="{ type: 'left', delay: '0.1s' }">
            <p>
              I'm a Front End Developer at <strong>Teleflex</strong> with a background that spans
              education, design, and full-stack development. My path from mathematics teacher to
              web developer gave me something most engineers don't have: the ability to explain
              complex ideas simply and design with the end user in mind.
            </p>
            <p>
              I specialize in <strong>Vue.js</strong> and <strong>Vuetify</strong>, building
              responsive, accessible applications that feel as good as they look. Recently, I've
              been diving deep into <strong>AI integration</strong>, building apps that leverage
              Claude and other AI services to deliver intelligent, contextual experiences.
            </p>
            <p>
              When I'm not coding, I'm designing comedy show posters in <strong>Figma</strong> for
              stand-up comedians — a creative outlet that keeps my design instincts sharp and my
              sense of humor sharper.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="skills-grid" v-animate="{ type: 'right', delay: '0.2s' }">
            <div class="skill-category" v-for="cat in skillCategories" :key="cat.title">
              <div class="skill-cat-header">
                <v-icon :color="cat.color" size="18">{{ cat.icon }}</v-icon>
                <span class="skill-cat-title">{{ cat.title }}</span>
              </div>
              <div class="skill-tags">
                <span class="skill-tag" v-for="skill in cat.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Testimonial -->
      <div class="testimonial-block" v-animate="{ type: 'up', delay: '0.1s' }">
        <v-icon size="28" color="primary" class="quote-icon">mdi-format-quote-open</v-icon>
        <p class="testimonial-text">
          While Paul is a young teacher, he displays professionalism and conscientiousness of a seasoned veteran.
          His willingness to take on new challenges has made him even more versatile…
          His professionalism and humility continue to grow as a model for students and staff alike.
        </p>
        <span class="testimonial-attribution">— Matthew Hittenmark, Director, Hyde Leadership Charter</span>
      </div>

      <!-- Stats row -->
      <v-row class="stats-row" justify="center">
        <v-col cols="6" sm="3" v-for="(stat, i) in stats" :key="stat.label">
          <div class="stat-item" v-animate="{ type: 'scale', delay: (i * 0.1 + 0.1) + 's' }">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      skillCategories: [
        {
          title: 'Frontend',
          icon: 'mdi-code-braces',
          color: '#6366f1',
          skills: ['Vue.js', 'Vuetify', 'JavaScript', 'HTML5', 'CSS', 'Vuex', 'Pinia', 'Quasar', 'Bootstrap', 'Axios'],
        },
        {
          title: 'Backend & Data',
          icon: 'mdi-server-outline',
          color: '#8b5cf6',
          skills: ['Python', 'Django', 'ASP.NET', 'C#', 'SQL', 'REST APIs', 'JSON', 'Strapi', 'Cognito', 'Supabase'],
        },
        {
          title: 'AI & Generative Tech',
          icon: 'mdi-robot-outline',
          color: '#a78bfa',
          skills: ['Claude AI', 'ChatGPT', 'LLaMA-2', 'Prompt Engineering', 'GenAI Integration', 'AI-Powered UX'],
        },
        {
          title: 'Design & Accessibility',
          icon: 'mdi-palette-outline',
          color: '#f472b6',
          skills: ['UI/UX Design', 'Responsive Design', 'WCAG / A11Y', 'NVDA', 'Figma'],
        },
        {
          title: 'Tools & Workflow',
          icon: 'mdi-wrench-outline',
          color: '#10b981',
          skills: ['Git', 'Bitbucket', 'Azure', 'Vite', 'Vercel', 'Postman', 'Jira', 'Confluence', 'Sourcetree', 'VS Code'],
        },
      ],
      stats: [
        { value: '4+', label: 'Years at Teleflex' },
        { value: 'Vue.js', label: 'Core Specialty' },
        { value: 'AI', label: 'Certified' },
        { value: 'M.S.', label: 'Marist College' },
      ],
    };
  },
};
</script>

<style scoped>
.about-section {
  padding: 72px 0 56px;
  position: relative;
}

.about-container {
  max-width: 1200px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  padding: 5px 14px;
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

.about-text p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 14px;
  font-size: 0.95rem;
}

.about-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* 2-column skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

/* Last item spans full width if count is odd */
.skill-category:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.skill-category {
  padding: 12px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
}

.skill-cat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.skill-cat-title {
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  padding: 3px 10px;
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.12);
  border-radius: 8px;
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.testimonial-block {
  margin: 40px auto 40px;
  max-width: 760px;
  padding: 24px 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-left: 3px solid var(--accent-primary);
  border-radius: 16px;
  position: relative;
}

.quote-icon {
  margin-bottom: 8px;
  opacity: 0.6;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 12px;
}

.testimonial-attribution {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 500;
}

.stats-row {
  margin-top: 0;
  padding-top: 32px;
  border-top: 1px solid var(--border-subtle);
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent-primary);
  letter-spacing: -0.5px;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .skill-category:last-child:nth-child(odd) {
    grid-column: auto;
  }
}
</style>
