import Pointer from "../atoms/Pointer";
import ResumeItem from "../molecules/ResumeItem";

const AboutExperience = () => {
  return (
    <div className="min-h-screen flex flex-col gap-18 items-center justify-center">
      <h2 className="font-bold text-5xl text-center">Experience</h2>
      <div className="flex gap-5 w-full">
        <div className="basis-1/7">
          <Pointer />
        </div>
        <div className="basis-6/7">
          <ResumeItem
            title="Tarbiyatul Huda Islamic Boarding School"
            subTitle="Bogor, Indonesia"
            role="Full-Stack Developer"
            date="Jul, 2024 - Present"
            description="Developing and maintaining web applications using React, NodeJS, and MySQL. | Collaborating with designers and product managers to deliver user-friendly solutions. | Optimizing application performance and ensuring smooth user experience."
          />
        </div>
      </div>
      <h2 className="font-bold text-5xl text-center">Education Level</h2>
      <div className="flex gap-5 w-full">
        <div className="basis-1/7">
          <Pointer />
        </div>
        <div className="basis-6/7">
          <ResumeItem
            title="Tarbiyatul Huda Islamic Boarding School"
            subTitle="Bogor, Indonesia"
            date="Jul, 2020 - May, 2025"
          />
        </div>
      </div>
      <h2 className="font-bold text-5xl text-center">Certifications</h2>
      <div className="flex gap-5 w-full">
        <div className="basis-1/7">
          <Pointer />
        </div>
        <div className="basis-6/7">
          <ResumeItem
            title="Harisenin.com"
            subTitle="Jakarta, Indonesia"
            date="Sep, 2025 - Dec, 2025"
            role="Full Stack Developer Bootcamp, 3.90/4.00"
            description="Certificate : www.example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutExperience;
