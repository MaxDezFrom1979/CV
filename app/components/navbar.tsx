import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-[20vh] bg-white fixed top-0 start-0 p-4 w-full text-xl">
      <div className="flex items-center justify-between">
        <div className="text-2xl">
          <Link to="/">Maximilien Désilets</Link>
        </div>
        <div className="flex justify-evenly gap-2">
          <Link to="/experiences">Expériences</Link>
          <Link to="/about">À propos</Link>
        </div>
      </div>
    </nav>
  );
}
