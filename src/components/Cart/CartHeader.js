import React from "react";

export default function CartHeader({ toggleCart }) {
    console.log("header rerendered")
    return (
        <div className="row s-between center-y gap-20">
            <h5>Корзина</h5>
            <div className="menu-bars" onClick={toggleCart}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
