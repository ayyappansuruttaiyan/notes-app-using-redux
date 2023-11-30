import React from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "./Avatar";

function Navbar() {
  const location = useLocation();
  const navItems = [
    {
      name: "Home",
      icon: "fa-solid fa-house",
      active: location.pathname === "/",
      to: "/",
    },
    {
      name: "Search",
      icon: "fa-solid fa-magnifying-glass",
      active: location.pathname === "/search",
      to: "/search",
    },
    {
      name: "Notes",
      icon: "fa-regular fa-file-lines",
      active: location.pathname === "/notes",
      to: "/notes",
    },
    {
      name: "Tasks",
      icon: "fa-regular fa-circle-check",
      active: location.pathname === "/tasks",
      to: "/tasks",
    },
    {
      name: "Archive",
      icon: "fa-solid fa-gauge",
      active: location.pathname === "/archive",
      to: "/archive",
    },
    {
      name: "Bin",
      icon: "fa-regular fa-trash-can",
      active: location.pathname === "/bin",
      to: "/bin",
    },
  ];

  // const navLinkStyle = (isActive) => {
  //   return {
  //     fontWeight: isActive ? "normal" : "bold",
  //     textDecoration: isActive ? "underline" : "none",
  //     backgroundColor: isActive ? "darkblue" : "",
  //   };
  // };
  return (
    <aside className="w-[20%] bg-white p-4">
      <div>
        <Avatar />
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li
            className={`mt-3 block cursor-pointer rounded bg-white p-2 text-lg text-dark-blue hover:bg-dark-blue hover:text-white 
            ${item.active ? "!bg-dark-blue !text-white" : ""}`}
            key={index}
          >
            <Link to={item.to} className="block">
              <span className="mr-3">
                <i className={`${item.icon}`}></i>
              </span>
              <span className=" flex-1 text-base font-medium ">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Navbar;
