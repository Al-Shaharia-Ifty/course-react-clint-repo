import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
