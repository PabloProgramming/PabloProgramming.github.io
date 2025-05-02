const projects = [
  {
    title: "Budgee",
    img_url: "./assets/budgee.png",
    description:
      "Budgee is a modern personal finance application designed to help users efficiently track their expenses, set budgets, and analyze their financial health. With an intuitive interface and real-time expense tracking, users can categorize spending, visualize trends, and manage their finances with ease. Budgee aims to provide clarity and control over personal finances through smart features and seamless user experience.",
    technologies:
      "Frontend: Vue.js, Tailwind CSS | Backend: Node.js, Fastify.js, MongoDB",
    demoLink: "https://budgee-fe.vercel.app/",
    apiLink: "https://budgee-be-amq3.onrender.com/api",
    backendLink: "#",
  },
  {
    title: "Eo-eats",
    img_url: "./assets/eoeats.jpg",
    description:
      "Co-funded and developed a Restaurant Management System designed to improve order efficiency and streamline the management of restaurant operations. Key features include easy menu management, allowing staff to add, delete, and modify dishes, categories, prices, and availability in real-time.",
    technologies:
      "Backend: Java, Spring Boot, Hibernate, JPA, PostgreSQL | Frontend: Vue.js",
    demoLink: "https://front-eoeats.vercel.app",
    backendLink: "https://github.com/PabloProgramming/backend-eoeats",
    frontendLink: "https://github.com/PabloProgramming/front-eoeats",
  },
  {
    title: "NC News",
    img_url: "./assets/Yui News Cut.png",
    description:
      "NC News is a RESTful API that provides access to news articles, comments, users, and topics. It allows users to retrieve, filter, and interact with articles and comments.",
    technologies: "Backend: Node.js, Express.js, and PostgreSQL",
    demoLink: "https://news-frontend-demo.vercel.app",
    apiLink: "https://news-backend-vtec.onrender.com/api",
    backendLink: "https://github.com/PabloProgramming/news_backend",
  },
  {
    title: "Nova-Invest",
    img_url: "./assets/nova-invest.jpg",
    description:
      "Nova Invest is a powerful Spring Boot-based API designed to simplify investment management. It provides real-time data on stocks, ETFs, indexes, and commodities using Yahoo Finance via RapidAPI, enabling users to track their portfolios, execute trades, and analyze performance—all in one place.",
    technologies:
      "Backend: Java, Spring Boot, Hibernate, JPA | Database: PostgreSQL",
    backendLink: "https://github.com/PabloProgramming/nova-invest",
  },
  {
    title: "CSFinance",
    img_url: "./assets/cs50-finance.jpg",
    description:
      "This Flask application provides users with real-time market data, allowing them to register, buy and sell assets, and manage their portfolios. Users can track stock prices, commodities, and other assets, place buy and sell orders, and view their portfolio performance, all in real-time. The app offers seamless user authentication, secure transactions, and efficient portfolio management features, making it a powerful tool for investors and traders alike.",
    technologies:
      "Backend: Python, Flask with session authentication | Database: SQL (MySQL), SQLAlchemy | Frontend: HTML, CSS, Bootstrap",
    backendLink:
      "https://github.com/PabloProgramming/Harvard-projects/tree/main/finance",
  },
];

const projectsContainer = document.getElementById("projects-container");

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupEventListeners();
  observeSections();
});

function renderProjects() {
  if (!projectsContainer) return;

  projectsContainer.innerHTML = projects
    .map(
      (project, index) => `
    <article class="project-item ${
      index % 2 === 0 ? "normal" : "reverse"
    } fade-in">
      <figure class="project-image">
        <img src="${project.img_url}" alt="${
        project.title
      }" width="500" height="300" loading="lazy" class="project-img">
      </figure>
      <div class="project-description">
        <h3 class="project-title">${project.title}</h3>
        <p>${project.description}</p>
        <p class="project-tech"><strong>Technologies:</strong> ${
          project.technologies
        }</p>
        <div class="pills-container">
          ${
            project.demoLink
              ? `
            <a href="${project.demoLink}" class="pill" target="_blank" rel="noopener noreferrer">
              <span class="icon">👀</span> View Demo
            </a>
          `
              : ""
          }
          ${
            project.apiLink
              ? `
            <a href="${project.apiLink}" class="pill" target="_blank" rel="noopener noreferrer">
              <span class="icon">🔌</span> API Link
            </a>
          `
              : ""
          }
          <a href="${
            project.backendLink
          }" class="pill" target="_blank" rel="noopener noreferrer">
            <span class="icon">⚙️</span> Backend
          </a>
          ${
            project.frontendLink
              ? `
            <a href="${project.frontendLink}" class="pill" target="_blank" rel="noopener noreferrer">
              <span class="icon">🎨</span> Frontend
            </a>
          `
              : ""
          }
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function setupEventListeners() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        if (targetId !== "#home") {
          history.pushState(null, null, targetId);
        } else {
          history.pushState(null, null, " ");
        }
      }
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      document.querySelector(".nav-list").classList.toggle("active");
    });
  }
}

function observeSections() {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
