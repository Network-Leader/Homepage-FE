import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/member/signIn/index";
import SignUp from "./components/member/signUp/index";
import MainPage from "./pages";
import Member from "./pages/member";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="member" element={<Member />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
