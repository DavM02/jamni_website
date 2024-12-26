import { useEffect } from "react";
import bagIcon from "../../../../assets/icons/shopping-bag.svg";
import { modalStore } from "../../../../stores/modalStore";
 import Cart from "../../../Cart/Cart";
import Backdrop from "../../../ui/Backdrop/Backdrop";
import Portal from "../../../ui/Portal";
import { useLocation } from "react-router-dom";
import { userCartStore } from "../../../../stores/cartStore";
export default function CartIcon() {

  const location = useLocation()

  const {
    cartRecommendations,
    getCartRecommendations,
    isCartOpen,
    toggleCart,
    isAdded,

  } = modalStore();

  const products = userCartStore((state) => state.products);


  useEffect(() => {
 
      if (isCartOpen) {
        toggleCart(false)
      }
 
  }, [location.pathname])
 
  return (
    <>
      <div
        data-count={products.length}
        className="icon"
        onClick={() => {
          toggleCart();
          if (cartRecommendations.length === 0) {
            getCartRecommendations();
          }
        }

        }
      >
        <img src={bagIcon} alt="bag-icon" />
      </div>
   
        <Portal
          value={isCartOpen}
          root={"modal-root"}
          className={"cart-wrapper"}>
          <Cart />
        </Portal>
 
      <Backdrop
        onClick={() => toggleCart()}
        value={isCartOpen}
        root={"modal-root"}
        style={{ zIndex: 555 }}
      />
 
        <Portal
          value={isAdded}
          root={"modal-root"}
          className="added-item"
        >
          <span className="xsmall-text text-main text-light up-case">
            Товар успешно добавлен в корзину!
          </span>
 
        </Portal>
 
    </>
  );
}
