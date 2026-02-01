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
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Tailwind", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node", logo: nodejsLogo },
      { name: "Express", logo: expressjsLogo },
      { name: "Mongo", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "JWT", logo: apiLogo },
      { name: "REST API", logo: jwtLogo },
    ],

  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JS", logo: javascriptLogo },
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
    desc: "Built multiple full-stack web applications using modern technologies. Developed responsive front-end interfaces and implemented backend APIs. Focused on writing clean code and learning industry best practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Web Development Student",
    company: "Parul University",
    date: "2025 - Present",
    desc: "Learning and practicing web development through coursework and hands-on projects.",
    skills: ["C", "Python", "JavaScript", "React JS", "Machine Learning", "Artificial Intelligence", "Generative AI"],
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
    desc: "Currently pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.",
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
      "A full-stack e-commerce web application that allows users to browse products, add items to cart, and place orders through a clean and responsive interface. The application includes user authentication, product management, and a seamless shopping experience. Built with modern web technologies to ensure performance, scalability, and usability.",
    image: ecommerceLogo,   // change this if you have an image
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Payment Integration",
      "REST API"
    ],
    github: "https://github.com/Maverick-841/kumar",
    webapp: "https://maverick-frontend1-git-main-charantejreddys-projects.vercel.app/",

  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];

