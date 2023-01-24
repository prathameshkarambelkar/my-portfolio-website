import React from "react";
import Talk from "./Talk";

const Talks = () => {
  return (
    <>
      <section
        id="Talks"
        className=" flex flex-col  justify-center items-center   bg-fixed bg-center bg-cover bg-[url('/TalksSmall.png')] lg:bg-[url('/Talks.png')] md:bg-[url('/Talks.png')] "
      >
        <Talk
          img={"/Android-Workshop.jpeg"}
          title={"Android -101"}
          link={
            "https://twitter.com/PrathameshK_69/status/1579883144739622912?s=20&t=Op4E3Rxws2fdK30lIk1x4A"
          }
          description={
            "Took a workshop on Android App Development in college which was attended by over 40 students. Introduced them to Android App Development, Basics of kotlin and gave them short tour of Android    Studio. Also created a simple Number Guessing Game to demonstrate how to build apps. "
          }
        />


      </section>
    </>
  );
};

export default Talks;
