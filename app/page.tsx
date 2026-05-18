"use client";

import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  ["frontend", "⚛️", "React.js"],
  ["frontend", "▲", "Next.js"],
  ["frontend", "🎨", "Tailwind CSS"],
  ["frontend", "📄", "HTML5 / CSS3"],
  ["backend", "🟩", "Node.js"],
  ["backend", "🚂", "Express.js"],
  ["backend", "⚡", "FastAPI"],
  ["backend", "🟨", "JavaScript"],
  ["backend", "🔷", "TypeScript"],
  ["backend", "🐍", "Python"],
  ["data", "🐼", "Pandas / NumPy"],
  ["data", "🤖", "Scikit-learn"],
  ["data", "🚀", "XGBoost"],
  ["data", "📊", "Power BI"],
  ["data", "📈", "Matplotlib / Seaborn"],
  ["data", "🌊", "Streamlit"],
  ["infra", "🍃", "MongoDB"],
  ["infra", "🐘", "PostgreSQL"],
  ["infra", "🗄️", "MySQL / SQLite"],
  ["infra", "◈", "Prisma"],
  ["infra", "☁️", "AWS EC2"],
  ["infra", "🔴", "Redis"],
  ["infra", "🌐", "NGINX / SSL"],
  ["infra", "🐙", "Git / GitHub"],
];

const projects = [
  {
    num: "Project 02",
    title: "TODO with JWT Authentication",
    desc: "Full-stack todo app featuring access/refresh token JWT auth, React Context state management, protected routes, and complete CRUD operations.",
    tags: ["React.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    links: [
      ["Backend ↗", "https://github.com/anmolguptanpj/TodoV2_backend"],
    ],
  },
  {
    num: "Project 03",
    title: "Credit Risk ML System",
    desc: "Production ML pipeline on German Credit Dataset. Benchmarked 4 classifiers (XGBoost 67%), exported LabelEncoder artifacts, full Streamlit deployment.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Poetry"],
    links: [["GitHub ↗", "https://github.com/anmolguptanpj/Credit_risk_analysis_-_ml_model"]],
  },
  {
    num: "Project 04",
    title: "Vendor ETL & Analytics Pipeline",
    desc: "Scalable ETL pipeline ingesting 2GB+ multi-source datasets. Advanced SQL KPI analysis across 100+ vendors. Delivered 15+ BI dashboards with actionable insights.",
    tags: ["Python", "SQLAlchemy", "Pandas", "MySQL", "Seaborn"],
    links: [["GitHub ↗", "https://github.com/anmolguptanpj/Vendor_performance_analysis"]],
  },
  {
    num: "Project 05",
    title: "FastAPI Image & Video Sharing App",
    desc: "Backend-focused CRUD media platform supporting image and video uploads with structured post management. Features FastAPI native auth, SQLAlchemy ORM with SQLite, Pydantic schema validation, and a Streamlit frontend for rapid interaction.",
    tags: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Pydantic", "Streamlit"],
    links: [["GitHub ↗", "https://github.com/anmolguptanpj/FastAPI-Backend-project"]],
  },
];

const experience = [
  {
    date: "2025 - Present",
    role: "Software Engineer (Self-Directed)",
    org: "Open Source & Personal Projects · Delhi, India",
    desc: "Building production full-stack systems - multi-vendor ecommerce platforms, ML pipelines, FastAPI backends. Rapidly advancing through backend architecture, system design, and data engineering.",
  },
  {
    date: "Feb 2021 - Mar 2025 · 4 Years",
    role: "Business Operations Manager & Data Analyst",
    org: "Independent Business · Self-Managed",
    desc: "End-to-end operations including inventory control, vendor payments, cash flow, and P&L analysis using Excel and Tally ERP. Built monthly/annual reports, identified purchasing inefficiencies, and performed data-driven forecasting - direct business analytics experience.",
  },
  {
    date: "2017 · 3 Months",
    role: "Audit & Financial Data Analyst (Internship)",
    org: "Audit Firm",
    desc: "Gained early exposure to digital accounting systems, Tally workflows, auditing business transactions, reconciling records, and verifying financial data accuracy.",
  },
];

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 80;

    const heroRig = new THREE.Group();
    heroRig.position.set(32, 0, -12);
    scene.add(heroRig);

    const keyLight = new THREE.PointLight(0x7c6dfa, 2.6, 180);
    keyLight.position.set(28, 24, 36);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x22d3a8, 1.8, 150);
    fillLight.position.set(-42, -20, 28);
    scene.add(fillLight);

    const torusGeo = new THREE.TorusKnotGeometry(11, 2.4, 180, 18, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x7c6dfa,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.set(0.8, 0.2, 0.4);
    heroRig.add(torus);

    const coreGeo = new THREE.IcosahedronGeometry(8, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22d3a8,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(-18, 9, -8);
    heroRig.add(core);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    const rings = new THREE.Group();
    const ringGeos: THREE.TorusGeometry[] = [];
    [18, 25, 32].forEach((radius, index) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.035, 8, 160);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.set(Math.PI / 2 + index * 0.32, index * 0.5, index * 0.2);
      rings.add(ring);
      ringGeos.push(ringGeo);
    });
    heroRig.add(rings);

    const shardGeo = new THREE.TetrahedronGeometry(2.2, 0);
    const shardMat = new THREE.MeshBasicMaterial({
      color: 0xfa6d6d,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const shards: THREE.Mesh[] = [];
    for (let i = 0; i < 18; i += 1) {
      const shard = new THREE.Mesh(shardGeo, shardMat);
      const angle = (i / 18) * Math.PI * 2;
      const radius = 18 + Math.random() * 26;
      shard.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 42,
        Math.sin(angle) * radius - 10,
      );
      shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      heroRig.add(shard);
      shards.push(shard);
    }

    const count = 3200;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const palette = [
      new THREE.Color(0x7c6dfa),
      new THREE.Color(0x22d3a8),
      new THREE.Color(0xfa6d6d),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < count; i += 1) {
      const depth = Math.random() ** 1.6;
      positions[i * 3] = (Math.random() - 0.5) * (180 + depth * 260);
      positions[i * 3 + 1] = (Math.random() - 0.5) * (140 + depth * 220);
      positions[i * 3 + 2] = -180 + depth * 330;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = Math.random() * 1.8 + 0.25;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.72,
      vertexColors: true,
      transparent: true,
      opacity: 0.68,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c6dfa,
      transparent: true,
      opacity: 0.12,
    });
    const lineGeo = new THREE.BufferGeometry();
    const lineVerts: number[] = [];

    for (let i = 0; i < 150; i += 1) {
      const ax = (Math.random() - 0.5) * 240;
      const ay = (Math.random() - 0.5) * 170;
      const az = (Math.random() - 0.5) * 180;
      lineVerts.push(ax, ay, az);
      lineVerts.push(
        ax + (Math.random() - 0.5) * 42,
        ay + (Math.random() - 0.5) * 42,
        az + (Math.random() - 0.5) * 36,
      );
    }

    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    let mouseX = 0;
    let mouseY = 0;
    let frame = 0;
    let animationId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.4;

      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const progress = document.getElementById("scroll-progress");
      if (progress) progress.style.width = `${pct}%`;
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      frame += 0.003;
      particles.rotation.y = frame * 0.1 + mouseX * 0.8;
      particles.rotation.x = frame * 0.04 + mouseY * 0.5;
      heroRig.rotation.y = frame * 0.9 + mouseX * 1.5;
      heroRig.rotation.x = Math.sin(frame * 1.8) * 0.08 + mouseY;
      torus.rotation.x += 0.0035;
      torus.rotation.z += 0.002;
      core.rotation.y -= 0.004;
      core.rotation.x += 0.002;
      rings.rotation.z -= 0.0025;
      rings.rotation.x = Math.sin(frame * 2) * 0.18;
      shards.forEach((shard, index) => {
        shard.rotation.x += 0.003 + index * 0.00008;
        shard.rotation.y -= 0.002;
      });
      camera.position.x += (mouseX * 18 - camera.position.x) * 0.035;
      camera.position.y += (-mouseY * 12 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    const hero = gsap.timeline({ delay: 0.2 });
    hero
      .to(".hero-tag", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".hero-name", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
      .to(".hero-role", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .to(".hero-desc", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");

    gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });

    gsap.to(".skill-card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "power2.out",
      scrollTrigger: { trigger: "#skills-grid", start: "top 80%" },
    });

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
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
          scale: show ? 1 : 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    tabButtons.forEach((btn) => btn.addEventListener("click", handleTabClick));

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      tabButtons.forEach((btn) => btn.removeEventListener("click", handleTabClick));
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeos.forEach((ringGeo) => ringGeo.dispose());
      ringMat.dispose();
      shardGeo.dispose();
      shardMat.dispose();
    };
  }, []);

  return (
    <>
      <div className="scroll-indicator" id="scroll-progress" />
      <div className="cursor-glow" id="cursor-glow" />
      <div className="noise" />
      <canvas id="hero-canvas" />

      <nav id="navbar">
        <div className="nav-logo">AG</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">Available for opportunities</div>
            <h1 className="hero-name">
              <span>Anmol</span>
              <span>Gupta</span>
            </h1>
            <p className="hero-role">
              <span className="highlight">Full-Stack Engineer</span> · Backend Systems · Data Analyst
            </p>
            <p className="hero-desc">
              Building scalable multi-vendor platforms, ML pipelines, and analytics-driven systems.
              From inventory intelligence to production AWS deployments - end-to-end ownership.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects ↓</a>
              <a href="https://github.com/anmolguptanpj" target="_blank" className="btn btn-ghost">GitHub →</a>
              <a href="https://www.linkedin.com/in/itheanmolgupta/" target="_blank" className="btn btn-ghost">LinkedIn →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <SectionHeader tag="// 001" title="Technical Skills" />
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
            {skills.map(([cat, icon, name]) => (
              <div className="skill-card" data-cat={cat} key={`${cat}-${name}`}>
                <span className="skill-icon">{icon}</span>
                <div className="skill-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <SectionHeader tag="// 002" title="Projects" />
          <div className="projects-grid">
            <FeaturedProject />
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-num">{project.num}</p>
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
          <SectionHeader tag="// 003" title="Experience" />
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
          <SectionHeader tag="// 004" title="About" />
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
              <div className="section-tag"> // 005</div>
              <h2 className="contact-title">Let&apos;s Build Something</h2>
              <p className="contact-subtitle">
                Open to full-stack engineering roles, data analyst positions, and freelance projects.
                Based in Delhi, open to remote.
              </p>
            </div>
            <div>
              <div className="contact-links">
                <ContactLink icon="📧" label="Email" value="anmolguptanpj282@gmail.com" href="mailto:anmolguptanpj282@gmail.com" />
                <ContactLink icon="🐙" label="GitHub" value="github.com/anmolguptanpj" href="https://github.com/anmolguptanpj" />
                <ContactLink icon="💼" label="LinkedIn" value="linkedin.com/in/itheanmolgupta" href="https://www.linkedin.com/in/itheanmolgupta/" />
                <ContactLink icon="🌐" label="Portfolio" value="anmolgupta-two.vercel.app" href="https://anmolgupta-two.vercel.app/" />
              </div>
              <ResumeSection />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2025 Anmol Gupta</span>
        <span className="footer-stack">Built with Next.js · Enhanced with GSAP & Three.js</span>
      </footer>
    </>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="section-header">
      <p className="section-tag">{tag}</p>
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
      {links.map(([label, href]) => (
        <a className="project-link" href={href} target="_blank" key={href}>{label}</a>
      ))}
    </div>
  );
}

function FeaturedProject() {
  return (
    <article className="project-card featured">
      <div className="project-body">
        <p className="project-num">Project 01 · Featured</p>
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
            ["Backend ↗", "https://github.com/anmolguptanpj/EcommerceV1_Backend"],
            ["Customer Frontend ↗", "https://github.com/anmolguptanpj/Ecommercev1_FrontendCustomer"],
            ["Supplier Frontend ↗", "https://github.com/anmolguptanpj/Ecommercev1_FrontendSupplier"],
          ]}
        />
      </div>
      <div className="project-visual">
        <div className="architecture-title">Architecture</div>
        <div className="architecture-stack">
          <div className="architecture-node architecture-admin">Admin Panel</div>
          <div className="architecture-node architecture-supplier">Supplier Panel</div>
          <div className="architecture-node architecture-customer">Customer Portal</div>
          <div className="architecture-line" />
          <div className="architecture-node architecture-backend">Express.js Backend</div>
          <div className="architecture-db-grid">
            <div className="architecture-small">MongoDB</div>
            <div className="architecture-small">PostgreSQL</div>
          </div>
          <div className="architecture-deploy">AWS EC2 · NGINX · SSL</div>
        </div>
      </div>
    </article>
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
  icon: string;
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
      <p className="resume-title">// Resumes</p>
      <div className="resume-list">
        <ResumeCard
          icon="💻"
          title="Software Engineer"
          meta="Full-Stack · Backend · Systems"
          desc="MERN · Next.js · FastAPI · AWS EC2 · PostgreSQL · Redis · RBAC · System Architecture"
          href="/resume/AnmolGuptaSoftwareEnginner.pdf"
          download="Anmol_Gupta_SoftwareEngineer_Resume.pdf"
        />
        <ResumeCard
          icon="📊"
          title="Data Analyst"
          meta="Python · SQL · ML · BI"
          desc="Pandas · Scikit-learn · XGBoost · Power BI · ETL Pipelines · MySQL · Streamlit"
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
  icon: string;
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
        <a href={href} target="_blank" className="btn btn-primary">View ↗</a>
        <a href={href} download={download} className="btn btn-ghost">Download ↓</a>
      </div>
    </div>
  );
}
