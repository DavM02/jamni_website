import "./checkbox.css";
import { useState } from "react";
export default function Checkbox({ label, checked, children, ...props }) {
  return (
    <>
      <div className="custom-checkbox">
        <input {...props} type={label ? "radio" : "checkbox"} />
        <div className="input-state"></div>
      </div>
      {label && (
        <label htmlFor={props.id}>
          <p
            className="text-main xxsmall-text"
            style={{
              color: `${checked ? "var(--black)" : "var(--gray-text)"}`,
            }}
          >
            {children}
          </p>
        </label>
      )}
    </>
  );
}
