import type SocialMedia from "../../types/socialMedia";

const SocialMediaContainer = () => {
  const socialMedia: SocialMedia[] = [
    {
      name: "Github",
      link: "https://github.com/DzahwanMalik",
      icon: <i className="bi bi-github" />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/dzahwan-malik/",
      icon: <i className="bi bi-linkedin" />,
    },
    {
      name: "Mail",
      link: "mailto:malikdzahwan22@gmail.com",
      icon: <i className="bi bi-envelope-fill" />,
    },
  ];

  return (
    <ul className="flex gap-8">
      {socialMedia.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            target="_blank"
            className="text-2xl text-primary/80 transition-all duration-300 ease-in-out hover:text-primary"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaContainer;
