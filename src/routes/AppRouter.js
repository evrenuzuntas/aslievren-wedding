import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Home from "../pages/Home";
import Kina from "../pages/Kina";
import Nikah from "../pages/Nikah";
import After from "../pages/After";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.KINA} element={<Kina />} />
      <Route path={ROUTES.NIKAH} element={<Nikah />} />
      <Route path={ROUTES.AFTER} element={<After />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
