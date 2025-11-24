const users = [
  {
    "fullName": "Aarav Mehta",
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "role": "Frontend Developer",
    "bio": "Passionate about crafting responsive user interfaces with React and Tailwind. Loves performance optimization and clean UI.",
    "tags": ["JavaScript", "React", "UI/UX", "Frontend"]
  },
  {
    "fullName": "Sophia Wright",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "role": "Product Designer",
    "bio": "Designs intuitive, user-centered products. Skilled in Figma, typography, and mobile-first design.",
    "tags": ["Design", "Figma", "Wireframes", "Prototyping"]
  },
  {
    "fullName": "Ethan Rodriguez",
    "image": "https://randomuser.me/api/portraits/men/72.jpg",
    "role": "Backend Engineer",
    "bio": "Backend engineer specializing in Node.js and high-scale APIs. Loves distributed systems and microservices.",
    "tags": ["Node.js", "APIs", "Microservices", "Docker"]
  },
  {
    "fullName": "Mia Kapoor",
    "image": "https://randomuser.me/api/portraits/women/15.jpg",
    "role": "Data Scientist",
    "bio": "Works with machine learning models, data pipelines, and predictive analytics. Coffee + Python = ❤️.",
    "tags": ["Python", "Machine Learning", "Pandas", "AI"]
  },
  {
    "fullName": "Liam Carter",
    "image": "https://randomuser.me/api/portraits/men/39.jpg",
    "role": "DevOps Engineer",
    "bio": "Automates deployments, monitors cloud infra, and ensures CI/CD efficiency across teams.",
    "tags": ["AWS", "DevOps", "CI/CD", "Kubernetes"]
  },
  {
    "fullName": "Hana Sato",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "role": "Digital Marketer",
    "bio": "Creates high-conversion campaigns using SEO, analytics, and targeted digital strategies.",
    "tags": ["SEO", "Content Strategy", "Analytics", "Marketing"]
  },
  {
    "fullName": "Noah Thompson",
    "image": "https://randomuser.me/api/portraits/men/28.jpg",
    "role": "Full-Stack Developer",
    "bio": "Builds complete web applications using MERN stack. Fan of clean code and scalable architecture.",
    "tags": ["MongoDB", "Express", "React", "Node.js", "Full Stack"]
  }
];

const main = document.querySelector("main");

let cards = '';

users.forEach((user) => {
  cards = cards + `<div class="card">
				<img
					src="${user.image}"
					alt="Profile-pic" />
				<h1>${user.fullName}</h1>
				<h3>${user.role}</h3>
				<p>
					${user.bio}
				</p>
				<ul>
        ${user.tags.map(tag => `<li>${tag}</li>`).join("")}


				</ul >
			</div > `;
});

main.innerHTML = cards;;