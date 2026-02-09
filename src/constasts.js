// ================= SKILLS LOGOS =================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import jwtLogo from "./assets/tech_logo/jwt.jpg";
import apiLogo from "./assets/tech_logo/api.jpg";
import cLogo from "./assets/tech_logo/c.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/work_logo/gitLogo.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// ================= EXPERIENCE LOGOS =================
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";

// ================= EDUCATION LOGOS =================
import parulLogo from "./assets/education_logo/parulLogo.png";
import interLogo from "./assets/education_logo/interLogo.png";

// ================= PROJECT LOGOS =================
import movierecLogo from "./assets/work_logo/movie_rec.png";
import moodMitraLogo from "./assets/work_logo/Moodmitra.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "JWT", logo: jwtLogo },
      { name: "REST API", logo: apiLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];


// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Full Stack Developer (Self Projects)",
    company: "Personal Projects",
    date: "2025 - Present",
    desc: "Built multiple full-stack web applications using modern technologies. Developed responsive front-end interfaces and implemented backend APIs while following clean code and best practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Web Development Student",
    company: "Parul University",
    date: "2025 - Present",
    desc: "Learning and practicing web development through coursework and hands-on projects with focus on modern web and AI fundamentals.",
    skills: [
      "C",
      "Python",
      "JavaScript",
      "React JS",
      "Artificial Intelligence",
      "Generative AI",
    ],
  },
];


// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: parulLogo,
    school: "Parul University, Vadodara, Gujarat",
    date: "2024 - 2028 (Pursuing)",
    grade: "B.Tech CSE (AI & ML) - 2nd Year",
    desc: "Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.",
    degree: "Bachelor of Technology - CSE (AI & ML)",
  },
  {
    id: 1,
    img: interLogo,
    school: "Sri Chaitanya College, Vijayawada",
    date: "Intermediate",
    grade: "87.6% (MPC)",
    desc: "Completed Intermediate education with strong foundation in Mathematics and Science.",
    degree: "Intermediate (MPC)",
  },
];


// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce web application that allows users to browse products, manage carts, and place orders through a responsive and user-friendly interface. Includes authentication, product management, and RESTful APIs.",
    image: ecommerceLogo,
    tags: [
      "React JS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Maverick-841/kumar",
    webapp: "https://maverick-frontend1-git-main-charantejreddys-projects.vercel.app/",
  },

  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application enabling instant messaging with live updates using WebSockets. Built with React and Node.js, featuring a responsive UI and scalable backend.",
    image: movierecLogo,
    tags: [
      "React JS",
      "JavaScript",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "REST API",
      "Tailwind CSS",
    ],
    github: "https://github.com/Maverick-841/Chat-app",
    webapp: "https://chat-app-3s3f.vercel.app/",
  },

  {
    id: 2,
    title: "MoodMitra",
    description:
      "MoodMitra is an AI-powered web application that uses Retrieval-Augmented Generation (RAG) with Ollama-based local LLMs to generate contextual and supportive responses based on user input, focusing on emotional awareness and reflection.",
    image: moodMitraLogo,
    tags: [
      "React JS",
      "JavaScript (ES6+)",
      "Node.js",
      "REST API",
      "Ollama",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "AI Integration",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    github: "https://github.com/Maverick-841/HACKTHON",
    webapp: "https://hackthon-eight-nu.vercel.app/",
  },
];
