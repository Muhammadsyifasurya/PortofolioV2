import React from "react";

const Email = () => {
  return (
    <aside class="fixed bottom-32 right-0 mb-32 hidden w-32 rotate-90 xl:block">
      <ul class="flex items-center gap-5">
        <li class="transform font-mono text-[#ccd6f6] transition-all duration-300 hover:-translate-x-1 hover:text-[#64ffda]">
          <a
            href="mailto:syifamuhamamd3139@gmail.com"
            class="text-base"
            target="_blank"
            rel="noopener"
          >
            syifamuhamamd3139@gmail.com
          </a>
        </li>
        <li>
          <h2 class="h-1 w-64 border-b-[1px] border-[#8892b0]"></h2>
        </li>
      </ul>
    </aside>
  );
};

export default Email;
