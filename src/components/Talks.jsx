import React from "react";

const Talks = () => {
  return (
    <>
      <section
        id="Talks"
        className=" flex h-screen justify-center items-center   bg-fixed bg-center bg-cover bg-[url('/TalksSmall.png')] lg:bg-[url('/Talks.png')] md:bg-[url('/Talks.png')] "
      >
        {/* <div className=" flex flex-col  items-center justify-center">
          <img
            width={300}
            height={200}
            className="border-2 border-black rounded-md"
            src="/developer_male.jpg"
          />
          <div className=" flex flex-col items-center p-2 my-2 justify-center">
            <h1 className="text-center text-2xl p-2 ">Android 101</h1>
            <p className="text-left p-2 m-2">
              Took a workshop on Android App Development in college which was
              attended by over 40 students. Introduced them to Android App
              Development, basics of kotlin and gave them short tour of Android
              Studio. Also created a simple Number Guessing game to demonstrate
              how to build apps
            </p>
          </div>
        </div> */}
        <div className="md:flex md:flex-row flex flex-col  items-center justify-center">
          <img
            width={300}
            height={200}
            className="border-2  border-black rounded-md"
            src="/developer_male.jpg"
          />
          <div className=" flex flex-col items-center p-2 my-2 justify-center">
            <h1 className="text-center text-2xl p-2 ">Android 101</h1>
            <p className="text-left p-2 m-2">
              Took a workshop on Android App Development in college which was
              attended by over 40 students. Introduced them to Android App
              Development, basics of kotlin and gave them short tour of Android
              Studio. Also created a simple Number Guessing game to demonstrate
              how to build apps
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Talks;
