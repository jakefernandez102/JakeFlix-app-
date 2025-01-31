import { useNavigate } from "react-router-dom";
import { FaBell, FaSistrix } from "react-icons/fa6";
import { useState } from "react";
import { Nav } from "../Nav/Nav";
import { Input } from "../../atoms";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "TV Shows",
    to: "/tv-shows",
  },
  {
    label: "Movies",
    to: "/movies",
  },
  {
    label: "New & Popular",
    to: "/new-and-popular",
  },
  {
    label: "My List",
    to: "/my-list",
  },
];

export const Header = () => {
  const [searchInputClicked, setSearchInputClicked] = useState<boolean>(false);
  const [profile] = useState<Record<string, string>>(
    JSON.parse(localStorage.getItem("profile") ?? "{}"),
  );
  const navigate = useNavigate();
  return (
    <div className="flex max-h-[4.2rem] justify-between px-20">
      <div
        className="flex w-full items-center gap-2"
        onClick={() => navigate("/home")}
      >
        <img
          src="/img/JAKEFLIX/logo.png"
          className="h-auto max-h-full w-auto max-w-full object-contain"
          alt="Jakeflix Logo"
        />
        <div>
          <Nav items={NAV_ITEMS} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <div
            className={
              !searchInputClicked
                ? `w-10 transition-all duration-1000`
                : "w-full transition-all duration-1000"
            }
          >
            <Input
              className="border-none focus:outline-none"
              name={"search"}
              placeholder={"Titles, people, genres"}
              icon={<FaSistrix className="text-white" />}
              iconPosition={"left"}
              onChange={() => {}}
              value={""}
              type={"text"}
              onClick={() => setSearchInputClicked(!searchInputClicked)}
            />
          </div>
        </div>
        <FaBell className="text-2xl text-white" />
        <div className="flex items-center gap-10 transition-all">
          <div
            className={`${profile?.bgColor} block h-[50px] w-[50px] cursor-pointer rounded-md border border-gray-600 text-sm text-white transition-colors duration-150 hover:border-gray-300`}
            onClick={() => navigate("/profile-selector")}
          >
            <img className="h-full w-full" src={profile?.avatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
