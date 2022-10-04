import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header authenticated={true} profile={null}/>

      <Outlet/>

      <Footer/>
    </div>
  )
}

export default Layout