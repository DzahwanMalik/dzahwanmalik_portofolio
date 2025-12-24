import PhotoCard from "../molecules/PhotoCard";

const AboutDescription = () => {
  return (
    <section className="h-screen flex gap-20 items-center justify-between">
      <div className="w-full">
        <PhotoCard />
      </div>
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-5xl font-bold">
          Hi, I'm <span className="text-secondary">Dzahwan Malik!</span>
        </h2>
        <p className="font-medium">
          <span className="font-bold">A Tech Enthusiast</span> who graduated from Islamic Boarding School with
          experience in Building Website Apps and Website Development. Skilled
          in JavaScript, TypeScript, ReactJS, ExpressJS, NodeJS, MySQL. Familiar
          with Version Control System and Software Development Life Cycle.
          Actively participate in Web Development seminars and bootcamps at
          Harisenin Full Stack Developer Program.
        </p>
        <div className="flex gap-16">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-6xl">1+</span>
            <span className="font-medium">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-6xl">4+</span>
            <span className="font-medium">Projects Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
