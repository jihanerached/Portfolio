import {
  akwa,
  backend,
  boa,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  java,
  javascript,
  jenkins,
  jobit,
  mobile,
  mongodb,
  mysql,
  nodejs,
  python,
  reactjs,
  tailwind,

  web,
  white
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

  {
    id: "resume",
    title: "Resume",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "Bank of Africa - BOA Services International",
    icon: white, 
    iconBg: "#E6DEDD",
        date: "July - August 2024",
    points: [
      "Analyzed client needs to identify key performance indicators (KPIs) for debt collection processes.",
      "Automated KPI calculations using Python to streamline workflows.",
      "Designed interactive dashboards in Power BI for visualizing and analyzing results.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Akwa Group - Maghreb Oxygène",
    icon: white, 
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Developed a stock optimization application to digitize oxygen bottle management.",
      "Collaborated with stakeholders to analyze business needs and define application functionalities.",
      "Implemented the application using Spring Boot, MySQL, HTML, and CSS.",
    ],
  },
];


const testimonials = [
  
];

const projects = [
  {
    name: "PainCare",
    description:
      "A mobile and web application designed for endometriosis patients, offering tools to track pain progression and analyze factors influencing it. Integrated CI/CD pipelines to automate testing and deployment.",
    tags: [
      { name: "spring boot", color: "green-text-gradient" },
      { name: "jenkins", color: "blue-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
      { name: "chart.js", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/jihanerached/PainCare", 
  },
  {
    name: "Smart Fridge",
    description:
      "An IoT-enabled smart fridge with real-time monitoring via a mobile app. Features include stock visualization, freshness prediction using machine learning, and remote control through Firebase.",
    tags: [
      { name: "android studio", color: "green-text-gradient" },
      { name: "firebase", color: "blue-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/jihanerached/SmartFridge", 
  },
  {
    name: "Word Explorer",
    description:
      "A Unity-based game designed to aid dyslexic children in improving their reading and writing skills. Integrated 4 mini-games into one cohesive platform, focusing on engagement and educational value.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "game_design", color: "green-text-gradient" },
      { name: "c#", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/jihanerached/World-Island", 
    demo_video_link: "https://vimeo.com/1030366828?share=copy",
  },
  {
    name: "AjiNthriftiw - Online Bookstore",
    description:
      "An app developed with Laravel and Bootstrap for buying and selling second-hand books. Features a seamless browsing experience, secure checkout, and user management.",
    tags: [
      { name: "laravel", color: "pink-text-gradient" },
      { name: "bootstrap", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
    ],
  },
  {
    name: "RedDrop - Blood Donation App",
    description:
      "A platform to facilitate blood donations by connecting donors and recipients. Features include donor registration, blood inventory tracking, and request management.",
    tags: [
      { name: "Java", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
  },
];

export { experiences, projects, services, technologies, testimonials };

