import ContactLink from "~/components/contact-link";
import type { ContactProps } from "~/types";
import type React from "react";
import { motion } from "framer-motion";
import linkedInIcon from "~/assets/images/icons/linkedin.png";
import emailIcon from "~/assets/images/icons/email.png";
import githubIcon from "~/assets/images/icons/github.png";
import dance1Gif from "~/assets/gifs/dance1.gif";
import { useState } from "react";

export default function Contact({
  close,
}: ContactProps & React.HTMLAttributes<HTMLDivElement>) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative z-100">
      <div
        onClick={close}
        className="fixed h-screen w-screen inset-0 bg-black opacity-50"
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="fixed inset-0 z-100 flex justify-center items-center h-screen w-screen">
          <div className="relative flex flex-col items-center text-xl w-[40vw] h-[40vh] rounded-lg bg-white pt-2">
            <h2 className="text-3xl font-bold">Me rejoindre</h2>
            <span className="bg-black h-[1px] my-1 rounded-md w-full" />
            <button onClick={close} className="absolute right-4 cursor-pointer">
              X
            </button>
            <div className="flex">
              <img
                className="w-[200px] -scale-x-100 hidden lg:block"
                src={dance1Gif}
                alt="Dance"
              />
              <div className="flex flex-col items-center mt-4">
                <ContactLink
                  link="https://www.linkedin.com/in/maximilien-désilets/"
                  title="LinkedIn"
                  icon={linkedInIcon}
                />
                <ContactLink
                  link="https://github.com/MaxDezFrom1979"
                  title="Github"
                  icon={githubIcon}
                />
                <br />
                <ContactLink
                  title="Mon courriel"
                  icon={emailIcon}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "maximilien.desilets@gmail.com"
                    );
                    setClicked(true);
                  }}
                />
                {clicked && (
                  <span className="no-underline">
                    Courriel copié dans le presse-papiers !
                  </span>
                )}
              </div>
              <img
                className="w-[200px] hidden xl:block"
                src={dance1Gif}
                alt="Dance"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
