import React from 'react';
import '../styles.css';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      projectLink: "https://github.com/Abdullaha2h/PixelPouch/tree/master",
      imageSrc: "/images/PP.png",
      imageAlt: "PixelPouch",
      projectTitle: "PixelPouch Store",
      projectDescription: "PixelPouch is a modern e-commerce platform specializing in selling high-quality bags. Built with Node.js, it includes structured routes, secure authentication, and an efficient design for a seamless shopping experience."
       },
    {
      projectLink: "https://abdullaha2h.github.io/Employee-Management-System/",
      imageSrc: "/images/EMP.png",
      imageAlt: "EMS",
      projectTitle: "Employee Management System (EMS)",
      projectDescription: "The Employee Management System (EMS) is a web-based application built using React. It provides a simple interface for managing employees and their tasks. The application uses local storage to persist data and supports user authentication for both employees and admins."
       },
    {
      projectLink: "https://abdullaha2h.github.io/Marvel-Comics-Landing-Page-HTML-CSS-GitHub-/",
      imageSrc: "/images/P1.png",
      imageAlt: "Comic-Page Project",
      projectTitle: "Marvel Comics Landing Page",
      projectDescription: "This is a successful Open-Source responsive project that I created. The landing page showcases the iconic characters and stories from the Marvel universe in a visually appealing and responsive design.",
    },
   
    // Add more projects here as needed
  ];

  return (
    <main>
      <div className="sun"></div>
      <div className="content projects">
        <h1>PROJECTS</h1>
        <hr className="line" />
        <p>
          Here you will find some of the personal and clients projects that I created.
        </p>
      </div>

     {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectLink={project.projectLink}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
        />
      ))}

    

      {/* Repeat for other projects */}
    </main>
  );
};

export default Projects;