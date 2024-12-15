
import bagIcon from "../../../../assets/icons/shopping-bag.svg";
import { cartModalStore } from "../../../../stores/cartModalStore";
import Cart from "../../../Cart/Cart";
import Backdrop from "../../../ui/Backdrop/Backdrop";
import Portal from "../../../ui/Portal";

export default function CartIcon() {

    const { isCartOpen, toggleCart, addedProduct } = cartModalStore();


    return (
        <>
            <div className="icon"  onClick={() => toggleCart()}>
                <img src={bagIcon} alt="bag-icon" />
            </div>
            {<Portal value={isCartOpen} root={"modal-root"} className={'cart-wrapper'}>
                <Cart />
            </Portal>}
            <Backdrop onClick={() => toggleCart()} value={isCartOpen} root={"modal-root"} style={{zIndex: 555}}/>
            {<Portal value={addedProduct.length>0} root={"modal-root"} className="added-item">
                 <div>
                    <h1>{addedProduct}</h1>
                 </div>
            </Portal>}
        </>
    );
}
