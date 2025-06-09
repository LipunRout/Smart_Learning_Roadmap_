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
            { step: "1:-Learn HTML, CSS, JavaScript", link: "https://www.youtube.com/watch?v=HcOc7P5BMi4&list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i" },
            { step: "2:-Master Frontend Frameworks (React, Angular, Vue)", link: "https://www.youtube.com/watch?v=RGKi6LSPDLU&t=17s" },
            { step: "3:-Learn Backend (Node.js, Django, Flask)", link: "https://www.youtube.com/watch?v=AZzV3wZCvI4&list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3" },
            { step: "4:-Practice with Full-Stack Projects", link: "https://www.youtube.com/watch?v=P4kuSxpjA48&list=PLChiukrA-RMOEB1PRQqB1NITIRsDz9pIN" },
            { step: "5:-Build a Portfolio and Apply for Jobs", link: "https://www.linkedin.com/" }
        ],
        "AI/ML Engineer": [
            { step: "1:-Learn Python and Mathematics Fundamentals", link: "https://www.youtube.com/watch?v=jc7TBgMS_kw" },
            { step: "2:-Understand Machine Learning Algorithms", link: "https://www.youtube.com/watch?v=kz184QIO4ZQ" },
            { step: "3:-Work on AI & Data Science Projects", link: "https://www.youtube.com/watch?v=iIkJrwVUl1c" },
            { step: "4:-Master Deep Learning & NLP", link: "https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4" },
            { step: "5:-Apply for AI/ML Engineer Roles", link: "https://www.indeed.com/" }
        ],
        "Cybersecurity Expert": [
            { step: "1:-Learn Networking & Security Basics", link: "https://www.youtube.com/watch?v=KjN64N6-_Sk" },
            { step: "2:-Master Ethical Hacking & Penetration Testing", link: "https://www.youtube.com/watch?v=RWSqDF_6n4k" },
            { step: "3:-Get Certified (CEH, CISSP, Security+)", link: "https://www.comptia.org/" },
            { step: "4:-Work on Real-World Security Audits", link: "https://www.hackerone.com/" },
            { step: "5:-Join Cybersecurity Teams or Start Bug Bounty Hunting", link: "https://bugcrowd.com/" }
        ],
        "Cloud Engineer": [
            { step: "1:-Understand Cloud Computing Concepts", link: "https://www.youtube.com/watch?v=8C_kHJ5YEiA" },
            { step: "2:-Get Hands-On with AWS, Azure, GCP", link: "https://www.youtube.com/watch?v=Vnk0p-63mHQ" },
            { step: "3:-Learn Infrastructure as Code (Terraform, Kubernetes)", link: "https://www.youtube.com/watch?v=POPP2WTJ8es&t=127s" },
            { step: "4:-Obtain Cloud Certifications", link: "https://cloud.google.com/certification" },
            { step: "5:-Work on Cloud Deployment Projects", link: "https://www.youtube.com/watch?v=QAcAFOW0IKQ" }
        ],
        "Game Developer": [
            { step: "1:-Learn Game Development Basics (Unity, Unreal Engine)", link: "https://www.youtube.com/watch?v=qPxvmrtTQ_4&t=87s" },
            { step: "2:-Master C# or C++ for Game Programming", link: "https://www.youtube.com/watch?v=aPNpLzM_plA" },
            { step: "3:-Work on 2D/3D Game Projects", link: "https://www.youtube.com/watch?v=ECqUrT7IdqQ&list=PLi77irUVkDatlbulEY4Kz8O107HO8RGH8" },
            { step: "4:-Understand Game Physics & AI", link: "https://www.youtube.com/watch?v=atcKO15YVD8" },
            { step: "5:-Launch Your Own Game or Work in a Gaming Studio", link: "https://store.steampowered.com/" }
        ],

        // Non-IT Sector
        "Doctor": [
            { step: "1:-Complete MBBS/BDS/BAMS/BHMS Degree", link: "https://www.theeducationabroad.com/blog/mbbs-bds-bams-bhms-a-comprehensive-guide" },
            { step: "2:-Internship in Hospitals", link: "https://www.naukri.com/hospital-internship-jobs" },
            { step: "3:-Choose a Medical Specialty", link: "https://en.wikipedia.org/wiki/Medical_specialty" },
            { step: "4:-Pursue Postgraduate Specialization (MD, MS)", link: "https://neuronsedu.com/medical/msmd#:~:text=Specialization%3A%20An%20MD%2FMS%20degree,valued%20in%20the%20medical%20field." },
            { step: "5:-Gain Experience & Start Practicing" }
        ],
        "Civil Engineer": [
            { step: "1:-Earn a Civil Engineering Degree", link: "https://www.indeed.com/career-advice/career-development/how-to-become-a-civil-engineer" },
            { step: "2:-Learn CAD Software (AutoCAD, Revit)", link: "https://www.autodesk.com/" },
            { step: "3:-Get Experience with Site Projects", link: "https://resources.workable.com/civil-engineer-job-description" },
            { step: "4:-Specialize in Structural, Transportation, or Environmental Engineering", link: "https://www.quora.com/Among-structural-environmental-transportational-and-geotechnical-branches-in-civil-engineering-which-is-better-overall-for-a-career-and-a-job" },
            { step: "5:-Work in Construction, Government, or Consultancy", link: "https://www.procurement.govt.nz/contracts/construction-consultancy-services-2/" }
        ],
        "Lawyer": [
            { step: "1:-Complete LLB (Bachelor of Law)", link: "https://en.wikipedia.org/wiki/Bachelor_of_Laws" },
            { step: "2:-Intern with Law Firms or Courts", link: "https://en.wikipedia.org/wiki/Law_firm" },
            { step: "3:-Pass Bar Exam and Obtain License", link: "#" },
            { step: "4:-Choose Specialization (Corporate, Criminal, Civil)" },
            { step: "5:-Work as an Independent Lawyer or in a Law Firm"}
        ],
        "Entrepreneur": [
            { step: "1:-Find a Business Idea and Market Gap" },
            { step: "2:-Develop a Business Plan" },
            { step: "3:-Secure Funding & Build a Team" },
            { step: "4:-Launch the Business & Market It" },
            { step: "5:-Scale and Grow the Business" }
        ],
        "Chef": [
            { step: "1:-Complete Culinary Arts Course" },
            { step: "2:-Gain Experience in Hotels & Restaurants" },
            { step: "3:-Specialize in a Cuisine or Pastry"},
            { step: "4:-Work as a Head Chef or Open Your Own Restaurant" },
            { step: "5:-Participate in Cooking Competitions and Build a Reputation"}
        ]
    };

    const roadmapList = document.getElementById("roadmap-steps");

    roadmapList.innerHTML = ""; // Clear previous list

    if (roadmaps[job]) {
        roadmaps[job].forEach((item) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.step;
            link.target = "_blank"; // Open link in a new tab
            link.style.color = "white"; // Link color
            link.style.textDecoration = "underline"; // Underline to indicate link
            li.appendChild(link);
            roadmapList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No roadmap found for the selected job.";
        roadmapList.appendChild(li);
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
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}





(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized")
{window.chatbase=(...arguments)=>{if(!window.chatbase.q)
{window.chatbase.q=[]}window.chatbase.q.push(arguments)};
 window.chatbase=new Proxy(window.chatbase,{get(target,prop)
 {if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}
            const onLoad=function()
            {const script=document.createElement("script");
             script.src="https://www.chatbase.co/embed.min.js";
             script.id="OSbZZkVH2LpQC0j5fqFtg";
             script.domain="www.chatbase.co";document.body.appendChild(script)};
            if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();

