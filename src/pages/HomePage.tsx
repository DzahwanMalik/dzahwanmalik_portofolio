import Button from "../components/atoms/Button";
import Aurora from "../components/atoms/Aurora";
import Lanyard from "../components/molecules/Lanyard";
import TrueFocus from "../components/atoms/TrueFocus";
import BlurText from "../components/atoms/BlurText";
import SocialMediaContainer from "../components/molecules/SocialMediaContainer";

const HomePage = () => {
  return (
    <>
      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <div className="max-w-361 m-auto min-h-screen relative flex flex-col justify-center gap-5 items-center p-5 md:p-0 md:flex-row">
        <div className="w-full hidden md:block">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
        <div className="w-full text-primary flex gap-5 flex-col">
          <TrueFocus
            sentence="Fullstack Frontend Backend"
            manualMode={false}
            blurAmount={6}
            borderColor="#ffc23c"
            animationDuration={0.5}
            pauseBetweenAnimations={2}
          />
          <BlurText
            text="Building Digital Experiences."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold md:text-6xl"
          />
          <SocialMediaContainer />
          <p className="font-medium">
            Graduated Full-Stack Web Developer bootcamp program from
            harisenin.com for deepening skills in Web Developer. Explore my
            latest projects, showcasing my expertise in web development.
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
    </>
  );
};

export default HomePage;
