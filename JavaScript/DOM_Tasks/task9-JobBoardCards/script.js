const jobs = [
  {
    "company": "Amazon",
    "logo": "./assets/amazon.png",
    "posted": "5 days ago",
    "role": "Senior UI/UX Designer",
    "tags": ["Part-Time", "Senior Level"],
    "salary": "$120/hr",
    "location": "Mumbai, India",
    "saved": false
  },
  {
    "company": "Google",
    "logo": "./assets/google.png",
    "posted": "30 days ago",
    "role": "Graphic Designer",
    "tags": ["Part-Time", "Flexible Schedule"],
    "salary": "$150–220k",
    "location": "Kochi, India",
    "saved": true
  },
  {
    "company": "Dribbble",
    "logo": "./assets/dribbble.jpg",
    "posted": "18 days ago",
    "role": "Senior Motion Designer",
    "tags": ["Contract", "Remote"],
    "salary": "$85/hr",
    "location": "Chennai, India",
    "saved": false
  },
  {
    "company": "Figma",
    "logo": "./assets/figma.png",
    "posted": "5 days ago",
    "role": "UX Designer",
    "tags": ["Full-Time", "In office"],
    "salary": "$200–250k",
    "location": "Bangalore, India",
    "saved": true
  },
  {
    "company": "Airbnb",
    "logo": "./assets/airbnb.png",
    "posted": "5 days ago",
    "role": "Junior UI/UX Designer",
    "tags": ["Contract", "Remote"],
    "salary": "$100/hr",
    "location": "Delhi, India",
    "saved": false
  },
  {
    "company": "Apple",
    "logo": "./assets/apple.png",
    "posted": "5 days ago",
    "role": "Graphic Designer",
    "tags": ["Full-Time", "Flexible Schedule"],
    "salary": "$85–120k",
    "location": "Kerala, India",
    "saved": true
  }
];

const main = document.querySelector("main");
let sum = "";

jobs.forEach((job) => {
  sum = sum + `<div class="card">
				<div class="logo">
					<img
						src="${job.logo}"
						alt="${job.company}" />

					<button class="save-button">
						${job.saved ? "Saved" : "Save"}
						<div class="save-icon">
            ${job.saved ? `<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 22 22"
	fill="currentColor"
	class="size-2">
	<path
		fill-rule="evenodd"
		d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
		clip-rule="evenodd" />
</svg>` : `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      stroke-width="1"
      stroke="currentColor"
      class="size-2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>`}

						</div>
					</button>
				</div>
				<div class="content">
					<div class="company-name">
						<h3 class="c-name">${job.company}</h3>
						<p class="post-time">${job.posted}</p>
					</div>
					<div class="role">
						<h1 class="role-name">${job.role}</h1>
					</div>
					<div class="tags">
          ${job.tags.map(tag => `<p>${tag}</p>`).join("")}
					</div >
				</div >
				<hr />
				<div class="action">
					<div class="salary">
						<h2 class="amount">${job.salary}</h2>
						<p class="location">${job.location}</p>
					</div>
					<button class="apply-button">Apply Now</button>
				</div>
			</div > `;
});


main.innerHTML = sum;