import { Link } from "react-router";
import type { LinkProps } from "~/types";

export default function ContactLink({ link, title, icon }: LinkProps) {
  return (
    <div className="flex gap-2 items-center">
      {icon && <img className="w-6" src={icon} alt={title} />}
      {link && (
        <Link target="_blank" to={link}>
          {title}
        </Link>
      )}
    </div>
  );
}
