import React from "react";

function ProjectItem({ name, about, technologies,id }) { 
  console.log(technologies)
  const showTech = technologies.map((technology) => {
    return <span key= {technology}> {technology}</span>
  })

  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {showTech}
      </div>
    </div>
  );
}

export default ProjectItem;
