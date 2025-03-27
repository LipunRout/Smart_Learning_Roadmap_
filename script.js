document.addEventListener("DOMContentLoaded", function () {
      // Handle Navigation from Index Page
      document.querySelectorAll(".nav-link").forEach(link => {
          link.addEventListener("click", function () {
              let targetPage = this.getAttribute("data-target");
              window.location.href = targetPage;
          });

      });
  
      // background-image: url('bg1.png');
      // background-repeat: no-repeat;
      // background-size: cover;


      // Handle Field Selection (IT or Non-IT)
      let fieldOptions = document.querySelectorAll(".field-option");
      if (fieldOptions) {
          fieldOptions.forEach(option => {
              option.addEventListener("click", function () {
                  let selectedField = this.getAttribute("data-field");
                  localStorage.setItem("selectedField", selectedField);
                  window.location.href = "job.html";
              });
          });
      }
  
      // Display Job List Based on Field Selection
      let jobContainer = document.getElementById("job-list");
      if (jobContainer) {
          let selectedField = localStorage.getItem("selectedField");
          if (selectedField) {
              displayJobs(selectedField);
          }
      }
  
      // Handle Job Selection
      let jobOptions = document.querySelectorAll(".job-option");
      if (jobOptions) {
          jobOptions.forEach(option => {
              option.addEventListener("click", function () {
                  let selectedJob = this.getAttribute("data-job");
                  localStorage.setItem("selectedJob", selectedJob);
                  window.location.href = "roadmap.html";
              });
          });
      }
  
      // Display Roadmap Based on Selected Job
      let roadmapTitle = document.getElementById("roadmap-title");
      let roadmapSteps = document.getElementById("roadmap-steps");
      if (roadmapTitle && roadmapSteps) {
          let selectedJob = localStorage.getItem("selectedJob");
          if (selectedJob) {
              roadmapTitle.innerText = `${selectedJob} Roadmap`;
              displayRoadmap(selectedJob);
          }
      }
  });
  
  // Function to Display Jobs Based on Field Selection
  function displayJobs(field) {
      let jobList = {
          "IT": [
              "Web Developer", "AI/ML Engineer", "Cybersecurity Expert", "Cloud Engineer", "Game Developer"
          ],
          "Non-IT": [
              "Doctor", "Civil Engineer", "Lawyer", "Entrepreneur", "Chef"
          ]
      };
  
      let jobContainer = document.getElementById("job-list");
      jobContainer.innerHTML = "";
  
      if (jobList[field]) {
          jobList[field].forEach(job => {
              let jobElement = document.createElement("button");
              jobElement.classList.add("job-option");
              jobElement.setAttribute("data-job", job);
              jobElement.innerText = job;
              jobElement.addEventListener("click", function () {
                  localStorage.setItem("selectedJob", job);
                  window.location.href = "roadmap.html";
              });
              jobContainer.appendChild(jobElement);
          });
      }
  }
  
  // Function to Display Roadmap Steps
  function displayRoadmap(job) {
      let roadmaps = {
            // IT Sector
            "Web Developer": [
                "1:-Learn HTML, CSS, JavaScript",
                "2:-Master Frontend Frameworks (React, Angular, Vue)",
                "3:-Learn Backend (Node.js, Django, Flask)",
                "4:-Practice with Full-Stack Projects",
                "5:-Build a Portfolio and Apply for Jobs"
            ],
            "AI/ML Engineer": [
                "1:-Learn Python and Mathematics Fundamentals",
                "2:-Understand Machine Learning Algorithms",
                "3:-Work on AI & Data Science Projects",
                "4:-Master Deep Learning & NLP",
                "5:-Apply for AI/ML Engineer Roles"
            ],
            "Cybersecurity Expert": [
                "1:-Learn Networking & Security Basics",
                "2:-Master Ethical Hacking & Penetration Testing",
                "3:-Get Certified (CEH, CISSP, Security+)",
                "4:-Work on Real-World Security Audits",
                "5:-Join Cybersecurity Teams or Start Bug Bounty Hunting"
            ],
            "Cloud Engineer": [
                "1:-Understand Cloud Computing Concepts",
                "2:-Get Hands-On with AWS, Azure, GCP",
                "3:-Learn Infrastructure as Code (Terraform, Kubernetes)",
                "4:-Obtain Cloud Certifications",
                "5:-Work on Cloud Deployment Projects"
            ],
            "Game Developer": [
                "1:-Learn Game Development Basics (Unity, Unreal Engine)",
                "2:-Master C# or C++ for Game Programming",
                "3:-Work on 2D/3D Game Projects",
                "4:-Understand Game Physics & AI",
                "5:-Launch Your Own Game or Work in a Gaming Studio"
            ],
    
            // Non-IT Sector
            "Doctor": [
                "1:-Complete MBBS/BDS/BAMS/BHMS Degree",
                "2:-Internship in Hospitals",
                "3:-Choose a Medical Specialty",
                "4:-Pursue Postgraduate Specialization (MD, MS)",
                "5:-Gain Experience & Start Practicing"
            ],
            "Civil Engineer": [
                "1:-Earn a Civil Engineering Degree",
                "2:-Learn CAD Software (AutoCAD, Revit)",
                "3:-Get Experience with Site Projects",
                "4:-Specialize in Structural, Transportation, or Environmental Engineering",
                "5:-Work in Construction, Government, or Consultancy"
            ],
            "Lawyer": [
                "1:-Complete LLB (Bachelor of Law)",
                "2:-Intern with Law Firms or Courts",
                "3:-Pass Bar Exam and Obtain License",
                "4:-Choose Specialization (Corporate, Criminal, Civil)",
                "5:-Work as an Independent Lawyer or in a Law Firm"
            ],
            "Entrepreneur": [
                "1:-Find a Business Idea and Market Gap",
                "2:-Develop a Business Plan",
                "3:-Secure Funding & Build a Team",
                "4:-Launch the Business & Market It",
                "5:-Scale and Grow the Business"
            ],
            "Chef": [
                "1:-Complete Culinary Arts Course",
                "2:-Gain Experience in Hotels & Restaurants",
                "3:-Specialize in a Cuisine or Pastry",
                "4:-Work as a Head Chef or Open Your Own Restaurant ",
                "5:-Participate in Cooking Competitions and Build a Reputation"
            ]
        };
  
      let roadmapSteps = document.getElementById("roadmap-steps");
      roadmapSteps.innerHTML = "";
  
      if (roadmaps[job]) {
          roadmaps[job].forEach(step => {
              let stepElement = document.createElement("li");
              stepElement.innerText = step;
              roadmapSteps.appendChild(stepElement);
          });
      } else {
          roadmapSteps.innerHTML = "<li>No roadmap available for this job.</li>";
      }
  }
  // Array of quotes
const quotes = [
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "The only way to do great work is to love what you do.",
      "It always seems impossible until it’s done.",
      "Don’t watch the clock; do what it does. Keep going.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "Success is the sum of small efforts, repeated day in and day out."
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
  }
  
  // Display a random quote on page load
  window.onload = function() {
      document.getElementById('quote').textContent = getRandomQuote();
  };
  