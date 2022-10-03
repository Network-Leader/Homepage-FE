import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
