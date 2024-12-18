import "./cart.css";
import { cartModalStore } from "../../stores/cartModalStore";
import { userCartStore } from "../../stores/cartStore";
import { useNavigate } from "react-router-dom";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem/CartItem";
import Recommendations from "./Recommendations";
import CartFooter from "./CartFooter";
import { AnimatePresence } from "framer-motion";

export default function Cart() {
  const { toggleCart } = cartModalStore();
  const { products, removeProduct, increaseQuantity, decreaseQuantity, totalPrice } = userCartStore();

  const navigate = useNavigate();

  return (
    <div id="cart" className="column s-between">
      <div className="cart-content">
        <CartHeader toggleCart={toggleCart} />

        <ul className="cart-items column gap-40">
          {products && (
            <AnimatePresence>
              {products.map((el) => (
                <CartItem
                  key={el.id}
                  product={el}
                  navigate={navigate}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeProduct={removeProduct}
                />
              ))}
            </AnimatePresence>
          )}
        </ul>
      </div>

<div>
        <Recommendations />

        <CartFooter totalPrice={totalPrice} />
</div>
    </div>
  );
}
