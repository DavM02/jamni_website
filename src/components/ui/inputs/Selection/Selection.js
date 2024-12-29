import React, { useState } from "react";
// import "./selection.css";
import arrow from "../../../../assets/icons/arrow-up.svg";

export default function Selection({ name, defaultValue, data }) {
  const [value, setValue] = useState(defaultValue ?? data[0]);
  const [open, setOpen] = useState(false);

  const calculateHeight = () => {
    const itemHeight = 30;
    const gap = 10;
    const headerHeight = 48;
    return open
      ? `${
          itemHeight * data.length + gap * (data.length - 1) + headerHeight * 2
        }px`
      : `${headerHeight}px`;
  };

  const renderColorOption = (el) => (
    <div className="row center-y gap-10">
      <div
        style={{
          border:
            el.colorName === "белый" ? "1px solid var(--line-bg)" : "none",
          backgroundColor: `var(--${el.palette})`,
        }}
      ></div>
      <span className="xsmall-text text-main text-black-secondary">
        {el.colorName}
      </span>
    </div>
  );

  const renderTextOption = (el) => (
    <span className="xsmall-text text-main text-black-secondary">{el}</span>
  );

  return (
    <div className="custom-selection">
      <div
        className="selection-group"
        style={{ height: calculateHeight() }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="selected-option row center-y s-between">
          {name.includes("цвет") ? (
            renderColorOption(value)
          ) : (
            <span className="option-key xsmall-text text-main text-black-secondary">
              {value}
            </span>
          )}
          <img
            src={arrow}
            alt="arrow"
            style={{ transform: open ? "rotate(-180deg)" : "none" }}
          />
        </div>

        <ul className="selection-items column gap-10">
          {data.map((el, i) => (
            <li key={i} onClick={() => setValue(el)}>
              {name.includes("цвет")
                ? renderColorOption(el)
                : renderTextOption(el)}
            </li>
          ))}
        </ul>
      </div>

      <input
        type="hidden"
        name={name}
        value={name.includes("цвет") ? value.colorName : value}
      />
    </div>
  );
}
