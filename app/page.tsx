"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Skill = {
  cat: "frontend" | "backend" | "data" | "infra";
  logoUrl?: string;
  customLogo?: "aws" | "powerbi" | "xgboost";
  name: string;
};

const skills: Skill[] = [
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/react/61DAFB", name: "React.js" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff", name: "Next.js" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/tailwindcss/38BDF8", name: "Tailwind CSS" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/html5/E34F26", name: "HTML5" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/css/663399", name: "CSS3" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E", name: "Node.js" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/express/ffffff", name: "Express.js" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/fastapi/009688", name: "FastAPI" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E", name: "JavaScript" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/typescript/3178C6", name: "TypeScript" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/python/3776AB", name: "Python" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/pandas/E0E0E0", name: "Pandas" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/numpy/4DABCF", name: "NumPy" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", name: "Scikit-learn" },
  { cat: "data", customLogo: "xgboost", name: "XGBoost" },
  { cat: "data", customLogo: "powerbi", name: "Power BI" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/plotly/B0B0B0", name: "Matplotlib" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/streamlit/FF4B4B", name: "Streamlit" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/mongodb/47A248", name: "MongoDB" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1", name: "PostgreSQL" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/mysql/4479A1", name: "MySQL" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/sqlite/64B5F6", name: "SQLite" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/prisma/ffffff", name: "Prisma" },
  { cat: "infra", customLogo: "aws", name: "AWS EC2" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/redis/FF4438", name: "Redis" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/nginx/009639", name: "NGINX" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/git/F05032", name: "Git" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/github/ffffff", name: "GitHub" },
];

const projects = [
  {
    num: "Project 02",
    title: "TODO with JWT Authentication",
    visual: "todo",
    desc: "Full-stack todo app featuring access/refresh token JWT auth, React Context state management, protected routes, and complete CRUD operations.",
    tags: ["React.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    links: [
      
      ["Backend ->", "https://github.com/anmolguptanpj/TodoV2_backend"],
    ],
  },
  {
    num: "Project 03",
    title: "Credit Risk ML System",
    visual: "ml",
    desc: "Production ML pipeline on German Credit Dataset. Benchmarked 4 classifiers (XGBoost 67%), exported LabelEncoder artifacts, full Streamlit deployment.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Poetry"],
    links: [["GitHub ->", "https://github.com/anmolguptanpj/Credit_risk_analysis_-_ml_model"]],
  },
  {
    num: "Project 04",
    title: "Vendor ETL & Analytics Pipeline",
    visual: "etl",
    desc: "Scalable ETL pipeline ingesting 2GB+ multi-source datasets. Advanced SQL KPI analysis across 100+ vendors. Delivered 15+ BI dashboards with actionable insights.",
    tags: ["Python", "SQLAlchemy", "Pandas", "MySQL", "Seaborn"],
    links: [["GitHub ->", "https://github.com/anmolguptanpj/Vendor_performance_analysis"]],
  },
  {
    num: "Project 05",
    title: "FastAPI Image & Video Sharing App",
    visual: "media",
    desc: "Backend-focused CRUD media platform supporting image and video uploads with structured post management. Features FastAPI native auth, SQLAlchemy ORM with SQLite, Pydantic schema validation, and a Streamlit frontend for rapid interaction.",
    tags: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Pydantic", "Streamlit"],
    links: [["GitHub ->", "https://github.com/anmolguptanpj/FastAPI-Backend-project"]],
  },
];

const experience = [
  {
    date: "2025 - Present",
    role: "Software Engineer (Self-Directed)",
    org: "Open Source & Personal Projects - Delhi, India",
    desc: "Building production full-stack systems - multi-vendor ecommerce platforms, ML pipelines, FastAPI backends. Rapidly advancing through backend architecture, system design, and data engineering.",
  },
  {
    date: "Feb 2021 - Mar 2025 - 4 Years",
    role: "Business Operations Manager & Data Analyst",
    org: "Independent Business - Self-Managed",
    desc: "End-to-end operations including inventory control, vendor payments, cash flow, and P&L analysis using Excel and Tally ERP. Built monthly/annual reports, identified purchasing inefficiencies, and performed data-driven forecasting - direct business analytics experience.",
  },
  {
    date: "2017 - 3 Months",
    role: "Audit & Financial Data Analyst (Internship)",
    org: "Audit Firm",
    desc: "Gained early exposure to digital accounting systems, Tally workflows, auditing business transactions, reconciling records, and verifying financial data accuracy.",
  },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (event: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    };

    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const progress = document.getElementById("scroll-progress");
      if (progress) progress.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    const hero = gsap.timeline({ delay: 0.2 });
    hero
      .to(".hero-tag", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".hero-name", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
      .to(".hero-role", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
      .to(".hero-desc", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-visual",
        { opacity: 0, scale: 0.8, rotateY: -15, rotateX: 5 },
        { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, duration: 1.2, ease: "power4.out" },
        "-=0.6"
      );

    gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    // Enhanced skill card animations with staggered scale
    gsap.fromTo(".skill-card",
      { opacity: 0, y: 40, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: { amount: 1.2, from: "start" },
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: "#skills-grid", start: "top 82%" },
      }
    );

    // Enhanced project card animations with alternating slide
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
      const fromLeft = i % 2 === 0;
      gsap.fromTo(card,
        { opacity: 0, x: fromLeft ? -60 : 60, y: 30, rotateY: fromLeft ? -5 : 5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        }
      );
    });

    gsap.to(".timeline", {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".timeline", start: "top 80%" },
    });

    gsap.to(".about-text", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".about-text", start: "top 80%" },
    });

    gsap.to(".stats-grid", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
    });

    gsap.to(".contact-text", {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".contact-text", start: "top 80%" },
    });

    gsap.to(".contact-links", {
      opacity: 1,
      duration: 0.7,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: ".contact-links", start: "top 85%" },
    });

    gsap.to(".resume-section", {
      opacity: 1,
      duration: 0.7,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: { trigger: ".resume-section", start: "top 88%" },
    });

    const tabButtons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
    const handleTabClick = (event: Event) => {
      const btn = event.currentTarget as HTMLButtonElement;
      tabButtons.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      document.querySelectorAll<HTMLElement>(".skill-card").forEach((card) => {
        const show = filter === "all" || card.dataset.cat === filter;
        gsap.to(card, {
          opacity: show ? 1 : 0.15,
          scale: show ? 1 : 0.92,
          filter: show ? "blur(0px)" : "blur(2px)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    };

    tabButtons.forEach((btn) => btn.addEventListener("click", handleTabClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      tabButtons.forEach((btn) => btn.removeEventListener("click", handleTabClick));
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="scroll-indicator" id="scroll-progress" />
      <div className="cursor-glow" id="cursor-glow" />
      <div className="noise" />


      <nav id="navbar">
        <div className="nav-logo">AG</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle theme">
            <svg className="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-tag">Available for opportunities</div>
              <h1 className="hero-name">
                <span>Anmol</span>
                <span>Gupta</span>
              </h1>
              <p className="hero-role">
                <span className="highlight">Full-Stack Engineer</span> - Backend Systems - Data Analyst
              </p>
              <p className="hero-desc">
                Building scalable multi-vendor platforms, ML pipelines, and analytics-driven systems.
                From inventory intelligence to production AWS deployments - end-to-end ownership.
              </p>
              <div className="hero-ctas">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="https://github.com/anmolguptanpj" target="_blank" className="btn btn-ghost">GitHub</a>
                <a href="https://www.linkedin.com/in/itheanmolgupta/" target="_blank" className="btn btn-ghost">LinkedIn</a>
              </div>
            </div>
            <div className="hero-visual">
              <ThreeDClock />
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <SectionHeader title="Technical Skills" />
          <div className="skills-tabs">
            {[
              ["all", "All"],
              ["frontend", "Frontend"],
              ["backend", "Backend"],
              ["data", "Data & ML"],
              ["infra", "Infra & DB"],
            ].map(([filter, label]) => (
              <button
                key={filter}
                className={`tab-btn ${filter === "all" ? "active" : ""}`}
                data-filter={filter}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="skills-grid" id="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" data-cat={skill.cat} data-name={skill.name} key={`${skill.cat}-${skill.name}`}>
                <span className="skill-icon" aria-hidden="true">
                  <SkillLogo skill={skill} />
                </span>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <SectionHeader title="Projects" />
          <div className="projects-grid">
            <FeaturedProject />
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-num">{project.num}</p>
                <ProjectPreview variant={project.visual} />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <TechTags tags={project.tags} />
                <ProjectLinks links={project.links} />
              </article>
            ))}
          </div>
        </div>
      </section>
 
      <section id="experience">
        <div className="container">
          <SectionHeader title="Experience" />
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.role}>
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <SectionHeader title="About" />
          <div className="about-grid">
            <div className="about-text">
              <p>Originally from Nepal, currently in Delhi pursuing a BCA from IGNOU and an intensive software engineering career.</p>
              <p>Before entering development, I spent 3.5 years running a food wholesale business and operated a cloud-kitchen for 6 months. After March 2025, I shifted fully into software - drawn by the conviction that building unlocks new problems worth solving.</p>
              <p>I bring rare domain depth: real financial data, vendor analytics, and inventory intelligence shaped my engineering instincts before I ever wrote a production API. That context drives how I build systems - not just technically correct, but operationally grounded.</p>
            </div>
            <div className="stats-grid">
              <Stat num="4+" label="Years business data experience" />
              <Stat num="2GB+" label="Datasets processed in ETL pipelines" />
              <Stat num="3" label="Production deployments (AWS, Vercel)" />
              <Stat num="12+" label="Technologies in active use" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-text">
              <h2 className="contact-title">Let&apos;s Build Something</h2>
              <p className="contact-subtitle">
                Open to full-stack engineering roles, data analyst positions, and freelance projects.
                Based in Delhi, open to remote.
              </p>
            </div>
            <div>
              <div className="contact-links">
                <ContactLink
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                  label="Email"
                  value="anmolguptanpj282@gmail.com"
                  href="mailto:anmolguptanpj282@gmail.com"
                />
                <ContactLink
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  }
                  label="GitHub"
                  value="github.com/anmolguptanpj"
                  href="https://github.com/anmolguptanpj"
                />
                <ContactLink
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  }
                  label="LinkedIn"
                  value="linkedin.com/in/itheanmolgupta"
                  href="https://www.linkedin.com/in/itheanmolgupta/"
                />
                <ContactLink
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  }
                  label="Portfolio"
                  value="anmolgupta-two.vercel.app"
                  href="https://anmolgupta-two.vercel.app/"
                />
              </div>
              <ResumeSection />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2025 Anmol Gupta</span>
        <span className="footer-stack">Built with Next.js · Enhanced with GSAP</span>
      </footer>
    </>
  );
}

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.customLogo === "powerbi") {
    return (
      <svg className="skill-logo skill-logo-svg" viewBox="0 0 64 64" role="img">
        <rect x="9" y="31" width="10" height="20" rx="4" fill="#F2C811" />
        <rect x="23" y="23" width="10" height="28" rx="4" fill="#DCAA00" />
        <rect x="37" y="13" width="10" height="38" rx="4" fill="#F2C811" />
        <rect x="51" y="7" width="10" height="44" rx="4" fill="#F6D84A" />
      </svg>
    );
  }

  if (skill.customLogo === "aws") {
    return (
      <svg className="skill-logo skill-logo-svg aws-logo" viewBox="0 0 72 48" role="img">
        <path d="M16 30c8 6 25 9 39 1" fill="none" stroke="#FF9900" strokeWidth="5" strokeLinecap="round" />
        <path d="M48 32l10-2-5 9" fill="none" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 22c2-7 8-11 15-10 4-6 13-8 20-4 6 3 9 8 9 14 5 1 9 5 9 11 0 7-6 12-13 12H18C10 45 4 40 4 33c0-5 3-9 7-11Z" fill="none" stroke="#FFB84D" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (skill.customLogo === "xgboost") {
    return (
      <svg className="skill-logo skill-logo-svg" viewBox="0 0 64 64" role="img">
        <path d="M13 49 29 10h8L21 49h-8Z" fill="#FF7A18" />
        <path d="M27 49 43 10h8L35 49h-8Z" fill="#FFB000" />
        <path d="M15 18h37l-4 9H11l4-9Z" fill="#22D3A8" />
        <path d="M20 37h34l-4 9H16l4-9Z" fill="#7C6DFA" />
      </svg>
    );
  }

  if (!skill.logoUrl) return null;

  return (
    <img
      className="skill-logo"
      src={skill.logoUrl}
      alt=""
      loading="lazy"
      onError={(event) => {
        event.currentTarget.closest(".skill-card")?.classList.add("logo-missing");
      }}
    />
  );
}

function ThreeDClock() {
  const clockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hrWrapper = document.getElementById("hand-hour-wrapper");
    const minWrapper = document.getElementById("hand-min-wrapper");
    const secWrapper = document.getElementById("hand-sec-wrapper");

    let animId: number;
    const tick = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = now.getHours() + m / 60;

      const secDeg = s * 6;
      const minDeg = m * 6;
      const hrDeg = (h % 12) * 30;

      if (secWrapper) secWrapper.style.transform = `rotateZ(${secDeg}deg)`;
      if (minWrapper) minWrapper.style.transform = `rotateZ(${minDeg}deg)`;
      if (hrWrapper) hrWrapper.style.transform = `rotateZ(${hrDeg}deg)`;

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!clockRef.current) return;
      const stage = clockRef.current.parentElement;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate rotation angles (max 25 degrees)
      const rotX = -(y / (rect.height / 2)) * 25;
      const rotY = (x / (rect.width / 2)) * 25;

      clockRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const handleMouseLeave = () => {
      if (!clockRef.current) return;
      clockRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    const stage = clockRef.current?.parentElement;
    stage?.addEventListener("mousemove", handleMouseMove);
    stage?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      stage?.removeEventListener("mousemove", handleMouseMove);
      stage?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="clock-stage">
      <div className="clock-card-3d" ref={clockRef}>
        {/* Floating Numbers */}
        <div className="clock-number num-12">12</div>
        <div className="clock-number num-3">3</div>
        <div className="clock-number num-6">6</div>
        <div className="clock-number num-9">9</div>

        {/* Floating Hands (Sticks) */}
        <div id="hand-hour-wrapper" className="clock-hand-wrapper">
          <div className="clock-hand hand-hour" />
        </div>
        <div id="hand-min-wrapper" className="clock-hand-wrapper">
          <div className="clock-hand hand-minute" />
        </div>
        <div id="hand-sec-wrapper" className="clock-hand-wrapper">
          <div className="clock-hand hand-second" />
        </div>

        {/* Center pin */}
        <div className="clock-pin" />
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="tech-tags">
      {tags.map((tag) => (
        <span className="tech-tag" key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function ProjectLinks({ links }: { links: string[][] }) {
  return (
    <div className="project-links">
      {links.map(([label, href]) => {
        const isGithub = href.includes("github.com");
        return (
          <a className="project-link" href={href} target="_blank" rel="noopener noreferrer" key={href}>
            {isGithub ? (
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', flexShrink: 0 }} aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            ) : (
              <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px', flexShrink: 0 }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            )}
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}

function FeaturedProject() {
  return (
    <article className="project-card featured">
      <div className="project-body">
        <p className="project-num">Project 01</p>
        <h3 className="project-title">Multi-Vendor Ecommerce Platform</h3>
        <p className="project-desc">
          Production-grade multi-vendor platform with three isolated control centers - Admin,
          Supplier, and Customer portals. Features RBAC, event-driven workflows,
          aggregation-heavy MongoDB analytics, and AWS EC2 + NGINX deployment.
        </p>
        <ul className="feature-list">
          <li>Role-based access control across all frontends</li>
          <li>Inventory audit system - single source of truth for P&L, vendor analysis</li>
          <li>Dual DB: MongoDB (products) + PostgreSQL/Prisma (orders, carts)</li>
          <li>AWS EC2 + NGINX + Certbot SSL production deployment</li>
          <li>Cloudinary media handling, Redis caching</li>
        </ul>
        <TechTags tags={["React.js", "Next.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Redis", "AWS EC2", "NGINX"]} />
        <ProjectLinks
          links={[
            ["Backend ->", "https://github.com/anmolguptanpj/EcommerceV1_Backend"],
            ["Customer Frontend ->", "https://github.com/anmolguptanpj/Ecommercev1_FrontendCustomer"],
            ["Supplier Frontend ->", "https://github.com/anmolguptanpj/Ecommercev1_FrontendSupplier"],
          ]}
        />
      </div>
      <div className="project-visual">
        <div className="architecture-title">Live Product System</div>
        <div className="preview-browser">
          <div className="preview-topbar">
            <span className="preview-dot" />
            <span className="preview-dot" />
            <span className="preview-dot" />
          </div>
          <div className="preview-body">
            <div className="preview-sidebar">
              <div className="preview-line accent" />
              <div className="preview-line" />
              <div className="preview-line short" />
              <div className="preview-line" />
              <div className="preview-line short" />
            </div>
            <div className="preview-panel">
              <div className="preview-metrics">
                <span className="preview-metric" />
                <span className="preview-metric" />
                <span className="preview-metric" />
              </div>
              <div className="preview-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectPreview({ variant }: { variant: string }) {
  return (
    <div className={`project-preview preview-${variant}`}>
      <div className="preview-browser">
        <div className="preview-topbar">
          <span className="preview-dot" />
          <span className="preview-dot" />
          <span className="preview-dot" />
        </div>
        {variant === "todo" && (
          <div className="preview-body">
            <div className="preview-panel">
              <div className="preview-line accent" />
              <div className="preview-check" />
              <div className="preview-check" />
              <div className="preview-check" />
              <div className="preview-check" />
            </div>
          </div>
        )}
        {variant === "ml" && (
          <div className="preview-body">
            <div className="preview-panel">
              <div className="preview-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="preview-heatmap">
              {Array.from({ length: 15 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        )}
        {variant === "etl" && (
          <div className="preview-body">
            <div className="preview-sidebar">
              <div className="preview-line accent" />
              <div className="preview-line" />
              <div className="preview-line short" />
            </div>
            <div className="preview-panel">
              <div className="preview-metrics">
                <span className="preview-metric" />
                <span className="preview-metric" />
                <span className="preview-metric" />
              </div>
              <div className="preview-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}
        {variant === "media" && (
          <div className="preview-body">
            <div className="preview-media-grid">
              <span className="preview-thumb" />
              <span className="preview-thumb" />
              <span className="preview-thumb" />
              <span className="preview-thumb" />
            </div>
            <div className="preview-panel">
              <div className="preview-line accent" />
              <div className="preview-line" />
              <div className="preview-line short" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="stat-card">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a className="contact-link-card" href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      <div className="contact-link-icon">{icon}</div>
      <div>
        <div className="contact-link-label">{label}</div>
        <div className="contact-link-value">{value}</div>
      </div>
    </a>
  );
}

function ResumeSection() {
  return (
    <div className="resume-section">
      <p className="resume-title">{"// Resumes"}</p>
      <div className="resume-list">
        <ResumeCard
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          }
          title="Software Engineer"
          meta="Full-Stack - Backend - Systems"
          desc="MERN - Next.js - FastAPI - AWS EC2 - PostgreSQL - Redis - RBAC - System Architecture"
          href="/resume/AnmolGuptaSoftwareEnginner.pdf"
          download="Anmol_Gupta_SoftwareEngineer_Resume.pdf"
        />
        <ResumeCard
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          }
          title="Data Analyst"
          meta="Python - SQL - ML - BI"
          desc="Pandas - Scikit-learn - XGBoost - Power BI - ETL Pipelines - MySQL - Streamlit"
          href="/resume/AnmolGuptaDataAnalyst.pdf"
          download="Anmol_Gupta_DataAnalyst_Resume.pdf"
          data
        />
      </div>
    </div>
  );
}

function ResumeCard({
  icon,
  title,
  meta,
  desc,
  href,
  download,
  data = false,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  desc: string;
  href: string;
  download: string;
  data?: boolean;
}) {
  return (
    <div className={`resume-card ${data ? "data" : ""}`}>
      <div className="resume-head">
        <div className="resume-icon">{icon}</div>
        <div>
          <div className="resume-name">{title}</div>
          <div className="resume-meta">{meta}</div>
        </div>
      </div>
      <div className="resume-desc">{desc}</div>
      <div className="resume-actions">
        <a href={href} target="_blank" className="btn btn-primary">View</a>
        <a href={href} download={download} className="btn btn-ghost">Download</a>
      </div>
    </div>
  );
}
