import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 start-0 p-4 w-full text-xl z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl">
          <Link to="/">Maximilien Désilets</Link>
        </div>
        <div className="flex justify-evenly gap-2">
          <Link to="/experiences">Expériences</Link>
          <Link to="/about">Bénévolat</Link>
          <Link to="/about">Contactez-moi</Link>
        </div>
      </div>
    </nav>
  );
}
