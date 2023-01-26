import React from "react";
import Project from "./Project";

export const Projects = () => {
  return (
    <>
      <section
        id="Projects"
        className="lg:flex-row sm:flex p-2  sm:flex-col sm:items-center sm:justify-center  sm:m-auto min-h-screen  bg-fixed bg-center bg-cover md:bg-[url('/Projects.png')]  bg-[url('/ProjectsSmall.png')] "
      >
        <Project
          image={"/torna_Project2.png"}
          name={"Torna Mutton"}
          description={
            "Freelance Project done using Next.js and Tailwind CSS. The website was designed from scratch and built moblie-first as per client requirement. "
          }
          technology={["Next.js", "Tailwind Css"]}
          githubLink={""}
          liveLink={"https://torna-mutton.vercel.app/"}
        />
        <Project
          image={"/nirwana_Project.png"}
          name={"Nirwana Resort"}
          description={
            "Freelance Project done using Next.js and Tailwind CSS. THe design of the website was given by client in figma. The website was created mobile-first as per requirement. "
          }
          technology={["Next.js", "Tailwind Css"]}
          githubLink={""}
          liveLink={"https://nirwana-resort.vercel.app/"}
        />
        <Project
          image={"/portfolio-website.png"}
          name={"Portfolio Website"}
          description={
            "Designed and buils my own porfolio website using React.js and Tailwind CSS. Implemented parallex effects. "
          }
          technology={["Next.js", "Tailwind Css"]}
          githubLink={"https://github.com/prathameshkarambelkar/my-portfolio-website"}
          liveLink={"https://prathameshk.netlify.app/"}
        />
        <Project
          image={"/college-forum.png"}
          name={"College Forum"}
          description={
            "A Forum for College Students and Teachers to Solve Coding Related Doubts or Errors • Students can ask doubts on this forum, and Teachers or Students can help solve the doubt.Created the frontend of the app using xml • Used mvvm architecture "
          }
          technology={["Next.js", "Tailwind Css"]}
          githubLink={"https://github.com/prathameshkarambelkar/College-Forum"}
          liveLink={"#"}
        />
        <Project
          image={"/lookItUp.jpg"}
          name={"LookItUp"}
          description={
            "Students and working professionals can find roommates of their choice with this android application based on the location in which they are moving. Designed and created the frontend of the app.  Implemented Firebase Firestore to save user data. "
          }
          technology={["Next.js", "Tailwind Css"]}
          githubLink={"https://github.com/prathameshkarambelkar/lookitup"}
          liveLink={"#"}
        />
      </section>
    </>
  );
};

export default Projects;
