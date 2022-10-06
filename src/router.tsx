import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<MainPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
