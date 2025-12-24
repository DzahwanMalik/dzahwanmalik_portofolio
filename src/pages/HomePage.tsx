import { TypeAnimation } from "react-type-animation";
import Button from "../components/atoms/Button";

const HomePage = () => {
  return (
    <div className="min-h-screen w-container m-auto p-5 flex gap-5 items-center">
      <div className="w-full flex justify-center items-center">
        <div className="shadow-2xl rounded-bl-[50%] rounded-br-4xl rounded-tr-[50%] rounded-tl-4xl bg-linear-to-t from-secondary to-base overflow-hidden">
          <img src="images/me.png" alt="" className="cursor-pointer saturate-0 transition-all duration-300 ease-in-out hover:saturate-100" />
        </div>
      </div>
      <div className="w-full text-primary flex gap-5 flex-col">
        <TypeAnimation
          sequence={["Full Stack Developer", 1500, "Back End Developer", 1500, "Front End Developer", 1500]}
          wrapper="span"
          repeat={Infinity}
          className="text-4xl font-bold"
        />
        <h1 className="text-6xl font-bold">
          Building <span className="text-secondary">Digital</span> Experiences.
        </h1>
        <p className="font-medium">
          Graduated Full-Stack Web Developer bootcamp program from harisenin.com
          for deepening skills in Web Developer. Explore my latest projects,
          showcasing my expertise in web development.
        </p>
        <div className="flex gap-8">
          <Button
            variant="primary"
            value="Resume"
            icon={<i className="bi bi-file-earmark-arrow-down-fill" />}
          />
          <Button
            variant="secondary"
            value="Contact Me"
            icon={<i className="bi bi-envelope-fill" />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
