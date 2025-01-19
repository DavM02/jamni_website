import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { useBlocker } from "react-router-dom";
import "./pageTransition.css";
import AnimatedText from "../scroll/TextAnimation";
import { MainContext } from "../../context/MainContext";
import SmoothAppearance from "../../components/ui/SmoothAppearance";
function PageTransition(Component) {
  return function WrappedComponent(props) {
    const [pathname, setPathname] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const { scrollbarAccess } = useContext(MainContext);

    useBlocker(({ currentLocation: current, nextLocation: next }) => {
      return isAnimating && current.pathname !== next.pathname;
      // || currentLocation.pathname === nextLocation.pathname
    });

    useEffect(() => {
      if (scrollbarAccess.current) {
        scrollbarAccess.current.scrollTo(0, 0);
      }
 
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "auto",
      // });
    }, []);

    return (
      <React.Fragment>
        <Component {...props} />

        {ReactDOM.createPortal(
          <>
            <motion.div
              // onAnimationComplete={(e) => {
              //   if (e.clipPath === "inset(0% 0% 0% 0%)") {
 
              //     // scrollRef.current.closest("#root").style.opacity = "0";
 
              //     // const getPath = window.location.hash.split("/");

              //     // if (getPath.includes("article")) {
              //     //   setPathname(
              //     //     `article-${decodeURIComponent(
              //     //       getPath[getPath.length - 1]
              //     //         .split("?")[1]
              //     //         .replace("id=", "")
              //     //     )}`
              //     //   );
              //     //   return;
              //     // }
              //     // let path = getPath[getPath.length - 1];

              //     // path = decodeURIComponent(
              //     //   path.includes("?") ? path.split("?")[0] : path
              //     // );

              //     // setPathname(path.length === 0 ? "home" : path);
              //   }
              // }}
              // onAnimationStart={() => {
              //   setIsAnimating(true);
              // }}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="slide-in center-gr"
            >
              {/* {pathname && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: pathname ? 0 : 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  <AnimatedText
                    center={true}
                    as="big-heading"
                    text={pathname}
                  />
                </motion.div>
              )} */}
            </motion.div>

            <motion.div
              // onAnimationStart={(e) => {
              //   if (e.clipPath === "inset(0% 0% 100% 0%)") {
              //     // scrollRef.current.closest("#root").style.opacity = "1";

              //     // setPathname(false);
              //   }
              // }}
              // onAnimationComplete={() => {
              //   setIsAnimating(false);
              // }}
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
              exit={{
                clipPath: "inset(0% 0% 100% 0%)",
                transition: {
                  delay: 2.3,
                },
              }}
              transition={{
                // delay: 0.3,
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              className="slide-out center-gr"
            ></motion.div>
          </>,
          document.getElementById("modal-root")
        )}
      </React.Fragment>
    );
  };
}

export default PageTransition;
