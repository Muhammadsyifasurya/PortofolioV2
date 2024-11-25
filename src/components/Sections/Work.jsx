import React from "react";
import nexcentImg from "/src/assets/img/Nexcent.jpg";
import ekurbtnImg from "/src/assets/img/e-kur-btn.jpg";
import twibbonImg from "/src/assets/img/twibbon.jpg";

const Work = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center pt-[100px] xl:pt-[110px]"
    >
      <div className="h-auto xl:mb-[20px] xl:w-[1000px]">
        <div className="flex items-center justify-center gap-2 xl:gap-7">
          <h2 className="text-xl font-bold xl:text-3xl">
            Some Things I've Built
          </h2>
          <h2 className="h-1 w-[120px] border-b-[1px] border-[#233554] xl:w-[350px]"></h2>
        </div>

        <div className="flex flex-col items-center pt-10 xl:flex-row xl:pt-16">
          <img
            src={nexcentImg}
            alt="screenshot Nexcent"
            className="h-40 w-[300px] object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0 xl:h-80 xl:w-auto"
          />
          <div className="flex flex-col items-center pt-4 xl:ml-[100px] xl:items-end xl:pt-0">
            <h1>Featured Project</h1>
            <h2 className="text-2xl font-bold xl:w-[225px] xl:text-right">
              Nexcent
            </h2>
            <p className="absolute mt-[75px] bg-[#112240] px-8 py-6 text-justify xl:w-[550px] xl:text-right">
              Uses semantic HTML and modern CSS for a responsive, interactive
              design. It features a mobile-friendly layout with Flexbox and Grid
              for flexibility, ensuring smooth navigation and accessibility.
            </p>
            <ul className="flex w-screen justify-around pt-[200px] text-[13px] text-[#ccd6f6] xl:w-[350px] xl:justify-between xl:pt-[180px]">
              <li>VS Code</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <ul className="flex h-10 gap-6 pt-5">
              <li>
                <a
                  href="https://github.com/Muhammadsyifasurya/Nexcent.git"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my GitHub profile"
                >
                  <i className="fab fa-github text-[25px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://muhammadsyifasurya.github.io/Nexcent/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my live website"
                >
                  <i className="fas fa-external-link-alt text-[23px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center pt-24 xl:w-[1075px] xl:flex-row-reverse">
          <img
            src={ekurbtnImg}
            alt=""
            className="h-40 w-[300px] object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0 xl:h-80 xl:w-auto"
          />
          <div className="flex flex-col items-center pt-4 xl:mr-[100px] xl:items-start xl:pt-0">
            <h1>Featured Project</h1>
            <h2 className="text-2xl font-bold xl:w-[225px] xl:text-start">
              E-KUR BANK BTN
            </h2>
            <p className="absolute mt-[75px] bg-[#112240] px-8 py-6 text-justify xl:w-[550px] xl:text-left">
              Uses semantic HTML and responsive CSS to provide a user-friendly
              interface for applying for KUR loans. The design is
              mobile-friendly, utilizing Flexbox and Grid for layout
              flexibility, ensuring easy navigation through loan applications,
              simulations, and information.
            </p>
            <ul className="flex w-screen justify-around pt-[237px] text-[13px] text-[#ccd6f6] xl:w-[350px] xl:justify-between xl:pt-[205px]">
              <li>VS Code</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Firebase</li>
            </ul>
            <ul className="flex h-10 gap-6 pt-5">
              <li>
                <a
                  href="https://github.com/Muhammadsyifasurya/e-kur.btn.co.id.git"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my GitHub profile"
                >
                  <i className="fab fa-github text-[25px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://muhammadsyifasurya.github.io/e-kur.btn.co.id/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my live website"
                >
                  <i className="fas fa-external-link-alt text-[23px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center pb-5 pt-24 xl:flex-row">
          <img
            src={twibbonImg}
            alt="screenshot Nexcent"
            className="h-40 w-[300px] object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0 xl:h-80 xl:w-auto"
          />
          <div className="flex flex-col items-center pt-4 xl:ml-[100px] xl:items-end xl:pt-0">
            <h1>Featured Project</h1>
            <h2 className="w-[225px] text-center text-2xl font-bold xl:text-right">
              Twibbon Maker
            </h2>
            <p className="absolute mt-[75px] bg-[#112240] px-8 py-6 text-justify xl:w-[550px] xl:text-right">
              The Twibbon Maker website allows users to create custom Twibbons
              for social media by uploading images and adjusting them to fit
              templates. The site offers a simple, responsive design using
              Flexbox and Grid for layout, ensuring ease of use on both mobile
              and desktop devices.
            </p>
            <ul className="flex w-screen justify-around pt-[250px] text-[13px] text-[#ccd6f6] xl:w-[350px] xl:justify-between xl:pt-[205px]">
              <li>VS Code</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
            <ul className="flex h-10 gap-6 pr-5 pt-5 xl:pr-0">
              <li>
                <a
                  href="https://github.com/Muhammadsyifasurya/Twibbon.git"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my github profile"
                >
                  <i className="fab fa-github text-[25px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://muhammadsyifasurya.github.io/Twibbon/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit my live website"
                >
                  <i className="fas fa-external-link-alt text-[23px] text-white transition-all duration-300 hover:text-[#64ffda]"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
