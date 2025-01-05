import React from "react";
import { Route, Routes } from "react-router-dom";
import DecorPage from "./DecorPage/DecorPage";
import NoFound from "../NoFound/NoFound";
import ProductPage from "./ProductPage";
import PoufsPage from "./PoufsPage/PoufsPage";

export default function CatalogRoute() {
 


  return (
    <Routes>
      <Route path="/decor" element={<DecorPage />} />
      <Route path="/poufs" element={<PoufsPage />} />
      <Route path="/poufs/:product" element={<ProductPage />} />
      <Route path="/decor/:product" element={<ProductPage />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
}
