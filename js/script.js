// Why Choose Placito - Features
const features = [
  {
    title: "Mock Interviews",
    description: "Practice with real interview scenarios and get instant feedback!",
    icon: "bi bi-bullseye"
},
{
    title: "Resume Builder",
    description: "Create stunning resumes that get noticed by top companies!",
    icon: "bi-file-earmark-person"
  },
  {
      title: "Live Workshops",
      description: "Join interactive sessions with industry experts and peers!",
      icon: "bi-easel"
  },
  {
      title: "Skill Tracking",
    description: "Monitor your progress and level up your placement game!",
    icon: "bi-graph-up-arrow"
}
];

// Success Stories
const testimonials = [
    {
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    text: "Placito helped me crack my dream job! The mock interviews were game-changing! 🔥",
    rating: 5
},
  {
      name: "Arjun Patel",
      role: "Product Manager @ Microsoft",
      text: "Best platform for placement prep! The community is super supportive! 💪",
      rating: 5
    },
    {
        name: "Sneha Reddy",
        role: "Data Scientist @ Amazon",
        text: "From zero to hero! Placito made my placement journey smooth and fun! ✨",
        rating: 5
    }
];

// Statistics
const stats = [
    { value: "10K+", label: "Students Placed" },
    { value: "500+", label: "Partner Companies" },
    { value: "95%", label: "Success Rate" }
];

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        // Get only the file name from href (ignore folder path)
        let linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage || 
           (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});




function renderFeatures() {
  const section = document.getElementById("features-section");
  section.innerHTML = features.map(feature => `
    <div class="col-md-3 features" >
      <div class="card h-100 w-100 shadow-sm " data-aos="fade-up">
        <div class="card-body text-start">
          <i class="bi ${feature.icon} fs-2 mb-3 text-purple"></i>
          <h5 class="card-title fw-bold">${feature.title}</h5>
          <p class="card-text fw-light text-gray">${feature.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const section = document.getElementById("testimonials-section");
  section.innerHTML = testimonials.map(t => `
    <div class="col-md-4  features">
      <div class="card p-4 shadow-sm text-start ">
        <div class="mb-2">${'⭐'.repeat(t.rating)}</div>
        <p class="text-gray">"${t.text}"</p>
        <h6 class="fw-bold mb-0">${t.name}</h6>
        <small class="text-purple">${t.role}</small>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const section = document.getElementById("stats-section");
  section.innerHTML = stats.map(stat => `
    <div class="col-md-3">
      <div class="" data-aos="fade-up">
        <h3 class="gradient-text fw-bold fs-1 ">${stat.value}</h3>
        <p class="text-gray">${stat.label}</p>
      </div>
    </div>
  `).join('');
}

// Initialize
renderFeatures();
renderStats();
renderTestimonials();





