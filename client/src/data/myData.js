import carV2 from "../assets/carV2.jpg";
import allStar from "../assets/allStar2.jpg";
import lounge from "../assets/lounge.jpg";

const navListData = [
  { _id: 1, href: "#", name: "Home", active: false },
  { _id: 2, href: "#about", name: "About", active: false },
  { _id: 3, href: "#projects", name: "Projects", active: false },
  { _id: 4, href: "#skills", name: "Skills", active: false },
  { _id: 5, href: "#contact", name: "Contact Me", active: false },
];

export { navListData };

const mediaData = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/david-vidal-dev/",
  },
  { name: "GitHub", href: "https://github.com/DavidVida1" },
];

export { mediaData };

const skillsData = [
  { name: "Html", length: 90 },
  { name: "CSS", length: 80 },
  { name: "JavaScript", length: 60 },
  { name: "React.Js", length: 70 },
  { name: "Figma", length: 50 },
  { name: "Express.JS", length: 50 },
  { name: "MongoDB", length: 50 },
  { name: "Node.JS", length: 50 },
  { name: "Git", length: 50 },
  { name: "Framer Motion", length: 50 },
];

export { skillsData };

const interestsData = [
  { interest: "Cars", interestImg: "🚗💨" },
  { interest: "Stock Market", interestImg: "📈" },
  { interest: "Coffee", interestImg: "☕" },
  { interest: "Art", interestImg: "🖼️" },
  { interest: "Gaming", interestImg: "🎮" },
];

export { interestsData };

const navPortfolio = [
  { category: "ALL" },
  { category: "SCHOOL" },
  { category: "UI/UX" },
  { category: "APP" },
  { category: "WEB" },
];

export { navPortfolio };

const projects = [
  {
    category: [/*"school",*/ "Being Fixed"],
    skills: ["React", "JavaScript", "CSS", "HTML"],
    name: "E-commerce School Project",
    description:
      "E-Commerce app for wearable tech (Group Project), I was part of the FrontEnd Team",
    projectImg: allStar,
    /*link: "https://cb-group-project-client.vercel.app/",*/
  },
  /* {
    category: "SCHOOL",
    name: "Car-Project-1",
    description:
      "App to set-up car meetings [React, JS, CSS, HTML, NodeJS, MongoDb] (Being fixed now)",
    projectImg: carV1,
    link: "#",
  },*/
  {
    category: [/*"UI/UX",*/ "Being Fixed"],
    skills: ["React", "JavaScript", "BootStrap", "CSS", "HTML"],
    name: "Lounge Website UI/UX",
    description:
      "Made a figma page than a landing page following a tutorial in order to learn and pratice Figma & BootStrap ",
    projectImg: lounge,
    /* link: "https://davidvida1.github.io/Lounge/",*/
  },
  {
    category: [/*"UI/UX",*/ "Being Fixed"],
    skills: ["React", "JavaScript", "CSS", "HTML", "NodeJs", "MongoDB"],
    name: "Car Project-2 ",
    description:
      "Set-up car meetings with a new design FrontEnd, Login function incoming ",
    projectImg: carV2,
    /* link: "https://davidvida1.github.io/carV2/",*/
  },
  /* {
    category: "WEB",
    skills: ["React", "JavaScript", "CSS", "HTML", "Framer-Motion"],
    name: "This Portfolio",
    description: "This Portfolio was made by Me!!",
    projectImg: portfolio3,
    link: "https://davidvida1.github.io/",
  },*/
];
export { projects };

/* how export multiple or put everything in a constant or deconstruct when outside. */
