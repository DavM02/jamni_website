import bagIcon from "../../../../assets/icons/shopping-bag.svg";
import { cartModalStore } from "../../../../stores/cartModalStore";
import Cart from "../../../Cart/Cart";
import Backdrop from "../../../ui/Backdrop/Backdrop";
import Portal from "../../../ui/Portal";

export default function CartIcon() {
  const {
    cartRecommendations,
    getCartRecommendations,
    isCartOpen,
    toggleCart,
    isAdded,

  } = cartModalStore();

  return (
    <>
      <div
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
