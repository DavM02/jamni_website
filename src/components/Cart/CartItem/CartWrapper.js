import React from "react";
import { motion } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";

const CartWrapper = ({ children, product, navigate }) => (
    <SmoothAppearance
        key={product.id}
        Tag={motion.li}
        layout
        onClick={() => {
            navigate(
                `/catalog/${product.catalog}/${product.name.toLowerCase()}?id=${product.id
                }`
            );
        }}
        className="cart-item gap-30 row s-between"

    >
        {children}
    </SmoothAppearance>
);

export default CartWrapper;
