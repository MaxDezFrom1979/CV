import { Link } from "react-router";
import type { LinkProps } from "~/types";

export default function ContactLink({ link, title, icon, onClick }: LinkProps) {
  return (
    <div className="flex gap-2 items-center underline" onClick={onClick}>
      {icon && <img className="w-6" src={icon} alt={title} />}
      {link ? (
        <Link target="_blank" to={link}>
          {title}
        </Link>
      ) : (
        <span className="cursor-pointer">{title}</span>
      )}
    </div>
  );
}
