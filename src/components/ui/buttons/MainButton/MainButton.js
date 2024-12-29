import React, { useState } from "react";
// import "./mainButton.css";

export default function MainButton({ ...props }) {
  const [isAnimation, setIsAnimating] = useState(false);
  const [allowAnim, setAllowAnim] = useState(true);
  const [entered, setEntered] = useState(false);

  function handleAnim() {
    if (allowAnim) {
      setIsAnimating((prev) => !prev);
      setAllowAnim(false);
    }
  }

  return (
    <button
      {...props}
      className={`main-button ${isAnimation ? "anim" : "no-anim"} ${
        isAnimation ? "transform-back" : "initial"
      }`}
      onMouseEnter={(e) => {
        handleAnim();
        setEntered(true);
      }}
      onMouseLeave={(e) => {
        handleAnim();
        setEntered(false);
      }}
      onTransitionEnd={(e) => {
        if (e.target.classList.contains("anim") && !allowAnim && !entered) {
          setIsAnimating(false);
        } else {
          setAllowAnim(true);
        }
      }}
    >
      <span className="xsmall-text text-main up-case">{props.children}</span>
    </button>
  );
}
