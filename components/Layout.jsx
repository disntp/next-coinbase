import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(true);

  const handleToggleSidebar = () => toggleSidebar(value => !value);

  return (
    <>
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      {children}
    </>
  );
};

export default Layout;
