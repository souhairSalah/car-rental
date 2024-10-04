import React from "react";
import { FaUserCircle } from "react-icons/fa";
// import { Navlinks } from "./Navbar";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/Cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 5,
    name: "Cart",
    link: "/Cart",
  },
];

const ResponsiveMenu = ({ showMenu, cartCount }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          {/* className="mb-5 inline-block" */}
          <ul className="space-y-4 text-lg">
            {Navlinks.map(({ id, name, link }) => (
              <li className="py-4 ">
                <Link to={link} className=" inline-block">
                  {name === "Cart" ? (
                    <div className="flex items-center">
                      <FaCartPlus className="mr-1" />
                      <span>({cartCount})</span>
                    </div>
                  ) : (
                    name
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>Made with ❤ by our group </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
