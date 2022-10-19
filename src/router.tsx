import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages";
import SignIn from "./components/member/signIn";
import SignUp from "./components/member/signUp";
import Member from "./pages/member";
import Activity from "./pages/activity";
import Calender from "./pages/calender";
import About from "./pages/about";
import Board from "./pages/board";
import Template from "./components/activity/modal";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="board" element={<Board />} />
          <Route path="calender" element={<Calender />} />
          <Route path="activity" element={<Activity />}>
            <Route path="add" element={<Template />} />
            <Route path=":contentId" element={<Template />} />
          </Route>
        </Route>
        <Route path="member" element={<Member />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
