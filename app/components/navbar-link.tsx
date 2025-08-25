import { Link, useLocation } from "react-router";
import type { LinkProps } from "~/types";
import circleImg from "~/assets/images/cercle.png";
import { classNames } from "~/utils";

export default function NavbarLink({
  link,
  title,
  hideCircle,
  onClick,
  className,
  children,
}: LinkProps) {
  const location = useLocation();

  const getClass = (path: string) => {
    return location.pathname === path ? "underline" : "";
  };

  return (
    <div
      className={classNames(
        "relative group/dropdown p-2",
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
      {link ? (
        <Link
          className={classNames(children && "hidden md:block", getClass(link))}
          to={link}
        >
          {title}
        </Link>
      ) : (
        <span className={classNames(children && "hidden md:block")}>{title}</span>
      )}
      {children && (
        <div className="md:hidden group-hover/dropdown:flex flex-col md:absolute top-0 bg-white w-full border rounded-lg p-1">
          {children}
        </div>
      )}
    </div>
  );
}
