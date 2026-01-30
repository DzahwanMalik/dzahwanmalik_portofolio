import ProjectCard from "../components/molecules/ProjectCard";
import { projects } from "../constants/project";

const ProjectsPage = () => {
  const handleLiveDemo = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen max-w-361 m-auto text-primary pt-40 md:pt-48 px-5 md:px-0">
      <h1 className="text-center font-bold text-4xl mb-16">
        "What I've Been Build?"
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            type={project.type}
            title={project.title}
            image={project.image}
            description={project.description}
            handleClick={() => handleLiveDemo(project.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
