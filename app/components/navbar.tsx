import { useState } from "react";
import Contact from "~/components/contact";
import NavbarLink from "./navbar-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 start-0 w-full text-xl z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl">
          <NavbarLink className="w-30" title="Maximilien D." link="/" />
        </div>
        <div className="flex justify-evenly items-center">
          <NavbarLink
            className="w-30"
            title="Expériences"
            link="/experiences"
          />
          <NavbarLink className="w-30" title="Bénévolat" link="/benevolat" />
          <NavbarLink
            className="cursor-pointer w-30"
            onClick={() => {
              setOpen(true);
            }}
            title="Me rejoindre"
          />
          <NavbarLink
            className="cursor-pointer w-30"
            title="Mon CV"
            onClick={() => {
              window.open(
                "/app/assets/CV_Maximilien_Desilets_2025.pdf",
                "_blank"
              );
            }}
          />
        </div>
      </div>

      {open && <Contact close={() => setOpen(false)} />}
    </nav>
  );
}
