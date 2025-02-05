import React from 'react';

const ProjectCard = ({ projectLink, imageSrc, imageAlt, projectTitle, projectDescription }) => {
  return (
    <a className="project_anchor" href={projectLink} target="_blank" rel="noopener noreferrer">
      <div className="project">
        <img id="project_image" src={imageSrc} alt={imageAlt} />
        <div className="project_text">
          <h2 className="project_heading">
            {projectTitle} <i className="fas fa-link"></i>
          </h2>
          <p className="project_description">{projectDescription}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;