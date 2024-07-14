import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Header } from "./Components/Header/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};
