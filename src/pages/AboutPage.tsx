import AboutDescription from "../components/organisms/AboutDescription";
import AboutExperience from "../components/organisms/AboutResume";
import AboutSkills from "../components/organisms/AboutSkills";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-container m-auto text-primary">
      <AboutDescription />
      <AboutSkills />
      <AboutExperience />
    </div>
  );
};

export default AboutPage;
