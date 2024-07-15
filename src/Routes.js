import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Header } from "./Components/Header/index";
import AddVideo from "Components/Pages/AdcionarVideos";
import { Footer } from "Components/Footer";
import { Carroussel } from "./Components/Pages/Slider/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="novovideo" element={<AddVideo />} />
        <Route path="slider" element={<Carroussel />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
