import { Outlet } from "react-router-dom";
import { MainContainer } from "../../styles/layout/layout";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <MainContainer>
      <Header authenticated={false} profile={null} />
      <Outlet />
      <Footer />
    </MainContainer>
  );
};

export default Layout;
