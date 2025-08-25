import { useState } from "react";
import Contact from "~/components/contact";
import NavbarLink from "./navbar-link";
import menuImg from "~/assets/images/icons/menu.png";
import closeImg from "~/assets/images/icons/close.png";
import { isMobile } from "~/utils";

export default function Navbar() {
  const [open, setOpen] = useState(!isMobile());
  const [openContact, setOpenContact] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 start-0 w-full text-xl z-50 transition-all duration-500 ease-in-out">
      {!open ? (
        <img
          className="md:hidden absolute left-4 top-4"
          src={menuImg}
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          className="md:hidden absolute left-4 top-4"
          src={closeImg}
          onClick={() => setOpen(false)}
        />
      )}

      {(!isMobile() || open) && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl">
            <NavbarLink
              className="w-30"
              title="Maximilien D."
              link="/"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <NavbarLink className="w-30" title="Expériences" hideCircle>
              <NavbarLink
                title="Travail"
                link="/experiences"
                onClick={() => setOpen(false)}
              />
              <NavbarLink
                title="Bénévolat"
                link="/benevolat"
                onClick={() => setOpen(false)}
              />
            </NavbarLink>
            <NavbarLink
              className="cursor-pointer w-30"
              onClick={() => {
                setOpenContact(true);
              }}
              title="Me rejoindre"
            />
            <NavbarLink
              className="cursor-pointer w-30"
              title="Mon CV"
              onClick={() => {
                window.open("/CV_Maximilien_Desilets_2025.pdf", "_blank");
              }}
            />
          </div>
        </div>
      )}

      {openContact && <Contact close={() => setOpenContact(false)} />}
    </nav>
  );
}
