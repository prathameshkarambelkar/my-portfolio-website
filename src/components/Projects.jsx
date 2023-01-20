import React from 'react'
import Project from './Project'

export const Projects = () => {
  return (
    <>
        <section
          id="Projects"
          className="lg:flex-row sm:flex p-2  sm:flex-col sm:items-center sm:justify-center  sm:m-auto  bg-fixed bg-center bg-cover md:bg-[url('/src/assets/Projects.png')]  bg-[url('/src/assets/ProjectsSmall.png')] "
        >

          <Project
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          <Project
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          <Project
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          
        </section>
    </>
  )
}

export default Projects