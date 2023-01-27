import React from "react";

const Aboutme = () => {
  return (
    <>
      <section
        id="AboutMe"
        className=" flex flex-col items-center justify-center  h-screen bg-fixed bg-center bg-cover bg-[url('/AboutMeSmall.png')]  md:bg-[url('/AboutMe1.png')]"
      >
        <div className="p-4  mt-6 mx-4 border-2 md:text-center border-white rounded-md">
          <h1 className="text-white text-md">
            Hello, I'm Prathamesh, a third year CS student pursuing Computer
            Engineering , a software developer trying to solve real world
            problems usually working on Web Development and Android Development.
          </h1>
          <br />
          <h1 className="text-md  text-white">
            I am passionate about creating visually appealing and user-friendly
            websites. Also like to explore different technologies.
          </h1>
          <h1 className="text-md text-white">I believe in continous learning and share the same in public.</h1>
          
        </div>
        <a href="https://github.com/prathameshkarambelkar/resume/raw/main/PrathameshKarambelkarResume.pdf">
          <button className="text-white m-4 p-3 hover:scale-125 hover:border-blue-400 border-2 rounded-md">
            Resume
          </button>
        </a>
      </section>
    </>
  );
};

export default Aboutme;
