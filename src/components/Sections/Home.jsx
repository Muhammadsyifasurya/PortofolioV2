import React from "react";
import Button from "../Button";

const Home = () => {
  return (
    <section className="flex justify-center">
      <div className="mx-5 flex h-screen flex-col justify-center xl:h-screen xl:max-w-6xl">
        <h1 className="mb-4 text-xl text-[#64ffda] xl:mb-9 xl:text-lg xl:font-semibold">
          Hi, my name is
        </h1>
        <h2 className="mb-3 text-3xl font-bold text-[#ccd6f6] xl:mb-5 xl:text-7xl">
          Muhammad Syifa Surya Saputra.
        </h2>
        <h3 className="mb-10 text-2xl font-bold text-[#8892b0] xl:mb-9 xl:text-7xl">
          Your Vision, My Execution.
        </h3>
        <p className="mb-10 text-justify text-[#8892b0] xl:max-w-xl xl:text-left xl:text-lg">
          I am a front-end web developer dedicated to accessibility and
          user-centered design. Proficient in HTML, CSS, and JavaScript, I aim
          to convert innovative ideas into effective web applications. I am
          currently advancing my software engineering skills to enhance user
          experience.
        </p>
        <Button btnText="Check out my cours!" />
      </div>
    </section>
  );
};

export default Home;
