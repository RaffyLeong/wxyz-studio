import { useState } from 'react';
import projectsData from './projectsData';


// project image on home page
const ProjectThumbnail = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project.id)}
      className=" rounded-md p-2 shadow-md cursor-pointer border-[2px] border-gray-300 border-dashed transition duration-200">
      <img src={project.image00} alt={project.title} className="w-full h-auto max-w-[900px] max-h-[700px] rounded-md" />
    </div>
  );
};

// Projects Show Case
const ProjectShowcase = ({ project, onClose }) => {
  return (
    <div className="fixed top-0 left-0  w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-600 text-3xl p-2 rounded-full transition">
          &times; {/* Close button */}
        </button>
      <div className="bg-white p-8 rounded-md shadow-lg w-[80vw] h-[100vh] relative overflow-y-auto max-h-[90vh] border-t"> 
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <h3 className="mb-2 opacity-60">By {project.name}<span className="mx-2">·</span>{project.date}</h3>
        <img src={project.image01} alt={project.title} />
        <img src={project.image02} alt={project.title} />
        <img src={project.image03} alt={project.title} />
        <img src={project.image04} alt={project.title} />
        <img src={project.image05} alt={project.title} />
        <img src={project.image06} alt={project.title} />
        <img src={project.image07} alt={project.title} />
        <img src={project.image08} alt={project.title} />
        <img src={project.image09} alt={project.title} />
        <img src={project.image10} alt={project.title} />
        <img src={project.image11} alt={project.title} />
        <img src={project.image12} alt={project.title} />       
      </div>
    </div>
  );
};

const Home = () => {
  const [showcaseProject, setShowcaseProject] = useState(null); 

  const handleThumbnailClick = (projectId) => {
    setShowcaseProject(projectId);
  };

  const handleCloseShowcase = () => {
    setShowcaseProject(null);
  };

  const selectedProject = projectsData.find((project) => project.id === showcaseProject);

  return (
    <div className="container mt-24 mx-auto p-8 justify-center">
      

      {/*  Remove the grid classes and use a flex container for vertical layout. */}
      <div className="flex flex-col mb-20 gap-10 justify-center items-center">
        {projectsData.map((project) => (
          <ProjectThumbnail
            key={project.id}
            project={project}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectShowcase project={selectedProject} onClose={handleCloseShowcase} />
      )}
    </div>
  );
};

export default Home;