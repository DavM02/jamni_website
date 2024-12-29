import { useState, useRef, } from "react";
import CartToggle from "./Cart/CartToggle";
import OrderTabs from "./OrderTabs";
import CartContent from "./Cart/CartContent";
import "./order.css";
import "./media.css";

export default function Order({ setIsBought }) {

  const elRef = useRef(null);

  const [openCart, setOpenCart] = useState(false);



  return (
    <section id="order">
      <div className="container">
        <div className="section-layout">
          <CartToggle openCart={openCart} setOpenCart={setOpenCart} />
          <OrderTabs
            setIsBought={setIsBought}
          />
          <CartContent
            openCart={openCart}
            elRef={elRef}
          />
        </div>
      </div>
    </section>
  );
}
