import React from "react";

const Aboutme = () => {
  return (
    <>
      <header class="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('/src/assets/AboutMeSmall.png')]  md:bg-[url('/src/assets/AboutMe1.png')]">
        <img
          className="rounded-full"
          alt="Profile Pic"
          width={200}
          height={200}
          src="/src/assets/ProfilePic.jpeg"
        />
        <div class="writer inline-block">
          <div class="writer-text mt-4  flex overflow-hidden border-r-4 text-white ">
            <h1 className="text-center text-md">Hello 👋🏻, I'm Prathamesh,</h1>
          </div>
        </div>  

        <p className=" text-white text-2xl text-center font-poppins font-monofont-bold">
          Android & Front-end Web Developer
        </p>
      </header>
      <div />
    </>
  );
};

export default Aboutme;
