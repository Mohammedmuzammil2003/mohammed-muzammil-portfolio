import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Computer Use Automation System",
    category: "LLM • AI AGENTS • COMPUTER USE",
    description:
      "An AI-powered computer-use system that connects an LLM with real user interfaces, enabling an agent to understand screens, reason about tasks and execute actions through browser-based interfaces.",
    tags: ["LLM", "AI Agents", "Playwright", "Python", "FastAPI"],
  },
  {
    number: "02",
    title: "AI Contactless Fingerprint Quality Assessment",
    category: "COMPUTER VISION • AI",
    description:
      "An AI-based fingerprint quality assessment system designed to evaluate fingerprint images without physical contact, combining an intelligent backend with a modern web interface.",
    tags: ["TypeScript", "FastAPI", "Next.js", "Computer Vision"],
  },
  {
    number: "03",
    title: "Validating Bowling Action Using Deep Learning",
    category: "DEEP LEARNING • COMPUTER VISION",
    description:
      "A computer vision system that analyzes cricket bowling actions using pose estimation, joint-angle calculations and deep learning to identify potentially illegal bowling actions.",
    tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
  },
  {
    number: "04",
    title: "LLM Mental Wellness Companion",
    category: "GENERATIVE AI • NLP",
    description:
      "A conversational AI application built around an LLM architecture, designed to provide supportive interactions through contextual conversations and a simple Streamlit interface.",
    tags: ["Python", "Gemini API", "LLM", "Streamlit"],
  },
  {
    number: "05",
    title: "Olympics Data Analytics Dashboard",
    category: "DATA ANALYTICS • POWER BI",
    description:
      "An interactive analytics dashboard exploring Olympic medal trends, country performance, participation and gender distribution through data visualization.",
    tags: ["Power BI", "Data Analytics", "Visualization"],
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "LLMs",
  "Computer Vision",
  "NLP",
  "OpenCV",
  "TensorFlow",
  "MediaPipe",
  "Hugging Face",
  "FastAPI",
  "Streamlit",
  "TypeScript",
  "Power BI",
  "Git",
];

const focusAreas = [
  {
    number: "01",
    title: "AI / ML",
    description: "Intelligent systems & predictive applications",
  },
  {
    number: "02",
    title: "LLMs / GEN AI",
    description: "AI agents, LLM applications & automation",
  },
  {
    number: "03",
    title: "COMPUTER VISION",
    description: "Vision systems, pose estimation & deep learning",
  },
];

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#top" className="brand">
          <span className="brand-mark">MM</span>
          <span className="brand-name">MOHAMMED MUZAMMIL</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <a
          href="mailto:mohmedmuzammil2003@gmail.com"
          className="nav-connect"
        >
          Let's Connect <span>↗</span>
        </a>
      </header>

      {/* ================= HERO ================= */}

      <main id="top">
        <section className="hero">
          <div className="hero-grid-bg"></div>

          <div className="hero-content">
            <motion.div
              className="status"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="status-dot"></span>
              AVAILABLE FOR AI / ML OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-small"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              AI / ML ENGINEER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mohammed
              <br />
              <span>Muzammil.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              I build intelligent systems at the intersection of
              <strong> Artificial Intelligence</strong>,
              <strong> Generative AI</strong> and
              <strong> Computer Vision</strong>.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                type="button"
                className="primary-button"
                onClick={scrollToProjects}
              >
                Explore My Work
                <span>↓</span>
              </button>

              <a
                href="https://github.com/Mohammedmuzammil2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-muzammil-700422255/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                LinkedIn ↗
              </a>
            </motion.div>

            {/* AI CORE FOCUS */}

            <motion.div
              className="hero-focus"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <div className="focus-heading">
                <span>AI CORE FOCUS</span>
                <div className="focus-line"></div>
              </div>

              <div className="focus-grid">
                {focusAreas.map((focus, index) => (
                  <motion.div
                    className="focus-item"
                    key={focus.number}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.65 + index * 0.1,
                    }}
                  >
                    <span className="focus-number">{focus.number}</span>

                    <div>
                      <strong>{focus.title}</strong>
                      <small>{focus.description}</small>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* HERO VISUAL */}

          <motion.div
            className="hero-photo-area"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="ai-orbit orbit-one"></div>
            <div className="ai-orbit orbit-two"></div>

            <div className="photo-glow"></div>

            <div className="photo-frame">
              <div className="photo-top-label">
                <span>01 /</span>
                AI / ML ENGINEER
              </div>

              <img
                src="/profile.png"
                alt="Mohammed Muzammil"
                className="profile-photo"
              />

              <div className="photo-overlay"></div>

              <div className="photo-bottom">
                <span>MOHAMMED</span>
                <span>MUZAMMIL</span>
              </div>
            </div>

            {/* AI SYSTEM PANEL */}

            <div className="ai-system-panel">
              <div className="system-header">
                <span className="system-live"></span>
                AI SYSTEM
                <span className="system-status">ONLINE</span>
              </div>

              <div className="system-flow">
                <div className="system-node">
                  <span>01</span>
                  <strong>INPUT</strong>
                </div>

                <div className="system-connector">→</div>

                <div className="system-node active">
                  <span>02</span>
                  <strong>MODEL</strong>
                </div>

                <div className="system-connector">→</div>

                <div className="system-node">
                  <span>03</span>
                  <strong>OUTPUT</strong>
                </div>
              </div>

              <div className="system-caption">
                Intelligent systems • LLMs • Vision • ML
              </div>
            </div>

            <div className="floating-code-card">
              <span>PYTHON</span>
              <span>LLM</span>
              <span>CV</span>
            </div>
          </motion.div>
        </section>

        {/* ================= MARQUEE ================= */}

        <section className="marquee">
          <div className="marquee-track">
            <span>ARTIFICIAL INTELLIGENCE</span>
            <b>✦</b>
            <span>MACHINE LEARNING</span>
            <b>✦</b>
            <span>GENERATIVE AI</span>
            <b>✦</b>
            <span>COMPUTER VISION</span>
            <b>✦</b>
            <span>DEEP LEARNING</span>
            <b>✦</b>
            <span>ARTIFICIAL INTELLIGENCE</span>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-label">
            <span>01</span>
            ABOUT ME
          </div>

          <div className="about-grid">
            <div>
              <h2>
                Building AI systems
                <span> that solve real problems.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I am an AI/ML Engineer focused on building practical
                intelligent applications using modern machine learning,
                Generative AI, computer vision and deep learning.
              </p>

              <p>
                My work spans LLM-powered applications, AI agents,
                computer vision systems, predictive machine learning
                applications and data analytics platforms.
              </p>

              <p>
                I enjoy taking an idea from a problem statement to a
                working AI-powered product.
              </p>

              <a
                href="https://github.com/Mohammedmuzammil2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explore my GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">
          <div className="section-label">
            <span>02</span>
            AI TOOLKIT
          </div>

          <div className="skills-heading">
            <h2>
              Technologies I use to
              <span> build intelligent products.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
                <i>↗</i>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">
          <div className="section-label">
            <span>03</span>
            SELECTED PROJECTS
          </div>

          <div className="projects-heading">
            <h2>
              From ideas to
              <span> intelligent systems.</span>
            </h2>

            <p>
              A selection of AI, ML, computer vision and Generative AI
              projects I've built.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">↗</div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section experience-section">
          <div className="section-label">
            <span>04</span>
            EXPERIENCE
          </div>

          <div className="experience-card">
            <div className="experience-date">
              FEB 2026
              <br />
              —
              <br />
              APR 2026
            </div>

            <div className="experience-content">
              <p className="experience-company">
                C-DAC BANGALORE
              </p>

              <h2>Machine Learning Intern / Trainee</h2>

              <p className="experience-intro">
                Worked on applied machine learning and AI application
                development, with a focus on predictive systems,
                data processing and practical AI solutions.
              </p>

              {/* C-DAC PROJECT */}

              <div className="cdac-project">
                <div className="cdac-project-label">
                  C-DAC PROJECT
                </div>

                <h3>Medical Symptom-to-Disease Mapper</h3>

                <p>
                  An AI-based predictive application designed to map
                  user-provided symptoms to potential disease outcomes
                  using machine learning and structured data processing.
                </p>

                <div className="experience-tags">
                  <span>Machine Learning</span>
                  <span>Python</span>
                  <span>Predictive AI</span>
                  <span>Data Processing</span>
                </div>
              </div>
            </div>

            <div className="experience-symbol">AI</div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">
          <div className="contact-glow"></div>

          <p className="contact-label">HAVE AN IDEA?</p>

          <h2>
            Let's build something
            <span> intelligent.</span>
          </h2>

          <p className="contact-description">
            I'm interested in AI/ML opportunities, ambitious projects
            and conversations around intelligent technology.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:mohmedmuzammil2003@gmail.com"
              className="primary-button large"
            >
              Get In Touch
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-muzammil-700422255/"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="contact-email">
            mohmedmuzammil2003@gmail.com
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-brand">
          MM<span>.</span>
        </div>

        <p>Designed & built by Mohammed Muzammil</p>

        <div className="footer-links">
          <a
            href="https://github.com/Mohammedmuzammil2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-muzammil-700422255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:mohmedmuzammil2003@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;