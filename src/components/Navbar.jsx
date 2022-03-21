import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, isOpen] = useState(true);
  const navigate = useNavigate();

  const navLink = [
    {
      name: "ANASAYFA",
      link: "/",
    },
    {
      name: "HAKKIMIZDA",
      link: "/about",
    },
    {
      name: "ÜRÜNLER",
      link: "/products",
    },
    {
      name: "İLETİŞİM",
      link: "/information",
    },
  ];

  return (
    <nav className="relative lg:flex lg:justify-around lg:items-center">
      <div className="flex justify-between items-center px-4 py-4">
        <div
          style={{ whiteSpace: "nowrap" }}
          className="text-xl -ml-2 lg:ml-4 bold mt-1"
        >
          <img
            onClick={() => navigate("/")}
            className="mb-2 cursor-pointer"
            src="/assets/images/propino-logo.png"
            alt=""
          />
        </div>
        <div className="lg:hidden pt-2 cursor-pointer mt-3">
          {open ? (
            <AiOutlineMenu
              color="white"
              fontSize={28}
              onClick={() => isOpen(!open)}
            />
          ) : (
            <AiOutlineClose
              color="white"
              fontSize={28}
              onClick={() => isOpen(!open)}
            />
          )}
        </div>
      </div>
      <div
        className={
          open
            ? "hidden px-4 lg:block"
            : "block px-4 lg:block bg-black fixed left-0 w-full"
        }
      >
        {navLink.map((nav, i) => (
          <button
            onClick={() => navigate(nav.link)}
            key={i}
            style={{ whiteSpace: "nowrap" }}
            className="text-white font-semibold h-16 font-sans duration-300 block mr-3 ml-3 lg:inline-block  rounded pr-2 pl-2 mt-3 pb-2 pt-1 hover:text-gray-400"
          >
            {nav.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
