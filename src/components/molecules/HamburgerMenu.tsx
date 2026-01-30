import { NavLink } from "react-router";
import { FaXmark } from "react-icons/fa6";
import type Navbar from "../../types/navbar";

type HamburgerMenuProps = {
  navbarItems?: Navbar[];
  handleClose: () => void;
  isOpen: boolean;
};

const HamburgerMenu = ({
  navbarItems,
  handleClose,
  isOpen,
}: HamburgerMenuProps) => {
  return (
    <div
      className={`fixed z-50 left-0 h-full w-full bg-white transition-all ease-in-out duration-300 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-5 flex justify-end items-center border-b border-muted/30 bg-base">
        <FaXmark
          className="size-6 text-white cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <ul>
        {navbarItems?.map((item) => (
          <li
            key={item.name}
            className="border-b border-muted/30 font-semibold"
          >
            <NavLink to={item.link} end={true} onClick={handleClose} className={"inline-block w-full p-5 "}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-auto p-5">
        <img src="logo-light.svg" alt="" className="w-34" />
      </div>
    </div>
  );
};

export default HamburgerMenu;
