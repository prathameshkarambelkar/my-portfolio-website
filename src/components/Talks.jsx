import React from "react";

const Talks = () => {
  return (
    <>
      <section
        id="Talks"
        className=" flex h-screen justify-center items-center   bg-fixed bg-center bg-cover bg-[url('/TalksSmall.png')] lg:bg-[url('/Talks.png')] md:bg-[url('/Talks.png')] "
      >
        <div className="md:flex md:flex-row flex flex-col lg:ml-4  items-center justify-center">
          <img
            width={300}
            height={200}
            className="border-2  border-black rounded-md"
            src="/Android-Workshop.jpeg"
          />
          <div className=" flex flex-col items-center p-2 my-2 justify-center">
            <h1 className="text-center text-2xl p-2 ">Android 101</h1>
            <p className="text-left p-2 m-2">
              Took a workshop on Android App Development in college which was
              attended by over 40 students. Introduced them to Android App
              Development, Basics of kotlin and gave them short tour of Android
              Studio. Also created a simple Number Guessing Game to demonstrate
              how to build apps.
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/PrathameshK_69/status/1579883144739622912?s=20&t=ZbO33qBvd4YqdSeCLSTJsg"
                className="text-bold text-blue-500"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Talks;
