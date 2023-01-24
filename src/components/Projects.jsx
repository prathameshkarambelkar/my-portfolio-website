import React from "react";
import Project from "./Project";

export const Projects = () => {
  return (
    <>
      <section
        id="Projects"
        className="lg:flex-row sm:flex p-2  sm:flex-col sm:items-center sm:justify-center  sm:m-auto  bg-fixed bg-center bg-cover md:bg-[url('/Projects.png')]  bg-[url('/ProjectsSmall.png')] "
      >
        <Project
          image={"/home.png"}
          name={"Torna Mutton"}
          technology={["Next.js", "Tailwind Css"]}
        />
        <Project
        image={"/developer_male.jpg"}
          name={"Demo Project"}
          technology={["ReactJs", "Tailwind Css", "Vite"]}
        />
        <Project
        image={"/developer_male.jpg"}
          name={"Demo Project"}
          technology={["ReactJs", "Tailwind Css", "Vite"]}
        />
      </section>
    </>
  );
};

export default Projects;
