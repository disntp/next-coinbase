import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useMoralis } from "react-moralis";
import metamask from "../assests/metamask-icon.png";
import Image from "next/dist/client/image";

const Navbar = ({ handleToggleSidebar }) => {
  const [navbar, setNavbar] = useState(false);
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  // window.addEventListener("scroll", changeBg);
  const changeBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 680) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    // console.log(window.scrollY);
  });

  return (
    <div className={navbar ? "actives header fixed-top" : "header fixed-top"}>
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
        style={{ cursor: "pointer" }}
      />
      {/* <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header_logo"
      /> */}
      <div className="header_icons">
        {/* <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          className="avatar"
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MS10YW5nLTM1LnBuZw.png?s=RhoWj7GNo7PfwxuqHvRtT0mEwgg6RiADN6jQYGJEQU0"
          alt="avatar"
        /> */}
        
        <div className="pr-5 absolute top-5 right-0">
          {isAuthenticated ? (
            <button
              className="px-6 py-2 rounded-xl text-white outline"
              onClick={logout}
              style={{ fontSize: "1.8vh" }}
            >
              <span className="pr-2">Disconnect</span>
              <span className="text-green-400">
                {user && user.get("ethAddress").substring(0, 6)}...
                {user &&
                  user
                    .get("ethAddress")
                    .substring(user.get("ethAddress").length - 5)}
              </span>
             </button>
          ) : (
            <button
              className="px-2 py-1 rounded-xl text-white outline hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
              style={{ fontSize: "1.8vh" }}
              onClick={authenticate}
            >
              <Image
                className="md:justify-center md:items-center"
                src={metamask}
                alt={metamask}
                width={20}
                height={20}
              />
              <span className="text-white pl-3 mb-6">CONNECT TO WALLET</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
