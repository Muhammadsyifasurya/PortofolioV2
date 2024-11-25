import React from "react";
import Button from "../Button";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center py-[110px]">
      <h1>What's Next ?</h1>
      <h2 className="text-3xl font-bold xl:pt-4 xl:text-5xl">Get In Touch</h2>
      <p className="px-3 pb-6 pt-4 text-center xl:w-[590px]">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button btnText="Say Hello" />
    </section>
  );
};

export default Contact;
