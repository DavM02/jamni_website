import "./cart.css";
import { cartModalStore } from "../../stores/cartModalStore";
import { userCartStore } from "../../stores/cartStore";
import CartHeader from "./CartHeader";
import Recommendations from "./Recommendations";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";

export default function Cart() {
  const { toggleCart } = cartModalStore();
  const { totalPrice } = userCartStore();



  return (
    <div id="cart" className="column s-between">
      <div className="cart-content">
        <CartHeader toggleCart={toggleCart} />
        <CartItems />
      </div>
      <div>
        <Recommendations />
        <CartFooter totalPrice={totalPrice} />
      </div>
    </div>
  );
}
