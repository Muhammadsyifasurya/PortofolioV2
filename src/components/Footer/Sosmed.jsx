import React from "react";
import "./Sosmed.css";

const Sosmed = () => {
  return (
    <aside className="flex xl:fixed xl:bottom-32 xl:left-0 xl:mb-32 xl:block xl:w-32 xl:rotate-90">
      <ul className="flex w-screen items-center justify-center gap-6 text-[#ccd6f6] xl:mt-0 xl:w-full xl:justify-start xl:gap-7">
        <li className="list">
          <a
            href="https://github.com/muhammadsyifasurya"
            target="_blank"
            rel="noopener"
            className="text-2xl"
            aria-label="Visit my GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.linkedin.com/in/muhammadsyifasuryasaputra/"
            target="_blank"
            rel="noopener"
            className="text-2xl"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.instagram.com/muhammadsyifasurya/"
            target="_blank"
            rel="noopener"
            className="text-2xl"
            aria-label="Visit my Instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.facebook.com/radenmanggalaa"
            target="_blank"
            rel="noopener"
            className="text-2xl"
            aria-label="Visit my Facebook profile"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="list">
          <a
            href="https://www.tiktok.com/@radenmanggala_"
            target="_blank"
            rel="noopener"
            className="text-2xl"
            aria-label="Visit my TikTok profile"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </li>
        <li className="hidden xl:block">
          <h2 className="hidden h-1 xl:block xl:w-64 xl:border-b-[1px] xl:border-[#8892b0]"></h2>
        </li>
      </ul>
    </aside>
  );
};

export default Sosmed;
