import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Home from "../pages/Home";
import Kina from "../pages/Kina";
import Nikah from "../pages/Nikah";
import After from "../pages/After";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  const location = useLocation();
  const showFooter = location.pathname !== ROUTES.HOME;

  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px", paddingBottom: showFooter ? "50px" : "0" }}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.KINA} element={<Kina />} />
          <Route path={ROUTES.NIKAH} element={<Nikah />} />
          <Route path={ROUTES.AFTER} element={<After />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </>
  );
};

export default AppRouter;
