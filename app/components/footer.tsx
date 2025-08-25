import NavbarLink from "./navbar-link";

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <span className="bg-black h-[1px] my-1 rounded-md w-[80%]" />
      <div className="flex text-2xl py-8 justify-center">
        <NavbarLink className="w-30" title="Accueil" link="/" />
        <NavbarLink className="w-30" title="Expériences" link="/experiences" />
        <NavbarLink className="w-30" title="Bénévolat" link="/benevolat" />
      </div>
    </div>
  );
}
