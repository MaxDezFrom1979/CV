import { Link, useLocation } from "react-router";
import type { LinkProps } from "~/types";
import circleImg from "~/assets/images/cercle.png";
import { classNames } from "~/utils";

export default function NavbarLink({
  link,
  title,
  onClick,
  className,
}: LinkProps & React.HTMLAttributes<HTMLDivElement>) {
  const location = useLocation();

  const getClass = (path: string) => {
    return location.pathname === path ? "underline" : "";
  };

  return (
    <div
      className={classNames("relative group p-2", className)}
      onClick={onClick}
    >
      <img
        src={circleImg}
        alt="Cercle"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
      />
      {link ? (
        <Link className={getClass(link)} to={link}>
          {title}
        </Link>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
}
