<template>
  <v-container class="resume-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <v-card class="resume-card">
          <v-card-title>
            <div class="title-container">
              <h1 class="title">Paul Ross - Resume</h1>
              <v-btn
                icon
                color="primary"
                class="download-btn"
                @click="downloadResume"
              >
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <section>
              <h2 class="section-title">Summary</h2>
              <p class="section-content">
                Interpersonal Web Developer with experience spanning front-end,
                back-end, and full stack design, development, and
                implementation. Strong ability to write code for websites,
                mobile applications, and internal tools. Cultivate collaborative
                relationships across function and role to determine project
                requirements and direction for successful outcomes. Analytical
                problem solver identifying opportunities to close gaps in
                processes, automate workflows, and dramatically improve team and
                organizational productivity.
              </p>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">
                Core Expertise & Technical Proficiencies
              </h2>
              <div class="center-chips vertical-chips">
                <v-chip-group column>
                  <v-chip class="ma-2" color="primary" outlined
                    >Website Design</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Project Management</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Creative Problem Solving</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Strategic Solution Development</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Collaborative Team Player</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Agile Methodology</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Integrated Development</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Clear Communications</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Responsive Design Thinking</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Analytical Decision Making</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Process Improvements</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Workflow Automation</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Current Technology Trends</v-chip
                  >
                  <v-chip class="ma-2" color="primary" outlined
                    >Development Standards & Best Practices</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined
                    >Microsoft Office Suite</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined
                    >Google Suite</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined>Vue.js</v-chip>
                  <v-chip class="ma-2" color="info" outlined>JavaScript</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Vuetify</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Axios</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Bootstrap</v-chip>
                  <v-chip class="ma-2" color="info" outlined>CSS</v-chip>
                  <v-chip class="ma-2" color="info" outlined>HTML5</v-chip>
                  <v-chip class="ma-2" color="info" outlined>SQL</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Git</v-chip>
                  <v-chip class="ma-2" color="info" outlined>iOS</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Python</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Django</v-chip>
                  <v-chip class="ma-2" color="info" outlined
                    >Custom APIs</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined>Bitbucket</v-chip>
                  <v-chip class="ma-2" color="info" outlined
                    >Jupyter Notebook</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined
                    >Visual Studio Code</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined>Vuex</v-chip>
                  <v-chip class="ma-2" color="info" outlined
                    >JS Libraries</v-chip
                  >
                  <v-chip class="ma-2" color="info" outlined>Sourcetree</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Remedy</v-chip>
                  <v-chip class="ma-2" color="info" outlined>ASP.NET</v-chip>
                  <v-chip class="ma-2" color="info" outlined>REST API</v-chip>
                  <v-chip class="ma-2" color="info" outlined>JSON</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Strapi</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Cognito</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Postman</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Azure</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Atlassian</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Jira</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Slack</v-chip>
                  <v-chip class="ma-2" color="info" outlined>NVDA</v-chip>
                  <v-chip class="ma-2" color="info" outlined>Confluence</v-chip>
                </v-chip-group>
              </div>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">Professional Experience</h2>
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="experience in professionalExperience"
                  :key="experience.title"
                  :color="experience.color"
                  small
                  :style="{
                    borderLeft: experience.isConcurrent
                      ? '3px dashed'
                      : '3px solid',
                  }"
                >
                  <template v-slot:opposite>
                    <span>{{ experience.period }}</span>
                  </template>
                  <v-card elevation="2">
                    <v-card-title>{{ experience.title }}</v-card-title>
                    <v-card-subtitle>{{ experience.company }}</v-card-subtitle>
                    <v-card-text>
                      <ul>
                        <li v-for="item in experience.details" :key="item">
                          {{ item }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">Development Projects</h2>
              <v-btn class="project-link" @click="goToProjects">
                See my Development Projects
              </v-btn>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">Education</h2>
              <v-row justify="center">
                <v-col cols="12" md="6">
                  <v-card class="diploma-card" elevation="2">
                    <v-card-title>Master of Science</v-card-title>
                    <v-card-subtitle>Educational Psychology</v-card-subtitle>
                    <v-card-text>
                      Marist College<br />Poughkeepsie, NY
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card class="diploma-card" elevation="2">
                    <v-card-title>Bachelor of Arts</v-card-title>
                    <v-card-subtitle>Secondary Education</v-card-subtitle>
                    <v-card-text>
                      Iona College<br />New Rochelle, NY
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">Certifications</h2>
              <div class="center-chips vertical-chips">
                <v-chip-group column>
                  <v-chip class="ma-2" color="success" outlined
                    >Build a Website Skill Path | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Intermediate CSS | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Front End Engineer | Codecademy Pro</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Python Bootcamp | Udemy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Crash Course | Eric Matthes</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Learn JavaScript | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Learn CSS | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Learn Responsive Design | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Learn Color Design Course | Codecademy</v-chip
                  >
                  <v-chip class="ma-2" color="success" outlined
                    >Learn HTML | Codecademy</v-chip
                  >
                </v-chip-group>
              </div>
            </section>
            <v-divider class="my-4"></v-divider>
            <section>
              <h2 class="section-title">Accolades</h2>
              <p class="section-content">
                “While Paul is a young teacher, he displays professionalism and
                conscientiousness of a seasoned veteran. As a geometry teacher,
                Paul worked in tandem with his Co-teacher. The systems and
                routines were clearly outlined throughout the room and soft
                chatter about math was commonplace. In the CS through Algebra
                course, Paul showed a willingness to learn with his students
                through code. His humility and patience were on full display as
                the varying level of math ability and comfort in the room was
                vast. The classroom was full of joy, the occasional bewilderment
                at a broken strand of code, and students taking full
                responsibility for their own learning… Paul’s goals were met and
                led to a more robust learning environment. His willingness to
                take on new challenges has made him even more versatile… His
                professionalism and humility continue to grow as a model for
                students and staff alike.” ~ Matthew Hittenmark, Asst. Director,
                Hyde Leadership Charter
              </p>
            </section>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ResumeView",
  data() {
    return {
      professionalExperience: [
        {
          title: "Web Developer",
          company: "Teleflex",
          period: "April 2024 – Present",
          color: "primary",
          details: [
            "Maintain and update websites and web applications using content management systems, APIs, and various JS frameworks, specializing in Vue.js.",
            "Design and maintain back-end systems using C# and ASP.NET to improve functionality and scalability.",
            "Maintain internal APIs and databases to ensure data integrity and efficient performance.",
            "Collaborate with customers and team members to provide accurate and timely results using best practices and responsive design.",
            "Lead UI development strategies for internal applications based on the latest UI/UX design principles.",
          ],
        },
        {
          title: "Associate Web Developer",
          company: "Teleflex",
          period: "Jan 2022 – April 2024",
          color: "info",
          details: [
            "Supported web development tasks and maintenance of websites and web applications.",
            "Designed an interactive landing page for multiple internal applications.",
            "Participated in professional development training to enhance knowledge of data security measures.",
          ],
        },
        {
          title: "Instructor",
          company: "SEO Scholars",
          period: "2020 – 2023",
          color: "purple",
          isConcurrent: true,
          details: [
            "Planned, researched, and collaborated with co-instructor to deliver weekly advanced student instruction using Jam Board and Desmos.",
            "Tailored curriculum and inclusive remote instruction style to 30 diverse students of all learning styles per semester.",
            "Consistent record of 100% pass rates resulting from customized curriculum, assignments, and assessments.",
            "Formulated weekly advisory supplementary topic to prevent burn-out, stress, depression, and other high achiever issues.",
          ],
        },
        {
          title: "High School Math Teacher",
          company: "Rolesville High School",
          period: "2020 – 2021",
          color: "purple",
          isConcurrent: true,
          details: [
            "Primary writer and presenter of engaging curriculum aligned with state standards and proprietary school programs delivered through an array of remote and in-person learning tools to stimulate a love of learning and balance rigorous coursework and expectations.",
            "Collaborate with specialists and staff to deliver against individualized learning requirements for 50% IEP population.",
            "Rapidly innovate and iterate on school programs, resources, tools, and curriculum to elevate learning experience and time savings.",
            "Team Player serving additional daily duties spanning morning, lunch, afternoon, bus, and other class instruction coverage.",
          ],
        },
        {
          title: "Mathematics Teacher",
          company: "Hyde Leadership Charter School",
          period: "2018 – 2020",
          color: "purple",
          isConcurrent: true,
          details: [
            "Authored differentiated curriculum while teaching 25 students to think creatively and innovatively.",
            "Compelled learning across Algebra 1, Geometry, Computer Science, and Physics through captivating lessons and facilitation.",
            "Tracked and monitored individual data to inform instruction and mentor individual student success, particular for 25% on IEPs.",
            "Designed, evolved, and led instruction for ½ year Coding Course based on Bootstrap Algebra coding, first researching, writing, and winning business case for course with administration.",
          ],
        },
        {
          title: "Algebra & Geometry Teacher",
          company: "New Visions Charter School",
          period: "2016 – 2018",
          color: "purple",
          details: [
            "Partnered with Special Education teacher in each classroom to tailor learning for 30 students, 30% IEPs, in 4 - 65 minutes classes.",
            "Accelerated Regents Exam scores by 22% within the 1st year.",
            "Created Peer Influence Club reducing behavioral disruptions by 30% through tactical mentoring and accountability of 20 members.",
          ],
        },
      ],
    };
  },
  methods: {
    goToProjects() {
      this.$router.push({ path: "/projects" });
    },
    downloadResume() {
      const link = document.createElement("a");
      link.href = "/src/assets/Paul Ross Resume 2024F.pdf";
      link.download = "Paul_Ross_Resume.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
.resume-container {
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

.resume-card {
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 10px;
}

.expansion-header {
  font-weight: bold;
  color: #2980b9;
}

.section-content {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  text-align: left;
}

ul.section-content {
  padding-left: 20px;
}

.resume-card ul {
  padding-left: 20px;
  text-align: left;
}

.resume-card p {
  margin-bottom: 15px;
  text-align: left;
}

.project-description {
  padding: 0 16px;
}

.center-chips {
  display: flex;
  justify-content: center;
}

.diploma-card {
  border-radius: 8px;
  text-align: center;
  background: #f0f0f0;
  color: #333;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.project-link {
  background-color: #2980b9;
  color: #fff;
  margin-bottom: 10px;
}

.project-link:hover {
  background-color: #1f5f87;
}

.link-hint {
  color: #999;
  font-size: 14px;
  text-align: center;
}

.vertical-chips .v-chip-group {
  align-items: flex-start;
}

@media (max-width: 600px) {
  .resume-card {
    padding: 10px;
  }

  .title {
    font-size: 24px;
  }

  .section-title {
    font-size: 18px;
  }

  .section-content {
    font-size: 14px;
  }
}
</style>
