import React, { useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { useBlocker } from "react-router-dom";
import "./pageTransition.css";
import AnimatedText from "../scroll/TextAnimation";
import { MainContext } from "../../context/MainContext";
import SmoothAppearance from "../ui/SmoothAppearance";
function PageTransition({children}) {
  return <SmoothAppearance>
    {children}
  </SmoothAppearance>

}

export default PageTransition;
