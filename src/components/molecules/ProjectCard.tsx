import Button from "../atoms/Button";

type ProjectCardProps = {
  image: string;
  type: string;
  title: string;
  description: string;
  handleClick?: () => void;
};

const ProjectCard = ({
  image,
  type,
  title,
  description,
  handleClick,
}: ProjectCardProps) => {
  return (
    <div
      className={`rounded-md bg-primary/10 backdrop-blur-2xl border border-primary/30 shadow-xl p-5`}
    >
      <div className="flex flex-col h-full gap-5">
        <div className={`aspect-video rounded-md overflow-hidden`}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <span className="font-medium text-xl text-secondary">{type}</span>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="font-medium">{description}</p>
        <div className="mt-auto">
          <Button
            variant="secondary"
            value="Live Demo"
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
