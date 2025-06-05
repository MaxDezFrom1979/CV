import ContactLink from "~/components/contact-link";
import type { ContactProps } from "~/types";
import type React from "react";
import linkedInIcon from "~/assets/images/icons/linkedin.png";
import emailIcon from "~/assets/images/icons/email.png";
import githubIcon from "~/assets/images/icons/github.png";

export default function Contact({
  close,
}: ContactProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative z-100">
      <div
        onClick={close}
        className="fixed h-screen w-screen inset-0 bg-black opacity-50"
      ></div>
      <div className="fixed inset-0 z-100 flex justify-center items-center h-screen w-screen">
        <div className="relative flex flex-col items-center text-xl w-[40vw] h-[40vh] rounded-lg bg-white pt-2">
          <h2 className="text-3xl font-bold">Me rejoindre</h2>
          <span className="bg-black h-[1px] my-1 rounded-md w-[60%]" />
          <button onClick={close} className="absolute right-4 cursor-pointer">
            X
          </button>
          <div className="flex flex-col items-center underline mt-4">
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
              link="mailto:maximilien.desilets@gmail.com"
              title="Envoyez-moi un courriel"
              icon={emailIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
