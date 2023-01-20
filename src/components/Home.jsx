import React from "react";

export const Home = () => {
  return (
    <>
      <section
        id="Home"
        class="container  flex flex-col items-center  h-screen m-auto  bg-fixed bg-center bg-cover bg-[url('/src/assets/HomeSmall.png')] lg:bg-[url('/src/assets/Home.png')] md:bg-[url('/src/assets/Home.png')] "
      >
        <img
          className="rounded-full border-2 hover:border-green-600 border-black mt-28 items-center "
          alt="Profile Pic"
          width={200}
          height={200}
          src="/src/assets/developer_male.jpg"
        />
        <div class="writer inline-block">
            <div class="writer-text mt-4  flex overflow-hidden border-r-4 text-black ">
              <h1 className="text-center text-md">Hello 👋🏻, I'm Prathamesh,</h1>
            </div>
          </div>
          <p className=" text-black text-2xl text-center font-poppins font-monofont-bold">
            Android & Front-end Web Developer
          </p>
      </section>
    </>
  );
};
