import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages";
import SignIn from "./components/member/signIn";
import SignUp from "./components/member/signUp";
import Member from "./pages/member";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainPage />} />
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
