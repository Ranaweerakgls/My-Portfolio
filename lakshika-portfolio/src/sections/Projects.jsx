import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiKotlin,
  SiAndroid,
  SiSqlite,
  SiPhp,
  SiGithub,
  SiBootstrap,
  SiFigma,
  SiMysql,
} from "react-icons/si";
import { FaDatabase, FaChartBar } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Construction Company Management System (CCMS)",
    description:
      "Full-stack MERN web application for managing construction projects with role-based access, task tracking, budget & inventory management, and real-time client updates.",
    image: "../projects/CCMS.png",
    tags: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    id: 2,
    title: "Personal Finance Tracker App (BUDGETLYST)",
    description:
      "Android Kotlin app for managing expenses and budgets, featuring offline support, real-time alerts, interactive charts, biometric login, and cloud backup.",
    image: "../projects/Moblie.jpg",
    tags: [
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MPChart", icon: <SiReact /> },
    ],
  },
  {
    id: 3,
    title: "Staff Management System (SMS)",
    description:
      "Web-based Staff Management System for streamlining university operations with scheduling, IT support, authentication, and knowledge sharing, built with PHP, MySQL, HTML, CSS, and JavaScript.",
    image: "https://via.placeholder.com/400x300?text=SMS",
    tags: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Full-Stack", icon: <FaDatabase /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    id: 4,
    title: "Coffee Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing coffee sales trends, DAX, KPIs, time-based and product-level performance, with dynamic visualizations and a user-friendly interface.",
    image: "../projects/Coffee.png",
    tags: [
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "DAX", icon: <FaChartBar /> },
      { name: "Relational Modeling", icon: <FaDatabase /> },
      { name: "KPI Dashboards", icon: <FaChartBar /> },
    ],
  },
  {
    id: 5,
    title: "Spotify Analytics Dashboard",
    description:
      "Interactive Spotify Analytics Dashboard in Power BI with a modern, Spotify-inspired UI, DAX, visualizing artist performance, song popularity trends, explicit vs non-explicit comparisons, and year-wise release distributions.",
    image: "../projects/Spotify.png",
    tags: [
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "DAX", icon: <FaChartBar /> },
      { name: "Relational Modeling", icon: <FaDatabase /> },
      { name: "KPI Dashboards", icon: <FaChartBar /> },
    ],
  },
  {
    id: 6,
    title: "UI/UX Design for Mag City Website",
    description:
      "Redesigned the Mag City website to improve usability, accessibility, and visual consistency, using Figma for wireframing, prototyping, and UI/UX enhancements based on user research and evaluation.",
    image: "https://via.placeholder.com/400x300?text=Mag+City+Design",
    tags: [
      { name: "UI/UX", icon: <SiFigma /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "User Research", icon: <SiFigma /> },
      { name: "Prototyping", icon: <SiFigma /> },
    ],
  },
  {
    id: 7,
    title: "Spiffy Food Delivery App",
    description:
      "Designed Spiffy, a sleek food delivery app with intuitive onboarding, a visually appealing dark green theme, streamlined 3-step checkout, and personalized Favorites/Profile features to enhance user experience and retention.",
    image: "../projects/Spiffy.jpg",
    tags: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "UI/UX", icon: <SiFigma /> },
      { name: "Prototyping", icon: <SiFigma /> },
      { name: "Wireframing", icon: <SiFigma /> },
    ],
  },
];

export default function Projects() {
  const rowGradients = [
    {
      hover: "from-purple-600/40 to-pink-600/40",
      tag: "border-pink-500/40 text-pink-400",
    },
    {
      hover: "from-orange-500/40 to-rose-500/40",
      tag: "border-orange-400/40 text-orange-300",
    },
    {
      hover: "from-blue-600/40 to-cyan-600/40",
      tag: "border-cyan-400/40 text-cyan-300",
    },
  ];

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            Explore my recent
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            <span>Proje</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              cts
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => {
            const rowIndex = Math.floor(index / 3);
            const rowStyle = rowGradients[rowIndex] || rowGradients[0];

            return (
              <ProjectCard
                key={project.id}
                project={project}
                hoverGradient={rowStyle.hover}
                tagStyle={rowStyle.tag}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, hoverGradient, tagStyle }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative rounded-3xl p-6 text-left bg-[#0d0d12] border border-white/10 group overflow-hidden flex flex-col h-full"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${hoverGradient}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain object-center"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-white">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-medium bg-[#0d0d12]/50 ${tagStyle}`}
            >
              <span>{tag.icon}</span>
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
