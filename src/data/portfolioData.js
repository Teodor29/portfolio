import adminDashboard from "../assets/admin-dashboard.webp"
import trainDelayMap from "../assets/train-delay-map.webp"
import slicr from "../assets/slicr.webp"

export const email = "teodor.lien@gmail.com"

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS/SCSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "MongoDB", "MySQL"],
  },
  {
    category: "Other",
    items: ["Git", "Vite", "Vitest", "Docker"],
  },
]
export const projects = [
  {
    title: "Slicr Budget App",
    description:
      "A personal budgeting web app that allows users to set monthly income, create spending categories, and track expenses in real time. Data is stored in localStorage, with a focus on clean component architecture and an intuitive user interface.",
    image: slicr,
    altText: "Slicr Budget App",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://slicr-budget-app.vercel.app/",
  },

  {
    title: "Train Delay Map",
    description:
      "A real-time web application for monitoring train delays across Sweden. It displays stations and live delay data on an interactive Leaflet map using WebSocket-based updates. Users can save favorite stations for quick access.",
    image: trainDelayMap,
    altText: "Train Delay Map",
    skills: ["JavaScript", "SCSS", "WebSockets", "Leaflet"],
    link: "https://train-delay.vercel.app/",
  },
  {
    title: "Scooter Rental System",
    description:
      "A full-stack scooter rental system developed as a group project, featuring an admin dashboard, customer web and mobile apps, backend services, and a scooter simulation. I was responsible for developing the frontend applications and also contributed to backend development and Docker-based containerization for local development.",
    image: adminDashboard,
    altText: "Scooter Rental System",
    skills: [
      "React",
      "JavaScript",
      "REST API",
      "Docker",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://github.com/Teodor29/scooter-rental-system",
  },
]
