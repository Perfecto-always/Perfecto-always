interface ProjectType {
  name: string;
  description: string;
  link?: string;
  technologies: string[];
}

export const projects: ProjectType[] = [
  {
    name: "Meme Generator",
    description:
      "A classic meme generator that fetches meme templates from an api and stores it in a variable. A randomizer function is then used to show the meme to the user.",
    link: "https://meme-generation.netlify.app",
    technologies: ["React", "CSS", "Api"],
  },
  {
    name: "E Commerce Application",
    description:
      "An E-Commerce website. Browse through the catalogue and if you want to buy can contact seller by sending them and email.",
    link: "https://kmtextiles.netlify.app",
    technologies: ["NextJs", "Firebase", "TailwindCSS", "Typescript"],
  },
  {
    name: "Chat Application",
    description:
      "A full stack chat application created using MERN Stack. You can also search through massive collection of spotify albums and playlist and play music.",
    link: "https://github.com/Perfecto-always/Linkage",
    technologies: [
      "Web Socket",
      "MongoDB",
      "React",
      "NodeJS",
      "TypeScript",
      "Spotify Api",
    ],
  },
  {
    name: "Social Media",
    description:
      "A social media website but doesn't have the very essence (cannot talk to others) of it. Because it is not meant to be one. You can share your taughts and feelings with the world.",
    link: "https://github.com/Perfecto-always/lads-backend",
    technologies: ["NodeJS", "Prisma", "TypeScript", "Supabase"],
  },
  {
    name: "Image Editor",
    description:
      "A image editor or a image manipulator without any image processing library. With various filters and effects and if you like the image you can download it.",
    link: "https://deditor.vercel.app",
    technologies: ["Next.js", "TypeScript"],
  },
  {
    name: "Invoice Generator",
    description:
      "An invoice generator that can generate invoices for your clients. You can also customize the invoice to your liking.",
    link: "https://github.com/Perfecto-always/invoice-generator",
    technologies: ["NodeJS", "Express"],
  },
  {
    name: "Portfolio Project",
    description:
      "The portfolio website that you are currently looking. Nothing much to say here.",
    link: "https://github.com/Perfecto-always/Perfecto-always",
    technologies: ["Html", "Scss", "Vite"],
  },
  {
    name: "Unknown Project",
    description:
      "A project created just for fun. This project might be the one that you are looking for. Be careful it does not work in some browsers",
    link: "https://face-reveal.netlify.app",
    technologies: ["Unknown"],
  },
];
