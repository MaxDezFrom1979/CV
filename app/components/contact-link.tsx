import { Link } from "react-router";
import type { LinkProps } from "~/types";
import newTabIcon from "~/assets/images/icons/link.png";

export default function ContactLink({ link, title, icon, onClick }: LinkProps) {
  return (
    <div className="flex gap-2 items-center underline" onClick={onClick}>
      {icon && <img className="w-6" src={icon} alt={title} />}
      {link ? (
        <Link
          className="flex flex-row items-center gap-1"
          target="_blank"
          to={link}
        >
          {title}
          <img
            className="size-4"
            src={newTabIcon}
            alt="Ouvrir dans un nouvel onglet"
          />
        </Link>
      ) : (
        <span className="cursor-pointer">{title}</span>
      )}
    </div>
  );
}
