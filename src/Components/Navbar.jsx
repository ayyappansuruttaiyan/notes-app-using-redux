import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      icon: "fa-solid fa-house",
      active: false,
      to: "/",
    },
    {
      name: "Search",
      icon: "fa-solid fa-magnifying-glass",
      active: false,
      to: "/search",
    },
    {
      name: "Notes",
      icon: "fa-regular fa-file-lines",
      active: false,
      to: "/notes",
    },
    {
      name: "Tasks",
      icon: "fa-regular fa-circle-check",
      active: false,
      to: "/tasks",
    },
    {
      name: "Archive",
      icon: "fa-solid fa-gauge",
      active: false,
      to: "/archive",
    },
    { name: "Bin", icon: "fa-regular fa-trash-can", active: false, to: "/bin" },
  ];

  // const navLinkStyle = (isActive) => {
  //   return {
  //     fontWeight: isActive ? "normal" : "bold",
  //     textDecoration: isActive ? "underline" : "none",
  //     backgroundColor: isActive ? "darkblue" : "",
  //   };
  // };
  return (
    <aside className="p-4 bg-white w-[20%]">
      <div>
        <Avatar />
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li
            className={`bg-white rounded block text-dark-blue text-lg cursor-pointer mt-3 p-2 hover:bg-dark-blue hover:text-white 
            }`}
            key={index}
          >
            <Link to={item.to}>
              <span className="mr-3">
                <i className={`${item.icon}`}></i>
              </span>
              <span className=" text-base font-medium flex-1 ">
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
