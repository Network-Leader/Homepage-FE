import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderContents } from "../../styles/layout/header";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Header authenticated={false} profile={null} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
