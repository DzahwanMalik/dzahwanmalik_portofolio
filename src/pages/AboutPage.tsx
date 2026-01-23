import Aurora from "../components/atoms/Aurora";
import AboutDescription from "../components/organisms/AboutDescription";
import AboutExperience from "../components/organisms/AboutResume";
import AboutSkills from "../components/organisms/AboutSkills";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen px-5 md:px-0">
      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <AboutDescription />
      <AboutSkills />
      <AboutExperience />
    </div>
  );
};

export default AboutPage;
