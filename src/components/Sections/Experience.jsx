import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center">
      <div className="h-auto xl:pt-[120px]">
        <div className="flex items-center justify-center gap-3 xl:justify-start xl:gap-7">
          <h2 className="text-xl font-bold xl:text-3xl">
            What I've Experience
          </h2>
          <h2 className="h-1 w-[120px] border-b-[1px] border-[#233554] xl:w-[350px]"></h2>
        </div>
        <div className="flex h-[540px] w-screen flex-col pt-2 xl:h-[500px] xl:w-[1000px] xl:flex-row xl:gap-10 xl:pt-14">
          <div className="scrollbar-hide overflow-x-auto">
            <div className="flex w-max flex-row xl:flex-col">
              <label
                className="w-max cursor-pointer border-l-[2px] border-[#233554] p-4 text-[#8892b0] transition-all duration-500 ease-in-out hover:border-[#64ffda] hover:bg-[#112240] hover:text-[#64ffda]"
                htmlFor="option1"
              >
                RevoU
              </label>
              <label
                className="w-max cursor-pointer border-l-[2px] border-[#233554] p-4 text-[#8892b0] transition-all duration-500 ease-in-out hover:border-[#64ffda] hover:bg-[#112240] hover:text-[#64ffda]"
                htmlFor="option2"
              >
                PT Reska Multi Usaha (KAI Service)
              </label>
              <label
                className="cursor-pointer border-l-[2px] border-[#233554] p-4 text-[#8892b0] transition-all duration-500 ease-in-out hover:border-[#64ffda] hover:bg-[#112240] hover:text-[#64ffda]"
                htmlFor="option3"
              >
                PT Neura Integrasi Solusi
              </label>
            </div>
          </div>

          <input type="radio" id="option1" name="option" />
          <input type="radio" id="option2" name="option" />
          <input type="radio" id="option3" name="option" />

          <div className="text1 h-60 p-4 xl:w-[650px]">
            <h2>Software Engineer Bootcamp</h2>
            <p>Oktober 2024 - Present</p>
            <ul className="list-disc pl-4 pt-6 text-[#8892b0]">
              <li>
                Learning and Applying Software Engineering Principles: Mastering
                HTML, CSS, JavaScript, and repository management with GitHub in
                software development.
              </li>
              <li>
                Developing Responsive Web Projects and Portfolios: Building web
                applications and portfolio websites using responsive design
                principles and accessibility.
              </li>
              <li>
                Using Git and GitHub for version control and team collaboration
                on group projects.
              </li>
              <li>
                Achieving Optimal Scores on Google Chrome Lighthouse and
                Mastering Tailwind CSS: Earning 100 points for performance,
                accessibility, best practices, and SEO, and improving design
                efficiency with Tailwind CSS.
              </li>
            </ul>
          </div>
          <div className="text2 hidden h-60 p-4 xl:w-[650px]">
            <h2>Staff Purchasing</h2>
            <p>November 2023 - Mei 2024</p>
            <ul className="list-disc pl-4 pt-6 text-[#8892b0]">
              <li>
                Integrating various IT systems to ensure efficient procurement
                workflows and consistent data.
              </li>
              <li>
                Ensuring procurement data is accurate and synchronized with the
                company's SAP Hana system.
              </li>
              <li>
                Assisting with software and hardware installations, such as
                setting up printer sharing and troubleshooting printer issues.
              </li>
              <li>
                Providing technical support and helping other units complete
                SAP-related tasks.
              </li>
              <li>
                Developing a simple web application to facilitate PO number
                tracking and create order lists.
              </li>
            </ul>
          </div>
          <div className="text3 hidden h-60 p-4 xl:w-[650px]">
            <h2>Android Developer Intern</h2>
            <p>Juli 2020 - Desember 2020</p>
            <ul className="list-disc pl-4 pt-6 text-[#8892b0]">
              <li>
                Assisting with syntax cleanup on the NeurabotSSI application.
              </li>
              <li>
                Being taught how to develop Android applications using Android
                Studio and Java programming language.
              </li>
              <li>
                Creating a mini project that implements fragments, RecyclerView,
                and API integration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
