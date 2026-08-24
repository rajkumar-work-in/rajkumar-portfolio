/* ============================================================
   CENTRAL CONFIG — update these with real values before deploying
   ============================================================ */
const CONFIG = {
  githubUsername: 'rajkumar-work-in',
  linkedinUrl: 'https://www.linkedin.com/in/rajkumar-work-in',
  email: 'rajkumar.work.in@gmail.com',
  // Served from the project root, so it downloads instead of navigating away.
  // Replace the resume.pdf file itself later — this path never needs to change.
  resumePath: 'resume.pdf',
  domain: 'https://rajkumar-portfolio-one.vercel.app'
};

/* ============================================================
   BACKEND API CONFIGURATION
   ============================================================ */
const API_BASE_URL = 'http://localhost:8080/api';

const DSA_STATS = {
  solved: '28',
  easy: '11',
  medium: '12',
  hard: '5'
};
const DSA_CATEGORIES = ['Arrays','Strings','Hashing','Two Pointers','Sliding Window','Stack','Queue','Binary Search','Linked List','Trees','Graphs','Dynamic Programming'];

const SKILLS = {
  skillLanguages: ['Java','JavaScript','TypeScript','HTML','CSS','SQL'],
  skillFrontend: ['React','Redux','Tailwind CSS','Vite'],
  skillBackend: ['Spring Boot','Spring MVC','Spring Data JPA','Hibernate','REST APIs','JDBC'],
  skillDatabase: ['MySQL','PostgreSQL'],
  skillTools: ['Git','GitHub','Docker','Postman','IntelliJ IDEA','VS Code'],
  skillDeployment: ['Vercel','Render','Railway','Firebase']
};

const LEARNING = [
  { name: 'Advanced Spring Boot', status: 'Building' },
  { name: 'Spring Security', status: 'Learning' },
  { name: 'System Design', status: 'Learning' },
  { name: 'Docker', status: 'Building' },
  { name: 'Cloud Architecture', status: 'Exploring' },
  { name: 'Distributed Systems', status: 'Exploring' },
];

const AI_LEARNING = [
  { name: 'AI-Assisted Development', status: 'Building' },
  { name: 'LLM APIs', status: 'Learning' },
  { name: 'Google Gemini', status: 'Exploring' },
  { name: 'Prompt Engineering', status: 'Learning' },
];

const ARCH_LAYERS = [
  { name: 'Client', tech: 'React / TypeScript', desc: 'Renders the UI and manages client-side state and user interaction.' },
  { name: 'API', tech: 'REST', desc: 'A versioned REST contract defines requests, responses, and status codes.' },
  { name: 'Backend', tech: 'Spring Boot', desc: 'Handles routing, validation, and coordinates the request lifecycle.' },
  { name: 'Business Logic', tech: 'Service Layer', desc: 'Application rules and orchestration live here, independent of HTTP or storage.' },
  { name: 'Persistence', tech: 'Spring Data JPA / Hibernate', desc: 'Maps domain objects to relational tables and manages queries.' },
  { name: 'Database', tech: 'MySQL', desc: 'Stores and persists application data with relational integrity.' },
];

const PROJECTS = [
  {
    id: 'dk-salon',
    name: 'DK Salon',
    type: 'Full Stack Web Application',
    status: 'live',
    description: 'A full-stack salon management and booking web application, built with a React frontend and a Spring Boot backend backed by MySQL.',
    problem: 'Small salon businesses often rely on phone calls and paper logs to manage services and customer inquiries, which makes it easy to lose track of requests.',
    solution: 'A responsive booking and information site where customers can browse services and get in touch, backed by a proper REST API and relational database rather than a static page.',
    stack: ['React','Vite','Tailwind CSS','Spring Boot','MySQL','REST APIs'],
    features: ['Responsive UI across mobile and desktop','Service browsing','Contact functionality','REST API integration between frontend and backend','Backend business logic in a dedicated service layer','MySQL persistence','Form handling with validation'],
    architecture: 'React\n↓\nREST API\n↓\nSpring Boot\n↓\nService Layer\n↓\nRepository\n↓\nMySQL',
    learned: 'API design, connecting a frontend to a backend over REST, structuring an MVC-style backend, working with MySQL persistence, and debugging issues that only showed up after deployment.',
    github: 'https://github.com/rajkumar-work-in',
    demo: 'https://dksalon.vercel.app'
  },
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    type: 'Frontend Project',
    status: 'live',
    description: 'This portfolio itself — built to be data-driven, accessible, and fast, rather than a static one-off page.',
    problem: 'A portfolio needs to load fast, work on every screen size, and be easy to extend as new projects and skills are added.',
    solution: 'A component-style structure with content kept separate from presentation, dark and light themes, and accessibility built in from the start rather than added later.',
    stack: ['React','TypeScript','Tailwind CSS'],
    features: ['Component-oriented architecture','Responsive layout from 320px to 1920px','Keyboard-accessible navigation and focus states','Dark and light theme with persisted preference','Semantic HTML and reduced-motion support'],
    architecture: 'Content Data\n↓\nSection Components\n↓\nLayout Shell\n↓\nRendered Page',
    learned: 'Structuring content as data rather than hard-coded markup, and how much accessibility and performance work is invisible when done well.',
    github: 'https://github.com/rajkumar-work-in',
    demo: 'https://rajkumar-portfolio-delta-amber.vercel.app'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    type: 'Full Stack Web Application — Flagship Project',
    status: 'building',
    description: 'A full-stack e-commerce platform and my main long-term project — built to demonstrate authentication, product management, and order handling end to end.',
    problem: 'Most portfolio e-commerce demos stop at a product listing page. I wanted a project that models the parts that actually make an e-commerce system hard: auth, state, and data consistency.',
    solution: 'A modular Spring Boot backend with a React and TypeScript frontend, built module by module so each piece is functional before the next is started.',
    stack: ['React','TypeScript','Tailwind CSS','Redux','Java','Spring Boot','Spring Security','REST APIs','JPA','Hibernate','MySQL / PostgreSQL','Docker'],
    features: ['Authentication — Building','User management — Building','Product management — Planned','Categories — Planned','Product search & filtering — Planned','Shopping cart — Planned','Wishlist — Planned','Orders — Planned','Payments — Planned','Admin dashboard — Planned'],
    architecture: 'React\n↓\nAPI Layer\n↓\nSpring Boot\n↓\nController\n↓\nService\n↓\nRepository\n↓\nDatabase',
    learned: 'This project is in progress, so the biggest lessons so far are around planning module boundaries up front and being disciplined about not marking something "done" until it actually is.',
    github: 'https://github.com/rajkumar-work-in',
    demo: 'TODO: ADD REAL INFORMATION'
  }
];

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('themeIconSun');
const moonIcon = document.getElementById('themeIconMoon');

function syncThemeIcon() {
  const t = root.getAttribute('data-theme');
  sunIcon.style.display = t === 'dark' ? 'block' : 'none';
  moonIcon.style.display = t === 'light' ? 'block' : 'none';
}
syncThemeIcon();

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('rk-theme', next); } catch (e) {}
  syncThemeIcon();
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}));

/* ============================================================
   POPULATE CONFIG-DRIVEN LINKS
   ============================================================ */
const ghUrl = `https://github.com/${CONFIG.githubUsername}`;
['ghNavLink','ghNavLinkMobile','ghHeroLink','ghProfileBtn','ghContactLink','ghFooterLink'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = ghUrl;
});
document.getElementById('ghContactLink').textContent = `github.com/${CONFIG.githubUsername}`;
document.getElementById('ghUsernameLabel').textContent = CONFIG.githubUsername;

document.getElementById('liContactLink').href = CONFIG.linkedinUrl;
document.getElementById('liFooterLink').href = CONFIG.linkedinUrl;
document.getElementById('liContactLink').textContent = CONFIG.linkedinUrl.replace('https://','');

document.getElementById('emailText').textContent = CONFIG.email;
document.getElementById('emailFooterLink').href = `mailto:${CONFIG.email}`;

// Resume links — served from the site itself, so the browser downloads the
// PDF directly.
['resumeNavLink', 'resumeNavLinkMobile', 'heroResumeLink', 'footerResumeLink'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = CONFIG.resumePath;
  el.setAttribute('download', '');
  el.removeAttribute('target');
});

document.getElementById('copyEmailBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    const btn = document.getElementById('copyEmailBtn');
    const original = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(() => { btn.textContent = original; }, 1600);
  } catch (e) {}
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   RENDER SKILLS
   ============================================================ */
Object.entries(SKILLS).forEach(([id, items]) => {
  const el = document.getElementById(id);
  el.innerHTML = items.map(i => `<span class="tag">${i}</span>`).join('');
});

/* ============================================================
   RENDER LEARNING / AI LISTS
   ============================================================ */
function statusBadgeClass(status) {
  if (status === 'Building') return 'badge-building';
  if (status === 'Learning') return 'badge-live';
  return 'badge-planned';
}
function renderLearnList(targetId, items) {
  document.getElementById(targetId).innerHTML = items.map(i => `
    <div class="learn-card">
      <span class="name">${i.name}</span>
      <span class="badge ${statusBadgeClass(i.status)}"><span class="badge-dot"></span>${i.status}</span>
    </div>
  `).join('');
}
renderLearnList('learningList', LEARNING);
renderLearnList('aiList', AI_LEARNING);

/* ============================================================
   RENDER DSA
   ============================================================ */
document.getElementById('dsaStats').innerHTML = `
  <div class="dsa-stat"><div class="val mono">${DSA_STATS.solved}</div><div class="lab">Problems Solved</div></div>
  <div class="dsa-stat"><div class="val mono">${DSA_STATS.easy}</div><div class="lab">Easy</div></div>
  <div class="dsa-stat"><div class="val mono">${DSA_STATS.medium}</div><div class="lab">Medium</div></div>
  <div class="dsa-stat"><div class="val mono">${DSA_STATS.hard}</div><div class="lab">Hard</div></div>
`;
document.getElementById('dsaCats').innerHTML = DSA_CATEGORIES.map(c => `<span class="tag">${c}</span>`).join('');

/* ============================================================
   RENDER ARCHITECTURE
   ============================================================ */
const archWrap = document.getElementById('archWrap');
archWrap.innerHTML = ARCH_LAYERS.map((layer, idx) => `
  ${idx > 0 ? `<div class="arch-connector" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v14M6 14l6 6 6-6"></path></svg></div>` : ''}
  <div class="arch-layer" tabindex="0" role="button" aria-expanded="false" data-idx="${idx}">
    <div class="arch-layer-top">
      <span class="arch-layer-name">${layer.name}</span>
      <span class="arch-layer-tech mono">${layer.tech}</span>
    </div>
    <div class="arch-layer-desc">${layer.desc}</div>
  </div>
`).join('');

archWrap.querySelectorAll('.arch-layer').forEach(el => {
  function toggle() {
    const isActive = el.classList.contains('active');
    el.classList.toggle('active');
    el.setAttribute('aria-expanded', (!isActive).toString());
  }
  el.addEventListener('click', toggle);
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  el.addEventListener('mouseenter', () => el.classList.add('active'));
  el.addEventListener('mouseleave', () => el.classList.remove('active'));
});

/* ============================================================
   RENDER GITHUB REPOS (static — no fabricated stats)
   ============================================================ */
const repoGrid = document.getElementById('repoGrid');
repoGrid.innerHTML = PROJECTS.map(p => `
  <div class="repo-card">
    <div class="rn"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 3h12l4 4v14H4z"></path></svg>${p.name}</div>
    <p>${p.description}</p>
    <div class="repo-meta"><span>${p.stack[0]}</span><span>${p.status === 'live' ? 'Public' : 'In progress'}</span></div>
  </div>
`).join('');

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
function statusBadge(status) {
  if (status === 'live') return `<span class="badge badge-live"><span class="badge-dot"></span>Live</span>`;
  if (status === 'building') return `<span class="badge badge-building"><span class="badge-dot"></span>Building</span>`;
  return `<span class="badge badge-planned"><span class="badge-dot"></span>Planned</span>`;
}
const projectList = document.getElementById('projectList');
projectList.innerHTML = PROJECTS.map(p => `
  <article class="project-card reveal in" data-id="${p.id}">
    <div class="project-top">
      <div>
        <div class="project-name">${p.name}</div>
        <div class="project-type mono">${p.type}</div>
      </div>
      ${statusBadge(p.status)}
    </div>
    <p class="project-desc">${p.description}</p>
    <div class="project-cols">
      <div><h4>Problem</h4><p>${p.problem}</p></div>
      <div><h4>Solution</h4><p>${p.solution}</p></div>
    </div>
    <div class="project-stack">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
    <div class="project-actions">
      <button class="btn btn-primary btn-sm case-study-btn" data-id="${p.id}">View Case Study</button>
      <a class="btn btn-outline btn-sm" href="${p.github.startsWith('http') ? p.github : '#'}" target="_blank" rel="noopener">GitHub</a>
      <a class="btn btn-outline btn-sm" href="${p.demo.startsWith('http') ? p.demo : '#'}" target="_blank" rel="noopener">Live Demo</a>
    </div>
  </article>
`).join('');

/* ============================================================
   PROJECT CASE STUDY MODAL
   ============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');
let lastFocused = null;

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  lastFocused = document.activeElement;
  modalTitle.textContent = p.name;
  modalContent.innerHTML = `
    <div class="modal-section"><h4>Overview</h4><p>${p.description}</p></div>
    <div class="modal-section"><h4>Problem</h4><p>${p.problem}</p></div>
    <div class="modal-section"><h4>Goals & Solution</h4><p>${p.solution}</p></div>
    <div class="modal-section"><h4>Architecture</h4><div class="modal-diagram">${p.architecture.replace(/\n/g,'<br>')}</div></div>
    <div class="modal-section"><h4>Technology Choices</h4><div class="project-stack">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div></div>
    <div class="modal-section"><h4>Features</h4><ul style="padding-left:18px; list-style:disc;">${p.features.map(f => `<li>${f}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>Lessons Learned</h4><p>${p.learned}</p></div>
    <div class="modal-actions">
      <a class="btn btn-outline btn-sm" href="${p.github.startsWith('http') ? p.github : '#'}" target="_blank" rel="noopener">GitHub</a>
      <a class="btn btn-outline btn-sm" href="${p.demo.startsWith('http') ? p.demo : '#'}" target="_blank" rel="noopener">Live Demo</a>
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.classList.add('no-scroll');
  modalCloseBtn.focus();
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  if (lastFocused) lastFocused.focus();
}
document.querySelectorAll('.case-study-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.id));
});
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

/* ============================================================
   CONTACT FORM
   ============================================================
   Validates on the client, then tries the Spring Boot endpoint below.
   If that backend isn't deployed yet (or the request fails for any
   reason), it falls back to a pre-filled mailto link automatically —
   so the form is always usable, backend or not.
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function validateField(fieldId, inputEl, validator) {
  const field = document.getElementById(fieldId);
  const valid = validator(inputEl.value.trim());
  field.classList.toggle('invalid', !valid);
  return valid;
}

function showStatus(message, tone) {
  formStatus.textContent = message;
  formStatus.classList.remove('show', 'ok', 'err', 'pending');
  formStatus.classList.add('show', tone);
}

function openMailtoFallback(name, email, message) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameEl = document.getElementById('inputName');
  const emailEl = document.getElementById('inputEmail');
  const msgEl = document.getElementById('inputMessage');

  const nameValid = validateField('fieldName', nameEl, v => v.length > 1);
  const emailValid = validateField('fieldEmail', emailEl, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  const msgValid = validateField('fieldMessage', msgEl, v => v.length > 5);

  if (!nameValid || !emailValid || !msgValid) {
    showStatus('Please fix the highlighted fields before sending.', 'err');
    return;
  }

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = msgEl.value.trim();
  const contactData = { name, email, subject: 'Portfolio Contact', message };

  showStatus('Sending…', 'pending');

  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    showStatus("Message sent — I'll get back to you soon.", 'ok');
    contactForm.reset();
  } catch (err) {
    // Expected until the Spring Boot backend is live.
    openMailtoFallback(name, email, message);
    showStatus("The contact API isn't live yet, so I've opened your email client instead.", 'ok');
    contactForm.reset();
  }
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}