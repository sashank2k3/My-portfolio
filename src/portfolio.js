/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Or your own animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1700
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Varanasi Sai Shashank",
  title: "Hi, I'm Shashank 👋",
  subTitle: emoji(
    "AI/ML Engineer & Full-Stack Developer 🚀 passionate about building production-ready AI features, scalable backends, and real-world, reliable machine intelligence. Hands-on with RAG, NLP, transformers, vector databases, and cloud integration."
  ),
  resumeLink: "https://YOUR_RESUME_LINK_HERE", // Upload to Google Drive or GitHub
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/sashank2k3",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE/",
  gmail: "sashank.varanasi@gmail.com",
  // Add more if needed
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "AI/ML engineer and developer focused on production systems, interactive NLP, scalable API design, and modern AI-powered tools."
  ),
  skills: [
    emoji(
      "⚡ Build RAG (Retrieval-Augmented Generation) pipelines—chunking, embeddings, context assembly, and Pinecone vector search"
    ),
    emoji(
      "⚡ Integration of transformers, NLP, document Q&A, summarization, and intelligent quiz generation"
    ),
    emoji(
      "⚡ Design RESTful APIs, database schemas, and cloud integrations for robust EdTech/data platforms"
    ),
    emoji("⚡ Deliver reliable, tested software with an agile, ownership-driven mindset")
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS S3",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Malla Reddy University, Hyderabad",
      logo: require("./assets/images/mru_logo.png"), // Add your logo file here
      subHeader: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2021 - 2025",
      desc: "CGPA: 9.07/10. Core: AI, ML, NLP, Data Engineering, Software Design.",
      descBullets: [
        "Worked on AI-powered document Q&A and RAG pipelines",
        "Projects in computer vision, voice systems, and classifier engineering"
      ]
    }
  ]
};

// Tech Stack Bars
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "AI/ML & Data Science",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend/API",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & Data Engineering",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Developer",
      company: "Brillius Technologies",
      companylogo: require("./assets/images/brillius_logo.png"), // Add your logo file
      date: "Jun 2025 – Present",
      desc:
        "Ownership of backend APIs, PostgreSQL schema design, robust asset management on AWS S3, and production-grade RAG pipelines. Built QA, summary, classification, and quiz generation tools for EdTech AI platform. Led technical documentation and acted as interim team lead.",
      descBullets: [
        "Designed, tested, and deployed RESTful APIs (Python FastAPI/Flask)",
        "Developed transformers-based pipelines, context assembly, and vector search (Pinecone)",
        "Integrated NLP: document Q&A, summarization, keyword extraction, classification",
        "Built scalable ingestion for S3 PDFs/videos/slides, analytics, and notifications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Featured Projects",
  subtitle: "AI/ML systems, EdTech platforms, and automation tools",
  projects: [
    {
      image: require("./assets/images/rag_edtech.png"),
      projectName: "RAG-Powered EdTech Q&A",
      projectDesc: "Retrieval-augmented Q&A engine for IT learners. FastAPI/Flask, transformers, Pinecone, scalable context assembly, real-time analytics.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sashank2k3/Awesome-EdTech-AI"
        }
      ]
    },
    {
      image: require("./assets/images/driver_monitor.png"),
      projectName: "Driver Monitoring System",
      projectDesc: "Real-time fatigue/distraction detection (OpenCV, CNNs, dlib, head pose). Alerts for micro-sleep, yawn, and distraction.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sashank2k3/driver-monitoring"
        }
      ]
    },
    {
      image: require("./assets/images/voice_interaction.png"),
      projectName: "Voice Interaction System",
      projectDesc: "Speech-aware interaction with TTS/STT, intent parsing, and command automation (Python, SpeechRecognition, pyttsx3).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sashank2k3/voice-interaction"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Relevant certifications and professional learning.",
  achievementsCards: [
    {
      title: "AI for Everyone",
      subtitle: "Andrew Ng, Coursera",
      image: require("./assets/images/coursera_logo.png"),
      imageAlt: "Coursera AI",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/YOURID"
        }
      ]
    },
    {
      title: "Python & Java Developer",
      subtitle: "HackerRank/NPTEL",
      image: require("./assets/images/hackerrank_logo.png"),
      imageAlt: "HackerRank",
      footerLink: []
    },
    {
      title: "Cambridge English B2",
      subtitle: "University of Cambridge",
      image: require("./assets/images/cambridge_logo.png"),
      imageAlt: "Cambridge",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I share deep-dives in building scalable AI, lessons from delivering production ML, and ways to make AI more reliable.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@sashank2k3/awesome-rag-pipelines-in-production",
      title: "Building Retrieval-Augmented Generation (RAG) for EdTech – My Journey",
      description: "Key challenges, architecture, and lessons learned in deploying a RAG system for personalized IT learning."
    }
  ],
  display: true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love sharing what I learn about AI/ML, production systems, and scalable automation."),
  talks: [
    {
      title: "NLP in the Real World: EdTech and Daily Use",
      subtitle: "Guest lecture, Malla Reddy University, 2024",
      slides_url: "",
      event_url: "https://mallareddyuniversity.ac.in/"
    }
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I occasionally guest on podcasts to discuss ML in industry.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my up-to-date resume here.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open.",
  number: "+91 8374661598",
  email_address: "sashank.varanasi@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "<<your_twitter>>", // Replace with your username, if you want
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
