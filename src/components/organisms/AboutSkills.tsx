import skills from "../../constants/skills";

const AboutSkills = () => {
  return (
    <section className="h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-16">
        <h2 className="font-bold text-5xl text-center">Skilled With</h2>
        <ul className="grid grid-cols-6 gap-8">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="aspect-square flex gap-8 flex-col items-center justify-center shadow-lg rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:rotate-5"
            >
              <div className="w-full h-1/2 flex justify-center">
                <img src={skill.icon} alt="" className="h-full" />
              </div>
              <p className="font-semibold">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSkills;
