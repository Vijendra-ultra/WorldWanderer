import { Routes, Route } from "react-router-dom";
import Main from "./MainComp";
import Prices from "./pages/Prices";
import "./index.css";
import NavBar from "./miniComps/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginandSignup from "./pages/LoginandSigup";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <Main>
        <NavBar />
        {/* The better approach is to wrap the BrowserRouter around the {main} file  */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pricing" element={<Prices />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/UserAuth" element={<LoginandSignup />} />
          <Route path="/App" element={<MainPage />} />
        </Routes>
      </Main>
    </>
  );
}
