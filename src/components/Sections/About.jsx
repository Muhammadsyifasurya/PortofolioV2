import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center">
      <div className="flex flex-col xl:py-28">
        <div className="flex items-center justify-center gap-4 xl:justify-start xl:gap-7">
          <h2 className="text-2xl font-bold xl:text-3xl">About Me</h2>
          <h2 className="h-1 w-[200px] border-b-[1px] border-[#233554] xl:w-[350px]"></h2>
        </div>
        <div className="flex flex-col-reverse items-center pt-14 xl:flex-row xl:items-start xl:gap-20 xl:pt-14">
          <div className="px-4 pt-6 xl:pt-0">
            <p className="max-w-xl text-justify xl:text-left">
              Hello! My name is Muhammad Syifa Surya Saputra, and I am
              passionate about creating impactful web experiences. My journey in
              web development began with an interest in front-end technologies,
              where I honed my skills in HTML, CSS, and JavaScript to build user
              friendly applications.
              <br />
              <br />
              Currently, I specialize in developing accessible and inclusive
              digital solutions that prioritize user experience. I have had the
              opportunity to work with various clients, focusing on delivering
              high-quality products that meet their needs.
              <br />
              <br />
              In addition to my development work, I am committed to continuous
              learning and recently explored the integration of APIs to enhance
              web applications.
            </p>
          </div>
          <div className="profile">
            <img
              src="/src/assets/img/profil.webp"
              alt="Photo Profile"
              className="h-64 w-64 rounded-full bg-[#0a192f] object-cover"
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center py-20">
          <h2 className="mb-8 text-3xl xl:mb-12 xl:text-4xl">
            What Can I Do ?
          </h2>
          <div className="grid max-w-5xl grid-cols-4 gap-2 p-4 xl:gap-9">
            <div className="skill-img col-span-2 row-span-1 flex items-center justify-center gap-3 bg-white xl:gap-5">
              <img
                src="/src/assets/img/skills/html.webp"
                alt="icon html"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
              <h1 className="bg-white text-3xl font-bold xl:text-4xl">HTML</h1>
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/css.webp"
                alt="icon css"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/javascript.webp"
                alt="icon JavaScript"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/java.webp"
                alt="icon Java"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img col-span-2 row-span-1 flex items-center justify-center gap-2 xl:gap-5">
              <img
                src="/src/assets/img/skills/react.webp"
                alt="icon React"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
              <h1 className="bg-white text-3xl font-bold xl:text-4xl">REACT</h1>
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/nextjs.webp"
                alt="icon nextJs"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/github1.webp"
                alt="icon GitHub"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img flex justify-center">
              <img
                src="/src/assets/img/skills/firebase.webp"
                alt="icon Firebase"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
            </div>
            <div className="skill-img col-span-2 row-span-1 flex items-center justify-center gap-1 xl:gap-4">
              <img
                src="/src/assets/img/skills/tailwind.webp"
                alt="icon Tailwind"
                className="w[50px] h-[50px] bg-white object-contain xl:h-[100px] xl:w-[100px]"
              />
              <h1 className="bg-white text-2xl font-bold xl:text-4xl">
                TAILWIND
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
