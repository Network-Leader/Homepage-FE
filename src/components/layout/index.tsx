import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header authenticated={false} profile={null} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
