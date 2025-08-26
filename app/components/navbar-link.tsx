import { Link, useLocation } from "react-router";
import type { LinkProps } from "~/types";
import circleImg from "~/assets/images/cercle.png";
import { classNames } from "~/utils";
import newTabIcon from "~/assets/images/icons/link.png";

export default function NavbarLink({
  link,
  title,
  hideCircle,
  onClick,
  className,
  children,
  newTab,
}: LinkProps) {
  const location = useLocation();

  const getClass = (path: string) => {
    return location.pathname === path ? "underline" : "";
  };

  return (
    <div
      className={classNames(
        "relative group/dropdown p-1 md:p-2",
        link && "group",
        className
      )}
      onClick={onClick}
    >
      {!hideCircle && (
        <img
          src={circleImg}
          alt="Cercle"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
        />
      )}
      <div className="flex flex-row items-center justify-center gap-1">
        {link ? (
          <Link
            className={classNames(
              "flex-1",
              children && "hidden md:block",
              getClass(link)
            )}
            to={link}
          >
            {title}
          </Link>
        ) : (
          <span className={classNames(children && "hidden md:block")}>
            {title}
          </span>
        )}
        {newTab && (
          <img
            className="size-4"
            src={newTabIcon}
            alt="Ouvrir dans un nouvel onglet"
          />
        )}
      </div>
      {children && (
        <div className="relative md:hidden group-hover/dropdown:flex flex-col md:absolute md:top-[44px] bg-white w-full md:border border-t-transparent border-gray-300 rounded-b-lg md:p-1">
          <div className="absolute bg-white h-[2px] w-30 -top-[1px] -left-[1px]"></div>
          {children}
        </div>
      )}
    </div>
  );
}
