import { useState } from "react";
import { Link } from "react-router-dom";

interface itemI {
  label: string;
  to: string;
}
export interface NavProps {
  items: itemI[];
}

export const Nav = ({ items }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-black p-4 text-white">
      {/* Hamburger Icon */}
      <div
        className="block cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-1.5">
          <span className="block h-[3px] w-6 bg-white"></span>
          <span className="block h-[3px] w-6 bg-white"></span>
          <span className="block h-[3px] w-6 bg-white"></span>
        </div>
      </div>

      {/* Menu */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 z-10 w-[100px] flex-col bg-black md:static md:flex md:flex-row md:items-center md:gap-5`}
      >
        {items.map((item) => (
          <li
            key={item.label}
            className="group relative cursor-pointer p-4 text-sm transition-all duration-200 md:p-0"
          >
            <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
