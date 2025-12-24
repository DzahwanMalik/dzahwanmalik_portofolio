import Button from "../atoms/Button";

type ProjectCardProps = {
  span?: string;
  image: string;
  flexDirection: string;
  type: string;
  title: string;
  description: string;
};

const ProjectCard = ({
  span,
  image,
  flexDirection,
  type,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <div className={`rounded-md bg-base shadow-xl p-5 ${span}`}>
      <div className={`flex ${flexDirection} gap-5`}>
        <div
          className={`aspect-video ${
            flexDirection === "flex-row" ? "w-1/2" : "w-full"
          } rounded-md overflow-hidden`}
        >
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <span className="font-medium text-xl text-secondary">{type}</span>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="font-medium">{description}</p>
          <Button variant="primary" value="Live Demo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
