import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DecorPage from "./DecorPage/DecorPage";
import NoFound from "../NoFound/NoFound";
import ProductPage from "./ProductPage";

export default function CatalogRoute() {
  const location = useLocation();

  if (location.pathname === "/catalog") {
    return <NoFound />;
  }

  return (
    <Routes>
      <Route path="/decor" element={<DecorPage />} />
      <Route path="/decor/:product" element={<ProductPage />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
}
