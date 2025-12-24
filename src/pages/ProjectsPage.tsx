import ProjectCard from "../components/molecules/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-container m-auto text-primary py-26">
      <h1 className="text-center font-bold text-4xl mb-5">
        "What I've Been Build?"
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <ProjectCard
          span="col-span-2"
          type="Harisenin Project"
          title="Film Web"
          image="projects/chill.png"
          flexDirection="flex-row"
          description="A modern movie web app that allows users to explore films, view detailed information, and discover trending and popular titles."
        />
        <ProjectCard
          span="col-span-1"
          type="Internal Project"
          title="E-Voting Web"
          image="projects/eVoting.png"
          flexDirection="flex-col"
          description="A secure and modern e-voting web application that allows users to cast votes online, view real-time results, and ensure a transparent voting process."
        />
        <ProjectCard
          span="col-span-1"
          type="Internal Project"
          title="Company Profile"
          image="projects/tarhud.png"
          flexDirection="flex-col"
          description="Pondok Pesantren Tarbiyatul Huda Pancawati Caringin is an Islamic educational institution committed to nurturing students with strong faith, noble character, and academic excellence. The pesantren integrates Islamic teachings with formal education to prepare students to become knowledgeable, disciplined, and socially responsible individuals."
        />
        <ProjectCard
          span="col-span-2"
          type="Internal Project"
          title="Library Management Web"
          image=""
          flexDirection="flex-row"
          description="lorem100"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
