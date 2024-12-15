import React, { useState } from "react";
import "./selection.css";
import arrow from "../../../../assets/icons/arrow-up.svg";
export default function Selection({ name, data }) {
    const [value, setValue] = useState(data[0]);
    const [open, setOpen] = useState(false);
    return (
        <div className="custom-selection">
            <div
                style={{
                    height: !open
                        ? "48px"
                        : `${30 * data.length + 10 * (data.length - 1) + 48 * 2}px`,
                }}
                className="selection-group"
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
            >
                <div className="selected-option row center-y s-between">

                    {
                      name === 'цвет' ?  <div className="row center-y gap-10">
                            <div style={{ backgroundColor: `var(--${value.palette})` }}></div>
                            <span className="xsmall-text text-main text-black">{value.colorName}</span>
                        </div> : <span className="option-key xsmall-text text-main text-black">
                                {name === "цвет" ? value.colorName : value}
                        </span>
                    }
                    <img
                        src={arrow}
                        alt="arrow"
                        style={{ transform: open ? "rotate(-180deg)" : "none" }}
                    />
                </div>
                <ul className="selection-items column gap-10">
                    {data.map((el, i) => (
                        <li key={i} onClick={() => setValue(el)}>
                            {name === "цвет" ? <div className="row center-y gap-10">
                                <div style={{ backgroundColor: `var(--${el.palette})`}}></div>
                                <span className="xsmall-text text-main text-black">{el.colorName}</span>
                            </div> : <span className="xsmall-text text-main text-black">{el}</span>}
                        </li>
                    ))}
                </ul>
            </div>
            <input value={name === "цвет" ? value.colorName : value} type="hidden" name={name} />
        </div>
    );
}
