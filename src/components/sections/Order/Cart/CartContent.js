import { AnimatePresence, motion } from "framer-motion";
import CartItems from "../../../Cart/CartItems";
import { useEffect, useCallback } from "react";
import PromoCode from "../Forms/PromoCode";
import useMediaQ from "../../../../hooks/useMediaQ";
import { useContext } from "react";
import { MainContext } from "../../../../context/MainContext";
import { userCartStore } from "../../../../stores/cartStore";
export default function CartContent({
  
    openCart,
    elRef,
 
}) {

    const { scrollbarAccess } = useContext(MainContext);
    const { products } = userCartStore();

    const allowScroll = useCallback(() => {
        scrollbarAccess.current.updatePluginOptions("overflow", { open: false });
    }, [scrollbarAccess]);

    const disableScroll = () => {
        const height = elRef?.current?.scrollHeight;
        if (height > 470) {
            scrollbarAccess.current.updatePluginOptions("overflow", { open: true });
        }
    };

    useEffect(() => {
        allowScroll();
    }, [products.length, allowScroll]);

    const query = useMediaQ("(max-width: 769px)");
    return (
        <AnimatePresence mode="wait" initial={false}>
            {(!query || (openCart && query)) && (
                <motion.div
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="cart-content"
                >
                    <h5 className="text-black-secondary">итоговая сумма</h5>
                    <CartItems
                        ref={elRef}
                        onMouseEnter={disableScroll}
                        onMouseLeave={allowScroll}
                        onTouchStart={disableScroll}
                        onTouchEnd={allowScroll}
                        onTouchCancel={allowScroll}
                    />
                   <PromoCode/>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
