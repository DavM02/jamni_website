import React, { useState } from "react";

export default function FilterAccordion({
    headline,
    dataLength,
    elHeight,
    isOpen,
    children
}) {
    const [open, setOpen] = useState(isOpen);

    return (
        <>
            <div className="row center-y s-between">
                <span className="xsmall-text up-case">{headline}</span>
                <span
                    className="open-accordion"
                    style={{ margin: !open ? "0 25px 0 0" : "-3px 23px 0px 0px" }}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "—" : "+"}
                </span>
            </div>
            <div
                className="accordion"
                style={{ height: open ? `${dataLength * elHeight + (dataLength - 1) * 15 + 20}px` : '0px' }}>
                {children}
            </div >
        </>
    );
}