interface Project {
  type: string;
  title: string;
  image: string;
  description: string;
  url?: string;
}

export const projects: Project[] = [
  {
    type: "Harisenin Project",
    title: "Film Web",
    image: "projects/chill.png",
    description:
      "A movie discovery web app that integrates the TMDB API for real-time film data, built with React on the frontend and Express + MySQL (Sequelize ORM) on the backend, featuring secure user authentication with bcrypt.",
    url: "https://mission-inter-fe-1b-ng4m.vercel.app/",
  },
  {
    type: "Internal Project",
    title: "E-Voting Web",
    image: "projects/eVoting.png",
    description:
      "A secure and modern e-voting web application that allows users to cast votes online, view real-time results, and ensures a transparent and reliable voting process. Built with a responsive frontend using React and DaisyUI, and a robust backend powered by Express and MySQL, the system focuses on usability, security, and real-time data handling.",
    url: "https://pemilihan-istar-putra.vercel.app/",
  },
  {
    type: "Internal Project",
    title: "Company Profile",
    image: "projects/tarhud.png",
    description:
      "A web-based profile and information system developed for Pondok Pesantren Tarbiyatul Huda Pancawati Caringin. The website is designed to present institutional information, academic programs, announcements, and student activities in a clear and accessible way. Built with a responsive and modern user interface using React and DaisyUI, the platform focuses on usability, clean design, and easy content navigation for visitors.",
    url: "https://cheery-flan-c4caf2.netlify.app/",
  },
  {
    type: "Internal Project",
    title: "Library Management Web",
    image: "projects/e-library.png",
    description:
      "A web-based library management system for handling books, members, and borrowing transactions. Built with React on the frontend and Express + MySQL on the backend to deliver an efficient and organized digital library workflow.",
    url: "https://library-management-theta-taupe.vercel.app/",
  },
];
