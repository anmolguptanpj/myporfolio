"use client";

import { useEffect } from "react";
import * as THREE from "three";
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
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/nextdotjs/111827", name: "Next.js" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/tailwindcss/38BDF8", name: "Tailwind CSS" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/html5/E34F26", name: "HTML5" },
  { cat: "frontend", logoUrl: "https://cdn.simpleicons.org/css/663399", name: "CSS3" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E", name: "Node.js" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/express/111827", name: "Express.js" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/fastapi/009688", name: "FastAPI" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E", name: "JavaScript" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/typescript/3178C6", name: "TypeScript" },
  { cat: "backend", logoUrl: "https://cdn.simpleicons.org/python/3776AB", name: "Python" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/pandas/150458", name: "Pandas" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/numpy/4DABCF", name: "NumPy" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E", name: "Scikit-learn" },
  { cat: "data", customLogo: "xgboost", name: "XGBoost" },
  { cat: "data", customLogo: "powerbi", name: "Power BI" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/plotly/3F4F75", name: "Matplotlib" },
  { cat: "data", logoUrl: "https://cdn.simpleicons.org/streamlit/FF4B4B", name: "Streamlit" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/mongodb/47A248", name: "MongoDB" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1", name: "PostgreSQL" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/mysql/4479A1", name: "MySQL" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/sqlite/003B57", name: "SQLite" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/prisma/2D3748", name: "Prisma" },
  { cat: "infra", customLogo: "aws", name: "AWS EC2" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/redis/FF4438", name: "Redis" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/nginx/009639", name: "NGINX" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/git/F05032", name: "Git" },
  { cat: "infra", logoUrl: "https://cdn.simpleicons.org/github/181717", name: "GitHub" },
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 92);

    const heroRig = new THREE.Group();
    heroRig.position.set(47, 1, -12);
    heroRig.rotation.set(0.15, -0.18, -0.56);
    scene.add(heroRig);

    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xd7dde7, 2.15);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 4.8);
    sunLight.position.set(-26, 38, 58);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(2048, 2048);
    scene.add(sunLight);

    const keyLight = new THREE.PointLight(0xffffff, 3.4, 190);
    keyLight.position.set(42, 20, 42);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xb9d2ff, 1.4, 150);
    fillLight.position.set(-48, -24, 30);
    scene.add(fillLight);

    const rimMat = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      metalness: 0.62,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    });

    const torusGeo = new THREE.CylinderGeometry(6.6, 6.6, 45, 96, 1, false);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0xf7f8fa,
      metalness: 0.08,
      roughness: 0.34,
      clearcoat: 0.82,
      clearcoatRoughness: 0.18,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.castShadow = true;
    torus.receiveShadow = true;
    heroRig.add(torus);

    const capGeo = new THREE.CylinderGeometry(6.72, 6.72, 4.6, 96);
    const coreGeo = capGeo;
    const coreMat = rimMat;
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.y = 24.8;
    core.castShadow = true;
    core.receiveShadow = true;
    heroRig.add(core);

    const bottomCap = new THREE.Mesh(capGeo, rimMat);
    bottomCap.position.y = -24.8;
    bottomCap.castShadow = true;
    bottomCap.receiveShadow = true;
    heroRig.add(bottomCap);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x4c46a8,
      metalness: 0.08,
      roughness: 0.05,
      transmission: 0.18,
      transparent: true,
      opacity: 0.86,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
    });
    const ringMat = glassMat;
    const rings = new THREE.Group();
    const ringGeos: THREE.BufferGeometry[] = [];
    const windowGeo = new THREE.CapsuleGeometry(2.05, 8.6, 12, 36);
    const glassWindow = new THREE.Mesh(windowGeo, glassMat);
    glassWindow.position.set(0, -11.5, 6.25);
    glassWindow.rotation.x = Math.PI / 2;
    glassWindow.castShadow = true;
    rings.add(glassWindow);
    ringGeos.push(windowGeo);

    const upperButtonGeo = new THREE.CapsuleGeometry(1.55, 5.4, 10, 32);
    const upperButton = new THREE.Mesh(upperButtonGeo, rimMat);
    upperButton.position.set(-2.45, 17.1, 6.45);
    upperButton.rotation.x = Math.PI / 2;
    upperButton.castShadow = true;
    rings.add(upperButton);
    ringGeos.push(upperButtonGeo);

    const lowerButton = new THREE.Mesh(upperButtonGeo, rimMat);
    lowerButton.position.set(2.25, 16.8, 6.45);
    lowerButton.rotation.x = Math.PI / 2;
    lowerButton.castShadow = true;
    rings.add(lowerButton);
    heroRig.add(rings);

    const highlightGeo = new THREE.CapsuleGeometry(0.45, 35, 8, 18);
    const shardGeo = highlightGeo;
    const shardMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.36,
    });
    const shards: THREE.Mesh[] = [];
    const shine = new THREE.Mesh(shardGeo, shardMat);
    shine.position.set(-3.8, -1, 6.52);
    shine.rotation.x = Math.PI / 2;
    heroRig.add(shine);
    shards.push(shine);

    const count = 520;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const palette = [
      new THREE.Color(0xe5e7eb),
      new THREE.Color(0xcbd5e1),
      new THREE.Color(0xf8fafc),
    ];

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = 24 + (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 96;
      positions[i * 3 + 2] = -70 + Math.random() * 55;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = Math.random() * 1.2 + 0.15;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.72,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd4dbe6,
      transparent: true,
      opacity: 0.22,
    });
    const lineGeo = new THREE.BufferGeometry();
    const lineVerts: number[] = [];

    for (let i = 0; i < 34; i += 1) {
      const ax = 28 + (Math.random() - 0.5) * 86;
      const ay = (Math.random() - 0.5) * 72;
      const az = -50 + Math.random() * 22;
      lineVerts.push(ax, ay, az);
      lineVerts.push(
        ax + (Math.random() - 0.5) * 14,
        ay + (Math.random() - 0.5) * 14,
        az + (Math.random() - 0.5) * 8,
      );
    }

    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const planeGeo = new THREE.PlaneGeometry(150, 90);
    const planeMat = new THREE.ShadowMaterial({ color: 0x0f172a, opacity: 0.1 });
    const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
    shadowPlane.position.set(31, -30, -20);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    const quantumGeos: THREE.BufferGeometry[] = [planeGeo];
    const quantumMats: THREE.LineBasicMaterial[] = [];
    const quantumWaves: THREE.Line[] = [];
    for (let wave = 0; wave < 2; wave += 1) {
      const waveGeo = new THREE.BufferGeometry();
      const wavePositions = new Float32Array(90 * 3);
      for (let i = 0; i < 90; i += 1) {
        const t = i / 89;
        const x = 8 + (t - 0.5) * 110;
        const y = Math.sin(t * Math.PI * 2 + wave * 0.8) * 3 + (wave - 0.5) * 8;
        const z = -58 + wave * 6;
        wavePositions[i * 3] = x;
        wavePositions[i * 3 + 1] = y;
        wavePositions[i * 3 + 2] = z;
      }
      waveGeo.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
      const waveMat = new THREE.LineBasicMaterial({
        color: 0xd7dee8,
        transparent: true,
        opacity: 0.14,
      });
      const waveLine = new THREE.Line(waveGeo, waveMat);
      waveLine.rotation.y = wave * 0.18;
      waveLine.rotation.z = (wave - 3) * 0.04;
      scene.add(waveLine);
      quantumGeos.push(waveGeo);
      quantumMats.push(waveMat);
      quantumWaves.push(waveLine);
    }

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
      particles.rotation.y = frame * 0.03 + mouseX * 0.22;
      particles.rotation.x = frame * 0.015 + mouseY * 0.16;
      heroRig.rotation.x = 0.15 + Math.sin(frame * 1.2) * 0.025 + mouseY * 0.16;
      heroRig.rotation.y = -0.18 + mouseX * 0.28;
      heroRig.rotation.z = -0.56 + Math.sin(frame * 1.6) * 0.012;
      torus.rotation.y = Math.sin(frame * 1.25) * 0.018;
      core.rotation.y = torus.rotation.y;
      bottomCap.rotation.y = torus.rotation.y;
      rings.rotation.y = torus.rotation.y;
      quantumWaves.forEach((wave, index) => {
        wave.rotation.y = Math.sin(frame * 1.5 + index) * 0.015;
        wave.rotation.x = Math.sin(frame * 1.4 + index) * 0.018;
        wave.position.z = Math.sin(frame * 2 + index) * 1.5;
      });
      shards.forEach((shard, index) => {
        (shard.material as THREE.Material).opacity = 0.28 + Math.sin(frame * 4 + index) * 0.08;
      });
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.035;
      camera.position.y += (-mouseY * 7 - camera.position.y) * 0.035;
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
      quantumGeos.forEach((waveGeo) => waveGeo.dispose());
      quantumMats.forEach((waveMat) => waveMat.dispose());
      planeMat.dispose();
    };
  }, []);

  return (
    <>
      <div className="scroll-indicator" id="scroll-progress" />
      <div className="cursor-glow" id="cursor-glow" />
      <div className="quantum-field" />
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
            {skills.map((skill) => (
              <div className="skill-card" data-cat={skill.cat} key={`${skill.cat}-${skill.name}`}>
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
          <SectionHeader tag="// 002" title="Projects" />
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
              <div className="section-tag">{"// 005"}</div>
              <h2 className="contact-title">Let&apos;s Build Something</h2>
              <p className="contact-subtitle">
                Open to full-stack engineering roles, data analyst positions, and freelance projects.
                Based in Delhi, open to remote.
              </p>
            </div>
            <div>
              <div className="contact-links">
                <ContactLink icon="@" label="Email" value="anmolguptanpj282@gmail.com" href="mailto:anmolguptanpj282@gmail.com" />
                <ContactLink icon="GH" label="GitHub" value="github.com/anmolguptanpj" href="https://github.com/anmolguptanpj" />
                <ContactLink icon="IN" label="LinkedIn" value="linkedin.com/in/itheanmolgupta" href="https://www.linkedin.com/in/itheanmolgupta/" />
                <ContactLink icon="WWW" label="Portfolio" value="anmolgupta-two.vercel.app" href="https://anmolgupta-two.vercel.app/" />
              </div>
              <ResumeSection />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>(c) 2025 Anmol Gupta</span>
        <span className="footer-stack">Built with Next.js - Enhanced with GSAP & Three.js</span>
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
        <p className="project-num">Project 01 - Featured</p>
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
      <p className="resume-title">{"// Resumes"}</p>
      <div className="resume-list">
        <ResumeCard
          icon="SE"
          title="Software Engineer"
          meta="Full-Stack - Backend - Systems"
          desc="MERN - Next.js - FastAPI - AWS EC2 - PostgreSQL - Redis - RBAC - System Architecture"
          href="/resume/AnmolGuptaSoftwareEnginner.pdf"
          download="Anmol_Gupta_SoftwareEngineer_Resume.pdf"
        />
        <ResumeCard
          icon="DA"
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
        <a href={href} target="_blank" className="btn btn-primary">View</a>
        <a href={href} download={download} className="btn btn-ghost">Download</a>
      </div>
    </div>
  );
}
