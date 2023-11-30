import React from "react";
import { useSelector } from "react-redux";
function Avatar() {
  const { profile } = useSelector((state) => state.profile);

  const avatar = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    img: "/images/avatar.jpeg",
  };
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center mb-7">
      <img
        className=" rounded-full w-14 h-14 mb-4 md:mb-0 md:mr-4 "
        src={avatar.img}
        alt={profile.name}
      />
      <span>
        <p className="text-sm">{profile.name}</p>
        <p className="text-sm">{profile.email}</p>
      </span>
    </div>
  );
}

export default Avatar;
