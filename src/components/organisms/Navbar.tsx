import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import navbar from "../../constants/navbar";
import HamburgerMenu from "../molecules/HamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <nav className="fixed z-50 top-10 left-1/2 -translate-x-1/2 w-full max-w-361 px-5 md:px-0">
        <div className="m-auto py-3 px-8 text-primary font-semibold rounded-full border border-primary/30 backdrop-blur-2xl bg-primary/10 md:py-5 md:px-20">
          {/* Mobile */}
          <div className="md:hidden flex justify-between items-center">
            <NavLink to="/">
              <img
                src="logo-dark.svg"
                alt=""
                className="w-28 drop-shadow-2xl"
              />
            </NavLink>
            <RxHamburgerMenu className="size-8" onClick={handleOpen} />
          </div>

          {/* Desktop */}
          <div className="hidden justify-between items-center md:flex">
            <NavLink to="/">
              <img
                src="logo-dark.svg"
                alt=""
                className="w-28 drop-shadow-2xl"
              />
            </NavLink>
            <ul className="flex gap-16">
              {navbar.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.link} end={true} className="relative group">
                    {({ isActive }) => (
                      <>
                        <span
                          className={`transition-all duration-300 ease-in-out group-hover:text-primary ${
                            isActive ? "text-primary" : "text-primary/70"
                          }`}
                        >
                          {item.name}
                        </span>

                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-primary ${
                            isActive ? "w-full bg-primary" : "w-0 bg-primary/50"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <HamburgerMenu
        navbarItems={navbar}
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default Navbar;
