import React from "react";

const Skills = () => {
  return (
    <>
      <section
        id="Skills"
        className="container flex flex-col justify-center items-center h-screen m-auto  bg-fixed bg-center bg-cover bg-[url('/SkillsSmall.png')] lg:bg-[url('/Skills.png')] md:bg-[url('/Skills.png')] "
      >
        <div className="border-2 rounded-md  border-blue-500 md:w-1/2 md:md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <h1 className="text-md">
            <span className="font-bold text-[#111827] ">Web: </span>
            Html, CSS, JavaScript, Node, ReactJs, TailwindCSS
          </h1>
        </div>
        <div className="border-2 border-blue-500 rounded-md w-1/2 md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <h1 className="text-md">
            <span className="font-bold text-[#111827]">Mobile: </span>
            Android(Kotlin)
          </h1>
        </div>
        <div className="border-2 border-blue-500 rounded-md w-1/2 md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <h1 className="text-md">
            <span className="font-bold text-[#111827]">Languages: </span>
            C, C++, Java, Kotlin
          </h1>
        </div>
        <div className="border-2 border-blue-500 rounded-md w-1/2 md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <h1 className="text-md">
            <span className="font-bold text-[#111827]">Database: </span>Firebase, Mongodb
          </h1>
        </div>
        <div className="border-2 border-blue-500 rounded-md w-1/2 md:p-6 p-4 m-3 md:text-xl hover:border-2 hover:border-blue-500">
          <h1 className="text-md">
            <span className="font-bold text-[#111827]">Tools: </span>Git, Figma
          </h1>
        </div>
      </section>
    </>
  );
};

export default Skills;
