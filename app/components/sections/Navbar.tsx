import { NavLink } from "../atoms/NavLink";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/70 px-6 py-5 backdrop-blur lg:px-20">
      <h1 className="text-2xl font-black tracking-tight">ggnika1337</h1>

      <ul className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
