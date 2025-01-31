import { Link } from "react-router-dom";

interface itemI {
  label: string;
  to: string;
}
export interface NavProps {
  items: itemI[];
}
export const Nav = ({ items }: NavProps) => {
  return (
    <nav>
      <ul className="flex gap-5 text-white">
        {items.map((item) => (
          <li
            key={item.label}
            className="group relative cursor-pointer text-sm transition-all duration-200"
          >
            <Link to={item.to}>
              {item.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
