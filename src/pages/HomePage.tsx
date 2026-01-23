import Button from "../components/atoms/Button";
import Aurora from "../components/atoms/Aurora";
import Lanyard from "../components/molecules/Lanyard";
import TrueFocus from "../components/atoms/TrueFocus";
import BlurText from "../components/atoms/BlurText";
import AnimatedContent from "../components/atoms/AnimatedContent";

const HomePage = () => {
  return (
    <div className="relative min-h-screen px-5 md:px-0">
      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <div className="w-container m-auto relative flex gap-5 items-center">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        <div className="text-primary flex gap-5 flex-col">
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
            className="text-6xl font-bold"
          />
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <p className="font-medium">
              Graduated Full-Stack Web Developer bootcamp program from
              harisenin.com for deepening skills in Web Developer. Explore my
              latest projects, showcasing my expertise in web development.
            </p>
          </AnimatedContent>
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
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
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
