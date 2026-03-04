<template>
  <section id="certifications" class="cert-section">
    <v-container class="cert-container">
      <div class="section-header" v-animate>
        <span class="section-tag">Credentials</span>
        <h2 class="section-title">Certifications & Education</h2>
        <p class="section-subtitle">
          Continuously leveling up, especially in AI and modern web technologies.
        </p>
      </div>

      <!-- Recent AI Certifications -->
      <div class="cert-group">
        <h3 class="group-title" v-animate="{ delay: '0.05s' }">
          <v-icon color="primary" class="mr-2">mdi-robot-outline</v-icon>
          Recent Certifications: AI & Generative Tech
        </h3>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(cert, i) in recentCerts" :key="cert.title">
            <v-card class="cert-card" v-animate="{ delay: (i * 0.1 + 0.1) + 's' }">
              <div class="cert-icon-wrapper" :style="{ background: cert.bg }">
                <v-icon :color="cert.iconColor" size="24">{{ cert.icon }}</v-icon>
              </div>
              <h4 class="cert-title">{{ cert.title }}</h4>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <p v-if="cert.detail" class="cert-detail">{{ cert.detail }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Development Certifications -->
      <div class="cert-group">
        <h3 class="group-title" v-animate="{ delay: '0.05s' }">
          <v-icon color="primary" class="mr-2">mdi-certificate-outline</v-icon>
          Development Certifications
        </h3>
        <div class="dev-certs-chips" v-animate="{ delay: '0.15s' }">
          <v-chip
            v-for="cert in devCerts"
            :key="cert.title"
            class="dev-cert-chip"
            color="primary"
            variant="outlined"
            size="default"
            prepend-icon="mdi-check-circle-outline"
          >
            {{ cert.title }}
          </v-chip>
        </div>
      </div>

      <!-- Education + Experience in 2-column layout -->
      <v-row align="start">
        <!-- Education -->
        <v-col cols="12" md="6">
          <div class="cert-group">
            <h3 class="group-title" v-animate="{ delay: '0.05s' }">
              <v-icon color="primary" class="mr-2">mdi-school-outline</v-icon>
              Education
            </h3>
            <div class="edu-stack">
              <v-card
                class="cert-card edu-card"
                v-for="(edu, i) in education"
                :key="edu.degree"
                v-animate="{ delay: (i * 0.1 + 0.1) + 's' }"
              >
                <div class="edu-top">
                  <div class="cert-icon-wrapper" :style="{ background: edu.bg }">
                    <v-icon :color="edu.iconColor" size="24">{{ edu.icon }}</v-icon>
                  </div>
                  <div>
                    <h4 class="cert-title">{{ edu.degree }}</h4>
                    <p class="cert-issuer">{{ edu.school }}</p>
                    <p v-if="edu.detail" class="cert-detail">{{ edu.detail }}</p>
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </v-col>

        <!-- Experience Timeline -->
        <v-col cols="12" md="6">
          <div class="cert-group">
            <h3 class="group-title" v-animate="{ delay: '0.05s' }">
              <v-icon color="primary" class="mr-2">mdi-briefcase-outline</v-icon>
              Experience
            </h3>
            <div class="timeline">
              <div
                class="timeline-item"
                v-for="(exp, i) in experience"
                :key="exp.title + exp.period"
                v-animate="{ delay: (i * 0.08 + 0.1) + 's' }"
              >
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-row">
                    <div class="timeline-logo-box">
                      <img
                        v-if="exp.logo && !exp.logoError"
                        :src="exp.logo"
                        :alt="exp.company"
                        class="timeline-logo"
                        @error="exp.logoError = true"
                      />
                      <v-icon v-else size="18" color="primary">mdi-domain</v-icon>
                    </div>
                    <div class="timeline-text">
                      <span class="timeline-period">{{ exp.period }}</span>
                      <h4 class="timeline-title">{{ exp.title }}</h4>
                      <p class="timeline-company">{{ exp.company }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
export default {
  name: "CertificationsView",
  data() {
    return {
      recentCerts: [
        {
          title: 'AI Fluency: Framework & Foundations',
          issuer: 'AI Certification Program',
          icon: 'mdi-brain',
          iconColor: '#8b5cf6',
          bg: 'rgba(139,92,246,0.1)',
          detail: 'Core AI concepts, frameworks, and practical applications',
        },
        {
          title: 'Claude 101: Certificate of Completion',
          issuer: 'Anthropic',
          icon: 'mdi-message-processing-outline',
          iconColor: '#6366f1',
          bg: 'rgba(99,102,241,0.1)',
          detail: 'Working with Claude AI for development workflows',
        },
        {
          title: 'GenAI Prompt Engineering',
          issuer: 'Andela AI Academy',
          icon: 'mdi-creation',
          iconColor: '#10b981',
          bg: 'rgba(16,185,129,0.1)',
          detail: 'Advanced prompt engineering for generative AI',
        },
      ],
      devCerts: [
        { title: 'Front End Engineer', issuer: 'Codecademy Pro' },
        { title: 'Python Bootcamp', issuer: 'Udemy' },
        { title: 'Build a Website', issuer: 'Codecademy' },
        { title: 'Intermediate CSS', issuer: 'Codecademy' },
        { title: 'Learn JavaScript', issuer: 'Codecademy' },
        { title: 'Learn Responsive Design', issuer: 'Codecademy' },
        { title: 'Learn Color Design', issuer: 'Codecademy' },
        { title: 'Learn HTML', issuer: 'Codecademy' },
        { title: 'Learn CSS', issuer: 'Codecademy' },
        { title: 'Crash Course', issuer: 'Eric Matthes' },
        { title: 'Bootstrap Algebra', issuer: 'bootstrapworld.com' },
        { title: '30 Days of Code', issuer: 'Hackerrank' },
      ],
      education: [
        {
          degree: 'M.S. Educational Psychology',
          school: 'Marist College, Poughkeepsie, NY',
          icon: 'mdi-school',
          iconColor: '#6366f1',
          bg: 'rgba(99,102,241,0.1)',
          detail: '5–6 Extension Certificate',
        },
        {
          degree: 'B.A. Secondary Education',
          school: 'Iona College, New Rochelle, NY',
          icon: 'mdi-school',
          iconColor: '#8b5cf6',
          bg: 'rgba(139,92,246,0.1)',
          detail: 'NCATE Accreditation · Mathematics, Grades 7–12',
        },
      ],
      experience: [
        { title: 'Web Developer', company: 'Teleflex', period: '2021–Present', logo: 'https://logo.clearbit.com/teleflex.com', logoError: false },
        { title: 'AI Trainer / Team Lead', company: 'Mercor', period: '2025', logo: 'https://logo.clearbit.com/mercor.com', logoError: false },
        { title: 'Digital Interactives Developer', company: 'Andela / GreatMinds', period: 'Contract', logo: 'https://logo.clearbit.com/andela.com', logoError: false },
        { title: 'Instructor', company: 'SEO Scholars', period: '2020–2023', logo: 'https://logo.clearbit.com/seoscholars.org', logoError: false },
        { title: 'High School Math Teacher', company: 'Rolesville High School', period: '2020–2021', logo: null, logoError: false },
        { title: 'Mathematics Teacher', company: 'Hyde Leadership Charter School', period: '2018–2020', logo: null, logoError: false },
        { title: 'Algebra & Geometry Teacher', company: 'New Visions Charter School', period: '2016–2018', logo: 'https://logo.clearbit.com/newvisions.org', logoError: false },
      ],
    };
  },
};
</script>

<style scoped>
.cert-section {
  padding: 72px 0 56px;
  background: var(--bg-secondary);
}

.cert-container {
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

.cert-group {
  margin-bottom: 32px;
}

.group-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.cert-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-subtle);
  padding: 20px;
  height: 100%;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(99,102,241,0.08);
}

.cert-icon-wrapper {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.cert-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.3;
}

.cert-issuer {
  font-size: 0.82rem;
  color: var(--accent-primary);
  font-weight: 500;
  margin-bottom: 6px;
}

.cert-detail {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Dev Certs Chips */
.dev-certs-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.dev-cert-chip {
  font-size: 0.82rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.2px;
  transition: all 0.2s ease !important;
}

.dev-cert-chip:hover {
  background: rgba(99,102,241,0.1) !important;
  transform: translateY(-2px);
}

/* Education stack */
.edu-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.edu-card {
  display: flex;
  flex-direction: column;
}

.edu-top {
  display: flex;
  align-items: center;
  gap: 16px;
}

.edu-top .cert-icon-wrapper {
  margin-bottom: 0;
  flex-shrink: 0;
}

.edu-top .cert-title {
  margin-bottom: 2px;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border-subtle);
}

.timeline-item {
  position: relative;
  padding-bottom: 18px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 2px solid var(--bg-secondary);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
  transition: box-shadow 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  box-shadow: 0 0 0 5px rgba(99,102,241,0.2);
}

.timeline-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.timeline-logo-box {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  margin-top: 2px;
}

.timeline-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.timeline-text {
  flex: 1;
}

.timeline-period {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent-primary);
  font-family: var(--font-mono);
}

.timeline-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 1px 0 1px;
  line-height: 1.3;
}

.timeline-company {
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
